import * as React from "react"
import { ChevronDown, ChevronRight, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { WalrusWalking } from "./assets/WalrusWalking"
import { Separator } from "@radix-ui/react-separator"
import { ArrowUpRight } from "./assets/ArrowUpRight"
import { useScrollSpy } from "../hooks/useScrollSpy"

type MenuItem = {
    title: string
    href?: string
    submenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
    { title: "ABOUT", href: "home" },
    { title: "WHY", href: "why" },
    { title: "HOW", href: "how" },
    { title: "USE CASES", href: "usecases" },
]

const MenuItemComponent: React.FC<{
    item: MenuItem
    depth?: number
    setMenuOpen: (open: boolean) => void
    activeSection: string
}> = ({ item, depth = 0, setMenuOpen, activeSection }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const scrollToSection = (sectionId: string | undefined) => {
        setMenuOpen(false)
        const element = document.getElementById(sectionId || "home")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }
    if (item.submenu) {
        return (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                    <button
                        className={cn(
                            "flex w-full items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary",
                            depth > 0 && "pl-4",
                            activeSection === item.href && "text-primary_teal"
                        )}
                    >
                        {item.title}
                        {isOpen ? (
                            <ChevronDown className="h-4 w-4" />
                        ) : (
                            <ChevronRight className="h-4 w-4" />
                        )}
                    </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {item.submenu.map((subItem) => (
                        <MenuItemComponent
                            key={subItem.title}
                            item={subItem}
                            depth={depth + 1}
                            setMenuOpen={setMenuOpen}
                            activeSection={activeSection}
                        />
                    ))}
                </CollapsibleContent>
            </Collapsible>
        )
    }

    return (
        <div
            // href={item.href}
            onClick={() => scrollToSection(item.href)}
            className={cn(
                "block py-2 text-2xl font-medium transition-colors",
                depth > 0 && "pl-4",
                item.href === "/" && "text-white",
                activeSection === item.href ? "text-primary_teal" : "text-white"
            )}
        >
            {item.title}
        </div>
    )
}

export default function HamburgerMenu() {
    const [open, setOpen] = React.useState(false)
    const activeSection = useScrollSpy()

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <div className="bg-primary_dark rounded-full p-2">
                    <Menu height={34} width={34} color={"#97F0E5"} />
                </div>
            </SheetTrigger>
            <SheetContent side="left" className="w-full bg-primary_dark">
                <nav className="flex flex-col space-y-4">
                    <div className="flex-row gap-4 flex mb-[10px]">
                        <WalrusWalking className="w-[28px] lg:w-[50px] xl:w-[67px]" />
                        <div>
                            <span className="text-[#f7f7f7] text-[40px] lg:text-[40px] xl:text-[54px] font-bold font-ppNeueBit">
                                WALRUS.
                            </span>
                            <span className="text-[#c684f6] text-[40px] lg:text-[40px] xl:text-[54px] font-bold font-ppNeueBit">
                                SITE
                            </span>
                        </div>
                    </div>
                    {menuItems.map((item) => (
                        <div className="flex-col gap-4 flex px-[10px] py-[2px]">
                            <MenuItemComponent
                                key={item.title}
                                item={item}
                                setMenuOpen={setOpen}
                                activeSection={activeSection}
                            />
                            <Separator
                                className="bg-gray-500 w-full h-[1px]"
                                orientation="horizontal"
                            />
                        </div>
                    ))}
                    <div className="flex-row justify-between flex px-[10px] py-[2px]">
                        <a
                            href="https://docs.walrus.site/walrus-sites/intro.html"
                            className={cn(
                                "block py-2 text-2xl font-medium transition-colors text-white"
                            )}
                        >
                            DOCS
                        </a>
                        <ArrowUpRight
                            className="w-[20px] h-[20px] mt-3"
                            color="red"
                        />
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}
