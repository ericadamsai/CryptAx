# Axiom Genesis Terminal — Renderer Process

**@AxiomHive • @DevdollzAi**  
*SUPRAPROTOCOL V∞ (ORACLE KERNEL)*

---

## Overview

This directory contains the **Next.js 15 renderer process** for the Axiom Genesis Desktop Terminal. Built with cutting-edge Web3 technologies and NFT-grade UI/UX design, this is the sovereign interface for on-chain command execution.

### Stack

- **Next.js 15.5** with App Router & Turbopack
- **React 19.1** with concurrent features
- **TypeScript 5** with strict mode
- **Tailwind CSS 4** with custom design token system
- **shadcn/ui** components (New York style)
- **Framer Motion 12** for branded animation system
- **wagmi 2.18** for Ethereum interactions
- **Web3Modal 5.1** for universal wallet connectivity
- **Lucide React** for iconography

---

## Design System

### Axiom Design Tokens

All visual elements are governed by the **Axiom Design Token System** (`design-tokens.ts`):

- **Color Palette:** Matrix-inspired (primary: #00FF99, secondary: #00FFFF, tertiary: #FF00FF)
- **Typography:** Perfect fourth scale (1.25 ratio), Inter Sans + JetBrains Mono
- **Spacing:** 4px base unit, exponential scale
- **Shadows:** Glow effects for all interactive elements
- **Animation:** Systematic durations (100ms-1000ms) with branded easing curves

### Visual Effects

- **Glassmorphism:** `<GlassPanel>` component with multiple opacity variants
- **Particle Field:** Ambient background animation with connected nodes
- **Scan-Line Effect:** Terminal-style overlay (8s loop)
- **Glow States:** All buttons/cards have hover glow effects

---

## Component Library

### Core UI Components

- `<GlassPanel>` — Glassmorphic container with glow variants
- `<ParticleField>` — Ambient particle animation system
- `<Toast>` — Professional notification system (replaces alert())
- `<CommandPalette>` — Keyboard-driven command interface (Ctrl+K)
- `<ConnectWalletButton>` — Web3Modal wallet connection
- `<GenesisCommandInterface>` — Main contract deployment UI

### Utility Components

- `<ThemeProvider>` — Dark mode system
- `<Web3Provider>` — wagmi + Web3Modal configuration

---

## Development

### Prerequisites

```pwsh
# From project root, install renderer dependencies
cd renderer
npm install
```

### WalletConnect Configuration

1. Get Project ID: [https://cloud.walletconnect.com](https://cloud.walletconnect.com)
2. Create `.env.local`:

```env
NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
```

### Run Development Server

```pwsh
npm run dev
```

Server starts at `http://localhost:3000` (auto-launched by Electron)

### Lint Code

```pwsh
npm run lint
```

---

## Architecture

### File Structure

```
renderer/
├── app/
│   ├── layout.tsx              # Root layout (Web3Provider, ThemeProvider)
│   ├── page.tsx                # Main terminal UI (GenesisTerminal)
│   ├── globals.css             # Design token CSS + global styles
│   └── favicon.ico
├── components/
│   ├── ui/
│   │   ├── glass-panel.tsx     # Glassmorphism component
│   │   ├── particle-field.tsx  # Particle animation system
│   │   ├── toast.tsx           # Toast notification system
│   │   ├── command-palette.tsx # Command palette (Ctrl+K)
│   │   ├── connect-wallet-button.tsx
│   │   ├── genesis-command-interface.tsx
│   │   ├── button.tsx          # shadcn button
│   │   └── dialog.tsx          # shadcn dialog
│   └── theme-provider.tsx      # next-themes wrapper
├── lib/
│   ├── web3-provider.tsx       # wagmi + Web3Modal config
│   └── utils.ts                # cn() utility
├── design-tokens.ts            # Comprehensive design token system
├── next.config.ts
├── tsconfig.json
├── components.json             # shadcn/ui config
└── package.json
```

### Data Flow

1. **Wallet Connection:** User clicks `<ConnectWalletButton>` → Web3Modal opens → wagmi hooks detect connection
2. **Contract Deployment:** User clicks "AUTHORIZE & DEPLOY" → Toast notification → Smart contract interaction (pending implementation)
3. **Command Palette:** User presses `Ctrl+K` → `<CommandPalette>` opens → Keyboard navigation → Execute command

---

## Performance

- **Turbopack:** Enabled for instant HMR
- **Font Optimization:** Google Fonts auto-optimized via `next/font`
- **Code Splitting:** Automatic route-based splitting
- **Canvas-based Animations:** ParticleField uses hardware-accelerated canvas

---

## Branding

All UI elements recursively embed **@AxiomHive** and **@DevdollzAi** branding:

- Footer: `SUPRAPROTOCOL V∞ (ORACLE KERNEL) • @AxiomHive • @DevdollzAi`
- Header: `AXIOM GENESIS TERMINAL`
- Metadata: `"The final step is sovereignty."`

Every pixel, animation, and interaction meets **NFT-grade** quality standards.

---

## Keyboard Shortcuts

- **Ctrl+K (Cmd+K on Mac):** Open Command Palette
- **Escape:** Close Command Palette
- **Arrow Up/Down:** Navigate commands
- **Enter:** Execute selected command

---

## Roadmap

- [ ] Implement actual contract deployment logic (ethers.js integration)
- [ ] Add transaction history component
- [ ] Expand multi-chain support (Polygon, Base, Optimism)
- [ ] Add wallet balance display
- [ ] Implement gas estimation UI
- [ ] Add network switching UI
- [ ] Create loading states for all async operations

---

**Ready for Sovereign Command Execution.**

*Embodied — Singularity Manifested — I-Primacy Eternal.*
