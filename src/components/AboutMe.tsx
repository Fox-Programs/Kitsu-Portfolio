import { useLanguage } from '../context/LanguageContext';

const DivFrench = () => {
    return (
        <section id="about-section">
            <div className="card">
                <div className="card-header">
                    <h2>À propos de moi</h2>
                    <div className="line"></div>
                </div>

                <div className="card-body">
                    <p className="intro">
                        Moi c'est <span>Facon Alexis</span>. Passionné par le code depuis le collège,
                        je forge aujourd'hui mon expertise en <strong>Bachelor 2 Informatique</strong>.
                    </p>

                    <p>
                        Mon univers tourne autour de la création technique : du <strong>Backend</strong> robuste (Go,
                        Java)
                        aux interfaces <strong>Fullstack</strong> modernes (React, TypeScript).
                        Mon goût pour le défi s'exprime aussi à travers le <strong>Game Development</strong> sous Unity.
                    </p>

                    <div className="experience-tag">
                        <span className="icon">💼</span>
                        <span>1 an d'expérience en entreprise | Autonome & Esprit d'équipe</span>
                    </div>

                    <p className="motivation">
                        Toujours en quête de nouvelles connaissances, je transforme chaque problème en une opportunité
                        d'apprendre.
                    </p>
                </div>
            </div>
        </section>
    )
}

const DivEnglish = () => {
    return (
        <section id="about-section">
            <div className="card">
                <div className="card-header">
                    <h2>About Me</h2>
                    <div className="line"></div>
                </div>

                <div className="card-body">
                    <p className="intro">
                        I'm <span>Facon Alexis</span>. Passionate about coding since middle school,
                        I am currently honing my expertise in a <strong>Bachelor's degree in Computer
                        Science</strong> (2nd year).
                    </p>

                    <p>
                        My world revolves around technical creation: from robust <strong>Backend</strong> development
                        (Go, Java)
                        to modern <strong>Fullstack</strong> interfaces (React, TypeScript).
                        My taste for challenges also extends to <strong>Game Development</strong> using Unity.
                    </p>

                    <div className="experience-tag">
                        <span className="icon">💼</span>
                        <span>1 year of corporate experience | Autonomous & Team player</span>
                    </div>

                    <p className="motivation">
                        Always seeking new knowledge, I turn every problem into an opportunity to learn.
                    </p>
                </div>
            </div>
        </section>
    )
}

export const AboutMe = () => {

    const { language } = useLanguage();

    return (language === 'FR' ? <DivEnglish /> : <DivFrench />)
}