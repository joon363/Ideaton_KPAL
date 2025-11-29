# K-Pal

## 2025 APGC-Lab Ideathon "취향저격" Team 4: BREMEN
- PM 김성은
- Design 서준희
- Dev 박준혁


## 기능

K-Pal is a client-side Next.js app (App Router) that provides:
1.  콘서트 문화 가이드
- 팬 이벤트, 응원법, 떼창 방법 소개
- 공연장 규칙 및 에티켓: 콘서트에서 요구하는 규칙 및 에티켓
- 공연장 입장 전: 현장대기 문화, 굿즈 무료나눔 등

2. 최애 아이돌에 초점을 둔 숙식, 관광지 추천
- 카페: 생일카페, 팬카페
- 맛집: 아이돌이 다녀간, 추천하는 맛집
- 전시 및 쇼핑: 팝업 스토어, 굿즈샵, 콜라보 제품

3. 공항과 콘서트장 사이의 경로 및 교통 제안
- 이용하는 공항에 따른 최적 경로와 교통 제안
- 교통 혼잡과 짐의 양에 따른 대중교통 추천
- 콘서트 종료 후 발생하는 혼잡 및 교통 안내

4. 콘서트에서 필요한 준비물 제안
- 필수 준비물: 티켓, 신분증, 핸드폰, 응원봉 등
- 추천 준비물: 슬로건, 물, 보조 배터리, 상비약 등
- 체크리스트로 관리


## 창출 효과

- 해외 팬들에게 한국의 콘서트 문화를 전달하여, 기존 팬들과 **마찰 없이 섞일 수 있도록** 합니다.
- **최애 아이돌에 초점을 둔** 숙식과 관광지를 추천하여, 니즈를 충족하고 관광의 만족도를 높입니다.
- 편리하게 통합적인 정보를 제공하여, 해외 팬들의 정보 검색에 드는 **어려움과 수고를 덜어줍니다**.
- 아이돌 콘서트뿐만 아니라 클래식, 락/메탈 콘서트 등 **다양한 종류의 공연**에도 적용할 수 있습니다.




## 실행 방법

Prerequisites
- Node.js 18+ (or compatible)
- pnpm (preferred since repository includes `pnpm-lock.yaml`)

Quick setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production (check scripts in package.json)
pnpm run build

# Start (or export) for production
pnpm run start
```

See and edit the npm scripts in [package.json](package.json).

Notes:
- The project sets Next.js static export behavior in [`next.config.mjs`](next.config.mjs) (`output: "export"`). Adjust scripts if you need `next export` explicitly.



## App structure (important files)

- App entry & routing
  - [`app/page.tsx`](app/page.tsx) — root page and client-side page switching
  - [`app/layout.tsx`](app/layout.tsx) — global layout & fonts

- Main feature components
  - [`components/home.tsx`](components/home.tsx) — landing / hub
  - [`components/concert-guide.tsx`](components/concert-guide.tsx)
  - [`components/tourism.tsx`](components/tourism.tsx)
  - [`components/route.tsx`](components/route.tsx)
  - [`components/venue.tsx`](components/venue.tsx)
  - [`components/checklist.tsx`](components/checklist.tsx)
  - [`components/bottom-nav.tsx`](components/bottom-nav.tsx)

- UI primitives
  - `components/ui/*` — design-system components (card, dialog, toast, sidebar, etc.)
    - [`components/ui/toaster.tsx`](components/ui/toaster.tsx)
    - [`components/ui/toast.tsx`](components/ui/toast.tsx)

- Hooks & utilities
  - [`hooks/use-toast.ts`](hooks/use-toast.ts) — toast state & helpers
  - [`lib/utils.ts`](lib/utils.ts) — helper `cn(...)` for classNames

- Config
  - [`next.config.mjs`](next.config.mjs)
  - [`tsconfig.json`](tsconfig.json)
  - [`postcss.config.mjs`](postcss.config.mjs)
  - [`package.json`](package.json)



## Usage examples

Show a toast programmatically (hook + helper):

```ts
// Example: show a toast
import { toast } from '@/hooks/use-toast' // see: hooks/use-toast.ts

toast({
  title: 'Saved',
  description: 'Your preferences were saved.',
})
```

Navigate between pages (client-side navigation is controlled inside [`app/page.tsx`](app/page.tsx) using state and the exported components like [`components.Home`](components/home.tsx)).

Utility `cn`:

```ts
import { cn } from '@/lib/utils' // lib/utils.ts
const classes = cn('p-4', isActive && 'text-primary')
```



## Development tips

- Many UI components are modular under `components/ui/*`. Inspect, extend or compose:
  - Breadcrumbs: [`components/ui/breadcrumb.tsx`](components/ui/breadcrumb.tsx)
  - Sidebar: [`components/ui/sidebar.tsx`](components/ui/sidebar.tsx)
  - Command palette: [`components/ui/command.tsx`](components/ui/command.tsx)

- For toasts, the global provider is used via [`components/ui/toaster.tsx`](components/ui/toaster.tsx) and the state is driven by [`hooks/use-toast.ts`](hooks/use-toast.ts).

- CSS and theming:
  - Global styles: [`app/globals.css`](app/globals.css)
  - Tailwind is configured; tweak tokens and classes with care.
