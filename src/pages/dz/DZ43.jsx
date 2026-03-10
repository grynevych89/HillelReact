const code = (text) => <code className="inline-code">{text}</code>;

function DZ43() {
  return (
    <div className="section">
      <p className="dz-description">
        Implemented client-side routing using <strong>React Router v7</strong> with the modern{' '}
        {code('createBrowserRouter')} + {code('RouterProvider')} approach.
      </p>

      <ul className="data-list dz-list">
        <li><span>Pages:</span> Home, About, Contact — each at its own route</li>
        <li><span>NavLink:</span> active link is highlighted automatically via className callback</li>
        <li><span>Dynamic nav:</span> links generated from a {code('navLinks')} array of objects</li>
        <li><span>Layout:</span> shared layout with {code('Outlet')} for nested routes</li>
        <li><span>Navbar / Footer:</span> extracted into separate layout components</li>
        <li><span>useNavigate:</span> {code('navigate(-1)')} for browser-history back navigation</li>
      </ul>

      <h3 className="dz-structure-title">Project Structure</h3>
      <pre className="dz-structure">{`src/
├── layouts/
│   ├── Layout.jsx       — shared page wrapper
│   ├── Navbar.jsx       — navigation with NavLinks
│   └── Footer.jsx       — copyright + site link
├── pages/
│   ├── Home.jsx         — /
│   ├── About.jsx        — /about
│   ├── Contact.jsx      — /contact
│   ├── Homeworks.jsx    — /homeworks
│   └── dz/
│       ├── DZ39.jsx
│       ├── DZ40.jsx
│       ├── DZ41.jsx
│       ├── DZ42.jsx
│       └── DZ43.jsx
├── components/          — reusable UI components
├── router.jsx           — createBrowserRouter config
├── App.jsx              — RouterProvider entry point
└── App.css`}</pre>
    </div>
  );
}

export default DZ43;
