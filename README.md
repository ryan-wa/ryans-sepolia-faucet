# Ethereum Sepolia Faucet

A simple faucet application for the Ethereum Sepolia testnet. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Simple, clean interface with natural colors and rounded corners
- Built-in Ethereum address validation
- Cooldown protection (prevents spam by limiting requests to once per hour per address)
- Real-time feedback with transaction details
- Responsive design for desktop and mobile devices
- Dark mode support based on system preferences

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: Ethers.js v6
- **Backend**: Next.js Server Actions
- **Network**: Ethereum Sepolia testnet

## Requirements

- Node.js version 18 or higher
- npm or yarn package manager
- Ethereum Sepolia RPC URL (from providers like Infura, Alchemy, or QuickNode)
- Private key for a wallet that will act as the faucet (must have Sepolia ETH)

## Dependencies

### Production Dependencies
- `next`: 14.0.0 - React framework
- `react`: ^18 - React library
- `react-dom`: ^18 - React DOM rendering
- `ethers`: ^6.8.1 - Ethereum library for blockchain interaction
- `dotenv`: ^16.3.1 - Environment variable management

### Development Dependencies
- `typescript`: ^5 - TypeScript compiler
- `@types/node`: ^20 - Node.js type definitions
- `@types/react`: ^18 - React type definitions
- `@types/react-dom`: ^18 - React DOM type definitions
- `eslint`: ^8 - Code linting
- `eslint-config-next`: 14.0.0 - Next.js ESLint configuration

## Running Locally

### 1. Clone and Setup

```bash
git clone <your-repo-url>
cd ethereum-sepolia-faucet
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Copy the example environment file and configure your settings:

```bash
cp env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Ethereum Sepolia RPC URL (get from Infura, Alchemy, or other providers)
NEXT_PUBLIC_SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID

# Private key for the faucet wallet (this wallet will send ETH to users)
FAUCET_PRIVATE_KEY=your_private_key_here

# Amount of ETH to send per request (in wei, default: 1 ETH)
FAUCET_AMOUNT_WEI=1000000000000000000

# Cooldown period between requests (in seconds, default: 1 hour)
FAUCET_COOLDOWN_SECONDS=3600
```

### 4. Fund Your Faucet Wallet

To get Sepolia ETH for your faucet wallet:

1. Visit [Sepolia Faucet](https://sepoliafaucet.com/) or [Alchemy Sepolia Faucet](https://sepoliafaucet.com/)
2. Enter your faucet wallet address
3. Request test ETH (usually 0.5-1 ETH per request)
4. Wait for the transaction to be confirmed

### 5. Start Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the faucet.

## Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NEXT_PUBLIC_SEPOLIA_RPC_URL` | RPC endpoint for Sepolia network | - | Yes |
| `FAUCET_PRIVATE_KEY` | Private key of the faucet wallet | - | Yes |
| `FAUCET_AMOUNT_WEI` | Amount of ETH to send (in wei) | 1000000000000000000 (1 ETH) | No |
| `FAUCET_COOLDOWN_SECONDS` | Cooldown period between requests | 3600 (1 hour) | No |

### RPC Provider Options

You can use any of these providers for your Sepolia RPC URL:

- **Infura**: `https://sepolia.infura.io/v3/YOUR_PROJECT_ID`
- **Alchemy**: `https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY`
- **QuickNode**: `https://your-endpoint.quiknode.pro/YOUR_API_KEY/`
- **Public RPC**: `https://rpc.sepolia.org` (not recommended for production)

## Project Structure

```
ethereum-sepolia-faucet/
├── app/
│   ├── actions/
│   │   └── faucet.ts          # Server action for faucet logic
│   ├── components/
│   │   └── FaucetForm.tsx     # Main faucet form component
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── public/                    # Static assets
├── .env.local                 # Environment variables (create this)
├── env.example                # Example environment file
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## Security Considerations

**Important Security Notes:**


## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Testing

### Manual Testing

1. Start the development server
2. Enter a valid Ethereum address
3. Submit the form
4. Check the transaction on [Sepolia Etherscan](https://sepolia.etherscan.io/)

### Test Addresses

You can use these test addresses for testing:
- `0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6`
- `0x1234567890123456789012345678901234567890`

## Troubleshooting

### Common Issues

**"Faucet not configured properly"**
- Check that all environment variables are set correctly
- Ensure `.env.local` file exists in the project root

**"Faucet is out of funds"**
- Fund your faucet wallet with Sepolia ETH
- Check the wallet balance on Sepolia Etherscan

**"Network error"**
- Verify your RPC URL is correct
- Check your internet connection
- Try a different RPC provider

**Transaction fails**
- Ensure the faucet wallet has sufficient ETH for gas fees
- Check that the private key is correct
- Verify the Sepolia network is accessible

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Verify your environment configuration
3. Ensure your faucet wallet has sufficient funds
4. Check the Sepolia network status

## Useful Links

- [Ethereum Sepolia Testnet](https://sepolia.dev/)
- [Sepolia Etherscan](https://sepolia.etherscan.io/)
- [Sepolia Faucet](https://sepoliafaucet.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Ethers.js Documentation](https://docs.ethers.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

