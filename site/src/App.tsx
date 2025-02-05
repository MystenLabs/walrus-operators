// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import React, { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as amplitude from "@amplitude/analytics-browser"
import { AMPLITUDE_API_KEY } from "./config/globalVariables"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const LazyAggregatorsPage = lazy(() => import("./pages/AggregatorsPage"))
const LazyCustom404Page = lazy(() => import("./pages/Custom404"))

const App: React.FC = () => {
    useEffect(() => {
        try {
            amplitude.init(AMPLITUDE_API_KEY, {
                autocapture: true,
                identityStorage: "none",
            })
        } catch (e) {
            console.error("Amplitude initialization failed:", e)
        }
    }, [])
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense>
                            <LazyAggregatorsPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/aggregators"
                    element={
                        <Suspense>
                            <LazyAggregatorsPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/publishers"
                    element={
                        <Suspense>
                            <LazyAggregatorsPage />
                        </Suspense>
                    }
                />
                { /*<Route
                    path="/how"
                    element={
                        <Suspense>
                            <LazyHowPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/use-cases"
                    element={
                        <Suspense>
                            <LazyUseCasesPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/terms-of-service"
                    element={
                        <Suspense>
                            <LazyToSPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/privacy-policy"
                    element={
                        <Suspense>
                            <LazyPrivacyPolicyPage />
                        </Suspense>
                    }
                /> */}
                <Route
                    path="*"
                    element={
                        <Suspense>
                            <LazyCustom404Page />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
