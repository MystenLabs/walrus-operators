// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import OperatorsJSON from "./pages/OperatorsJSON"

const LazyAggregatorsPage = lazy(() => import("./pages/AggregatorsPage"))
const LazyPublishersPage = lazy(() => import("./pages/PublishersPage"))
const LazyCustom404Page = lazy(() => import("./pages/Custom404"))

const App: React.FC = () => {
    return (
        <BrowserRouter>
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
                            <LazyPublishersPage />
                        </Suspense>
                    }
                />
                <Route path="/operators" element={<OperatorsJSON />} />
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
