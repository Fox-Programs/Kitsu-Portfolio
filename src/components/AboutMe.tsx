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
                        Salut, moi c'est <strong>Kitsu</strong> ! Passionné de code depuis le collège, je muscle aujourd'hui mes compétences en <strong>Bachelor 2 Informatique</strong>. D'un naturel curieux, je nourris mon imagination à travers la culture japonaise et les nouveaux défis techniques. Pour moi, l'<strong>esprit d'équipe et la cohésion</strong> sont les clés d'un projet réussi, même si je sais être parfaitement <strong>autonome</strong> pour avancer efficacement en solo.
                    </p>

                    <p>
                        Mon goût pour le <strong>challenge</strong> ne s'arrête pas à l'écran : sportif dans l'âme, j'ai fait du badminton en compétition pendant plus de 8 ans et je m'évade régulièrement en VTT pour recharger les batteries.
                    </p>

                    <p>
                        Dès que je me rassoie devant mon clavier, l'immersion est totale. Je suis aujourd'hui pleinement investi dans le <strong>développement Fullstack</strong>, de la conception de <strong>backends robustes</strong> avec intégration d'API au développement de frontends dynamiques avec <strong>React</strong>. Cette <strong>soif de création</strong>, née de mes premières expériences en autodidacte, m'anime aujourd'hui pour bâtir des solutions web performantes et innovantes.
                    </p>

                    <p>
                        Actuellement à la recherche de nouveaux défis, je propose ma candidature pour une <strong>alternance dès septembre 2026</strong>. Je suivrai un rythme de <strong>1 semaine en cours et 2 semaines en entreprise</strong>, une organisation idéale pour m'impliquer durablement dans vos projets et contribuer activement à la réussite de votre équipe.
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
                        Hi, I'm <strong>Kitsu</strong>! Passionate about coding since middle school, I am currently honing my skills in a <strong>Bachelor’s degree in Computer Science</strong>. Naturally curious, I fuel my imagination through Japanese culture and new technical challenges. For me, <strong>team spirit and cohesion</strong> are the keys to a successful project, though I am perfectly <strong>autonomous</strong> when it comes to making progress on my own.
                    </p>

                    <p>
                        My taste for <strong>challenges</strong> doesn't stop at the screen: a competitor at heart, I played competitive badminton for over 8 years and regularly head out on my mountain bike to recharge.
                    </p>

                    <p>
                        As soon as I'm back at my keyboard, I'm fully immersed. I am now entirely focused on <strong>Fullstack Development</strong>, from designing <strong>robust backends</strong> with API integration to building dynamic frontends with <strong>React</strong>. This <strong>thirst for creation</strong>, born from my early days as a self-taught developer, drives me today to build efficient and innovative web solutions.
                    </p>

                    <p>
                        Currently seeking new challenges, I am looking for an <strong>apprenticeship starting in September 2026</strong>. I will be following a <strong>1-week in class / 2-weeks in company</strong> rotation, an ideal pace to stay deeply involved in your projects and actively contribute to your team's success.
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