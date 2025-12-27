export const SkillsCube = () => {
    return (
        <section className="skills-section">
            <h2 className="skills-title">Mes Compétences</h2>

            <div className="skills-container">
                {/* Cube 1: Langages */}
                <div className="skill-block">
                    <h3>Langages</h3>
                    <div className="scene">
                        <div className="cube">
                            <div className="face front">Java</div>
                            <div className="face back">JS</div>
                            <div className="face right">HTML</div>
                            <div className="face left">CSS</div>
                            <div className="face top">Python</div>
                            <div className="face bottom">SQL</div>
                        </div>
                    </div>
                </div>

                {/* Cube 2: Frameworks/Outils */}
                <div className="skill-block">
                    <h3>Frameworks & Tools</h3>
                    <div className="scene">
                        <div className="cube">
                            <div className="face front">React</div>
                            <div className="face back">Unity</div>
                            <div className="face right">C#</div>
                            <div className="face left">Golang</div>
                            <div className="face top">Node.js</div>
                            <div className="face bottom">Git</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};