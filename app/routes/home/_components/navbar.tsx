import {
  BarChart,
  BarChart2,
  ChevronDown,
  CloudUpload,
  Database,
  Edit3,
  FileText,
  Layout,
  Lock,
  Menu,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

import Logo from "~/components/global/logo";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getInitials } from "~/lib/generateInitials";

const features = [
  {
    icon: Users,
    title: "Advanced Authentication",
    description:
      "Secure and flexible authentication system with role-based access control and multi-provider support.",
    to: "/features/authentication",
  },
  {
    icon: Layout,
    title: "Dynamic Dashboard",
    description:
      "Beautifully designed, responsive dashboard with data visualization and management tools.",
    to: "/features/dashboard",
  },
  {
    icon: FileText,
    title: "Reusable Form Components",
    description:
      "Streamline your workflows with reusable and customizable form components.",
    to: "/features/forms",
  },
  {
    icon: BarChart2,
    title: "Advanced Data Tables",
    description:
      "Manage and display data effortlessly with customizable and powerful data tables.",
    to: "/features/data-tables",
  },
  {
    icon: CloudUpload,
    title: "Image Upload",
    description:
      "Effortless image uploads powered by UploadThing, supporting both single and multiple file uploads.",
    to: "/features/image-upload",
  },
  {
    icon: Edit3,
    title: "Rich Text Editor",
    description:
      "Seamlessly create and edit rich content using an integrated Quill editor.",
    to: "/features/rich-text-editor",
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description:
      "Role-based authentication system with customizable access control.",
    to: "/features/secure-authentication",
  },
  {
    icon: Database,
    title: "Prisma ORM",
    description:
      "Leverage Prisma ORM for robust and scalable database management in TypeScript.",
    to: "/features/prisma-orm",
  },
  {
    icon: BarChart,
    title: "Analytics Integration",
    description:
      "Track performance with integrated analytics from PostHog and Vercel for actionable insights.",
    to: "/features/analytics",
  },
];

export default function Navbar({ session }: { session?: Session | null }) {
  const [open, setOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 px-6">
      <div className="container max-w-7xl mx-auto flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo />
        </div>
        <div className="flex items-center justify-between">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-md"
                  asChild
                >
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-4">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b">
                      <h4 className="text-lg font-medium">Features</h4>
                      <Link
                        to="/features"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        View all
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 ">
                      {features.map((feature, index) => (
                        <Link
                          key={index}
                          to={`/feature/${feature.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                              <feature.icon className="h-6 w-6 text-blue-500" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                {feature.title}
                              </h5>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium mb-1">Get started</h4>
                          <p className="text-sm text-muted-foreground">
                            Am really excited for all these features out of the
                            box
                          </p>
                        </div>
                        <Button asChild variant="secondary">
                          <Link
                            to="/register"
                          >
                            Get started
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  asChild
                >
                  <Link to="/how-it-works">How it Works</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {session ? (
          <Button asChild variant={"ghost"}>
            <Link to="/dashboard">
              <Avatar>
                <AvatarImage
                  src={session?.user?.image ?? ""}
                  alt={session?.user?.name ?? ""}
                />
                <AvatarFallback>
                  {getInitials(session?.user?.name)}
                </AvatarFallback>
              </Avatar>
              <span className="ml-3">Dashboard</span>
            </Link>
          </Button>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to={"/login"}>Log in</Link>
            </Button>
            <Button>
              <Link to="/register">Signup</Link>
            </Button>
          </div>
        )}

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle className="text-left">Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col py-4">
              <Link
                to="/"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <button
                className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                onClick={() => setShowFeatures(!showFeatures)}
              >
                Features
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    showFeatures && "rotate-180"
                  )}
                />
              </button>
              {showFeatures && (
                <div className="px-4 py-2 space-y-4">
                  {features.map((feature, index) => (
                    <Link
                      key={index}
                      to={`/feature/${feature.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-start gap-4 py-2"
                      onClick={() => setOpen(false)}
                    >
                      <div className="p-2 bg-muted rounded-md">
                        <feature.icon className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">{feature.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/how-it-works"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                How it works
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
              <div className="grid gap-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Button>
                <Button className="w-full" onClick={() => setOpen(false)}>
                  Sign up
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
