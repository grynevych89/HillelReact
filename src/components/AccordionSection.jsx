function AccordionSection({ title, isOpen, onToggle, children }) {
  return (
    <div className={`accordion-section${isOpen ? ' open' : ''}`}>
      <button className="accordion-header" onClick={onToggle}>
        <span>{title}</span>
        <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
      </button>
      <div className="accordion-wrapper">
        <div className="accordion-inner">
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AccordionSection;
