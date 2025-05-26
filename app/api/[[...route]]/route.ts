import { app } from "@/server/db"
import { handle } from "hono/vercel"

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
