import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const  minuscula =(arg) => {
  return arg.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
} 

const FeatureList = [
  // {
  //   title: 'Admin',
  //   Svg: require('@site/static/img/undraw_qa_engineers_dg-5-p.svg').default,
  //   description: (
  //     <>
  //       Usuario Administrador  
  //     </>
  //   ),
  // },
  {
    title: 'Fácil de Usar',
    Svg: require('@site/static/img/undraw_engineering_team_a7n2.svg').default,
    description: (
      <>
        El manual escrito en un lenguaje claro y sencillo de comprender.  
      </>
    ),
  },
  {
    title: 'Completo y actualizado',
    Svg: require('@site/static/img/undraw_heatmap_uyye.svg').default,
    description: (
      <>
        El manual de usuario  proporciona toda la información necesaria para que el usuario pueda utilizar el sistema de forma práctica.
      </>
    ),
  },
  
  {
    title: 'Títulos y subtítulos claros',
    Svg: require('@site/static/img/undraw_usability_testing_re_uu1g.svg').default,
    description: (
      <>
       El manual esta  estructurado, con títulos y subtítulos claros que permitan al usuario encontrar la información que necesita de forma rápida y sencilla.
      </>
    ),
   }
  // {
  //   title: 'IT',
  //   Svg: require('@site/static/img/undraw_add_information_j2wg.svg').default,
  //   description: (
  //     <>
  //       Usuario Information technology.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>

      <div className="card" style={{textAlign: 'center', margin: '10px'}}>
        <div className="card__image text--center">
          <Svg className={styles.featureSvg} role="img" alt="Image"
        title={title}/>
        </div>
        <div className="card__header text--center padding-horiz--md ">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>          

        </div>     
        {/* <div className="card__footer">
          <div className={styles.buttons}>
            <Link
              className="button button--block button--primary button--lg "
              to={`/docs/usuarios/${'user_' + minuscula(title)}`}>
              Acceder
            </Link>
          </div>
        </div>  */}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <h3 className="hero__title" style={{textAlign: 'center', margin: '10px'}}>Usuarios del Sistema</h3> */}

         <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div> 
      </div>
    </section>
  );
}
