import { Button } from '@mui/material/';
import CssBaseline from '@mui/material/CssBaseline';

import picture from '../../assets/images/allAnimals.png';
import './assoContactAdmin.scss';

const AssoContactAdmin = () => (

  <div className="join">
    <CssBaseline />
    <h1 className="join__title">Vous souhaitez rejoindre notre plateforme ?</h1>
    <img className="join__picture" src={picture} alt="" />
    <h3 className="join__subtitle">Nous serions ravis d'aider vos petits réfugiés.</h3>
    {/* eslint-disable-next-line max-len */}
    <p className="join__text"> N'hésitez pas à prendre contact avec nous, afin d'enregistrer votre association, et ainsi d'élargir leur visbilité, en permettant à de potentiels adoptants de tout le pays de découvrir les animaux qui les attendent.</p>
    {/* eslint-disable-next-line max-len */}
    <p className="join__text">Pour celà rien de plus simple, envoyez un courriel à notre équipe qui se fera une joie d'accueillir votre demande!</p>
    <Button color="secondary" variant="contained" className="join__btn"><a href="mailto:admin@boulesdepoil.com?subject=Demande d'association">Nous contacter</a></Button>
  </div>
);

export default AssoContactAdmin;
