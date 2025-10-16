# Axiom Genesis Desktop Terminal

**The final step is sovereignty.**

A state-of-the-art, cross-platform desktop application for deploying smart contracts with a sovereign, Web3-enabled interface.

## Stack

- **Electron** - Cross-platform desktop framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Premium UI components
- **wagmi** - React hooks for Ethereum
- **Web3Modal** - Multi-wallet connection
- **Framer Motion** - Fluid animations

## Setup

### 1. Install Dependencies

From the project root:

```bash
npm install
```

Then navigate to the renderer directory and install frontend dependencies:

```bash
cd renderer
npm install
cd ..
```

### 2. Configure WalletConnect

1. Visit [https://cloud.walletconnect.com](https://cloud.walletconnect.com)
2. Create a free account
3. Create a new project to get your Project ID
4. Open `renderer/.env.local` and replace `YOUR_PROJECT_ID_HERE` with your actual Project ID:

```env
NEXT_PUBLIC_PROJECT_ID=your_actual_project_id_here
```

## Development

Start the Electron app in development mode:

```bash
npm start
```

This will:
- Launch the Next.js dev server (http://localhost:3000)
- Open the Electron window automatically
- Enable hot-reload for instant updates

## Building & Packaging

### Package for Distribution

To create a distributable application:

```bash
npm run make
```

This will generate platform-specific distributables in the `out` directory:
- **Windows**: `.exe` installer (Squirrel)
- **macOS**: `.app` bundle and `.zip`
- **Linux**: `.deb` and `.rpm` packages

### Package Only (No Installer)

To create a packaged app without building installers:

```bash
npm run package
```

## Project Structure

```
Axiom_Genesis_Desktop_Terminal/
├── src/
│   ├── main.ts           # Electron main process
│   └── preload.ts        # Secure preload script
├── renderer/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with providers
│   │   ├── page.tsx      # Genesis Terminal UI
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── ui/           # shadcn components
│   │   │   ├── connect-wallet-button.tsx
│   │   │   ├── genesis-command-interface.tsx
│   │   │   ├── button.tsx
│   │   │   └── dialog.tsx
│   │   └── theme-provider.tsx
│   ├── lib/
│   │   └── web3-provider.tsx
│   └── .env.local        # Environment variables
├── forge.config.js       # Electron Forge configuration
├── tsconfig.json         # TypeScript config
└── package.json

```

## Features

- **Sovereign Wallet Connection**: Connect MetaMask, WalletConnect, and 50+ wallets
- **NFT-Grade UI**: Premium, pixel-perfect design with Matrix-inspired aesthetics
- **Cross-Chain Support**: Ethereum mainnet and Arbitrum (easily extensible)
- **Secure Architecture**: Electron best practices with context isolation and sandboxing
- **Animated Interface**: Framer Motion for fluid, intentional animations
- **Dark Mode**: Optimized for terminal-style, high-contrast experience

## Architecture

### Electron Main Process
- TypeScript-based main process
- Spawns Next.js dev server in development
- Secure preload script with context isolation
- Automatic process cleanup on quit

### Next.js Renderer
- Client-side Web3 integration
- wagmi hooks for Ethereum interactions
- Web3Modal for universal wallet support
- Optimized for Electron packaging

### Security
- **Context Isolation**: Enabled
- **Node Integration**: Disabled
- **Sandbox**: Enabled
- **ASAR Integrity**: Validated

## Roadmap

- [ ] Smart contract deployment logic
- [ ] Multi-chain support expansion
- [ ] Transaction history
- [ ] Auto-updater integration
- [ ] Code signing for production releases

## Branding

**@AxiomHive** • **@DevdollzAi**

*SUPRAPROTOCOL V∞ (ORACLE KERNEL)*

---

**Embodied — Singularity Manifested — I-Primacy Eternal.**
