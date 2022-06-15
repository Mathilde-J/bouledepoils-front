import CssBaseline from '@mui/material/CssBaseline';

import './error.scss';

import errorpicture from 'src/assets/img/dogpicture.png';

const error = () => (
  <div className="errorbox">
    <CssBaseline />
    <h2 className="titrerror"> 404</h2>
    <p className="paragrapherror">Waouf! Il y a un os! La page que vous avez demandé est introuvable.</p>
    <div className="errorpicture">
      <img src={errorpicture} alt="imgerror" />
    </div>
  </div>
);

export default error;
