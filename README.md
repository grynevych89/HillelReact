# React Homework

## Project Description

Educational project demonstrating React concepts across multiple homework assignments: functional components with hooks, class-based components, controlled and uncontrolled forms, async data fetching, the `use()` hook with Suspense, Axios integration, client-side routing with React Router, global state management with React Context API, Redux Toolkit with static data, Redux Toolkit with async thunks, form validation with Formik+Yup and React Hook Form, UI component libraries with Material UI, and unit testing async components with Vitest + React Testing Library.

## Technologies

- React 19
- React Router 7
- Redux Toolkit + React Redux
- Formik + Yup
- React Hook Form
- Material UI (MUI v7)
- Vitest + React Testing Library
- Vite
- Axios
- JavaScript/JSX
- CSS3

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/grynevych89/HillelReact.git
cd HillelReact
```

2. Install dependencies:

```bash
npm install --include=dev
```

3. Run the project:

```bash
npm run dev
```

4. Open in browser:

```
http://localhost:5173
```

## Homeworks

### DZ 39 — Components: Stateful, Stateless, Class

- Stateful component with `useState`, `useEffect`, counter, todo list, localStorage
- Stateless component demonstrating props-only approach
- Class-based component with lifecycle methods and real-time logs

### DZ 40 — Controlled, Uncontrolled Forms & Fetch

- Controlled form with `useState` (text, email, select, checkbox; submit disabled until terms accepted)
- Uncontrolled form with `useRef` (values read on submit, no state)
- `PostsFeed` — fetches posts via `useEffect`, handles loading / error / success states

### DZ 41 — use() hook with Promise

- `MessageComponent` uses React 19's `use()` hook to read data from a Promise passed as a prop
- Wrapped in `<Suspense>` with animated countdown fallback and `ErrorBoundary`
- Refresh button creates a new Promise and re-suspends the component

### DZ 42 — useEffect + Axios

- `DataFetcher` fetches user data from `jsonplaceholder.typicode.com` using `axios` + `async/await`
- Handles loading / error / success states
- Refetches automatically when `id` prop changes (arrow navigation ← →)

### DZ 43 — React Router: BrowserRouter, NavLink, createBrowserRouter

- Client-side routing with `createBrowserRouter` + `RouterProvider` (modern object-based approach)
- Routes: `/` → Home, `/about` → About, `/contact` → Contact, `/homeworks` → Homeworks
- `NavLink` with active class highlighting via `className` callback
- Dynamic navigation generated from a `navLinks` array of objects
- Shared layout with `Outlet` for nested routes
- `Navbar` and `Footer` extracted into separate layout components
- `useNavigate(-1)` for browser-history back navigation

### DZ 44 — React Context API

- Global state management with `createContext` + `useContext` — no prop drilling
- `AppContext.js` — context with default values; `AppProvider.jsx` — provider component
- App wrapped in `AppProvider` — context available to the entire component tree
- 3-level demo: `DZ44` (theme + toggle) → `UserListContext` (users list) → `UserCardContext` (theme styling)
- Each level reads data directly from context without receiving props from its parent
- `React.memo` on `UserListContext` and `UserCardContext` to prevent unnecessary re-renders

### DZ 45 — Redux Toolkit: Static Data

- Refactored from React Context (DZ44) to Redux Toolkit
- `configureStore` with two slices: `themeSlice` (toggle light/dark) and `usersSlice` (static team list)
- `createSlice` for automatic generation of reducers and actions
- Selectors (`selectTheme`, `selectUsers`) for optimized state access
- Components use `useSelector` to read state and `useDispatch` to trigger actions
- App wrapped in Redux `Provider` alongside existing `AppProvider`
- 3-level demo: `DZ45` → `UserListRedux` → `UserCardRedux` — same architecture as DZ44 but via Redux

### DZ 46 — Redux Toolkit: Async Thunk

- Refactored from static Redux data (DZ45) to async data fetching via `createAsyncThunk`
- `usersAsyncSlice` — separate slice with `list`, `status` (`idle/loading/succeeded/failed`), `error`
- `fetchUsers` thunk fetches real users from `jsonplaceholder.typicode.com/users`
- `extraReducers` handles `pending`, `fulfilled`, `rejected` lifecycle actions
- Fetch triggered once via `useEffect` only when `status === 'idle'` — prevents duplicate requests
- `UserListAsync` renders loading / error (with Retry button) / success states
- All async state lives in the slice — components stay clean and stateless

### DZ 47 — Form Validation: Formik + Yup vs React Hook Form

- Two identical registration forms side by side — same fields, different libraries
- **Formik + Yup**: schema-based validation with `useFormik` and `Yup.object` — declarative, colocated rules
- **React Hook Form**: built-in constraint rules via `register()` — minimal re-renders, no external schema library
- Fields: Full Name, Email, Password, Phone, Date of Birth — all fully validated
- Shared validation rules extracted to `src/constants.js`: `REGEX`, `LIMITS`, `validatePhone()`, `getMaxBirthdate()`
- Both forms validate on blur/submit, show inline error messages, and reset on successful submission

### DZ 48 — Material UI Integration

- Integrated `@mui/material` v7 into the project — responsive UI with pre-built components
- **ProfileCard** — `Card` + `Avatar` + `Chip` + `Button` + MUI icons; 4 cards from Redux `usersSlice` in a responsive `Grid` (1 column on mobile → 2 on tablet → 4 on desktop)
- Text overflow handled via MUI `noWrap` + `title` tooltip for long names and emails
- **ContactForm** — `TextField`, `Select` with `MenuItem`, `Button`, `Alert` for success feedback; custom validation (name: required; email: required + `REGEX.email` from `constants.js`)
- `Paper` as a styled container, `Box` for layout, `sx` prop for scoped styles — no custom CSS needed

### DZ 49 — Vitest + React Testing Library

- **Unit testing async React components** with Vitest + React Testing Library
- `UserProfile` fetches a random user (id 1–10) from `jsonplaceholder.typicode.com` and handles loading / success / error states
- Tests use **dependency injection** via `fetchFn` prop instead of `vi.mock(axios)` — cleaner, framework-agnostic, no module-level side effects
- `MOCK_USER` (shared constant) and `DZ49_SCENARIOS` (shared scenarios) defined once and reused in both unit tests and the visual TestRunner
- Tests organized into `src/tests/unit/` (Vitest) and `src/tests/components/` (visual React TestRunner)
- Visual `TestRunner` renders each scenario hidden in the DOM and checks the output — results shown live on the page
- Unit tests verify component logic in isolation
- Run tests: `npm test` | UI mode: `npm run test:ui` | Coverage: `npm run coverage`

## Project Structure

```
src/
├── context/
│   ├── AppContext.js          — createContext + default values
│   └── AppProvider.jsx       — context provider component
├── redux/
│   ├── store.js              — configureStore
│   └── slices/
│       ├── themeSlice.js     — theme toggle action + selectTheme selector
│       ├── usersSlice.js     — static users list + selectUsers selector
│       └── usersAsyncSlice.js — async thunk + status/error + selectAsyncUsers
├── layouts/
│   ├── Layout.jsx            — shared page wrapper
│   ├── Navbar.jsx            — navigation with NavLinks
│   └── Footer.jsx            — copyright + site link
├── pages/
│   ├── Home.jsx              — /
│   ├── About.jsx             — /about
│   ├── Contact.jsx           — /contact
│   ├── Homeworks.jsx         — /homeworks
│   └── dz/
│       ├── DZ39.jsx
│       ├── DZ40.jsx
│       ├── DZ41.jsx
│       ├── DZ42.jsx
│       ├── DZ43.jsx
│       ├── dz44/
│       │   ├── DZ44.jsx              — Level 1 (Context)
│       │   ├── UserListContext.jsx   — Level 2 (Context)
│       │   └── UserCardContext.jsx   — Level 3 (Context)
│       ├── dz45/
│       │   ├── DZ45.jsx              — Level 1 (Redux static)
│       │   ├── UserListRedux.jsx     — Level 2 (Redux static)
│       │   └── UserCardRedux.jsx     — Level 3 (Redux static)
│       ├── dz46/
│       │   ├── DZ46.jsx              — Level 1 (Redux async)
│       │   ├── UserListAsync.jsx     — Level 2 (Redux async, handles status/error)
│       │   └── UserCardAsync.jsx     — Level 3 (Redux async)
│       ├── dz47/
│       │   ├── DZ47.jsx              — side-by-side layout + submitted data display
│       │   ├── FormFormik.jsx        — Formik + Yup schema validation
│       │   └── FormRHF.jsx           — React Hook Form built-in rules
│       ├── dz48/
│       │   ├── DZ48.jsx              — Grid layout with cards + contact form
│       │   ├── ProfileCard.jsx       — MUI Card + Avatar + Chip
│       │   └── ContactForm.jsx       — MUI TextField + Select + Alert
│       └── dz49/
│           ├── DZ49.jsx              — page layout + description
│           └── UserProfile.jsx       — fetches random user, handles loading/success/error
├── tests/
│   ├── dz49.scenarios.js     — shared test scenarios (fetchFn mocks + expectedText)
│   ├── unit/
│   │   └── UserProfile.test.jsx — Vitest unit tests (dependency injection, no vi.mock)
│   └── components/
│       └── TestRunner.jsx    — visual test runner rendered on DZ49 page
├── components/               — reusable UI components
│   ├── AccordionSection.jsx
│   ├── Button.jsx
│   ├── ClassComponent.jsx
│   ├── ControlledForm.jsx
│   ├── CountdownFallback.jsx
│   ├── DataFetcher.jsx
│   ├── ErrorBoundary.jsx
│   ├── Input.jsx
│   ├── MessageComponent.jsx
│   ├── PostsFeed.jsx
│   ├── StatefulComponent.jsx
│   ├── StatelessComponent.jsx
│   └── UncontrolledForm.jsx
├── constants.js              — shared constants: API_BASE_URL, MOCK_USER, REGEX, LIMITS, validation helpers
├── router.jsx                — createBrowserRouter config
├── App.jsx                   — Provider + AppProvider + RouterProvider
└── App.css
```
