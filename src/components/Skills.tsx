import { useLanguage } from '../context/LanguageContext'

export const SkillsCube = () => {

    const { language } = useLanguage();

    return (
        <section className="skills-section">
            <h2 className="skills-title">{language === 'FR' ? 'My Skills' : 'Mes Compétences'}</h2>

            <div className="skills-container">
                {/* Cube 1: Langages */}
                <div className="skill-block">
                    <h3>Interface</h3>
                    <div className="scene">
                        <div className="cube">
                            <div className="face front">HTML</div>
                            <div className="face back">CSS</div>
                            <div className="face right">JavaScript</div>
                            <div className="face left">React</div>
                            <div className="face top"></div>
                            <div className="face bottom"></div>
                        </div>
                    </div>
                </div>

                {/* Cube 2: Architecture */}
                <div className="skill-block">
                    <h3>Architecture</h3>
                    <div className="scene">
                        <div className="cube">
                            <div className="face front">NodeJS</div>
                            <div className="face back">Express</div>
                            <div className="face right">Golang</div>
                            <div className="face left">MySQL</div>
                            <div className="face top">MongoDB</div>
                            <div className="face bottom">Python</div>
                        </div>
                    </div>
                </div>

                {/* Cube 3: System */}
                <div className="skill-block">
                    <h3>{language === 'FR' ? 'System' : 'Système'}</h3>
                    <div className="scene">
                        <div className="cube">
                            <div className="face front">Unity</div>
                            <div className="face back">C#</div>
                            <div className="face right">Java</div>
                            <div className="face left">Git</div>
                            <div className="face top"></div>
                            <div className="face bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};