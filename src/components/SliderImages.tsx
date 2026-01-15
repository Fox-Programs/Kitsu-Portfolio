import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// 1. Définition du tableau des données
// Note: Le chemin d'accès commence par / (racine publique) car les images sont dans le dossier public/img
const projectImages = [
    { src: '/img/Casse-brique.png', alt: 'Casse Brique' },
    { src: '/img/Caurchat.png', alt: 'Caurchat' },
    // { src: '/img/Challenge 48H.png', alt: 'Challenge 48H' },
    { src: '/img/Forum.png', alt: 'Forum' },
    { src: '/img/Groupie-tracker.png', alt: 'Groupie tracker' },
    // { src: '/img/IA%20campus%20Tkinter.png', alt: 'IA campus tkinter' },
    { src: '/img/IA%20Hackathon.png', alt: 'IA Hackathon' },
    { src: '/img/Projet%20API.png', alt: 'Projet API' },
    { src: '/img/Projet%20ESP32.png', alt: 'Projet ESP32' },
    { src: '/img/Projet%20Rocket.png', alt: 'Projet Rocket' },
    { src: '/img/Quizz-battle.png', alt: 'Quizz battle' }
];

export const SliderImages: React.FC = () => {

    const { language } = useLanguage();

    // Fonction utilitaire pour générer les images (Original + Duplication)
    const renderTrack = () => {
        return (
            <>
                {/* 1ère boucle : Images originales */}
                {projectImages.map((image, index) => (
                    <img
                        // Clé unique pour React, essentielle lors de l'utilisation de map
                        key={`original-${index}`}
                        src={image.src}
                        alt={image.alt}
                    />
                ))}

                {/* 2ème boucle : Duplication pour l'effet de boucle infinie fluide */}
                {projectImages.map((image, index) => (
                    <img
                        key={`duplicate-${index}`} // Clé unique différente
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
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