import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createInsforgeServer } from "@/lib/insforge-server";

const featureSteps: {
  title: string;
  description: string;
}[] = [
  {
    title: "Find jobs that actually fit",
    description:
      "Search by title and location or paste a job link. Get matched roles you can quickly scan.",
  },
  {
    title: "Know the Company Before You Apply",
    description:
      "Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence.",
  },
  {
    title: "Keep track of every application",
    description:
      "Keep a clear view of every job you have found, tailored. Your activity and progress all stay in one simple place.",
  },
];

const confidenceSteps: {
  title: string;
  description: string;
}[] = [
  {
    title: "Understand your match score",
    description:
      "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what's missing.",
  },
  {
    title: "AI-Powered Job Matching",
    description:
      "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.",
  },
  {
    title: "Focus on the right roles",
    description:
      "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
  },
];

export default async function Home() {
  const insforge = await createInsforgeServer();
  const {
    data: { user },
  } = await insforge.auth.getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <div className="mx-auto max-w-[1440px] border-x border-border bg-surface">
        <header className="flex h-16 items-center justify-between border-b border-border px-6 md:px-10 lg:px-20">
          <Link href="/" className="flex items-center gap-2" aria-label="JobPilot home">
            <Image
              src="/public/logo.png"
              alt="JobPilot"
              width={145}
              height={43}
              priority
              className="h-[29px] w-auto"
            />
          </Link>

          <nav
            className="hidden items-center gap-9 text-sm font-medium text-text-dark md:flex"
            aria-label="Main navigation"
          >
            <Link href="/dashboard" className="hover:text-accent">
              Dashboard
            </Link>
            <Link href="/find-jobs" className="hover:text-accent">
              Find Jobs
            </Link>
            <Link href="/profile" className="hover:text-accent">
              Profile
            </Link>
          </nav>

          <Link
            href="/login"
            className="rounded-md bg-overlay px-4 py-2 text-sm font-medium text-accent-foreground shadow-sm"
          >
            Start for free
          </Link>
        </header>

        <section className="px-6 py-14 md:px-10 lg:px-20">
          <div className="jp-soft-wash border border-border px-6 pb-0 pt-16 text-center md:px-10 md:pt-20">
            <h1 className="mx-auto max-w-[670px] text-[42px] font-semibold leading-[1.05] tracking-normal text-text-black md:text-[56px]">
              Job hunting is hard.
              <br />
              Your tools should not be.
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-sm font-medium leading-6 text-text-secondary">
              Stop applying blind. JobPilot finds the jobs, researches the companies, and
              gives you everything you need to stand out.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/login"
                className="rounded-md bg-overlay px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm"
              >
                Get Started &gt;
              </Link>
              <Link
                href="/find-jobs"
                className="rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-text-primary shadow-sm"
              >
                Find Your First Match
              </Link>
            </div>

            <div className="mt-16 border-t border-border bg-surface-tertiary px-6 py-12 md:px-12">
              <Image
                src="/public/images/dashboard-demo.png"
                alt="JobPilot dashboard preview"
                width={2048}
                height={976}
                priority
                className="mx-auto w-full max-w-[1130px]"
              />
            </div>
          </div>
        </section>

        <section className="grid border-y border-border lg:grid-cols-2">
          <div className="flex min-h-[470px] flex-col justify-center border-border px-8 py-12 md:px-16 lg:border-r">
            <h2 className="max-w-[390px] text-[36px] font-semibold leading-[1.08] tracking-normal text-text-slate md:text-[43px]">
              Manage Your Job Search With Ease
            </h2>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {featureSteps.map((step, index) => (
                <article
                  key={step.title}
                  className={`py-7 pl-6 ${
                    index === 0 ? "border-l-2 border-accent" : "border-l-2 border-transparent"
                  }`}
                >
                  <h3 className="text-base font-semibold leading-6 text-text-slate">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[500px] text-sm font-medium leading-6 text-text-secondary">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center bg-surface-muted px-8 py-14 md:px-16">
            <Image
              src="/public/images/jobs-lists.png"
              alt="Matched jobs list preview"
              width={1842}
              height={1424}
              className="w-full max-w-[590px]"
            />
          </div>
        </section>

        <div className="jp-stripe-separator h-20 border-b border-border" />

        <section className="grid border-b border-border lg:grid-cols-2">
          <div className="flex items-center justify-center bg-surface-muted px-8 py-16 md:px-16">
            <Image
              src="/public/images/agnet-log.png"
              alt="JobPilot agent log preview"
              width={1780}
              height={1376}
              className="w-full max-w-[540px] rounded-xl shadow-sm"
            />
          </div>

          <div className="flex min-h-[470px] flex-col justify-center px-8 py-12 md:px-16">
            <h2 className="max-w-[470px] text-[36px] font-semibold leading-[1.08] tracking-normal text-text-slate md:text-[43px]">
              Apply With More Confidence, Every Time
            </h2>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {confidenceSteps.map((step, index) => (
                <article
                  key={step.title}
                  className={`py-7 pl-6 ${
                    index === 1 ? "border-l-2 border-success" : "border-l-2 border-transparent"
                  }`}
                >
                  <h3 className="text-base font-semibold leading-6 text-text-slate">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[500px] text-sm font-medium leading-6 text-text-secondary">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="jp-stripe-separator h-20 border-b border-border" />

        <section className="px-6 py-20 text-center md:px-10 lg:px-20">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Success Stories
          </p>
          <blockquote className="mx-auto mt-7 max-w-[760px] text-[26px] font-medium leading-[1.35] text-text-slate md:text-[32px]">
            &ldquo;I used to spend my evenings copy-pasting resumes. Now I open my dashboard
            to see interviews waiting. It feels like cheating. Had 3 offers on the
            table simultaneously.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Image
              src="/public/images/user-icon.png"
              alt="Tom Wilson"
              width={64}
              height={64}
              className="h-10 w-10 rounded-sm"
            />
            <div className="text-left">
              <p className="text-sm font-semibold leading-5 text-text-primary">Tom Wilson</p>
              <p className="text-xs font-medium leading-4 text-text-secondary">
                Junior Developer
              </p>
            </div>
          </div>
        </section>

        <div className="jp-stripe-separator h-20 border-y border-border" />

        <section className="jp-soft-wash px-6 py-20 text-center md:px-10 md:py-24 lg:px-20">
          <h2 className="mx-auto max-w-[760px] text-[40px] font-semibold leading-[1.05] tracking-normal text-text-black md:text-[54px]">
            Your next job search can feel a lot less overwhelming
          </h2>
          <p className="mx-auto mt-7 max-w-[600px] text-sm font-medium leading-6 text-text-secondary">
            Set up your profile, upload your resume, and start finding matches in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/login"
              className="rounded-md bg-overlay px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm"
            >
              Get Started &gt;
            </Link>
            <Link
              href="/find-jobs"
              className="rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-text-primary shadow-sm"
            >
              Find Your First Match
            </Link>
          </div>
        </section>

        <div className="jp-stripe-separator h-20 border-y border-border" />

        <footer className="flex flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10 lg:px-20">
          <Link href="/" className="flex items-center gap-2" aria-label="JobPilot home">
            <Image
              src="/public/logo.png"
              alt="JobPilot"
              width={145}
              height={43}
              className="h-[31px] w-auto"
            />
          </Link>
          <nav
            className="flex flex-wrap gap-x-9 gap-y-3 text-sm font-medium text-text-dark"
            aria-label="Footer navigation"
          >
            <Link href="/dashboard" className="hover:text-accent">
              Dashboard
            </Link>
            <Link href="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms &amp; Condition
            </Link>
          </nav>
        </footer>
      </div>
    </main>
  );
}
