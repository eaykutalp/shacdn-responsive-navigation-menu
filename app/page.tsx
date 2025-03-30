import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="mx-auto text-center  max-w-screen-xl">

      <main className="">
        <section className="  items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex  flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Modern Header with Mega Menu
            </h1>
            <p className="">
              This header features a responsive mega menu built with shadcn/ui components. Try resizing the window to
              see how it adapts to different screen sizes.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

