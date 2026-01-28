import { useLanguage } from '../context/LanguageContext'

export const SkillsCube = () => {

    const { language } = useLanguage();

    return (
        <section id="skills-section">
            <div className="card">
                <div className="card-header">
                    <h2>{language === 'FR' ? 'My Skills' : 'Mes Compétences'}</h2>
                    <div className="line"></div>
                </div>

                <div className="skills-container">
                    {/* Cube 1: Interface */}
                    <div className="skill-block">
                        <h3>Interface</h3>
                        <div className="scene">
                            <div className="cube">
                                <div className="face front">HTML</div>
                                <div className="face back">CSS</div>
                                <div className="face right">JavaScript</div>
                                <div className="face left">React</div>
                                <div className="face top">Unity</div>
                                <div className="face bottom">Godot</div>
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
                                <div className="face left">Python</div>
                                <div className="face top">Java</div>
                                <div className="face bottom">C#</div>
                            </div>
                        </div>
                    </div>

                    {/* Cube 3: System */}
                    <div className="skill-block">
                        <h3>{language === 'FR' ? 'System' : 'Système'}</h3>
                        <div className="scene">
                            <div className="cube">
                                <div className="face front">MySQL</div>
                                <div className="face back">MairaDB</div>
                                <div className="face right">MongoDB</div>
                                <div className="face left">PostgreSQL</div>
                                <div className="face top">Docker</div>
                                <div className="face bottom">AWS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};