"use server"

import { actionClient } from "@/lib/action"
import { authServer } from "@/actions/auth-server"
import { headers } from "next/headers"

export const deleteAccount = actionClient.action(async () => {
  try {
    const { deleteUser } = authServer
    const header = await headers()

    const { data } = await deleteUser({
      callbackURL: `${process.env.NEXT_PUBLIC_APP_URL}/sign-in`,
      fetchOptions: {
        headers: {
          cookie: header.get("cookie") || "",
        },
      },
    })
    return {
      ...data,
    }
  } catch (error) {
    console.error("Error while deleting account: ", error)
    throw error
  }
})
