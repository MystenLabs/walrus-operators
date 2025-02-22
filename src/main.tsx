// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
// import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/*<GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_PUBLIC_KEY}>*/}
        <App />
        {/*</GoogleReCaptchaProvider>*/}
    </StrictMode>
)
