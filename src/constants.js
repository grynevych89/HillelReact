export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const MOCK_USER = {
  id: 1,
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
  phone: '1-770-736-0988 x56442',
  website: 'hildegard.org',
};


export const REGEX = {
  name: /^[A-Za-z][A-Za-z' -]*[A-Za-z]$|^[A-Za-z]{2,}$/,
  email: /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  phoneChars: /^[+\d\s\-()]+$/,
  noSpaces: /^\S+$/,
  noDoubleSpaces: /^(?!.*\s{2})/,
};

export const LIMITS = {
  name: { min: 2, max: 50 },
  email: { min: 5, max: 100 },
  password: { min: 6, max: 50 },
  birthdate: { min: new Date('1900-01-01') },
};

export function validatePhone(v) {
  if (!REGEX.phoneChars.test(v)) return 'Invalid characters in phone number';
  const digits = v.replace(/\D/g, '');
  if (digits.length < 10) return 'Too short — min 10 digits';
  if (digits.length > 15) return 'Too long — max 15 digits';
  return true;
}

export function getMaxBirthdate() {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return date;
}
