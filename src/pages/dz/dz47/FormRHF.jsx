import { useForm } from 'react-hook-form';
import { REGEX, LIMITS, getMaxBirthdate, validatePhone } from '../../../constants';

const rules = {
  name: {
    required: 'Required',
    validate: {
      minLen: (v) => v.trim().length >= LIMITS.name.min || `Min ${LIMITS.name.min} characters`,
      maxLen: (v) => v.trim().length <= LIMITS.name.max || `Max ${LIMITS.name.max} characters`,
      chars: (v) => REGEX.name.test(v.trim()) || 'Only Latin letters, spaces, hyphens and apostrophes',
      noDoubleSpaces: (v) => !/\s{2}/.test(v) || 'No consecutive spaces',
    },
  },
  email: {
    required: 'Required',
    validate: {
      minLen: (v) => v.trim().length >= LIMITS.email.min || `Min ${LIMITS.email.min} characters`,
      maxLen: (v) => v.trim().length <= LIMITS.email.max || `Max ${LIMITS.email.max} characters`,
      format: (v) => REGEX.email.test(v) || 'Invalid email',
    },
  },
  password: {
    required: 'Required',
    validate: {
      noSpaces: (v) => !/\s/.test(v) || 'No spaces allowed',
      minLen: (v) => v.length >= LIMITS.password.min || `Min ${LIMITS.password.min} characters`,
      maxLen: (v) => v.length <= LIMITS.password.max || `Max ${LIMITS.password.max} characters`,
    },
  },
  phone: {
    required: 'Required',
    validate: (v) => validatePhone(v),
  },
  birthdate: {
    required: 'Required',
    validate: {
      minDate: (v) => new Date(v) >= LIMITS.birthdate.min || 'Year must be 1900 or later',
      maxDate: (v) => new Date(v) <= getMaxBirthdate() || 'Must be at least 18 years old',
    },
  },
};

function FormRHF({ onSubmit }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const submit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className="dz47-form" onSubmit={handleSubmit(submit)} noValidate>
      <div className="dz47-form__field">
        <label htmlFor="rhf-name" className="dz47-form__label">Full Name</label>
        <input
          id="rhf-name"
          type="text"
          className={`dz47-form__input${errors.name ? ' dz47-form__input--error' : ''}`}
          placeholder="John Doe"
          aria-describedby="rhf-name-error"
          {...register('name', rules.name)}
        />
        {errors.name && (
          <span id="rhf-name-error" className="dz47-form__error" role="alert">{errors.name.message}</span>
        )}
      </div>

      <div className="dz47-form__field">
        <label htmlFor="rhf-email" className="dz47-form__label">Email</label>
        <input
          id="rhf-email"
          type="email"
          className={`dz47-form__input${errors.email ? ' dz47-form__input--error' : ''}`}
          placeholder="john@example.com"
          aria-describedby="rhf-email-error"
          {...register('email', rules.email)}
        />
        {errors.email && (
          <span id="rhf-email-error" className="dz47-form__error" role="alert">{errors.email.message}</span>
        )}
      </div>

      <div className="dz47-form__field">
        <label htmlFor="rhf-password" className="dz47-form__label">Password</label>
        <input
          id="rhf-password"
          type="password"
          className={`dz47-form__input${errors.password ? ' dz47-form__input--error' : ''}`}
          placeholder="Min 6 characters"
          aria-describedby="rhf-password-error"
          {...register('password', rules.password)}
        />
        {errors.password && (
          <span id="rhf-password-error" className="dz47-form__error" role="alert">{errors.password.message}</span>
        )}
      </div>

      <div className="dz47-form__field">
        <label htmlFor="rhf-phone" className="dz47-form__label">Phone</label>
        <input
          id="rhf-phone"
          type="tel"
          className={`dz47-form__input${errors.phone ? ' dz47-form__input--error' : ''}`}
          placeholder="+380 99 123 4567"
          aria-describedby="rhf-phone-error"
          {...register('phone', rules.phone)}
        />
        {errors.phone && (
          <span id="rhf-phone-error" className="dz47-form__error" role="alert">{errors.phone.message}</span>
        )}
      </div>

      <div className="dz47-form__field">
        <label htmlFor="rhf-birthdate" className="dz47-form__label">Date of Birth</label>
        <input
          id="rhf-birthdate"
          type="date"
          className={`dz47-form__input${errors.birthdate ? ' dz47-form__input--error' : ''}`}
          aria-describedby="rhf-birthdate-error"
          {...register('birthdate', rules.birthdate)}
        />
        {errors.birthdate && (
          <span id="rhf-birthdate-error" className="dz47-form__error" role="alert">{errors.birthdate.message}</span>
        )}
      </div>

      <button type="submit" className="dz47-form__submit">
        Submit
      </button>
    </form>
  );
}

export default FormRHF;
