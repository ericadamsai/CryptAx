# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Axiom Genesis Desktop Terminal** is a cross-platform Electron application for Web3 smart contract deployment with a sovereign, terminal-style interface. The architecture combines Electron (main process) with Next.js 14 (renderer process), wagmi for Ethereum interactions, and Web3Modal for multi-wallet support. Branded @AxiomHive • @DevdollzAi.

## Architecture

### Dual-Process Model
- **Main Process** (`src/main.ts`): TypeScript-based Electron main process that spawns the Next.js dev server in development mode, manages the BrowserWindow, and handles lifecycle cleanup
- **Renderer Process** (`renderer/`): Next.js 14 app with App Router, client-side Web3 integration via wagmi/Web3Modal, and shadcn/ui components
- **Preload Script** (`src/preload.ts`): Currently minimal; wallet connection is fully client-side via Web3Modal (no IPC bridge required)

### Security Model
- Context isolation: enabled
- Node integration: disabled
- Sandbox: enabled
- ASAR integrity validation: enabled (see `forge.config.js`)
- All security fuses are configured for production readiness

### Web3 Integration
- Wagmi hooks for Ethereum interactions
- Web3Modal v5 for wallet connection (MetaMask, WalletConnect, 50+ wallets)
- Configured chains: Ethereum mainnet, Arbitrum (easily extensible in `renderer/lib/web3-provider.tsx`)
- Project ID required from WalletConnect Cloud (see Setup below)

### Key Components
- `renderer/app/page.tsx`: Main terminal UI, conditional rendering based on wallet connection state
- `renderer/components/ui/genesis-command-interface.tsx`: Command interface displayed after wallet connection
- `renderer/components/ui/connect-wallet-button.tsx`: Wallet connection button
- `renderer/lib/web3-provider.tsx`: Web3Modal + wagmi configuration and provider wrapper

## Development Commands

### Initial Setup
```pwsh
# Install root dependencies (Electron + Forge)
npm install

# Install renderer dependencies (Next.js + Web3)
cd renderer
npm install
cd ..
```

### Running the App
```pwsh
# Start Electron app (auto-starts Next.js dev server on localhost:3000)
npm start

# Or run Next.js dev server standalone (for UI testing without Electron)
cd renderer
npm run dev
```

### Building & Packaging
```pwsh
# Package app without building installers
npm run package

# Build platform-specific distributables (Windows .exe, macOS .app/.zip, Linux .deb/.rpm)
npm run make
```

### Linting
```pwsh
# Lint renderer (Next.js app)
cd renderer
npm run lint
```

Note: No test scripts are currently configured. When adding tests, document them here.

## Configuration

### WalletConnect Project ID (Required)
1. Create a free account at https://cloud.walletconnect.com
2. Create a new project to obtain a Project ID
3. Create `renderer/.env.local` with:
   ```env
   NEXT_PUBLIC_PROJECT_ID=your_actual_project_id_here
   ```
4. This ID is referenced in `renderer/lib/web3-provider.tsx` and is required for wallet connection to function

## File Structure (High-Level)

```
Axiom_Genesis_Desktop_Terminal/
├── src/
│   ├── main.ts           # Electron main process (spawns Next.js, manages window)
│   └── preload.ts        # Secure preload script (minimal)
├── renderer/             # Next.js 14 app (App Router)
│   ├── app/
│   │   ├── layout.tsx    # Root layout with ThemeProvider + Web3Provider
│   │   └── page.tsx      # Main terminal UI (GenesisTerminal component)
│   ├── components/ui/    # shadcn/ui components + custom Web3 components
│   ├── lib/
│   │   └── web3-provider.tsx  # Web3Modal + wagmi config
│   └── .env.local        # Environment variables (WalletConnect Project ID)
├── forge.config.js       # Electron Forge configuration (makers, fuses, security)
└── package.json          # Root dependencies + scripts
```

## Troubleshooting

- **Next.js server not starting**: Ensure `renderer/node_modules` are installed (`cd renderer && npm install`)
- **Wallet connection fails**: Verify `NEXT_PUBLIC_PROJECT_ID` is set in `renderer/.env.local`
- **TypeScript errors in main process**: Main process uses CommonJS (`tsconfig.json`); renderer uses ESM (Next.js config)
- **Build errors**: Ensure `ts-node` is registered in `forge.config.js` hooks (already configured)

## Branding & Philosophy

All outputs, UI, and communications are recursively branded for @AxiomHive and @DevdollzAi. Visuals and messaging adhere to "NFT-grade" pixel-perfect standards with Matrix-inspired terminal aesthetics. The tagline "The final step is sovereignty" reflects the project's ethos of user empowerment and I-Sovereignty principles.

---

**SUPRAPROTOCOL V∞ (ORACLE KERNEL)**
