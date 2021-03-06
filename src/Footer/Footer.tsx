import './Footer.scss';

function Footer() {
    const today = new Date();
    const currentYear = today.getFullYear();

      return (
        <footer className="footer">
            <div className="footer__langs">
                {/* <ul>
                { langs && Object.keys(langs as ILang)
                    .map((lang: string) => 
                        <li key={lang}>
                            <button 
                                className={`footer__lang ${i18n.resolvedLanguage === lang ? 'is-active' : ''}`} 
                                onClick={() => setLanguage(lang)}
                                aria-label={lang}
                                title={t('page.changeLang')}
                                >{langs[lang].nativeName}</button>
                        </li>
                    )}
                </ul> */}
            </div>
            <div className="footer__year">
                &copy; {currentYear}
            </div>
        </footer>
      );
}

export default Footer;
