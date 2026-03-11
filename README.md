# React Homework

## Project Description

Educational project demonstrating React concepts across multiple homework assignments: functional components with hooks, class-based components, controlled and uncontrolled forms, async data fetching, the `use()` hook with Suspense, Axios integration, client-side routing with React Router, global state management with React Context API, and Redux Toolkit integration.

## Technologies

- React 19
- React Router 7
- Redux Toolkit + React Redux
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

### DZ 45 — Redux Toolkit

- Refactored from React Context (DZ44) to Redux Toolkit
- `configureStore` with two slices: `themeSlice` (toggle light/dark) and `usersSlice` (team list)
- `createSlice` for automatic generation of reducers and actions
- Selectors (`selectTheme`, `selectUsers`) for optimized state access
- Components use `useSelector` to read state and `useDispatch` to trigger actions
- App wrapped in Redux `Provider` alongside existing `AppProvider`
- 3-level demo: `DZ45` → `UserListRedux` → `UserCardRedux` — same architecture as DZ44 but via Redux

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
│       └── usersSlice.js     — users list + selectUsers selector
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
│       └── dz45/
│           ├── DZ45.jsx              — Level 1 (Redux)
│           ├── UserListRedux.jsx     — Level 2 (Redux)
│           └── UserCardRedux.jsx     — Level 3 (Redux)
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
├── router.jsx                — createBrowserRouter config
├── App.jsx                   — Provider + AppProvider + RouterProvider
└── App.css
```
