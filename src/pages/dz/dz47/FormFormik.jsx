import { useFormik } from 'formik';
import * as Yup from 'yup';
import { REGEX, LIMITS, getMaxBirthdate, validatePhone } from '../../../constants';

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(LIMITS.name.min, `Min ${LIMITS.name.min} characters`)
    .max(LIMITS.name.max, `Max ${LIMITS.name.max} characters`)
    .matches(REGEX.name, 'Only Latin letters, spaces, hyphens and apostrophes')
    .matches(REGEX.noDoubleSpaces, 'No consecutive spaces')
    .required('Required'),
  email: Yup.string()
    .trim()
    .min(LIMITS.email.min, `Min ${LIMITS.email.min} characters`)
    .max(LIMITS.email.max, `Max ${LIMITS.email.max} characters`)
    .matches(REGEX.email, 'Invalid email')
    .required('Required'),
  password: Yup.string()
    .matches(REGEX.noSpaces, 'No spaces allowed')
    .min(LIMITS.password.min, `Min ${LIMITS.password.min} characters`)
    .max(LIMITS.password.max, `Max ${LIMITS.password.max} characters`)
    .required('Required'),
  phone: Yup.string()
    .test('phone', '', function (v) {
      const result = validatePhone(v || '');
      return result === true || this.createError({ message: result });
    })
    .required('Required'),
  birthdate: Yup.date()
    .min(LIMITS.birthdate.min, 'Year must be 1900 or later')
    .max(getMaxBirthdate(), 'Must be at least 18 years old')
    .required('Required'),
});

function FormFormik({ onSubmit }) {
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', phone: '', birthdate: '' },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form className="dz47-form" onSubmit={formik.handleSubmit} noValidate>
      <div className="dz47-form__field">
        <label htmlFor="formik-name" className="dz47-form__label">Full Name</label>
        <input
          id="formik-name"
          name="name"
          type="text"
          className={`dz47-form__input${formik.touched.name && formik.errors.name ? ' dz47-form__input--error' : ''}`}
          placeholder="John Doe"
          aria-describedby="formik-name-error"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <span id="formik-name-error" className="dz47-form__error" role="alert">{formik.errors.name}</span>
        )}
      </div>

      <div className="dz47-form__field">
        <label htmlFor="formik-email" className="dz47-form__label">Email</label>
        <input
          id="formik-email"
          name="email"
          type="email"
          className={`dz47-form__input${formik.touched.email && formik.errors.email ? ' dz47-form__input--error' : ''}`}
          placeholder="john@example.com"
          aria-describedby="formik-email-error"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email && (
          <span id="formik-email-error" className="dz47-form__error" role="alert">{formik.errors.email}</span>
        )}
      </div>

      <div className="dz47-form__field">
        <label htmlFor="formik-password" className="dz47-form__label">Password</label>
        <input
          id="formik-password"
          name="password"
          type="password"
          className={`dz47-form__input${formik.touched.password && formik.errors.password ? ' dz47-form__input--error' : ''}`}
          placeholder="Min 6 characters"
          aria-describedby="formik-password-error"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <span id="formik-password-error" className="dz47-form__error" role="alert">{formik.errors.password}</span>
        )}
      </div>

      <div className="dz47-form__field">
        <label htmlFor="formik-phone" className="dz47-form__label">Phone</label>
        <input
          id="formik-phone"
          name="phone"
          type="tel"
          className={`dz47-form__input${formik.touched.phone && formik.errors.phone ? ' dz47-form__input--error' : ''}`}
          placeholder="+380 99 123 4567"
          aria-describedby="formik-phone-error"
          {...formik.getFieldProps('phone')}
        />
        {formik.touched.phone && formik.errors.phone && (
          <span id="formik-phone-error" className="dz47-form__error" role="alert">{formik.errors.phone}</span>
        )}
      </div>

      <div className="dz47-form__field">
        <label htmlFor="formik-birthdate" className="dz47-form__label">Date of Birth</label>
        <input
          id="formik-birthdate"
          name="birthdate"
          type="date"
          className={`dz47-form__input${formik.touched.birthdate && formik.errors.birthdate ? ' dz47-form__input--error' : ''}`}
          aria-describedby="formik-birthdate-error"
          {...formik.getFieldProps('birthdate')}
        />
        {formik.touched.birthdate && formik.errors.birthdate && (
          <span id="formik-birthdate-error" className="dz47-form__error" role="alert">{formik.errors.birthdate}</span>
        )}
      </div>

      <button type="submit" className="dz47-form__submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  );
}

export default FormFormik;
