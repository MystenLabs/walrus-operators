import { useEffect, useState } from "react"

export function useScrollEffect(elementId: string) {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(elementId)
            if (element) {
                const rect = element.getBoundingClientRect()
                const scrollPercentage = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)))
                setScrollPosition(scrollPercentage * 100)
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial check

        return () => window.removeEventListener("scroll", handleScroll)
    }, [elementId])

    return scrollPosition
}

