// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import React from "react"
import HamburgerMenu from "@/components/HamburgerMenu.tsx"

const HeaderMobile: React.FC = () => {
    return (
        <div className={"absolute top-5 right-5 z-10"}>
            <HamburgerMenu />
        </div>
    )
}

export default HeaderMobile
