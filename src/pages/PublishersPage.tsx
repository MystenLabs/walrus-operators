// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useState } from "react"
import { WalrusWalking } from "../components/assets/WalrusWalking.tsx"
import Header from "@/components/Header.tsx"



const PublishersPage: React.FC = () => {
    const [publishers, setPublishers] = useState<string[]>([])

    const listItems = publishers.map((aggregator: string, index: number) => {
        return <div className="mt-2" key={aggregator}>{index + 1}. {aggregator}</div>
    })

    const fetchOperators = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/MystenLabs/walrus-operators/refs/heads/main/operators.json')
            const data = await response.json()
            setPublishers(Object.keys(data.publishers))
        } catch (error) {
            console.error('Error fetching operators:', error)
        }
    }
    useEffect(() => {
        fetchOperators()
    }, [])

    return (
        <section
            id="publishers"
            className="flex flex-col h-[100vh] items-center bg-primary_dark p-3 font-ppNeueMontreal"
        >
            <div className="sticky top-0 z-50 mb-2 md:py-4 py-2">
                <Header/>
            </div>
            <div className="relative p-2 rounded-3xl overflow-hidden w-full flex items-center justify-center text-white border-2 border-primary_teal rounded-3xl max-w-[1300px] h-[90vh] md:h-[85vh]">
                <div className="w-full flex-col justify-center justify-between items-center gap-4 flex h-full py-2">
                    <div className="flex-col justify-center items-center gap-4 flex">
                        <WalrusWalking className="w-[38px] lg:w-[50px] xl:w-[67px]" />
                        <div>
                            <span className="text-[#f7f7f7] text-3xl lg:text-[40px] xl:text-[54px] font-bold font-ppNeueBit">
                                WALRUS.
                            </span>
                            <span className="text-[#c684f6] text-3xl lg:text-[40px] xl:text-[54px] font-bold font-ppNeueBit">
                                PUBLISHERS
                            </span>
                        </div>
                    </div>
                 
                    <div className="w-full overflow-y-auto overflow-x-auto text-nowrap text-left md:text-center text-[#f7f7f7] text-xl lg:text-xl xl:text-2xl font-normal font-ppNeueBitBold leading-[30px]">
                    {listItems}
                    </div>
                   
                    <div className="absolute bottom-0 w-[1200px] z-0 pointer-events-none">
                        {/* <div className="opacity-75 absolute inset-0 bg-gradient-to-t from-primary_dark via-transparent to-primary_dark mix-blend-overlay pointer-events-none" /> */}
                        {/* <Globe className="mix-blend-overlay" /> */}
                        <img src="/globe_big.png" alt="Globe" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PublishersPage
