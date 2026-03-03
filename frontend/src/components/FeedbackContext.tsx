"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { usePathname } from "next/navigation";

interface FeedbackContextType {
    currentPage: string;
    currentSection: string;
    setCurrentSection: (section: string) => void;
}

const FeedbackContext = createContext<FeedbackContextType>({
    currentPage: "/",
    currentSection: "",
    setCurrentSection: () => { },
});

export function FeedbackProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [currentSection, setCurrentSection] = useState("");

    const handleSetSection = useCallback((section: string) => {
        setCurrentSection(section);
    }, []);

    return (
        <FeedbackContext.Provider
            value={{
                currentPage: pathname,
                currentSection,
                setCurrentSection: handleSetSection,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
}

export function useFeedbackContext() {
    return useContext(FeedbackContext);
}

// Custom hook for components to register their section name
export function useFeedbackSection(sectionName: string) {
    const { setCurrentSection } = useFeedbackContext();

    // Components can call this to register their visible section
    const registerSection = useCallback(() => {
        setCurrentSection(sectionName);
    }, [sectionName, setCurrentSection]);

    return { registerSection };
}
