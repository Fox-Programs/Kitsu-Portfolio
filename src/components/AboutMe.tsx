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
                    <p>
                        Moi, c'est <strong>Kitsu</strong>. Passionné par le code depuis le collège,
                        je forge aujourd'hui mon expertise en <strong>Bachelor 2 Informatique</strong>.
                        Curieux de nature, je nourris mon imagination à travers la <strong>culture japonaise</strong> et les nouveaux défis techniques.
                    </p>

                    <p>
                        Pour moi, <strong> l'esprit d'équipe et la cohésion</strong> sont les piliers d'un projet réussi, même si
                        je sais être parfaitement <strong>autonome et efficace en solo</strong>. Mon goût pour le challenge ne s'arrête
                        pas à l'écran : sportif dans l'âme, j'ai pratiqué le <strong>badminton en compétition</strong>
                        pendant plus de 8 ans et je m'évade régulièrement en VTT pour recharger les batteries.
                    </p>

                    <p>
                        Dès que je reviens devant mon clavier, l'immersion est totale. Si le développement <strong> Fullstack</strong>
                        m'intéresse beaucoup, mon véritable coup de cœur reste le <strong> Game Development</strong>.
                        C’est d'ailleurs sous Unity que j’ai fait mes armes
                        en apprenant le C# en autodidacte et actuellement aujourd'hui en étude,
                        transformant ma passion pour le jeu en <strong>soif de création</strong>.
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
                    <p>
                        I'm <strong>Kitsu</strong>. Passionate about coding since middle school,
                        I am currently forging my expertise in my <strong>second year of a Bachelor's in Computer Science</strong>.
                        Curious by nature, I feed my imagination through <strong>Japanese culture</strong> and new technical challenges.
                    </p>

                    <p>
                        For me, <strong>teamwork and cohesion</strong> are the pillars of a successful project, even though
                        I can be perfectly <strong>autonomous and efficient on my own</strong>. My taste for challenges doesn't
                        stop at the screen: a sportsman at heart, I played <strong>competitive badminton</strong>
                        for over 8 years and I regularly escape on my mountain bike to recharge my batteries.
                    </p>

                    <p>
                        As soon as I'm back at my keyboard, the immersion is total. While <strong>Fullstack</strong>
                        development interests me a lot, my true passion remains <strong>Game Development</strong>.
                        In fact, it was with Unity that I cut my teeth by teaching myself C#, a journey I'm continuing
                        today through my studies, transforming my passion for gaming into a <strong>thirst for creation</strong>.
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