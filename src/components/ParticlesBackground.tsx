import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground: React.FC = () => {
    const [init, setInit] = useState(false);

    // 1. Initialisation du moteur de particules
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // Chargement du préréglage "slim" pour une meilleure performance
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // 2. Définition des options de configuration (similaire à particles.js)
    const particlesOptions: ISourceOptions = useMemo(
        () => ({
            // Mettez ici l'objet de configuration de particles.js
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    // 3. Rendu du composant
    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={particlesOptions}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            />
        );
    }

    return <></>;
};