import { Link } from "react-router-dom"
import { DiscordLogo } from "./assets/DiscordLogo"
import { GithubLogo } from "./assets/GithubLogo"
import { XLogo } from "./assets/XLogo"
import { GalaxyLogo } from "./assets/GalaxyLogo"

export function Footer() {
    return (
        <footer className="max-w-[1300px] w-full text-white md:m-12 py-4">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="p-4 grid w-full md:w-1/2 md:h-[120px] grid-cols-2 gap-x-16 bg-primary_dark rounded-xl px-4">
                    <div className="space-y-3">
                        <Link
                            to="#"
                            className="block text-sm font-ppNeueMontrealThin hover:opacity-70 transition-opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Walrus Website
                        </Link>
                        <Link
                            to="https://docs.walrus.site/walrus.pdf"
                            className="block text-sm font-ppNeueMontrealThin hover:opacity-70 transition-opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Whitepaper
                        </Link>
                        <Link
                            to="https://walruscan.com/testnet/home"
                            className="block text-sm font-ppNeueMontrealThin hover:opacity-70 transition-opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Explorer
                        </Link>
                    </div>
                    <div className="space-y-3">
                        <Link
                            to="https://drive.google.com/drive/folders/1AoWZPWhrjSSNhpVLjVjuf7J3pA2imheq?usp=sharing"
                            className="block text-sm font-ppNeueMontrealThin hover:opacity-70 transition-opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Media Kit
                        </Link>
                        <Link
                            to="https://docs.walrus.site/walrus-sites/tos.html"
                            className="block text-sm font-ppNeueMontrealThin hover:opacity-70 transition-opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            to="https://docs.walrus.site/walrus-sites/privacy.html"
                            className="block text-sm font-ppNeueMontrealThin hover:opacity-70 transition-opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Notice
                        </Link>
                    </div>
                </div>
                <div className="flex items-center rounded-xl justify-between bg-white h-[120px] w-full md:w-1/2">
                    {/* <div className="flex bg-pink-500 rounded-l-xl justify-center items-center gap-4 h-full w-1/4"> */}
                    <Link
                        to="https://x.com/walrusprotocol"
                        className="border-2 border-primary_dark flex rounded-l-xl hover:opacity-70 justify-center items-center gap-4 h-full w-1/4 transition-opacity"
                        aria-label="Follow us on Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <XLogo className="w-12" />
                    </Link>
                    {/* </div> */}
                    <Link
                        to="http://discord.gg/walrusprotocol"
                        className="border-2 border-l-0 border-primary_dark flex hover:opacity-70 justify-center items-center gap-4 h-full w-1/4 transition-opacity"
                        aria-label="Join our Discord"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DiscordLogo className="w-12" />
                    </Link>
                    <Link
                        to="https://github.com/MystenLabs/walrus-docs"
                        className="border-2 border-l-0 border-primary_dark flex hover:opacity-70 justify-center items-center gap-4 h-full w-1/4 transition-opacity"
                        aria-label="View our GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubLogo className="w-12" />
                    </Link>
                    <Link
                        to="https://app.galxe.com/quest/Walrus"
                        className="border-2 border-l-0 border-primary_dark flex hover:opacity-70 rounded-r-xl justify-center items-center gap-4 h-full w-1/4 transition-opacity"
                        aria-label="Visit Walrus on Galxe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GalaxyLogo className="w-12" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
