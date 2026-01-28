import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// 1. Définition du tableau des données
// Note: Le chemin d'accès commence par / (racine publique) car les images sont dans le dossier public/img
const projectImages = [
    { src: 'img/Casse-brique.png', alt: 'Casse Brique', url: 'https://github.com/Fox-Programs/Brick-Breaker' },
    { src: 'img/Caurchat.png', alt: 'Caurchat', url: 'https://github.com/Arthemis-37/Projet-Infra-SI' },
    { src: 'img/Forum.png', alt: 'Forum', url: 'https://github.com/Eevolxy/forum'},
    { src: 'img/Groupie-tracker.png', alt: 'Groupie tracker', url: 'https://github.com/Fox-Programs/groupie-tracker' },
    { src: 'img/Projet%20API.png', alt: 'Projet API', url: 'https://github.com/Eevolxy/projet-api'},
    { src: 'img/Projet%20ESP32.png', alt: 'Projet ESP32', url: 'https://github.com/Fox-Programs/Projet-ESP32' },
    { src: 'img/Projet%20Rocket.png', alt: 'Projet Rocket', url: 'https://github.com/Fox-Programs/Projet-Rocket' },
    { src: 'img/Quizz-battle.png', alt: 'Quizz battle', url: 'https://github.com/Fox-Programs/quiz-battle' },
    { src: 'img/Pendu.png', alt: 'Pendu', url: 'https://github.com/Fox-Programs/hangman' }
];

export const SliderImages: React.FC = () => {

    const { language } = useLanguage();

    // Fonction utilitaire pour générer les images (Original + Duplication)
    const renderTrack = () => {
        // On définit une fonction réutilisable pour éviter de répéter le JSX deux fois
        const renderImages = (prefix: string) => projectImages.map((image, index) => (
            <a
                key={`${prefix}-${index}`}
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="slider-item"
            >
                <img src={image.src} alt={image.alt} />
            </a>
        ));

        return (
            <>
                {renderImages('original')}
                {renderImages('duplicate')}
            </>
        );
    };

    return (
        <section id="projects-section">
            {/* Nouveau titre de section */}
            <div className="section-title">
                <h2>{language === 'FR' ? ' My Projects' : 'Mes Projets'}</h2>
                <div className="line"></div>
                <p>{language === 'FR' ? 'A glimpse into my Fullstack, Game Dev, and Backend projects' : 'Un aperçu de mes projets Fullstack, Game Dev et Backend'}</p>
            </div>

            <div className="slider-container projects">
                <div className="slider-track">
                    {renderTrack()}
                </div>
            </div>
        </section>
    );
};