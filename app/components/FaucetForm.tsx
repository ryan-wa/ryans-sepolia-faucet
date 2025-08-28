'use client'

import { useState } from 'react'
import { requestEth } from '../actions/faucet'

export default function FaucetForm() {
    const [address, setAddress] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!address.trim()) {
            setMessage('Please enter a valid Ethereum address')
            setMessageType('error')
            return
        }

        // Basic Ethereum address validation
        if (!/^0x[a-fA-F0-9]{40}$/.test(address.trim())) {
            setMessage('Please enter a valid Ethereum address (0x followed by 40 hex characters)')
            setMessageType('error')
            return
        }

        setIsLoading(true)
        setMessage('')

        try {
            const result = await requestEth(address.trim())

            if (result.success) {
                setMessage(`Success! ${result.amount} ETH has been sent to ${address}. Transaction hash: ${result.txHash}`)
                setMessageType('success')
                setAddress('')
            } else {
                setMessage(result.error || 'Failed to send ETH. Please try again later.')
                setMessageType('error')
            }
        } catch (error) {
            setMessage('An unexpected error occurred. Please try again later.')
            setMessageType('error')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-amber-900 mb-2">
                    Request Test ETH
                </h3>
                <p className="text-amber-700">
                    Enter your Ethereum address below to receive Sepolia testnet ETH
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-amber-800 mb-3">
                        Ethereum Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="0x1234..."
                        className="w-full px-4 py-4 border-2 border-amber-200 rounded-xl focus:ring-4 focus:ring-amber-200 focus:border-amber-400 bg-white bg-opacity-90 text-amber-900 placeholder-amber-400 transition-all duration-200 text-center text-lg font-mono"
                        disabled={isLoading}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading || !address.trim()}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:from-amber-300 disabled:to-orange-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:shadow-none text-lg"
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center space-x-3">
                            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing Transaction...</span>
                        </div>
                    ) : (
                        <span>Request ETH</span>
                    )}
                </button>
            </form>

            {message && (
                <div className={`mt-6 p-4 rounded-xl border-2 ${messageType === 'success'
                        ? 'bg-green-50 border-green-200 text-green-800'
                        : 'bg-red-50 border-red-200 text-red-800'
                    }`}>
                    <p className="text-sm break-words leading-relaxed">{message}</p>
                </div>
            )}

            <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-2">
                    <span className="text-amber-700 text-sm font-medium">
                        💡 You can only request ETH once per hour per address
                    </span>
                </div>
            </div>
        </div>
    )
}
