import { useTranslation } from 'react-i18next';
import './Home.scss';
import Link from 'carbon-react/lib/components/link';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home">
            <section >
                <h1 className="home__title">{t('home.title')}</h1>
                <div>
                    <Link>This is a link</Link>
                </div>
            </section>
        </div>
      );
}

export default Home;
