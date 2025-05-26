"use server"

import { jwtClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"

export const authServer = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL  || "http://localhost:3000",
  plugins: [jwtClient()],
})
