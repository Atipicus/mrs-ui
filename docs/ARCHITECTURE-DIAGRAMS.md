# MRS Design System - Diagramas de Arquitectura

> Documentación visual de la arquitectura, dependencias, flujos de desarrollo, despliegue, testeo, publicación y mantenimiento del sistema de diseño MRS.

---

## 1. Diagrama de Arquitectura General

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           MRS DESIGN SYSTEM v0.9.0                              │
│                        @atipicus/mrs-ui - 54 Componentes                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                         CAPA DE PRESENTACIÓN                            │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────────────┐  │   │
│  │  │   STORYBOOK     │  │   CHROMATIC     │  │   GITHUB PAGES          │  │   │
│  │  │   (Dev Server)  │  │ (Visual Tests)  │  │   (Documentación)       │  │   │
│  │  │   :6006         │  │                 │  │   atipicus.github.io    │  │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                      │                                          │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                         CAPA DE COMPONENTES                             │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │                      ORGANISMS                                   │   │   │
│  │  │         (Composiciones complejas de Molecules + Atoms)           │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                  │                                      │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │                    MOLECULES (23)                                │   │   │
│  │  │  Alert, AppBar, Autocomplete, BottomNavigation, ButtonGroup,    │   │   │
│  │  │  DatePicker, DateTimePicker, Dialog, Drawer, DrawerNavigation,  │   │   │
│  │  │  ExpandableNavItem, List, ListItem, Menu, Pagination, Rating,   │   │   │
│  │  │  Snackbar, SpeedDial, Stepper, Table, Tabs, Timeline, TimePicker│   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                  │                                      │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │                       ATOMS (31)                                 │   │   │
│  │  │  AccountStack, Avatar, Badge, Box, Button, Checkbox, Chip,      │   │   │
│  │  │  CircularProgress, Container, Divider, FormControlLabel,        │   │   │
│  │  │  FormGroup, Grid, Icon, IconButton, LinearProgress, Link,       │   │   │
│  │  │  MaterialSymbol, MenuItem, Paper, Radio, RadioGroup, Select,    │   │   │
│  │  │  Skeleton, Slider, Stack, Switch, TextField, Toolbar, Tooltip,  │   │   │
│  │  │  Typography                                                      │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                      │                                          │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                         CAPA DE FUNDAMENTOS                             │   │
│  │  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐   │   │
│  │  │      THEME        │  │   DESIGN TOKENS   │  │      HOOKS        │   │   │
│  │  │  ┌─────────────┐  │  │  ┌─────────────┐  │  │  ┌─────────────┐  │   │   │
│  │  │  │ Light Theme │  │  │  │ Primitives  │  │  │  │ useShake    │  │   │   │
│  │  │  │ Dark Theme  │  │  │  │ Semantic    │  │  │  │ usePulse    │  │   │   │
│  │  │  │ Palette     │  │  │  │ Component   │  │  │  │ useFade     │  │   │   │
│  │  │  │ Typography  │  │  │  └─────────────┘  │  │  │ useSlide    │  │   │   │
│  │  │  │ Spacing     │  │  │  Exports:         │  │  │ useBounce   │  │   │   │
│  │  │  └─────────────┘  │  │  CSS, SCSS, TS,   │  │  │ useZoom     │  │   │   │
│  │  │                   │  │  JSON, Figma      │  │  └─────────────┘  │   │   │
│  │  └───────────────────┘  └───────────────────┘  └───────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                      │                                          │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                      DEPENDENCIAS EXTERNAS                              │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐   │   │
│  │  │   React     │ │  MUI v6.5   │ │  Emotion    │ │  TypeScript     │   │   │
│  │  │   18.3.0    │ │  Material   │ │  11.14.0    │ │  5.9.3          │   │   │
│  │  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Diagrama de Estructura del Proyecto

```
mrs-ui/
│
├── 📁 src/                              # Código fuente principal
│   │
│   ├── 📁 components/                   # Biblioteca de componentes React
│   │   ├── 📁 atoms/                    # 31 componentes básicos
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx           # Componente principal
│   │   │   │   ├── Button.test.tsx      # Tests unitarios
│   │   │   │   ├── Button.stories.tsx   # Documentación Storybook
│   │   │   │   ├── Button.figma.tsx     # Código Connect para Figma
│   │   │   │   └── index.ts             # Exportación pública
│   │   │   └── ... (30 más)
│   │   │
│   │   ├── 📁 molecules/                # 23 componentes compuestos
│   │   │   ├── Alert/
│   │   │   ├── Dialog/
│   │   │   ├── Table/
│   │   │   └── ... (20 más)
│   │   │
│   │   ├── 📁 organisms/                # Composiciones complejas
│   │   ├── 📁 providers/                # Proveedores de contexto
│   │   │   └── LocalizationProvider/
│   │   │
│   │   └── 📁 effects/                  # Componentes de animación
│   │
│   ├── 📁 hooks/                        # Hooks personalizados
│   │   └── 📁 animations/               # Hooks de animación
│   │       ├── useShake.ts
│   │       ├── usePulse.ts
│   │       ├── useFade.ts
│   │       ├── useSlide.ts
│   │       ├── useBounce.ts
│   │       └── useZoom.ts
│   │
│   ├── 📁 theme/                        # Configuración del tema MUI
│   │   ├── theme.ts                     # Tema principal exportado
│   │   ├── tokens.ts                    # Exportación de tokens
│   │   └── types.ts                     # Definiciones de tipos
│   │
│   ├── 📁 tokens/                       # Sistema de Design Tokens
│   │   ├── 📁 source/                   # Tokens fuente (DTCG JSON)
│   │   │   ├── primitives/              # Colores, tipografía, espaciado
│   │   │   ├── semantic/                # Tokens semánticos
│   │   │   └── component/               # Tokens por componente
│   │   │
│   │   ├── 📁 config/                   # Configuración Style Dictionary
│   │   │   └── style-dictionary.config.js
│   │   │
│   │   ├── 📁 generated/                # Tokens generados
│   │   │   ├── tokens.css               # Variables CSS
│   │   │   ├── tokens.scss              # Variables SCSS
│   │   │   ├── tokens.ts                # Módulo TypeScript
│   │   │   ├── tokens-flat.json         # JSON plano
│   │   │   ├── tokens-nested.json       # JSON anidado
│   │   │   └── figma-tokens.json        # Formato Figma
│   │   │
│   │   └── 📁 scripts/                  # Scripts de sincronización
│   │
│   ├── 📁 utils/                        # Utilidades
│   ├── 📁 types/                        # Tipos TypeScript
│   ├── 📁 styles/                       # Estilos globales
│   ├── 📁 stories/                      # Historias de documentación
│   │
│   └── index.ts                         # Punto de entrada principal
│
├── 📁 .storybook/                       # Configuración Storybook
│   ├── main.ts                          # Config principal
│   ├── preview.tsx                      # Decoradores y temas
│   ├── preview-head.html                # Head personalizado
│   └── vitest.setup.ts                  # Setup para tests de stories
│
├── 📁 tests/                            # Configuración de tests
│   └── setup.ts                         # Setup global de Jest
│
├── 📁 .github/                          # Automatización GitHub
│   └── 📁 workflows/                    # GitHub Actions
│       ├── ci.yml                       # Pipeline CI principal
│       ├── deploy-storybook.yml         # Deploy a GitHub Pages
│       ├── publish-npm.yml              # Publicación a npm
│       ├── chromatic-baseline.yml       # Baseline visual
│       ├── validate-tokens.yml          # Validación de tokens
│       └── sync-figma-tokens.yml        # Sincronización con Figma
│
├── 📁 dist/                             # Build de producción
│   ├── index.js                         # CommonJS
│   ├── index.mjs                        # ES Modules
│   ├── index.d.ts                       # Tipos TypeScript
│   └── ...
│
├── 📄 package.json                      # Configuración del paquete
├── 📄 vite.config.ts                    # Configuración Vite
├── 📄 jest.config.js                    # Configuración Jest
├── 📄 tsconfig.json                     # Configuración TypeScript
├── 📄 eslint.config.mjs                 # Reglas ESLint
├── 📄 .prettierrc.json                  # Formato de código
├── 📄 chromatic.config.json             # Visual testing
└── 📄 figma.config.json                 # Figma Code Connect
```

