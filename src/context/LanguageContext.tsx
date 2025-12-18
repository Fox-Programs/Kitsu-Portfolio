import { createContext, useState, useContext, type ReactNode } from 'react';

type Language = 'FR' | 'EN';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
}

// 2. Création du contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 3. Le Provider qui entoure l'application
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('FR');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'FR' ? 'EN' : 'FR'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// 4. Hook personnalisé pour utiliser la langue facilement
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage doit être utilisé dans un LanguageProvider");
    return context;
};