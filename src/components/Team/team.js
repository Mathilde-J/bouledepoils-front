import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaSymfony, FaReact } from 'react-icons/fa';
import AvatarF from 'src/assets/images/avatar_francois.png';
import AvatarJ from 'src/assets/images/avatar_julien.png';
import AvatarM from 'src/assets/images/avatar_mathilde.png';
import AvatarA from 'src/assets/images/avatar_anthony.png';
import AvatarV from 'src/assets/images/avatar_virginie.png';
import './team.scss';

const Team = () => (
  <div className="team">
    <CssBaseline />
    <h2 className="team__title">L'équipe Boule de poils</h2>
    <div className="team__list">
      <div className="team__card">
        <div className="team__avatar">
          <img className="team__pic" src={AvatarJ} alt="Julien" />
          <FaSymfony className="symfoLogo" />
        </div>
        <h3 className="team__name">Julien</h3>
        <h4 className="team__role">Product Owner / Lead Dev Back</h4>
        <div className="team__links">
          <a href="https://www.linkedin.com/in/julienlaurent77/"><LinkedInIcon className="team__ldkn" style={{ fontSize: 40 }}></LinkedInIcon></a>
          <a href="https://github.com/JulienLaurent77"><GitHubIcon className="team__gh" style={{ fontSize: 40 }}></GitHubIcon></a>
        </div>
      </div>
      <div className="team__card">
        <div className="team__avatar">
          <img className="team__pic" src={AvatarM} alt="Mathilde" />
          <FaReact className="reactLogo" />
        </div>
        <h3 className="team__name">Mathilde</h3>
        <h4 className="team__role">Scrum Master</h4>
        <div className="team__links">
          <a href="https://www.linkedin.com/in/mathildejanssenld/"><LinkedInIcon className="team__ldkn" style={{ fontSize: 40 }}></LinkedInIcon></a>
          <a href="https://github.com/Mathilde-J"><GitHubIcon className="team__gh" style={{ fontSize: 40 }}></GitHubIcon></a>
        </div>
      </div>
      <div className="team__card">
      <div className="team__avatar">
        <img className="team__pic" src={AvatarA} alt="Anthony" />
        <FaReact className="reactLogo" />
      </div>  
        <h3 className="team__name">Anthony</h3>
        <h4 className="team__role">Lead Dev Front</h4>
        <div className="team__links">
          <a href="https://www.linkedin.com/in/anthony-mayor-4350111b4/"><LinkedInIcon className="team__ldkn" style={{ fontSize: 40 }}></LinkedInIcon></a>
          <a href="https://github.com/anthonymayor0clock"><GitHubIcon className="team__gh" style={{ fontSize: 40 }}></GitHubIcon></a>
        </div>
      </div>
      <div className="team__card">
      <div className="team__avatar">
        <img className="team__pic" src={AvatarV} alt="Virginie" />
        <FaSymfony className="symfoLogo" />
      </div>
        <h3 className="team__name">Virginie</h3>
        <h4 className="team__role">Git Master</h4>
        <div className="team__links">
          <a href="https://www.linkedin.com/in/virginie-touzalin-13ba54226/"><LinkedInIcon className="team__ldkn" style={{ fontSize: 40 }}></LinkedInIcon></a>
          <a href="https://github.com/VirginieT"><GitHubIcon className="team__gh" style={{ fontSize: 40 }}></GitHubIcon></a>
        </div>
      </div>
      <div className="team__card">
      <div className="team__avatar">
        <img className="team__pic" src={AvatarF} alt="François-Louis" />
        <FaReact className="reactLogo" />
      </div>
        <h3 className="team__name">François-Louis</h3>
        <h4 className="team__role">Technical Advisor</h4>
        <div className="team__links">
          <a href="https://www.linkedin.com/in/fran%C3%A7ois-louis-t/"><LinkedInIcon className="team__ldkn" style={{ fontSize: 40 }}></LinkedInIcon></a>
          <a href="https://github.com/Francois-Louis"><GitHubIcon className="team__gh" style={{ fontSize: 40 }}></GitHubIcon></a>
        </div>
      </div>
    </div>
    <Button variant="contained" color="secondary" className="team__btn"><a href="mailto:admin@boulesdepoil.com">Nous contacter</a></Button>
  </div>
);

export default Team;