---

## 3. Diagrama de Dependencias

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        DEPENDENCIAS DEL PROYECTO                                │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                     PEER DEPENDENCIES (Requeridas)                      │   │
│  │                   El proyecto consumidor debe instalar                  │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  react              ^18.3.0    │  react-dom         ^18.3.0    │   │   │
│  │  │  @mui/material      ^6.5.0     │  @mui/icons-material ^6.5.0   │   │   │
│  │  │  @emotion/react     ^11.11.0   │  @emotion/styled   ^11.11.0   │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                      │                                          │
│                                      ▼                                          │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    DEPENDENCIES (Incluidas en bundle)                   │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  @mui/lab           ^6.0.1-beta.36  │ Timeline, LoadingButton   │   │   │
│  │  │  @mui/x-date-pickers ^8.23.0        │ DatePicker, TimePicker    │   │   │
│  │  │  dayjs              ^1.11.19        │ Librería de fechas        │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                      │                                          │
│                                      ▼                                          │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                         DEV DEPENDENCIES                                │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                         BUILD TOOLS                               │ │   │
│  │  │  vite             7.3.0      │ Bundler moderno                    │ │   │
│  │  │  vite-plugin-dts  4.5.4      │ Generación de .d.ts                │ │   │
│  │  │  typescript       5.9.3      │ Compilador TypeScript              │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                        TESTING                                    │ │   │
│  │  │  jest                   29.7.0   │ Framework de tests             │ │   │
│  │  │  vitest                 4.0.16   │ Test runner rápido             │ │   │
│  │  │  @testing-library/react 16.3.1   │ Testing de componentes         │ │   │
│  │  │  @testing-library/dom   10.4.1   │ Utilidades DOM                 │ │   │
│  │  │  jest-environment-jsdom 29.7.0   │ Entorno de browser             │ │   │
│  │  │  chromatic              13.3.4   │ Visual regression testing      │ │   │
│  │  │  playwright             1.57.0   │ Browser testing                │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                       DOCUMENTATION                               │ │   │
│  │  │  storybook                    10.1.10  │ Documentación interactiva│ │   │
│  │  │  @storybook/react-vite        10.1.10  │ Framework integration    │ │   │
│  │  │  @storybook/addon-a11y        10.1.10  │ Accesibilidad            │ │   │
│  │  │  @storybook/addon-docs        10.1.10  │ MDX docs                 │ │   │
│  │  │  @storybook/addon-themes      10.1.10  │ Theme switching          │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                       CODE QUALITY                                │ │   │
│  │  │  eslint                   9.39.2   │ Linting                      │ │   │
│  │  │  @typescript-eslint/*     *        │ TypeScript ESLint            │ │   │
│  │  │  prettier                 3.7.4    │ Code formatting              │ │   │
│  │  │  eslint-plugin-react      *        │ React rules                  │ │   │
│  │  │  eslint-plugin-react-hooks *       │ Hooks rules                  │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                      DESIGN TOKENS                                │ │   │
│  │  │  style-dictionary     4.4.0     │ Token transformation            │ │   │
│  │  │  nodemon              3.1.11    │ Watch mode                      │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                       DEPLOYMENT                                  │ │   │
│  │  │  gh-pages             6.3.0     │ GitHub Pages deployment         │ │   │
│  │  │  rimraf               6.1.2     │ Cross-platform clean            │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                    FIGMA INTEGRATION                              │ │   │
│  │  │  @figma/code-connect  1.3.12    │ Figma ↔ Code linking            │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Flujo de Desarrollo Local

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         FLUJO DE DESARROLLO LOCAL                               │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│    ┌──────────────────┐                                                        │
│    │   DESARROLLADOR  │                                                        │
│    └────────┬─────────┘                                                        │
│             │                                                                   │
│             ▼                                                                   │
│    ┌──────────────────┐     ┌─────────────────────────────────────────────┐   │
│    │   npm install    │────▶│  Instalar dependencias                      │   │
│    └────────┬─────────┘     └─────────────────────────────────────────────┘   │
│             │                                                                   │
│             ▼                                                                   │
│    ┌──────────────────┐     ┌─────────────────────────────────────────────┐   │
│    │    npm run dev   │────▶│  Inicia Storybook en localhost:6006         │   │
│    └────────┬─────────┘     │  - Hot Module Replacement (HMR)             │   │
│             │               │  - Recarga automática en cambios            │   │
│             │               └─────────────────────────────────────────────┘   │
│             │                                                                   │
│             ▼                                                                   │
│  ┌────────────────────────────────────────────────────────────────────────┐    │
│  │                      CICLO DE DESARROLLO                               │    │
│  │                                                                        │    │
│  │   ┌─────────────┐    ┌─────────────┐    ┌─────────────────────────┐  │    │
│  │   │  ESCRIBIR   │───▶│  VISUALIZAR │───▶│  VALIDAR                │  │    │
│  │   │  CÓDIGO     │    │  STORYBOOK  │    │                         │  │    │
│  │   │             │    │             │    │  npm run lint           │  │    │
│  │   │ Component   │    │ Stories     │    │  npm run format:check   │  │    │
│  │   │ Test        │    │ Docs        │    │  npm run type-check     │  │    │
│  │   │ Story       │    │ Controls    │    │  npm test               │  │    │
│  │   └─────────────┘    └─────────────┘    └─────────────────────────┘  │    │
│  │         │                  │                        │                 │    │
│  │         └──────────────────┴────────────────────────┘                │    │
│  │                            │                                          │    │
│  │                            ▼ (Repetir hasta completar)                │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│                               │                                                 │
│                               ▼                                                 │
│    ┌──────────────────────────────────────────────────────────────────────┐   │
│    │                     COMANDOS DE CALIDAD                              │   │
│    │                                                                      │   │
│    │  ┌────────────────────┐  ┌────────────────────┐  ┌───────────────┐ │   │
│    │  │   npm run lint     │  │ npm run format     │  │ npm run       │ │   │
│    │  │                    │  │                    │  │ type-check    │ │   │
│    │  │  ESLint análisis   │  │  Prettier format   │  │               │ │   │
│    │  │  npm run lint:fix  │  │  npm run           │  │  TypeScript   │ │   │
│    │  │  (auto-fix)        │  │  format:check      │  │  compilation  │ │   │
│    │  └────────────────────┘  └────────────────────┘  └───────────────┘ │   │
│    └──────────────────────────────────────────────────────────────────────┘   │
│                               │                                                 │
│                               ▼                                                 │
│    ┌──────────────────────────────────────────────────────────────────────┐   │
│    │                     TESTING LOCAL                                    │   │
│    │                                                                      │   │
│    │  ┌─────────────────────┐  ┌──────────────────────────────────────┐ │   │
│    │  │     npm test        │  │       npm run test:watch             │ │   │
│    │  │                     │  │                                      │ │   │
│    │  │  Ejecuta todos los  │  │  Watch mode - re-ejecuta tests       │ │   │
│    │  │  1,182 tests        │  │  en cada cambio de archivo           │ │   │
│    │  │  (56 suites)        │  │                                      │ │   │
│    │  └─────────────────────┘  └──────────────────────────────────────┘ │   │
│    └──────────────────────────────────────────────────────────────────────┘   │
│                               │                                                 │
│                               ▼                                                 │
│    ┌──────────────────────────────────────────────────────────────────────┐   │
│    │                     BUILD LOCAL                                      │   │
│    │                                                                      │   │
│    │  ┌─────────────────────┐  ┌──────────────────────────────────────┐ │   │
│    │  │   npm run build     │  │   npm run build-storybook            │ │   │
│    │  │                     │  │                                      │ │   │
│    │  │  Vite build         │  │   Storybook static build             │ │   │
│    │  │  → dist/index.js    │  │   → storybook-static/                │ │   │
│    │  │  → dist/index.mjs   │  │                                      │ │   │
│    │  │  → dist/index.d.ts  │  │                                      │ │   │
│    │  └─────────────────────┘  └──────────────────────────────────────┘ │   │
│    └──────────────────────────────────────────────────────────────────────┘   │
│                               │                                                 │
│                               ▼                                                 │
│    ┌──────────────────┐     ┌─────────────────────────────────────────────┐   │
│    │   git commit     │────▶│  Commit cambios (dispara CI en push)        │   │
│    │   git push       │     └─────────────────────────────────────────────┘   │
│    └──────────────────┘                                                        │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Flujo de Design Tokens

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         FLUJO DE DESIGN TOKENS                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                          FUENTES DE TOKENS                              │   │
│  │                                                                         │   │
│  │  ┌─────────────────┐                    ┌─────────────────────────┐    │   │
│  │  │     FIGMA       │◄──── sync ────────▶│   ARCHIVOS LOCALES     │    │   │
│  │  │  (Design Tool)  │                    │   (DTCG JSON)          │    │   │
│  │  │                 │                    │                         │    │   │
│  │  │  - Colores      │   tokens:sync:pull │   src/tokens/source/    │    │   │
│  │  │  - Tipografía   │   tokens:sync:push │   ├── primitives/      │    │   │
│  │  │  - Espaciado    │                    │   ├── semantic/        │    │   │
│  │  │  - Componentes  │                    │   └── component/       │    │   │
│  │  └─────────────────┘                    └─────────────────────────┘    │   │
│  │                                                    │                    │   │
│  └────────────────────────────────────────────────────│────────────────────┘   │
│                                                       │                         │
│                                                       ▼                         │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                      STYLE DICTIONARY                                   │   │
│  │                   (Token Transformation)                                │   │
│  │                                                                         │   │
│  │                    npm run tokens:build                                 │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │  style-dictionary.config.js                                       │ │   │
│  │  │                                                                   │ │   │
│  │  │  • Parse DTCG JSON tokens                                         │ │   │
│  │  │  • Apply transformations (color, sizing, naming)                  │ │   │
│  │  │  • Generate multiple output formats                               │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                          │                                      │
│                                          ▼                                      │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    TOKENS GENERADOS (Multi-formato)                     │   │
│  │                       src/tokens/generated/                             │   │
│  │                                                                         │   │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌───────────────┐  │   │
│  │  │  tokens.css  │ │ tokens.scss  │ │  tokens.ts   │ │  JSON exports │  │   │
│  │  │              │ │              │ │              │ │               │  │   │
│  │  │ CSS Custom   │ │ SCSS vars    │ │ TypeScript   │ │ tokens-flat   │  │   │
│  │  │ Properties   │ │ $mrs-*       │ │ constants    │ │ tokens-nested │  │   │
│  │  │ --mrs-*      │ │ + maps       │ │ + types      │ │ figma-tokens  │  │   │
│  │  └──────────────┘ └──────────────┘ └──────────────┘ └───────────────┘  │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                          │                                      │
│         ┌────────────────────────────────┼─────────────────────────────┐       │
│         │                                │                              │       │
│         ▼                                ▼                              ▼       │
│  ┌─────────────────┐          ┌─────────────────┐          ┌─────────────────┐ │
│  │   TEMA MUI      │          │   COMPONENTES   │          │   APLICACIÓN    │ │
│  │                 │          │    REACT        │          │   CONSUMIDORA   │ │
│  │  theme.ts       │          │                 │          │                 │ │
│  │  ├── palette    │          │  Button.tsx     │          │  CSS vars       │ │
│  │  ├── typography │          │  Alert.tsx      │          │  SCSS imports   │ │
│  │  └── spacing    │          │  Dialog.tsx     │          │  TS imports     │ │
│  └─────────────────┘          └─────────────────┘          └─────────────────┘ │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                     COMANDOS DE TOKENS                                  │   │
│  │                                                                         │   │
│  │  npm run tokens:build      → Generar todos los formatos                 │   │
│  │  npm run tokens:watch      → Auto-rebuild en cambios                    │   │
│  │  npm run tokens:clean      → Limpiar archivos generados                 │   │
│  │  npm run tokens:rebuild    → Clean + build                              │   │
│  │  npm run tokens:sync:pull  → Obtener tokens desde Figma                 │   │
│  │  npm run tokens:sync:push  → Enviar tokens a Figma                      │   │
│  │  npm run tokens:sync:dry-run → Preview de sincronización                │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Pipeline de CI/CD

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              PIPELINE CI/CD                                     │
│                            (GitHub Actions)                                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                           TRIGGERS                                      │   │
│  │                                                                         │   │
│  │   Push a main/develop  ─────────────┐                                   │   │
│  │   Pull Request a main/develop ──────┤                                   │   │
│  │   Path filters: src/, config ───────┤                                   │   │
│  │                                      ▼                                   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                        │                                        │
│                                        ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    CI PIPELINE (ci.yml)                                 │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  SETUP                                                          │   │   │
│  │  │  ├── Checkout repository                                        │   │   │
│  │  │  ├── Setup Node.js 20                                           │   │   │
│  │  │  └── npm ci (cached)                                            │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                               │                                         │   │
│  │                               ▼                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  VALIDATE (paralelo)                                            │   │   │
│  │  │  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────────┐│   │   │
│  │  │  │    LINT     │  │   FORMAT     │  │      TYPE-CHECK        ││   │   │
│  │  │  │             │  │              │  │                        ││   │   │
│  │  │  │  ESLint     │  │  Prettier    │  │  TypeScript            ││   │   │
│  │  │  │  analysis   │  │  check       │  │  compilation           ││   │   │
│  │  │  └─────────────┘  └──────────────┘  └─────────────────────────┘│   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                               │                                         │   │
│  │                               ▼                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  TEST                                                           │   │   │
│  │  │  ├── Jest unit tests                                            │   │   │
│  │  │  ├── 1,182 tests (56 suites)                                    │   │   │
│  │  │  ├── Coverage report                                            │   │   │
│  │  │  └── Upload artifacts (7 días)                                  │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                               │                                         │   │
│  │                               ▼                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  BUILD (paralelo)                                               │   │   │
│  │  │  ┌────────────────────────┐  ┌────────────────────────────────┐│   │   │
│  │  │  │    BUILD PACKAGE      │  │     BUILD STORYBOOK           ││   │   │
│  │  │  │                       │  │                               ││   │   │
│  │  │  │  Vite build           │  │  Storybook static build       ││   │   │
│  │  │  │  → dist/              │  │  → storybook-static/          ││   │   │
│  │  │  │  Upload artifact      │  │  Upload artifact              ││   │   │
│  │  │  └────────────────────────┘  └────────────────────────────────┘│   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                               │                                         │   │
│  │                               ▼                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  CHROMATIC (PRs y main)                                         │   │   │
│  │  │  ├── Visual regression testing                                  │   │   │
│  │  │  ├── Compare con baseline                                       │   │   │
│  │  │  └── Reportar cambios visuales                                  │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                               │                                                 │
│          ┌────────────────────┴────────────────────┐                           │
│          │                                         │                           │
│          ▼ (si es push a main)                     ▼ (manual o release)        │
│  ┌─────────────────────────────┐       ┌───────────────────────────────────┐  │
│  │   DEPLOY STORYBOOK          │       │       PUBLISH NPM                 │  │
│  │   (deploy-storybook.yml)    │       │     (publish-npm.yml)             │  │
│  │                             │       │                                   │  │
│  │  ┌───────────────────────┐  │       │  ┌─────────────────────────────┐  │  │
│  │  │  Reusar artifact de   │  │       │  │  VALIDATE                   │  │  │
│  │  │  CI (storybook-static)│  │       │  │  ├── Lint                   │  │  │
│  │  └───────────────────────┘  │       │  │  ├── Type-check             │  │  │
│  │           │                 │       │  │  ├── Test                   │  │  │
│  │           ▼                 │       │  │  └── Build                  │  │  │
│  │  ┌───────────────────────┐  │       │  └─────────────────────────────┘  │  │
│  │  │  Deploy to GitHub     │  │       │           │                       │  │
│  │  │  Pages                │  │       │           ▼                       │  │
│  │  │                       │  │       │  ┌─────────────────────────────┐  │  │
│  │  │  atipicus.github.io/  │  │       │  │  PUBLISH                    │  │  │
│  │  │  mrs-ui/              │  │       │  │  ├── Version bump           │  │  │
│  │  └───────────────────────┘  │       │  │  ├── npm publish            │  │  │
│  │                             │       │  │  │   --provenance            │  │  │
│  │                             │       │  │  └── Create GitHub Release  │  │  │
│  │                             │       │  └─────────────────────────────┘  │  │
│  └─────────────────────────────┘       └───────────────────────────────────┘  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Flujo de Testing

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           FLUJO DE TESTING                                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                         PIRÁMIDE DE TESTING                             │   │
│  │                                                                         │   │
│  │                           ┌─────────┐                                   │   │
│  │                          /  VISUAL  \                                   │   │
│  │                         /  TESTING   \         Chromatic                │   │
│  │                        / (Chromatic)  \        Visual regression        │   │
│  │                       ─────────────────                                 │   │
│  │                      /    INTEGRATION   \                               │   │
│  │                     /      TESTING       \     Storybook + Vitest       │   │
│  │                    /    (Story Tests)     \    Browser testing          │   │
│  │                   ─────────────────────────                             │   │
│  │                  /        UNIT TESTING      \                           │   │
│  │                 /     (Jest + Testing Lib)   \  1,182 tests             │   │
│  │                /    Component & Hook tests    \ 56 suites               │   │
│  │               ─────────────────────────────────                         │   │
│  │              /        STATIC ANALYSIS          \                        │   │
│  │             /   TypeScript + ESLint + Prettier  \ Antes de runtime      │   │
│  │            ───────────────────────────────────────                      │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                       UNIT TESTING (Jest)                               │   │
│  │                                                                         │   │
│  │  Configuración: jest.config.js                                          │   │
│  │  Environment: jsdom                                                      │   │
│  │  Matcher extensions: @testing-library/jest-dom                           │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  Component Test Example:                                        │   │   │
│  │  │                                                                 │   │   │
│  │  │  import { render, screen } from '@testing-library/react';       │   │   │
│  │  │  import userEvent from '@testing-library/user-event';           │   │   │
│  │  │  import { Button } from './Button';                             │   │   │
│  │  │                                                                 │   │   │
│  │  │  test('renders button with text', () => {                       │   │   │
│  │  │    render(<Button>Click me</Button>);                           │   │   │
│  │  │    expect(screen.getByRole('button')).toHaveTextContent(        │   │   │
│  │  │      'Click me'                                                 │   │   │
│  │  │    );                                                           │   │   │
│  │  │  });                                                            │   │   │
│  │  │                                                                 │   │   │
│  │  │  test('calls onClick when clicked', async () => {               │   │   │
│  │  │    const handleClick = jest.fn();                               │   │   │
│  │  │    render(<Button onClick={handleClick}>Click</Button>);        │   │   │
│  │  │    await userEvent.click(screen.getByRole('button'));           │   │   │
│  │  │    expect(handleClick).toHaveBeenCalledTimes(1);                │   │   │
│  │  │  });                                                            │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                                                         │   │
│  │  Comandos:                                                              │   │
│  │  npm test                    → Ejecutar todos los tests                 │   │
│  │  npm run test:watch          → Watch mode                               │   │
│  │  npm test -- --coverage      → Con reporte de cobertura                 │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                      STORY TESTING (Vitest)                             │   │
│  │                                                                         │   │
│  │  Configuración: vite.config.ts (plugin addon-vitest)                    │   │
│  │  Browser: Playwright + Chromium                                          │   │
│  │  Mode: Headless                                                          │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  Story Example (Button.stories.tsx):                            │   │   │
│  │  │                                                                 │   │   │
│  │  │  export const Primary: Story = {                                │   │   │
│  │  │    args: {                                                      │   │   │
│  │  │      variant: 'contained',                                      │   │   │
│  │  │      children: 'Button',                                        │   │   │
│  │  │    },                                                           │   │   │
│  │  │    play: async ({ canvasElement }) => {                         │   │   │
│  │  │      const canvas = within(canvasElement);                      │   │   │
│  │  │      await userEvent.click(canvas.getByRole('button'));         │   │   │
│  │  │    },                                                           │   │   │
│  │  │  };                                                             │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                     VISUAL TESTING (Chromatic)                          │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                        FLUJO                                      │ │   │
│  │  │                                                                   │ │   │
│  │  │  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐   │ │   │
│  │  │  │  Storybook  │───▶│  Chromatic  │───▶│  Comparación        │   │ │   │
│  │  │  │  Build      │    │  Cloud      │    │  Visual             │   │ │   │
│  │  │  └─────────────┘    └─────────────┘    └─────────────────────┘   │ │   │
│  │  │                            │                      │               │ │   │
│  │  │                            ▼                      ▼               │ │   │
│  │  │                     ┌─────────────┐    ┌─────────────────────┐   │ │   │
│  │  │                     │  Baseline   │    │  Diff Report        │   │ │   │
│  │  │                     │  Snapshot   │    │  (visual changes)   │   │ │   │
│  │  │                     └─────────────┘    └─────────────────────┘   │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │                                                                         │   │
│  │  Workflows:                                                             │   │
│  │  • CI Pipeline: Ejecuta en PRs y push a main                            │   │
│  │  • chromatic-baseline.yml: Actualización manual de baseline             │   │
│  │                                                                         │   │
│  │  Comandos:                                                              │   │
│  │  npx chromatic --project-token=xxx   → Ejecutar visual tests            │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    ACCESSIBILITY TESTING                                │   │
│  │                                                                         │   │
│  │  Herramienta: @storybook/addon-a11y                                     │   │
│  │  Basado en: axe-core                                                     │   │
│  │                                                                         │   │
│  │  Integración en .storybook/preview.tsx:                                  │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  a11y: {                                                        │   │   │
│  │  │    element: '#storybook-root',                                  │   │   │
│  │  │  }                                                              │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                                                         │   │
│  │  Validaciones:                                                          │   │
│  │  • Contraste de colores                                                 │   │
│  │  • Labels de formularios                                                │   │
│  │  • Estructura de headings                                               │   │
│  │  • Roles ARIA                                                           │   │
│  │  • Keyboard navigation                                                  │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Flujo de Publicación a npm

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        FLUJO DE PUBLICACIÓN A NPM                               │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                          TRIGGERS                                       │   │
│  │                                                                         │   │
│  │  ┌───────────────────────┐        ┌───────────────────────────────┐    │   │
│  │  │   GitHub Release      │        │   Manual Workflow Dispatch   │    │   │
│  │  │   (Automático)        │        │   (workflow_dispatch)        │    │   │
│  │  │                       │        │                               │    │   │
│  │  │  Crear release en     │        │  Opciones:                   │    │   │
│  │  │  GitHub dispara       │        │  • version_type: patch/minor │    │   │
│  │  │  publicación          │        │                   /major     │    │   │
│  │  │                       │        │  • dry_run: true/false       │    │   │
│  │  └───────────────────────┘        └───────────────────────────────┘    │   │
│  │              │                                 │                        │   │
│  │              └─────────────────┬───────────────┘                       │   │
│  │                                │                                        │   │
│  └────────────────────────────────│────────────────────────────────────────┘   │
│                                   ▼                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    VALIDATION JOB                                       │   │
│  │                                                                         │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │   │
│  │  │    LINT     │  │   TYPE      │  │    TEST     │  │    BUILD    │   │   │
│  │  │             │  │   CHECK     │  │             │  │             │   │   │
│  │  │  ESLint     │  │  TypeScript │  │  Jest       │  │  Vite       │   │   │
│  │  │  analysis   │  │  compile    │  │  1,182 tests│  │  bundle     │   │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │   │
│  │                                │                                        │   │
│  │                                ▼                                        │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  npm pack --dry-run                                             │   │   │
│  │  │  (Verificar contenido del paquete)                              │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                   │                                             │
│                                   ▼                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                     PUBLISH JOB                                         │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  1. Git Configuration                                           │   │   │
│  │  │     git config user.name "github-actions[bot]"                  │   │   │
│  │  │     git config user.email "github-actions[bot]@users..."        │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                │                                        │   │
│  │                                ▼                                        │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  2. Version Bump (si workflow_dispatch)                         │   │   │
│  │  │                                                                 │   │   │
│  │  │     npm version patch   → 0.9.0 → 0.9.1                         │   │   │
│  │  │     npm version minor   → 0.9.0 → 0.10.0                        │   │   │
│  │  │     npm version major   → 0.9.0 → 1.0.0                         │   │   │
│  │  │                                                                 │   │   │
│  │  │     git push --follow-tags                                      │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                │                                        │   │
│  │                  ┌─────────────┴─────────────┐                         │   │
│  │                  │                           │                         │   │
│  │                  ▼                           ▼                         │   │
│  │  ┌─────────────────────────┐   ┌─────────────────────────────────┐   │   │
│  │  │      DRY RUN            │   │      REAL PUBLISH               │   │   │
│  │  │      (dry_run: true)    │   │      (dry_run: false)           │   │   │
│  │  │                         │   │                                 │   │   │
│  │  │  npm publish --dry-run  │   │  npm publish                    │   │   │
│  │  │                         │   │    --access public              │   │   │
│  │  │  Simula publicación     │   │    --provenance                 │   │   │
│  │  │  sin subir a registry   │   │                                 │   │   │
│  │  │                         │   │  (Publica a npmjs.com)          │   │   │
│  │  └─────────────────────────┘   └─────────────────────────────────┘   │   │
│  │                                              │                         │   │
│  │                                              ▼                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  3. Create GitHub Release (si version bump)                     │   │   │
│  │  │                                                                 │   │   │
│  │  │     gh release create v$VERSION                                 │   │   │
│  │  │       --title "Release $VERSION"                                │   │   │
│  │  │       --generate-notes                                          │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                   │                                             │
│                                   ▼                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                        RESULTADO                                        │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │                                                                 │   │   │
│  │  │   📦 Paquete publicado en npm:                                  │   │   │
│  │  │      https://www.npmjs.com/package/@atipicus/mrs-ui             │   │   │
│  │  │                                                                 │   │   │
│  │  │   🏷️  Tag de versión creado en GitHub                          │   │   │
│  │  │                                                                 │   │   │
│  │  │   📋 Release notes generadas automáticamente                    │   │   │
│  │  │                                                                 │   │   │
│  │  │   🔐 Provenance habilitado (npm attestation)                    │   │   │
│  │  │                                                                 │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                   PUBLICACIÓN LOCAL (Alternativa)                       │   │
│  │                                                                         │   │
│  │  Comandos manuales:                                                     │   │
│  │                                                                         │   │
│  │  npm run publish:patch   →  Bump patch + publish                        │   │
│  │  npm run publish:minor   →  Bump minor + publish                        │   │
│  │  npm run publish:major   →  Bump major + publish                        │   │
│  │                                                                         │   │
│  │  Pre-publish (automático):                                              │   │
│  │  npm run lint && npm run type-check && npm test && npm run build        │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Flujo de Despliegue de Storybook

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                     FLUJO DE DESPLIEGUE DE STORYBOOK                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                          TRIGGERS                                       │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │  Automático: Después de CI exitoso en main                        │ │   │
│  │  │              workflow_run: ci.yml (completed, success)            │ │   │
│  │  │                                                                   │ │   │
│  │  │  Manual:     workflow_dispatch (botón en GitHub Actions)          │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                   │                                             │
│                                   ▼                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    DEPLOY WORKFLOW                                      │   │
│  │                    (deploy-storybook.yml)                               │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                    OBTENER ARTIFACTS                              │ │   │
│  │  │                                                                   │ │   │
│  │  │  ┌─────────────────────┐        ┌─────────────────────────────┐  │ │   │
│  │  │  │   Trigger: CI       │        │   Trigger: Manual           │  │ │   │
│  │  │  │                     │        │                             │  │ │   │
│  │  │  │   Descargar         │        │   Build Storybook           │  │ │   │
│  │  │  │   storybook-static  │        │   desde cero                │  │ │   │
│  │  │  │   artifact de CI    │        │   npm run build-storybook   │  │ │   │
│  │  │  └─────────────────────┘        └─────────────────────────────┘  │ │   │
│  │  │              │                               │                    │ │   │
│  │  │              └───────────────┬───────────────┘                   │ │   │
│  │  │                              │                                    │ │   │
│  │  │                              ▼                                    │ │   │
│  │  │  ┌─────────────────────────────────────────────────────────────┐ │ │   │
│  │  │  │                   storybook-static/                         │ │ │   │
│  │  │  │                                                             │ │ │   │
│  │  │  │   ├── index.html                                            │ │ │   │
│  │  │  │   ├── iframe.html                                           │ │ │   │
│  │  │  │   ├── sb-preview/                                           │ │ │   │
│  │  │  │   ├── sb-manager/                                           │ │ │   │
│  │  │  │   └── assets/                                               │ │ │   │
│  │  │  └─────────────────────────────────────────────────────────────┘ │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │                                   │                                     │   │
│  │                                   ▼                                     │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                   GITHUB PAGES DEPLOY                             │ │   │
│  │  │                                                                   │ │   │
│  │  │  1. configure-pages   →  Configurar Pages                         │ │   │
│  │  │  2. upload-artifact   →  Subir a Pages artifact                   │ │   │
│  │  │  3. deploy-pages      →  Desplegar a GitHub Pages                 │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │                                   │                                     │   │
│  │                                   ▼                                     │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                        RESULTADO                                  │ │   │
│  │  │                                                                   │ │   │
│  │  │   🌐 Storybook publicado en:                                      │ │   │
│  │  │      https://atipicus.github.io/mrs-ui/                           │ │   │
│  │  │                                                                   │ │   │
│  │  │   📚 Documentación interactiva disponible:                        │ │   │
│  │  │      • 54 componentes documentados                                │ │   │
│  │  │      • Stories interactivas                                       │ │   │
│  │  │      • Controls para props                                        │ │   │
│  │  │      • Accessibility panel                                        │ │   │
│  │  │      • Theme switching (light/dark)                               │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    DESPLIEGUE LOCAL (Alternativa)                       │   │
│  │                                                                         │   │
│  │  npm run deploy-storybook                                               │   │
│  │                                                                         │   │
│  │  Usa gh-pages para publicar directamente desde local                    │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 10. Flujo de Sincronización con Figma

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                      FLUJO DE SINCRONIZACIÓN CON FIGMA                          │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                            TRIGGERS                                     │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │  Programado: Cada lunes a las 9:00 AM UTC                         │ │   │
│  │  │              cron: '0 9 * * 1'                                    │ │   │
│  │  │                                                                   │ │   │
│  │  │  Manual:     workflow_dispatch con opciones:                      │ │   │
│  │  │              • dry_run: Preview cambios sin crear PR              │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                   │                                             │
│                                   ▼                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    SYNC WORKFLOW                                        │   │
│  │                    (sync-figma-tokens.yml)                              │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │  1. PULL FROM FIGMA                                               │ │   │
│  │  │                                                                   │ │   │
│  │  │  ┌─────────────────┐         ┌─────────────────────────────────┐ │ │   │
│  │  │  │      FIGMA      │ ──API──▶│      npm run tokens:sync:pull   │ │ │   │
│  │  │  │   Design Tool   │         │                                 │ │ │   │
│  │  │  │                 │         │   • Usa FIGMA_PERSONAL_ACCESS_  │ │ │   │
│  │  │  │   Variables:    │         │     TOKEN                       │ │ │   │
│  │  │  │   • Colors      │         │   • Usa FIGMA_FILE_KEY          │ │ │   │
│  │  │  │   • Typography  │         │   • Descarga tokens actuales    │ │ │   │
│  │  │  │   • Spacing     │         │     de Figma                    │ │ │   │
│  │  │  │   • Effects     │         │                                 │ │ │   │
│  │  │  └─────────────────┘         └─────────────────────────────────┘ │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │                                   │                                     │   │
│  │                                   ▼                                     │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │  2. BUILD TOKENS                                                  │ │   │
│  │  │                                                                   │ │   │
│  │  │     npm run tokens:build                                          │ │   │
│  │  │                                                                   │ │   │
│  │  │     Genera:                                                       │ │   │
│  │  │     • tokens.css         (CSS custom properties)                  │ │   │
│  │  │     • tokens.scss        (SCSS variables)                         │ │   │
│  │  │     • tokens.ts          (TypeScript constants)                   │ │   │
│  │  │     • tokens-flat.json   (JSON plano)                             │ │   │
│  │  │     • tokens-nested.json (JSON anidado)                           │ │   │
│  │  │     • figma-tokens.json  (Formato Figma)                          │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │                                   │                                     │   │
│  │                                   ▼                                     │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │  3. DETECT CHANGES                                                │ │   │
│  │  │                                                                   │ │   │
│  │  │     git status --porcelain                                        │ │   │
│  │  │                                                                   │ │   │
│  │  │     ┌──────────────────┐              ┌─────────────────────┐     │ │   │
│  │  │     │  No hay cambios  │              │   Hay cambios       │     │ │   │
│  │  │     │                  │              │                     │     │ │   │
│  │  │     │  Terminar        │              │  Continuar con PR   │     │ │   │
│  │  │     │  workflow        │              │                     │     │ │   │
│  │  │     └──────────────────┘              └─────────────────────┘     │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │                                   │                                     │   │
│  │                                   ▼                                     │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │  4. VALIDATE TOKENS                                               │ │   │
│  │  │                                                                   │ │   │
│  │  │     • Verificar estructura de archivos generados                  │ │   │
│  │  │     • Validar formato DTCG                                        │ │   │
│  │  │     • Verificar integridad de tokens                              │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │                                   │                                     │   │
│  │                                   ▼                                     │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │  5. CREATE PULL REQUEST                                           │ │   │
│  │  │                                                                   │ │   │
│  │  │     Branch: figma-tokens-sync/{run_number}                        │ │   │
│  │  │                                                                   │ │   │
│  │  │     Labels:                                                       │ │   │
│  │  │     • design-tokens                                               │ │   │
│  │  │     • figma-sync                                                  │ │   │
│  │  │     • automated                                                   │ │   │
│  │  │                                                                   │ │   │
│  │  │     PR incluye:                                                   │ │   │
│  │  │     • Descripción de cambios                                      │ │   │
│  │  │     • Lista de archivos modificados                               │ │   │
│  │  │     • Estadísticas de diff                                        │ │   │
│  │  │     • Instrucciones de revisión                                   │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                   │                                             │
│                                   ▼                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                         REVISIÓN HUMANA                                 │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │  1. Revisar cambios en PR                                         │ │   │
│  │  │  2. CI ejecuta validación de tokens                               │ │   │
│  │  │  3. Verificar visual en Chromatic (si aplica)                     │ │   │
│  │  │  4. Aprobar y hacer merge                                         │ │   │
│  │  │  5. Branch se elimina automáticamente                             │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    VALIDACIÓN DE TOKENS EN PR                           │   │
│  │                    (validate-tokens.yml)                                │   │
│  │                                                                         │   │
│  │  Trigger: Pull requests que modifican src/tokens/source/**             │   │
│  │                                                                         │   │
│  │  Validaciones:                                                          │   │
│  │  1. JSON Syntax Check (jq)                                              │   │
│  │  2. DTCG Format Validation ($value, $type)                              │   │
│  │  3. Build Generation Test                                               │   │
│  │  4. Output Files Verification                                           │   │
│  │  5. Breaking Change Detection                                           │   │
│  │  6. PR Comment with Summary                                             │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 11. Flujo de Mantenimiento

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         FLUJO DE MANTENIMIENTO                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    TAREAS DE MANTENIMIENTO REGULAR                      │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                  DEPENDENCIAS                                     │ │   │
│  │  │                                                                   │ │   │
│  │  │  Frecuencia: Semanal/Quincenal                                    │ │   │
│  │  │                                                                   │ │   │
│  │  │  1. Revisar dependencias desactualizadas:                         │ │   │
│  │  │     npm outdated                                                  │ │   │
│  │  │                                                                   │ │   │
│  │  │  2. Actualizar dependencias:                                      │ │   │
│  │  │     npm update                          (minor/patch)             │ │   │
│  │  │     npm install package@latest          (major)                   │ │   │
│  │  │                                                                   │ │   │
│  │  │  3. Revisar seguridad:                                            │ │   │
│  │  │     npm audit                                                     │ │   │
│  │  │     npm audit fix                                                 │ │   │
│  │  │                                                                   │ │   │
│  │  │  4. Verificar compatibilidad:                                     │ │   │
│  │  │     npm test                                                      │ │   │
│  │  │     npm run build                                                 │ │   │
│  │  │     npm run build-storybook                                       │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                  DESIGN TOKENS                                    │ │   │
│  │  │                                                                   │ │   │
│  │  │  Frecuencia: Automática (Lunes 9:00 UTC) + Manual                 │ │   │
│  │  │                                                                   │ │   │
│  │  │  Automático:                                                      │ │   │
│  │  │  • sync-figma-tokens.yml se ejecuta semanalmente                  │ │   │
│  │  │  • Crea PR si hay cambios en Figma                                │ │   │
│  │  │                                                                   │ │   │
│  │  │  Manual:                                                          │ │   │
│  │  │  • Ejecutar workflow desde GitHub Actions                         │ │   │
│  │  │  • npm run tokens:sync:pull (local)                               │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                  VISUAL REGRESSION                                │ │   │
│  │  │                                                                   │ │   │
│  │  │  Frecuencia: Cada PR + Manual                                     │ │   │
│  │  │                                                                   │ │   │
│  │  │  Automático:                                                      │ │   │
│  │  │  • Chromatic se ejecuta en cada PR y push a main                  │ │   │
│  │  │  • Compara snapshots con baseline                                 │ │   │
│  │  │                                                                   │ │   │
│  │  │  Manual (actualizar baseline):                                    │ │   │
│  │  │  • Ejecutar chromatic-baseline.yml                                │ │   │
│  │  │  • Aceptar cambios en Chromatic dashboard                         │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    PROCESO DE RELEASE                                   │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │                                                                   │ │   │
│  │  │   1. PRE-RELEASE CHECKLIST                                        │ │   │
│  │  │      □ Tests pasando (npm test)                                   │ │   │
│  │  │      □ Sin errores de lint (npm run lint)                         │ │   │
│  │  │      □ TypeScript sin errores (npm run type-check)                │ │   │
│  │  │      □ Build exitoso (npm run build)                              │ │   │
│  │  │      □ Storybook compila (npm run build-storybook)                │ │   │
│  │  │      □ CHANGELOG.md actualizado                                   │ │   │
│  │  │      □ Chromatic sin regresiones visuales                         │ │   │
│  │  │                                                                   │ │   │
│  │  │   2. VERSION BUMP                                                 │ │   │
│  │  │      Semántico: MAJOR.MINOR.PATCH                                 │ │   │
│  │  │                                                                   │ │   │
│  │  │      • PATCH (0.9.0 → 0.9.1): Bug fixes, mejoras menores          │ │   │
│  │  │      • MINOR (0.9.0 → 0.10.0): Nuevas features retrocompatibles   │ │   │
│  │  │      • MAJOR (0.9.0 → 1.0.0): Breaking changes                    │ │   │
│  │  │                                                                   │ │   │
│  │  │   3. PUBLICACIÓN                                                  │ │   │
│  │  │      Opción A: GitHub Release (automático)                        │ │   │
│  │  │      Opción B: Manual workflow (publish-npm.yml)                  │ │   │
│  │  │      Opción C: Local (npm run publish:*)                          │ │   │
│  │  │                                                                   │ │   │
│  │  │   4. POST-RELEASE                                                 │ │   │
│  │  │      □ Verificar publicación en npmjs.com                         │ │   │
│  │  │      □ Verificar Storybook actualizado                            │ │   │
│  │  │      □ Notificar a consumidores (si breaking changes)             │ │   │
│  │  │                                                                   │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    MONITOREO Y MÉTRICAS                                 │   │
│  │                                                                         │   │
│  │  ┌───────────────────────────────────────────────────────────────────┐ │   │
│  │  │  Métricas a seguir:                                               │ │   │
│  │  │                                                                   │ │   │
│  │  │  📊 Calidad de Código                                             │ │   │
│  │  │     • Test pass rate: 100% (1,182 tests)                          │ │   │
│  │  │     • Test coverage: Monitorear tendencias                        │ │   │
│  │  │     • Lint errors: 0                                              │ │   │
│  │  │     • TypeScript errors: 0                                        │ │   │
│  │  │                                                                   │ │   │
│  │  │  📦 Tamaño del Bundle                                             │ │   │
│  │  │     • Package size: ~384 KB (gzipped)                             │ │   │
│  │  │     • Monitorear crecimiento                                      │ │   │
│  │  │                                                                   │ │   │
│  │  │  ⏱️  CI/CD Performance                                            │ │   │
│  │  │     • CI pipeline: ~4-6 minutos                                   │ │   │
│  │  │     • Deploy Storybook: ~2 minutos                                │ │   │
│  │  │     • Publish npm: ~3-4 minutos                                   │ │   │
│  │  │                                                                   │ │   │
│  │  │  📈 Adopción                                                      │ │   │
│  │  │     • npm weekly downloads                                        │ │   │
│  │  │     • GitHub stars                                                │ │   │
│  │  │     • Issues abiertos/cerrados                                    │ │   │
│  │  └───────────────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    GESTIÓN DE ISSUES Y PRs                              │   │
│  │                                                                         │   │
│  │  Proceso recomendado:                                                   │   │
│  │                                                                         │   │
│  │  1. TRIAGE                                                              │   │
│  │     • Revisar nuevos issues                                             │   │
│  │     • Clasificar: bug, feature, enhancement, question                   │   │
│  │     • Priorizar: critical, high, medium, low                            │   │
│  │                                                                         │   │
│  │  2. DEVELOPMENT                                                         │   │
│  │     • Crear branch desde main                                           │   │
│  │     • Desarrollar con tests                                             │   │
│  │     • Actualizar stories si aplica                                      │   │
│  │                                                                         │   │
│  │  3. REVIEW                                                              │   │
│  │     • Crear PR con descripción clara                                    │   │
│  │     • CI debe pasar                                                     │   │
│  │     • Chromatic sin regresiones (o aprobadas)                           │   │
│  │     • Code review aprobado                                              │   │
│  │                                                                         │   │
│  │  4. MERGE                                                               │   │
│  │     • Squash and merge                                                  │   │
│  │     • Actualizar CHANGELOG.md                                           │   │
│  │     • Cerrar issues relacionados                                        │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 12. Secrets y Configuración

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        SECRETS Y CONFIGURACIÓN                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    SECRETS REQUERIDOS                                   │   │
│  │                    (GitHub Settings → Secrets → Actions)                │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  NPM_TOKEN                                                      │   │   │
│  │  │  ├── Propósito: Autenticación con npm registry                  │   │   │
│  │  │  ├── Uso: publish-npm.yml                                       │   │   │
│  │  │  └── Obtener: npmjs.com → Access Tokens → Generate              │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  CHROMATIC_PROJECT_TOKEN                                        │   │   │
│  │  │  ├── Propósito: Autenticación con Chromatic                     │   │   │
│  │  │  ├── Uso: ci.yml, chromatic-baseline.yml                        │   │   │
│  │  │  └── Obtener: chromatic.com → Manage → Configure                │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  FIGMA_PERSONAL_ACCESS_TOKEN                                    │   │   │
│  │  │  ├── Propósito: Acceso a Figma API                              │   │   │
│  │  │  ├── Uso: sync-figma-tokens.yml                                 │   │   │
│  │  │  └── Obtener: Figma → Settings → Personal Access Tokens        │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  │                                                                         │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐   │   │
│  │  │  FIGMA_FILE_KEY                                                 │   │   │
│  │  │  ├── Propósito: Identificador del archivo Figma                 │   │   │
│  │  │  ├── Uso: sync-figma-tokens.yml                                 │   │   │
│  │  │  └── Obtener: URL de Figma (después de /file/)                  │   │   │
│  │  └─────────────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │                    ARCHIVOS DE CONFIGURACIÓN                            │   │
│  │                                                                         │   │
│  │  ┌───────────────────────┬─────────────────────────────────────────┐   │   │
│  │  │  Archivo              │  Propósito                              │   │   │
│  │  ├───────────────────────┼─────────────────────────────────────────┤   │   │
│  │  │  package.json         │  Dependencias, scripts, exports         │   │   │
│  │  │  vite.config.ts       │  Build, bundling, plugins               │   │   │
│  │  │  tsconfig.json        │  TypeScript compiler options            │   │   │
│  │  │  jest.config.js       │  Unit testing configuration             │   │   │
│  │  │  eslint.config.mjs    │  Linting rules (flat config)            │   │   │
│  │  │  .prettierrc.json     │  Code formatting rules                  │   │   │
│  │  │  chromatic.config.json│  Visual testing settings                │   │   │
│  │  │  figma.config.json    │  Figma Code Connect                     │   │   │
│  │  │  .storybook/main.ts   │  Storybook configuration                │   │   │
│  │  │  .storybook/preview.tsx│ Storybook decorators/themes            │   │   │
│  │  └───────────────────────┴─────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Resumen Ejecutivo

| Aspecto | Detalle |
|---------|---------|
| **Componentes** | 54 (31 atoms + 23 molecules) |
| **Tests** | 1,182 (100% pass rate) |
| **Líneas de código** | 43,016 TypeScript/React |
| **Formatos de build** | ESM + CommonJS + Types |
| **CI/CD** | 6 GitHub Actions workflows |
| **Documentación** | Storybook + GitHub Pages |
| **Visual Testing** | Chromatic |
| **Design Tokens** | Style Dictionary (DTCG) |
| **Integración Figma** | Code Connect + Token Sync |

---

*Generado automáticamente basado en el análisis del repositorio MRS Design System*
