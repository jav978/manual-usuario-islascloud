import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'Facilidad de Uso',
    Svg: require('@site/static/img/undraw_engineering_team_a7n2.svg').default,
    description: (
      <>
        Nuestro manual de usuario está diseñado con simplicidad en mente. Con instrucciones claras y concisas, te guiará a través de cada paso del proceso, haciendo que la experiencia sea tan fácil para  los usuarios del sistema Islas Cloud.
      </>
    ),
  },
  {
    title: 'Facilidad de Uso',
    Svg: require('@site/static/img/undraw_engineering_team_a7n2.svg').default,
    description: (
      <>
        Nuestro manual de usuario está diseñado con simplicidad en mente. Con instrucciones claras y concisas, te guiará a través de cada paso del proceso, haciendo que la experiencia sea tan fácil para  los usuarios del sistema Islas Cloud.
      </>
    ),
  },
  
  {
    title: 'Información precisa',
    Svg: require('@site/static/img/undraw_usability_testing_re_uu1g.svg').default,
    description: (
      <>
       Confía en nuestro manual para proporcionarte la información más precisa y actualizada. Hemos hecho todo el trabajo duro para que no tengas que hacerlo. Con nuestro manual, siempre estarás en el camino correcto.
      </>
    ),
  },
  {
    title: 'Diseño centrado en el usuario',
    Svg: require('@site/static/img/undraw_add_information_j2wg.svg').default,
    description: (
      <>
        Hemos diseñado nuestro manual pensando en ti. Con un diseño intuitivo y fácil de navegar, encontrarás rápidamente lo que necesitas, ahorrándote tiempo y esfuerzo.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="card shadow--tl ">
        <div className="card__image text--center">
          <Svg className={styles.featureSvg} role="img" alt="Image"
        title={title}/>
        </div>
        <div className="card__header text--center padding-horiz--md">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>     
        <div className="card__footer">
          <div className={styles.buttons}>
            <Link
              className="button button--block button--primary button--lg "
              to="/docs/intro">
              Inicio 
            </Link>
          </div>
        </div> 

      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
