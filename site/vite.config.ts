// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import path from "path"
import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"

export default defineConfig({
    plugins: [react()],
    server: {
        host: "localhost",
        port: 5173,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
