// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import React from "react"
import Header from "../components/Header.tsx"
import { isMobile } from "react-device-detect"
import HeaderMobile from "../components/HeaderMobile.tsx"
import HomePage from "./AggregatorsPage.tsx"
import Footer from "../components/Footer.tsx"

const ParentPage: React.FC = () => {
    return (
        <div className="bg-primary_dark flex flex-col justify-center items-center h-full">
            <div className="sticky top-0 z-50 md:pt-8">
                {isMobile ? <HeaderMobile /> : <Header />}
            </div>
            <HomePage />
            <Footer />
        </div>
    )
}

export default ParentPage
