// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import React from "react"
import { WalrusWalking } from "../components/assets/WalrusWalking.tsx"
// import { Globe } from "../components/assets/Globe.tsx"
import { Button } from "@/components/ui/button.tsx"
import * as amplitude from "@amplitude/analytics-browser"
import HeaderMobile from "@/components/HeaderMobile.tsx"
import { isMobile } from "react-device-detect"
import Header from "@/components/Header.tsx"

const AggregatorsPage: React.FC = () => {
    return (
        <section
            id="home"
            className="flex flex-col items-center bg-primary_dark md:p-8 p-2 font-ppNeueMontreal"
        >
            <div className="sticky top-0 z-50 md:pt-8">
                {isMobile ? <HeaderMobile /> : <Header />}
            </div>
            <div className="relative p-2 rounded-3xl overflow-hidden w-full flex items-center justify-center text-white border-2 border-primary_teal rounded-3xl max-w-[1300px] h-[95vh] md:h-[85vh]">
                <div className="flex-col justify-center justify-between items-center gap-4 flex h-full py-20">
                    <div className="flex-col justify-center items-center gap-4 flex">
                        <WalrusWalking className="w-[38px] lg:w-[50px] xl:w-[67px]" />
                        <div>
                            <span className="text-[#f7f7f7] text-3xl lg:text-[40px] xl:text-[54px] font-bold font-ppNeueBit">
                                WALRUS.
                            </span>
                            <span className="text-[#c684f6] text-3xl lg:text-[40px] xl:text-[54px] font-bold font-ppNeueBit">
                                OPERATORS
                            </span>
                        </div>
                    </div>
                    <div className="leading-[60px] xl:leading-[100px] lg:max-w-[800px] xl:max-w-[900px] text-center text-[#f7f7f7] text-[55px] lg:text-[78px] xl:text-[88px] font-normal font-ppMondwest">
                        The Future of Decentralized Hosting
                    </div>
                    <div className="max-w-[500px] text-center text-[#f7f7f7] text-xl lg:text-xl xl:text-2xl font-normal font-ppNeueMontrealThin leading-[30px]">
                        Fully decentralized, cost-efficient, and globally
                        available websites powered by Walrus.
                    </div>
                    <Button
                        size={"lg"}
                        className="z-5 hover:text-primary_dark hover:bg-primary_teal text-[#0c0f1d] h-14 rounded-xl text-base font-thin font-font-ppNeueMontreal bg-primary_teal"
                        onClick={() => {
                            amplitude.track("Clicked Create Your Site button")
                            window.open(
                                "https://docs.walrus.site/walrus-sites/tutorial.html",
                                "_blank"
                            )
                        }}
                    >
                        CREATE YOUR SITE
                    </Button>
                    <div className="absolute mt-[290px] w-[1200px] z-0 pointer-events-none">
                        {/* <div className="opacity-75 absolute inset-0 bg-gradient-to-t from-primary_dark via-transparent to-primary_dark mix-blend-overlay pointer-events-none" /> */}
                        {/* <Globe className="mix-blend-overlay" /> */}
                        <img src="/globe_big.png" alt="Globe" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AggregatorsPage
