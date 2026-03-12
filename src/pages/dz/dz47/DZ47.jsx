import { useState } from 'react';
import FormFormik from './FormFormik';
import FormRHF from './FormRHF';

function DZ47() {
  const [formikResult, setFormikResult] = useState(null);
  const [rhfResult, setRhfResult] = useState(null);

  return (
    <div className="dz47">
      <p className="dz-description">
        Two registration forms with full validation — same fields, different libraries.
        <strong> Formik + Yup</strong> uses a schema-based validation approach with
        <code className="inline-code">useFormik</code> and a <code className="inline-code">Yup.object</code> schema.
        <strong> React Hook Form</strong> uses built-in HTML constraint rules via
        <code className="inline-code">register()</code> — minimal re-renders, no external schema library needed.
        Both forms validate on blur/submit, show inline errors, and reset on successful submission.
        Fields: name, email, password, phone, date of birth.
      </p>

      <div className="dz47__grid">
        <div className="dz47__column">
          <h3 className="dz47__title">
            Formik <span className="dz47__badge">Yup schema</span>
          </h3>
          <FormFormik onSubmit={(data) => setFormikResult(data)} />
          {formikResult && (
            <pre className="dz47__result">
              {JSON.stringify(formikResult, null, 2)}
            </pre>
          )}
        </div>

        <div className="dz47__column">
          <h3 className="dz47__title">
            React Hook Form <span className="dz47__badge">built-in rules</span>
          </h3>
          <FormRHF onSubmit={(data) => setRhfResult(data)} />
          {rhfResult && (
            <pre className="dz47__result">
              {JSON.stringify(rhfResult, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

export default DZ47;
