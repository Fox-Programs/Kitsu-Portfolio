import "./styles/style.css"
import "./styles/contact.css"
import { LanguageProvider } from './context/LanguageContext';
import { ParticlesBackground } from './components/ParticlesBackground.tsx'
import { AboutMe } from './components/AboutMe.tsx'
import { Toolbar } from './components/Toolbar'
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

                <SliderImages />

                <Contact/>

            </div>
        </LanguageProvider>
    </>
  )
}

export default App
