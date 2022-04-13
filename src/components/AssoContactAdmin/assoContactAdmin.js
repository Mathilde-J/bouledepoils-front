import { Button } from '@mui/material/';
import picture from '../../assets/images/allAnimals.png';
import './assoContactAdmin.scss';

const AssoContactAdmin = () => (

  <div className="join">
    <h1 className="join__title">Vous souhaitez rejoindre notre plateforme ?</h1>
    <img className="join__picture" src={picture} alt="" />
    <h3 className="join__subtitle">Nous serions ravis d'aider vos petits réfugiés.</h3>
    {/* eslint-disable-next-line max-len */}
    <p> N'hésitez pas à prendre contact avec nous, afin d'enregistrer votre association, et ainsi d'élargir votre visbilité, en permettant à de potentiels adoptants de tout le pays de découvrir les animaux qui les attendent.</p>
    {/* eslint-disable-next-line max-len */}
    <p>Pour celà rien de plus simple, envoyez un courreil à notre équipe qui se fera une joie d'accueillir votre demande</p>
    <Button variant="contained" className="join__btn">Nous Contacter</Button>
  </div>
);

export default AssoContactAdmin;