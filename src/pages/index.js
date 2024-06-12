import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import mediumZoom from 'medium-zoom'
import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">    
        <Heading as="h1" className="hero__title">
          {/* {siteConfig.title} */}
          <h1 className="title">Manual de <span className="spantitle">Usuario</span></h1>
          <h3>versión 2.18.72</h3>
        </Heading>
        {/* <p className="hero__subtitle ptitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/usuarios-del-sistema">
            Ingresar 🏠
          </Link>
        </div>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Manual usuario ${siteConfig.title} version 1.0.0`}
      description="Manual de usuario del sistema IslasCloud <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures   />
      </main>
    </Layout>
  );
}
