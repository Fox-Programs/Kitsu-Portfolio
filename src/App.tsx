import "./styles/style.css";
import "./styles/contact.css";
import "./styles/skills.css";
import { LanguageProvider } from './context/LanguageContext';
import { ParticlesBackground } from './components/ParticlesBackground.tsx'
import { Toolbar } from './components/Toolbar'
import { AboutMe } from './components/AboutMe.tsx'
import {SkillsCube} from './components/Skills.tsx'
import { SliderImages } from './components/SliderImages.tsx'
import { Contact } from './components/Contact'


function App() {
  return (
    <>
        <LanguageProvider>
            <div>

                <ParticlesBackground />

                <Toolbar />

                <hr/>

                <AboutMe/>

                <SkillsCube/>

                <SliderImages />

                <Contact/>

            </div>
        </LanguageProvider>
    </>
  )
}

export default App
