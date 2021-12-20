import { useTranslation } from 'react-i18next';
import './Home.scss';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home container-lg">
            <section >
                <h1 className="home__title">{t('home.title')}</h1>
            </section>
        </div>
      );
}

export default Home;
