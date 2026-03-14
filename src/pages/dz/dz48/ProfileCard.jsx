import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

function ProfileCard({ name, role, email, avatarColor }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2, minWidth: 0, width: '100%' }}>
          <Avatar sx={{ bgcolor: avatarColor, width: 64, height: 64, mb: 1, fontSize: '1.5rem' }}>
            {name[0]}
          </Avatar>
          <Typography variant="h6" fontWeight="bold" noWrap title={name} sx={{ width: '100%', textAlign: 'center' }}>{name}</Typography>
          <Chip label={role} size="small" color="primary" sx={{ mt: 0.5, maxWidth: '100%' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
          <EmailIcon fontSize="small" color="action" sx={{ flexShrink: 0 }} />
          <Typography variant="body2" color="text.secondary" noWrap title={email}>{email}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" fullWidth>View Profile</Button>
      </CardActions>
    </Card>
  );
}

export default ProfileCard;
