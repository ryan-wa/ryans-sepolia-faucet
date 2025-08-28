'use server'

import { ethers } from 'ethers'

// In-memory storage for cooldown tracking (in production, use a database)
const cooldownMap = new Map<string, number>()

export interface FaucetResult {
    success: boolean
    amount?: string
    txHash?: string
    error?: string
}

export async function requestEth(address: string): Promise<FaucetResult> {
    try {
        // Check if address is valid
        if (!ethers.isAddress(address)) {
            return {
                success: false,
                error: 'Invalid Ethereum address'
            }
        }

        // Check cooldown
        const now = Math.floor(Date.now() / 1000)
        const lastRequest = cooldownMap.get(address.toLowerCase())
        const cooldownSeconds = parseInt(process.env.FAUCET_COOLDOWN_SECONDS || '60')

        if (lastRequest && (now - lastRequest) < cooldownSeconds) {
            // get time till next refill
            const remainingTime = cooldownSeconds - (now - lastRequest)
            const minutes = Math.ceil(remainingTime / 60)
            return {
                success: false,
                error: `Please wait ${minutes} minute(s) before requesting again`
            }
        }

        // Get environment variables
        const rpcUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL
        const privateKey = process.env.FAUCET_PRIVATE_KEY
        const amountWei = process.env.FAUCET_AMOUNT_WEI || '1000000000000000000' // 1 ETH default

        if (!rpcUrl) {
            return {
                success: false,
                error: 'Faucet not configured properly'
            }
        }

        if (!privateKey) {
            return {
                success: false,
                error: 'Faucet wallet not configured'
            }
        }

        // Create provider and wallet
        const provider = new ethers.JsonRpcProvider(rpcUrl)
        const wallet = new ethers.Wallet(privateKey, provider)

        // Check faucet balance
        const faucetBalance = await provider.getBalance(wallet.address)
        const amountBigInt = BigInt(amountWei)

        if (faucetBalance < amountBigInt) {
            return {
                success: false,
                error: 'Faucet is out of funds. Please try again later.'
            }
        }

        // Send transaction
        const tx = await wallet.sendTransaction({
            to: address,
            value: amountBigInt
        })

        // Wait for transaction to be mined
        const receipt = await tx.wait()

        // Update cooldown
        cooldownMap.set(address.toLowerCase(), now)

        // Convert amount to ETH for display
        const amountEth = ethers.formatEther(amountBigInt)

        return {
            success: true,
            amount: amountEth,
            txHash: receipt?.hash || tx.hash
        }

    } catch (error) {
        console.error('Faucet error:', error)

        // Handle specific errors
        if (error instanceof Error) {
            if (error.message.includes('insufficient funds')) {
                return {
                    success: false,
                    error: 'Faucet is out of funds. Please try again later.'
                }
            }

            if (error.message.includes('nonce')) {
                return {
                    success: false,
                    error: 'Transaction failed. Please try again.'
                }
            }

            if (error.message.includes('network')) {
                return {
                    success: false,
                    error: 'Network error. Please check your connection and try again.'
                }
            }
        }

        return {
            success: false,
            error: 'Failed to process request. Please try again later.'
        }
    }
}
