"use client"

import * as React from "react"
import Link from "next/link"
import {
  Menu,
  ShoppingCart,
  User,
  BarChart,
  FileText,
  Layers,
  Settings,
  Terminal,
  PenToolIcon as Tool,
  Zap,
  BookOpen,
  Code,
  HelpCircle,
  Boxes,
  Layout,
  RefreshCw,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const components: {
  title: string
  href: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    icon: Terminal,
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
    icon: Layout,
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task.",
    icon: Layers,
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    icon: Boxes,
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    icon: Settings,
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    icon: Tool,
  },
]

export function SiteHeader() {
  return (
    <header className="px-4 mx-auto   sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex h-16 items-center justify-center mx-auto content-center max-w-screen-xl">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-6 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 hidden md:block">
          <span className="text-xl font-bold">Brand</span>
        </Link>
        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User Account</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Zap className="h-6 w-6 mb-3" />
                    <div className="mb-2 mt-4 text-lg font-medium">Featured Product</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Check out our latest product offering with amazing features.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/products/analytics" title="Analytics" icon={BarChart}>
                Track and visualize your data in real-time
              </ListItem>
              <ListItem href="/products/automation" title="Automation" icon={RefreshCw}>
                Automate your workflow and save time
              </ListItem>
              <ListItem href="/products/reports" title="Reports" icon={FileText}>
                Generate detailed reports and insights
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href} icon={component.icon}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <BookOpen className="h-6 w-6 mb-3" />
                    <div className="mb-2 mt-4 text-lg font-medium">Documentation</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Learn how to integrate our tools into your app
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/resources/api" title="API Reference" icon={Code}>
                Detailed API documentation
              </ListItem>
              <ListItem href="/resources/guides" title="Guides" icon={FileText}>
                Step-by-step guides and tutorials
              </ListItem>
              <ListItem href="/resources/support" title="Support" icon={HelpCircle}>
                Get help from our support team
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3 p-4">
      <Link href="/" className="mb-4">
        <span className="text-xl font-bold">Brand</span>
      </Link>
      <div className="space-y-3">
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold">Products</h2>
          <nav className="flex flex-col space-y-3">
            <Link
              href="/products/analytics"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <BarChart className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              href="/products/automation"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <RefreshCw className="h-4 w-4" />
              Automation
            </Link>
            <Link href="/products/reports" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <FileText className="h-4 w-4" />
              Reports
            </Link>
          </nav>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold">Components</h2>
          <nav className="flex flex-col space-y-3">
            {components.map((component) => (
              <Link
                key={component.title}
                href={component.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <component.icon className="h-4 w-4" />
                {component.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold">Resources</h2>
          <nav className="flex flex-col space-y-3">
            <Link href="/resources/api" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <Code className="h-4 w-4" />
              API Reference
            </Link>
            <Link href="/resources/guides" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <FileText className="h-4 w-4" />
              Guides
            </Link>
            <Link
              href="/resources/support"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <HelpCircle className="h-4 w-4" />
              Support
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
    icon?: React.ComponentType<{ className?: string }>
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

