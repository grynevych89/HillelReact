import { useSelector } from 'react-redux';
import { Box, Grid, Paper } from '@mui/material';
import { selectUsers } from '../../../redux/slices/usersSlice';
import ProfileCard from './ProfileCard';
import ContactForm from './ContactForm';

const AVATAR_COLORS = ['#1976d2', '#388e3c', '#7b1fa2', '#e64a19'];

function DZ48() {
  const users = useSelector(selectUsers);

  return (
    <Box sx={{ py: 2 }}>
      <p className="dz-description">
        Material UI integration demo. Showcases{' '}
        <code className="inline-code">Card</code>,{' '}
        <code className="inline-code">Avatar</code>,{' '}
        <code className="inline-code">Chip</code>,{' '}
        <code className="inline-code">TextField</code>,{' '}
        <code className="inline-code">Select</code>,{' '}
        <code className="inline-code">Button</code>, and{' '}
        <code className="inline-code">Alert</code> from <code className="inline-code">@mui/material</code>.
        Responsive layout via MUI <code className="inline-code">Grid</code> — 1 column on mobile, 3 on desktop.
        User data from Redux store (<code className="inline-code">usersSlice</code>).
      </p>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {users.map((user, i) => (
          <Grid key={user.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProfileCard
              name={user.name}
              role={user.role}
              email={user.email}
              avatarColor={AVATAR_COLORS[i % AVATAR_COLORS.length]}
            />
          </Grid>
        ))}
      </Grid>

      <Paper elevation={2} sx={{ p: 3 }}>
        <ContactForm />
      </Paper>
    </Box>
  );
}

export default DZ48;
