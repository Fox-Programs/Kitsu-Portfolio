import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {

    const { language } = useLanguage();

    return (
        <section id="contact">
            <div className="contact-card">
                <div className="contact-header">
                    <h2>{language === 'FR' ? 'Get in Touch' : 'Me Contacter'}</h2>
                    <div className="line"></div>
                </div>

                <p className="contact-text">
                    {language === 'FR' ? 'I am currently open to new opportunities or collaborations.\n' +
                        'Feel free to connect with me on social media or send a direct message!' :
                        'Je suis actuellement ouvert à de nouvelles opportunités ou collaborations.\n' +
                        'N\'hésitez pas à me rejoindre sur mes réseaux ou à m\'envoyer un message direct !'}
                </p>

                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/alexis-facon-a21a13326/" target="_blank" rel="noreferrer"
                       className="contact-item">
                        <div className="icon-box">IN</div>
                        <div className="link-info">
                            <span>LinkedIn</span>
                            <small>Alexis Facon</small>
                        </div>
                    </a>

                    <a href="https://github.com/Fox-Programs" target="_blank" rel="noreferrer" className="contact-item">
                        <div className="icon-box">GH</div>
                        <div className="link-info">
                            <span>GitHub</span>
                            <small>Fox-Programs</small>
                        </div>
                    </a>

                    <a href="mailto:alexis.facon18@gmail.com" className="contact-item mail">
                        <div className="icon-box">@</div>
                        <div className="link-info">
                            <span>Email</span>
                            <small>alexis.facon18@gmail.com</small>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}