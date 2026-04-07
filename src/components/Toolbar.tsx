import { useLanguage } from '../context/LanguageContext';


export const Toolbar = () => {

    const { language, toggleLanguage } = useLanguage();

    return (
        <nav id="toolbar-container">
            <div id="toolbar">
                <div className="nav-item">
                    <a href={"#about-section"}>{language === 'FR' ? 'ABOUT ME' : 'A PROPOS DE MOI'}</a>
                    <div className="underline"></div>
                </div>
                <div className="nav-item">
                    <a href={"#skills-section"}>{language === 'FR' ? 'SKILLS' : 'COMPETENCES'}</a>
                    <div className="underline"></div>
                </div>
                <div className="nav-item">
                    <a href={"#projects-section"}>{language === 'FR' ? 'PROJECTS' : 'PROJETS'}</a>
                    <div className="underline"></div>
                </div>
                <div className="nav-item">
                    <a href={"#contact-section"}>CONTACT</a>
                    <div className="underline"></div>
                </div>
                <button onClick={toggleLanguage} className="lang-button">
                    {language === 'FR' ? 'EN' : 'FR'}
                </button>
            </div>
        </nav>
    );
};