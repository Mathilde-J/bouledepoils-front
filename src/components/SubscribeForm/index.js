import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useDispatch, useSelector } from 'react-redux';
import {
  changedFields,
  checkEmptyFields,
  emptyErrors,
  checkValidPassword,
  submitRegistration,
  checkValidMail,
} from 'src/actions/register';
import { isPasswordOk, isEmailOk } from 'src/utils';
import './subscribeForm.scss';

export default function SubscribeForm() {
  const dispatch = useDispatch();

  const mail = useSelector((state) => (state.Registration.email));
  const username = useSelector((state) => (state.Registration.username));
  const password = useSelector((state) => (state.Registration.password));

  const checkPassword = useSelector((state) => (state.Registration.passwordCheck));
  const checkMail = useSelector((state) => (state.Registration.emailCheck));
  const errors = useSelector((state) => (state.Registration.errors));
  const registered = useSelector((state) => (state.Registration.registrationSucces));

  const handleChange = (event) => {
    dispatch(changedFields(event.target.name, event.target.value));
  };
  const checkFields = () => {
    if (mail !== '' && username !== '' && password !== '') {
      return true;
    }
    if (mail === '') {
      dispatch(checkEmptyFields('mail'));
    }
    if (username === '') {
      dispatch(checkEmptyFields('username'));
    }
    if (password === '') {
      dispatch(checkEmptyFields('password'));
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(emptyErrors());
    checkFields();
    if (!isPasswordOk(password)) {
      dispatch(checkValidPassword(false));
    }
    else {
      dispatch(checkValidPassword(true));
    }

    if (!isEmailOk(mail)) {
      dispatch(checkValidMail(false));
    }
    else {
      dispatch(checkValidMail(true));
    }
    if (checkFields && isPasswordOk(password) && isEmailOk(mail)) {
      // dispatch action to call the api and pass
      // the datas for subscription
      dispatch(submitRegistration());
    }
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
        <Typography
          component="h1"
          variant="h5"
        >
          S'inscrire
        </Typography>
        {registered === false && (
          <Alert severity="error" className="registration__message--failed">Il y a eu un problème lors de l'inscription</Alert>
        )}
        {!registered ? (
          <>
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
                    type="email"
                    autoComplete="email"
                    value={mail}
                    onChange={handleChange}
                  />
                  {checkMail === false && (
                    <Alert
                      variant="outlined"
                      severity="error"
                      className="error__messages--invalid-mail"
                    >
                      <p>L'adresse mail n'est pas valide</p>
                    </Alert>
                  )}
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
              {checkPassword === false
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
                      <li>1 caractère spécial (@,*,- etc ...)</li>
                      <li>1 majuscule</li>
                    </ul>
                  </Alert>
                )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
              >
                Inscription
              </Button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="login" variant="body2">
                    Déjà inscrit ? Se connecter
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </>
        )
          : (
            <Alert className="registration__message--succes" severity="success">
              <AlertTitle>Succès</AlertTitle>
              Inscription réussie !
              Vous pouvez maintenant vous connecter <a className="registration__redirection--login" href="login"> ici</a>!
            </Alert>
          )}
      </Box>
    </Container>
  );
}
