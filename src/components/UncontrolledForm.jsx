import { useRef, useState } from 'react';

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
    e.target.reset();
  };

  return (
    <div className="form-card">
      <h2>Uncontrolled Form</h2>
      <p className="form-description">
        Values are accessed via <code>useRef</code>. The DOM is the source of truth, not React state.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="uf-name">Name</label>
          <input
            id="uf-name"
            ref={nameRef}
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="uf-email">Email</label>
          <input
            id="uf-email"
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="result">
          <h3>Submitted data:</h3>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default UncontrolledForm;
