import { useState } from 'react';
import { REGEX } from '../../../constants';
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const TOPICS = [
  { value: 'general', label: 'General Question' },
  { value: 'support', label: 'Technical Support' },
  { value: 'billing', label: 'Billing' },
  { value: 'other', label: 'Other' },
];

const INITIAL = { name: '', email: '', topic: '', message: '' };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Required';

  const email = values.email.trim();
  if (!email) errors.email = 'Required';
  else if (!REGEX.email.test(email)) errors.email = 'Invalid email';

  if (!values.topic) errors.topic = 'Required';
  if (!values.message.trim()) errors.message = 'Required';

  return errors;
}

function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setValues(INITIAL);
    setErrors({});
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" fontWeight="bold">Contact Us</Typography>

      {submitted && (
        <Alert severity="success" onClose={() => setSubmitted(false)}>
          Message sent successfully!
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Box>

      <FormControl fullWidth error={!!errors.topic}>
        <InputLabel>Topic</InputLabel>
        <Select name="topic" value={values.topic} onChange={handleChange} label="Topic">
          {TOPICS.map((t) => (
            <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>
          ))}
        </Select>
        {errors.topic && <FormHelperText>{errors.topic}</FormHelperText>}
      </FormControl>

      <TextField
        fullWidth
        label="Message"
        name="message"
        multiline
        rows={4}
        value={values.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
      />

      <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{ alignSelf: 'flex-end' }}>
        Send Message
      </Button>
    </Box>
  );
}

export default ContactForm;
