// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import React from "react"
import NavigationMenuWalrus from "./NavigationMenu.tsx"

const Header: React.FC = () => {
    return (
        <div className={"justify-center items-center flex"}>
            <NavigationMenuWalrus />
        </div>
    )
}

export default Header
