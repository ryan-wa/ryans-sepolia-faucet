import FaucetForm from './components/FaucetForm'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Header Section */}
                    <div className="mb-12">
                        <h1 className="text-5xl font-bold text-amber-900 mb-6">
                            Ethereum Sepolia Faucet
                        </h1>
                        <p className="text-xl text-amber-700 leading-relaxed">
                            Get free test ETH on the Sepolia testnet for development and testing
                        </p>
                    </div>

                    {/* Faucet Form Card */}
                    <div className="bg-white bg-opacity-80 rounded-2xl shadow-xl border border-amber-200 p-8 mb-12">
                        <FaucetForm />
                    </div>

                    {/* How it Works Section */}
                    <div className="bg-white bg-opacity-60 rounded-2xl shadow-lg border border-amber-200 p-8">
                        <h2 className="text-2xl font-semibold text-amber-900 mb-6">
                            How it works
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-sm font-bold border-2 border-amber-300">1</span>
                                    <p className="text-amber-800 leading-relaxed">Enter your Ethereum address in the field above</p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-sm font-bold border-2 border-amber-300">2</span>
                                    <p className="text-amber-800 leading-relaxed">Click "Request ETH" to submit your request</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-sm font-bold border-2 border-amber-300">3</span>
                                    <p className="text-amber-800 leading-relaxed">Wait for the transaction to be processed (usually takes a few seconds)</p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-sm font-bold border-2 border-amber-300">4</span>
                                    <p className="text-amber-800 leading-relaxed">Check your wallet for the received test ETH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
