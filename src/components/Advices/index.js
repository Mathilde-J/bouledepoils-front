import CssBaseline from '@mui/material/CssBaseline';

import './advices.scss';

const Advices = () => (
  <div className="advices">
    <CssBaseline />
    <h2 className="advices__title">Quatre bons conseils pour adopter un animal de compagnie</h2>
    <h3 className="advices__subtitle">S’occuper d’un animal n’est pas chose aisée. Avant d’adopter un chat ou un chien de compagnie, il faut s’assurer d’en être capable et de réunir les bonnes conditions. Voici quelques conseils pour adopter un compagnon poilu et s’assurer de le garder toute sa vie.</h3>
    <p className="advices__text">Adopter un animal est une chose, le garder en est une autre. Faisons le point sur ce qu’il faut savoir pour adopter un animal dans les meilleures conditions possible.</p>
    <div className="wrapper">
      <div className="one big-pic">
        <img src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
      </div>
      <div className="two long-text">
        <h3 className="advices__subtitle">Famille d’accueil avant d’être un foyer définitif</h3>
        {/* eslint-disable-next-line max-len */}
        <p className="advices__text">Afin d’éviter la surpopulation dans leurs locaux, certains refuges, à l’instar de la SPA de Basse-Normandie, proposent aux amoureux des animaux d’accueillir un compagnon poilu chez eux, le temps qu’il trouve un foyer définitif. Pour ceux qui ne sont pas encore prêts à adopter définitivement, cette garde temporaire est un bon moyen de tester la vie avec un animal.</p>
        <h3 className="advices__subtitle">Des dépenses à prendre en compte</h3>
        {/* eslint-disable-next-line max-len */}
        <p className="advices__text">S’occuper d’un animal représente des dépenses inévitables. Ce paramètre doit peser dans la décision d’adopter. Il est primordial de s’assurer d’avoir les moyens d’assumer le coût de l’adoption et de subvenir aux besoins d’un animal domestique. La dépense moyenne, chaque année, à 1 000 euros pour un chien et 800 euros pour un chat. Une somme non négligeable qui peut toutefois être allégée. Certains ont la chance d’avoir quelqu’un qui peut garder gratuitement le compagnon pendant les vacances par exemple. Les frais de nourriture ou de vétérinaire sont, eux, inévitables pour toute la vie la bête. En plus de l’investissement financier, c’est du temps qu’il faudra donner à ce partenaire de vie. Assurez-vous de pouvoir lui consacrer des moments privilégiés tous les jours.</p>
      </div>
      <div className="three small-pic">
        <img src="https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
      </div>
      <div className="four small-pic">
        <img src="https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
      </div>
      <div className="five large-text">
        <h3 className="advices__subtitle">Un animal adulte est tout aussi satisfaisant qu’un bébé</h3>
        {/* eslint-disable-next-line max-len */}
        <p className="advices__text">Il est fréquent de vouloir adopter un animal dès son plus jeune âge, mais les adultes ont de sacrés arguments. Les jeunes animaux tous mignons n’ont aucun mal à se faire adopter, l’enjeu se situe chez les plus âgés. Pour les personnes âgées ou pour ceux qui ont peur de se projeter pendant une trop longue durée, le chat ou le chien adulte est un bon compromis. Les chats vivent en tout 13 à 15 ans en moyenne, et un chien a une espérance de vie entre 10 et 15 ans. Se projeter si loin n’est pas toujours évident. Même si un chien ou un chat qui a vécu en refuge porte nécessairement le traumatisme de l’abandon, il connaît la vie en foyer. Son adaptation peut prendre un peu de temps, mais il s’acclimatera toujours plus facilement qu’on le croit à sa nouvelle famille.</p>
        <h3 className="advices__subtitle">Les solutions se multiplient pour les vacances</h3>
        {/* eslint-disable-next-line max-len */}
        <p className="advices__text">C’est toujours un crève-cœur de devoir se séparer de sa boule de poils pour pouvoir partir en vacances. Mais des solutions pour ne plus avoir à choisir entre sa truffe et votre repos bien mérité existent. Que ce soit pour l’emmener dans des lieux ouverts aux chiens et aux chats ou pour le laisser en lieu sûr, les pensions et établissements touristiques qui accueillent toutous et minets se multiplient.</p>
      </div>
    </div>
  </div>
);

export default Advices;
