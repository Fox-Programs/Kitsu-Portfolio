import { useLanguage } from '../context/LanguageContext';


export const Toolbar = () => {

    const { language, toggleLanguage } = useLanguage();

    return (
        <nav id="toolbar-container">
            <div id="toolbar">
                <div className="nav-item">
                    <h1>{language === 'FR' ? 'ABOUT ME' : 'A PROPOS DE MOI'}</h1>
                    <div className="underline"></div>
                </div>
                <div className="nav-item">
                    <h1>{language === 'FR' ? 'SKILLS' : 'COMPETENCES'}</h1>
                    <div className="underline"></div>
                </div>
                <div className="nav-item">
                    <h1>{language === 'FR' ? 'PROJECTS' : 'PROJETS'}</h1>
                    <div className="underline"></div>
                </div>
                <div className="nav-item">
                    <h1>CONTACT</h1>
                    <div className="underline"></div>
                </div>
                <button onClick={toggleLanguage} className="lang-button">
                    {language === 'FR' ? 'FR' : 'EN'}
                </button>
            </div>
        </nav>
    );
};