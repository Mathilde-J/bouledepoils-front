import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import {
  changedFields,
} from 'src/actions/register';
import { submitLogin } from 'src/actions/login';
import './loginForm.scss';

export default function LoginForm() {
  const dispatch = useDispatch();
  const mail = useSelector((state) => (state.Login.email));
  const password = useSelector((state) => (state.Login.password));
  const token = useSelector((state) => (state.Login.tokenUserConnected));

  const handleChange = (event) => {
    dispatch(changedFields(event.target.name, event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitLogin());
  };

  return (
    <Container sx={{ pt: '90px' }} component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Se connecter
        </Typography>
        {token === false && (
          <Alert
            severity="error"
            className="login--error"
          >
            Connexion échouée
          </Alert>
        )}
        {(token === null || token === false) && (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse e-mail"
              name="email-login"
              autoComplete="email"
              autoFocus
              value={mail}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password-login"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
            >
              Connection
            </Button>
            <Grid container>
              <Link href="/signin" variant="body2">
                Pas encore inscrit ? Créer un compte !
              </Link>
            </Grid>
          </Box>
        )}
        {token && (
          <Alert
            severity="success"
            className="login--succes"
          >
            Connexion réussie
          </Alert>
        )}
      </Box>
    </Container>
  );
}
