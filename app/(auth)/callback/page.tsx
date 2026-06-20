import { redirect } from "next/navigation";
import { createInsforgeServer } from "@/lib/insforge-server";

export default async function AuthCallbackPage() {
  const insforge = await createInsforgeServer();
  const {
    data: { user },
    error,
  } = await insforge.auth.getCurrentUser();

  if (error) {
    console.error("[auth/callback]", error);
    redirect("/login");
  }

  if (!user) {
    redirect("/login");
  }

  redirect("/dashboard");
}
