import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  role: 'student',
  agreed: false,
};

function ControlledForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    setForm(initialState);
  };

  return (
    <div className="form-card">
      <h2>Controlled Form</h2>
      <p className="form-description">
        Values are controlled via <code>useState</code>. React is the single source of truth.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="cf-role">Role</label>
          <select id="cf-role" name="role" value={form.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        <div className="field field-checkbox">
          <input
            id="cf-agreed"
            name="agreed"
            type="checkbox"
            checked={form.agreed}
            onChange={handleChange}
          />
          <label htmlFor="cf-agreed">I agree to the terms</label>
        </div>

        <button type="submit" disabled={!form.agreed}>
          Submit
        </button>
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

export default ControlledForm;
