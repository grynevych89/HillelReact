# React Homework

## Project Description
Educational project demonstrating React component creation with different approaches: functional components with hooks, stateless components, and class-based components.

## Technologies
- React 18
- Vite
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
npm install
```

3. Run the project:
```bash
npm run dev
```

4. Open in browser:
```
http://localhost:5173
```

## Features
- Custom Button and Input components with props and event handlers
- Stateful component with useState and useEffect hooks
- Stateless component demonstrating props-only approach
- Class-based component with lifecycle methods
- Todo list with localStorage persistence
- Real-time counter and timer
- Interactive UI with smooth animations

## Components

### Button Component
- Accepts `text`, `type`, `onClick`, and `className` props
- Reusable across the application
- Hover and active states

### Input Component
- Accepts `placeholder`, `type`, `onChange`, and `value` props
- Controlled component pattern
- Focus states with visual feedback

### StatefulComponent
- Uses `useState` for state management
- Uses `useEffect` for lifecycle operations
- Features:
  - Interactive counter
  - Todo list with add/remove/toggle functionality
  - localStorage integration
  - Timer tracking page activity

### StatelessComponent
- Pure presentational component
- Only receives and displays props
- No internal state management
- Demonstrates prop destructuring

### ClassComponent
- Traditional React class-based component
- Lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount
- Real-time lifecycle logs
- State management with this.setState

## Project Structure
```
src/
├── components/
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── StatefulComponent.jsx
│   ├── StatelessComponent.jsx
│   └── ClassComponent.jsx
├── App.jsx
├── App.css
└── main.jsx
```