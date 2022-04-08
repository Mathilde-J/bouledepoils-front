import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { changedFields, checkEmptyFields, emptyErrors } from 'src/actions/subscribe';
import { log } from 'src/utils';
import './subscribeForm.scss';

export default function SubscribeForm() {
  const dispatch = useDispatch();

  const mail = useSelector((state) => (state.Subscription.email));
  const username = useSelector((state) => (state.Subscription.username));
  const password = useSelector((state) => (state.Subscription.password));

  const errors = useSelector((state) => (state.Subscription.errors));
  const checkPassword = useSelector((state) => (state.Subscription.passwordCheck));

  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch(changedFields(event.target.name, event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    log(mail);
    log(username);
    log(password);
    dispatch(emptyErrors());
    if (mail === '') {
      dispatch(checkEmptyFields('mail'));
    }
    if (username === '') {
      dispatch(checkEmptyFields('username'));
    }
    if (password === '') {
      dispatch(checkEmptyFields('password'));
    }
    if (errors.length === 0) {
      log('on est là si tous les champs sont remplis');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
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
          S'inscrire
        </Typography>
        {errors.length > 0
          && (
            <Alert
              variant="outlined"
              severity="error"
              className="error__messages--subscription"
            >
              <ul>
                {errors.map((error) => (<li key={error.id} className="error__list--item">{error.message}</li>))}
              </ul>
            </Alert>
          )}

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Nom d'utilisateur"
                autoFocus
                value={username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Adrese e-mail"
                name="email"
                // type="email"
                autoComplete="email"
                value={mail}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={handleChange}
              />
            </Grid>

          </Grid>
          {checkPassword
            && (
              <Alert
                variant="outlined"
                severity="error"
                className="error__messages--invalid-password"
              >
                <ul>
                  Le mot de passe doit contenir au moins:
                  <li>8 charactères</li>
                  <li>1 chiffre</li>
                  <li>1 charactère spéciales (@,*,- etc ...)</li>
                  <li>1 majuscule</li>
                </ul>
              </Alert>
            )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Inscription
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Déjà inscrit ? Se connecter
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
