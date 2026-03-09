import { useState } from 'react';
import AccordionSection from './components/AccordionSection';
import DZ39 from './pages/DZ39';
import DZ40 from './pages/DZ40';
import DZ41 from './pages/DZ41';
import DZ42 from './pages/DZ42';
import './App.css';

const sections = [
  { key: 'dz42', title: 'DZ 42 — useEffect + Axios', Component: DZ42 },
  { key: 'dz41', title: 'DZ 41 — use() hook with Promise', Component: DZ41 },
  { key: 'dz40', title: 'DZ 40 — Controlled, Uncontrolled Forms & Fetch', Component: DZ40 },
  { key: 'dz39', title: 'DZ 39 — Components: Stateful, Stateless, Class', Component: DZ39 },
];

function App() {
  const [openSections, setOpenSections] = useState(['dz42']);

  const toggle = (key) =>
    setOpenSections((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );

  return (
    <div className="app">
      <h1>React Homeworks</h1>
      {sections.map((section) => (
        <AccordionSection
          key={section.key}
          title={section.title}
          isOpen={openSections.includes(section.key)}
          onToggle={() => toggle(section.key)}
        >
          <section.Component />
        </AccordionSection>
      ))}
    </div>
  );
}

export default App;
