import { useState } from 'react';
import { useNavigate } from 'react-router';
import AccordionSection from '../components/AccordionSection';
import DZ39 from './dz/DZ39';
import DZ40 from './dz/DZ40';
import DZ41 from './dz/DZ41';
import DZ42 from './dz/DZ42';
import DZ43 from './dz/DZ43';
import DZ44 from './dz/dz44/DZ44';
import DZ45 from './dz/dz45/DZ45';
import DZ46 from './dz/dz46/DZ46';
import DZ47 from './dz/dz47/DZ47';
import DZ48 from './dz/dz48/DZ48';

const sections = [
  { key: 'dz48', title: 'DZ 48 — Material UI', Component: DZ48 },
  { key: 'dz47', title: 'DZ 47 — Forms: Formik + Yup / React Hook Form', Component: DZ47 },
  { key: 'dz46', title: 'DZ 46 — Redux Toolkit: Async Thunk', Component: DZ46 },
  { key: 'dz45', title: 'DZ 45 — Redux Toolkit: Static Data', Component: DZ45 },
  { key: 'dz44', title: 'DZ 44 — React Context API', Component: DZ44 },
  { key: 'dz43', title: 'DZ 43 — React Router: BrowserRouter, NavLink, createBrowserRouter', Component: DZ43 },
  { key: 'dz42', title: 'DZ 42 — useEffect + Axios', Component: DZ42 },
  { key: 'dz41', title: 'DZ 41 — use() hook with Promise', Component: DZ41 },
  { key: 'dz40', title: 'DZ 40 — Controlled, Uncontrolled Forms & Fetch', Component: DZ40 },
  { key: 'dz39', title: 'DZ 39 — Components: Stateful, Stateless, Class', Component: DZ39 },
];

function Homeworks() {
  const [openSections, setOpenSections] = useState(['dz48']);
  const navigate = useNavigate();

  const toggle = (key) =>
    setOpenSections((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );

  return (
    <>
      <button className="refresh-btn back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
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
    </>
  );
}

export default Homeworks;
