import { useEffect, useState } from "react"

export function useScrollSpy() {
    const [activeSection, setActiveSection] = useState<string>("home")

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "why", "how", "usecases"]
            
            for (const sectionId of sections) {
                const section = document.getElementById(sectionId)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    // Adjust these values to control when a section is considered "active"
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(sectionId)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        // Initial check
        handleScroll()

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return activeSection
} 