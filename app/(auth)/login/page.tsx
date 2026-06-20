import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <div className="mx-auto flex min-h-screen max-w-[920px] flex-col justify-center px-6 py-12 lg:px-12">
        <div className="rounded-2xl border border-border bg-surface p-10 shadow-sm">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Welcome back</p>
            <h1 className="mt-4 text-3xl font-semibold text-text-dark">Sign in to JobPilot</h1>
            <p className="mt-3 max-w-[620px] text-sm font-medium leading-6 text-text-secondary">
              Continue with Google or GitHub to access your personalized job search dashboard.
            </p>
          </div>

          <div className="space-y-4">
            <form action="/api/auth/login/google" method="post">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-surface px-4 py-3 text-sm font-medium text-text-primary border border-border transition hover:bg-surface-secondary"
              >
                Continue with Google
              </button>
            </form>

            <form action="/api/auth/login/github" method="post">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-surface px-4 py-3 text-sm font-medium text-text-primary border border-border transition hover:bg-surface-secondary"
              >
                Continue with GitHub
              </button>
            </form>
          </div>

          <p className="mt-8 text-sm font-medium text-text-secondary">
            New to JobPilot? <Link href="/" className="text-accent">Return to homepage</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
