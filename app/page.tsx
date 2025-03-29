import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Modern Header with Mega Menu
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              This header features a responsive mega menu built with shadcn/ui components. Try resizing the window to
              see how it adapts to different screen sizes.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

