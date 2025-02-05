import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Link, useLocation } from "react-router-dom"
// import { useScrollSpy } from "../hooks/useScrollSpy"
import * as amplitude from "@amplitude/analytics-browser"

const NavigationMenuWalrus = () => {
    // const activeSection = useScrollSpy()
    const { pathname: locationPathname } = useLocation()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const unselectedColors = "text-white bg-primary_dark"
    const selectedColors = "text-primary_dark bg-primary_teal"

    const selectedState = {
        aggregators: locationPathname === "/aggregators" || locationPathname === "/" ? selectedColors : unselectedColors,
        publishers: locationPathname === "/publishers" ? selectedColors : unselectedColors,
    }

    return (
        <NavigationMenu className="relative z-10 flex w-screen justify-center">
            <NavigationMenuList className="center m-0 flex list-none rounded-xl bg-primary_dark border-2 border-primary_teal primary_dark p-1">
                <NavigationMenuItem>
                    <Link
                        to="/aggregators"
                        className={`block rounded-[8px] px-3 py-3 m-0.5 font-light text-sm leading-none ${selectedState["aggregators"]} no-underline outline-none hover:bg-primary_teal hover:text-primary_dark`}
                    >
                        AGGREGATORS
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link
                        to="/publishers"
                        className={`block rounded-[8px] px-3 py-3 m-0.5 font-light text-sm leading-none ${selectedState["publishers"]} no-underline outline-none hover:bg-primary_teal hover:text-primary_dark`}
                    >
                        PUBLISHERS
                    </Link>
                </NavigationMenuItem>

     
            </NavigationMenuList>

            <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
                <NavigationMenuViewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
        </NavigationMenu>
    )
}

export default NavigationMenuWalrus
