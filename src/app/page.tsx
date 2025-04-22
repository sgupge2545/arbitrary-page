import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Menu,
  Moon,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="bg-background flex flex-col items-center justify-center">
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  N
                </div>
              </div>
              <span className="text-xl font-bold">Foge</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Work
              </Link>
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Insights
              </Link>
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button variant="outline" className="rounded-full hidden md:flex">
                Book a Call
              </Button>
              <Button className="rounded-full hidden md:flex">
                Get Started
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Transforming Ideas into Digital Experiences
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      We blend creativity and technology to build digital
                      products that elevate brands and drive business growth.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="rounded-full">
                      Explore Our Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      Our Process
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex -space-x-2">
                      <div className="inline-block h-8 w-8 rounded-full bg-gray-100 ring-2 ring-background">
                        <Image
                          src="/e.png"
                          width={32}
                          height={32}
                          alt="Avatar"
                          className="rounded-full"
                        />
                      </div>
                      <div className="inline-block h-8 w-8 rounded-full bg-gray-100 ring-2 ring-background">
                        <Image
                          src="/e.png"
                          width={32}
                          height={32}
                          alt="Avatar"
                          className="rounded-full"
                        />
                      </div>
                      <div className="inline-block h-8 w-8 rounded-full bg-gray-100 ring-2 ring-background">
                        <Image
                          src="/e.png"
                          width={32}
                          height={32}
                          alt="Avatar"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      Trusted by{" "}
                      <span className="font-medium text-foreground">500+</span>{" "}
                      clients worldwide
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <Image
                      src="/e.png"
                      width={400}
                      height={450}
                      alt="Hero"
                      className="absolute inset-0 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Our Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Comprehensive Digital Solutions
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    We offer end-to-end services to help businesses thrive in
                    the digital landscape.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-background/60 backdrop-blur-lg">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 7h10" />
                        <path d="M7 12h10" />
                        <path d="M7 17h10" />
                      </svg>
                    </div>
                    <CardTitle className="mt-4">Web Development</CardTitle>
                    <CardDescription>
                      Custom websites and web applications built with the latest
                      technologies.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-normal text-primary"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="bg-background/60 backdrop-blur-lg">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <CardTitle className="mt-4">UI/UX Design</CardTitle>
                    <CardDescription>
                      User-centered design that creates intuitive and engaging
                      digital experiences.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-normal text-primary"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="bg-background/60 backdrop-blur-lg">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                      </svg>
                    </div>
                    <CardTitle className="mt-4">Digital Marketing</CardTitle>
                    <CardDescription>
                      Strategic marketing solutions to increase visibility and
                      drive conversions.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-normal text-primary"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="bg-background/60 backdrop-blur-lg">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.29 7 12 12 20.71 7" />
                        <line x1="12" x2="12" y1="22" y2="12" />
                      </svg>
                    </div>
                    <CardTitle className="mt-4">E-commerce Solutions</CardTitle>
                    <CardDescription>
                      Custom online stores with seamless shopping experiences
                      and payment integration.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-normal text-primary"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="bg-background/60 backdrop-blur-lg">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M12 18v-6" />
                        <path d="M8 18v-1" />
                        <path d="M16 18v-3" />
                      </svg>
                    </div>
                    <CardTitle className="mt-4">Content Strategy</CardTitle>
                    <CardDescription>
                      Compelling content that tells your story and connects with
                      your audience.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-normal text-primary"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="bg-background/60 backdrop-blur-lg">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M20 7h-9" />
                        <path d="M14 17H5" />
                        <circle cx="17" cy="17" r="3" />
                        <circle cx="7" cy="7" r="3" />
                      </svg>
                    </div>
                    <CardTitle className="mt-4">Brand Identity</CardTitle>
                    <CardDescription>
                      Distinctive visual identities that capture your brand's
                      essence and values.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-normal text-primary"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Our Work
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Featured Projects
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    Explore our portfolio of award-winning digital experiences.
                  </p>
                </div>
              </div>
              <Tabs defaultValue="all" className="mt-12">
                <div className="flex justify-center">
                  <TabsList className="grid w-full max-w-md grid-cols-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="web">Web</TabsTrigger>
                    <TabsTrigger value="mobile">Mobile</TabsTrigger>
                    <TabsTrigger value="branding">Branding</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="all" className="mt-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className="group relative overflow-hidden rounded-lg"
                      >
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src="/e.png"
                            width={600}
                            height={600}
                            alt={`Project ${item}`}
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-bold">
                            Project Title {item}
                          </h3>
                          <p className="text-sm">Web Design / Development</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 w-fit bg-transparent text-white hover:bg-white/20 hover:text-white"
                          >
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="web" className="mt-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="group relative overflow-hidden rounded-lg"
                      >
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src="/e.png"
                            width={600}
                            height={600}
                            alt={`Web Project ${item}`}
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-bold">
                            Web Project {item}
                          </h3>
                          <p className="text-sm">Web Design / Development</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 w-fit bg-transparent text-white hover:bg-white/20 hover:text-white"
                          >
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="mobile" className="mt-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2].map((item) => (
                      <div
                        key={item}
                        className="group relative overflow-hidden rounded-lg"
                      >
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src="/e.png"
                            width={600}
                            height={600}
                            alt={`Mobile Project ${item}`}
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-bold">
                            Mobile Project {item}
                          </h3>
                          <p className="text-sm">Mobile App Development</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 w-fit bg-transparent text-white hover:bg-white/20 hover:text-white"
                          >
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="branding" className="mt-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1].map((item) => (
                      <div
                        key={item}
                        className="group relative overflow-hidden rounded-lg"
                      >
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src="/e.png"
                            width={600}
                            height={600}
                            alt={`Branding Project ${item}`}
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-bold">
                            Branding Project {item}
                          </h3>
                          <p className="text-sm">Brand Identity / Design</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 w-fit bg-transparent text-white hover:bg-white/20 hover:text-white"
                          >
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              <div className="mt-12 flex justify-center">
                <Button className="rounded-full">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                      About Us
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      We're a team of creative thinkers and problem solvers
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                      Founded in 2015, Foge has grown from a small team of
                      passionate designers and developers to a full-service
                      digital agency with offices in New York, London, and
                      Tokyo.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="flex flex-col">
                      <div className="text-3xl font-bold">150+</div>
                      <div className="text-muted-foreground">
                        Projects Completed
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-3xl font-bold">80+</div>
                      <div className="text-muted-foreground">Happy Clients</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-3xl font-bold">25+</div>
                      <div className="text-muted-foreground">Team Members</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-muted-foreground">
                        Industry Awards
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button className="rounded-full">
                      Meet Our Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-4">
                      <div className="overflow-hidden rounded-lg">
                        <Image
                          src="/e.png"
                          width={300}
                          height={400}
                          alt="Team"
                          className="h-auto w-auto object-cover"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg">
                        <Image
                          src="/e.png"
                          width={300}
                          height={300}
                          alt="Office"
                          className="h-auto w-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <div className="overflow-hidden rounded-lg">
                        <Image
                          src="/e.png"
                          width={300}
                          height={300}
                          alt="Workspace"
                          className="h-auto w-auto object-cover"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg">
                        <Image
                          src="/e.png"
                          width={300}
                          height={400}
                          alt="Collaboration"
                          className="h-auto w-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    What Our Clients Say
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    Don't just take our word for it. Here's what our clients
                    have to say about working with us.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "CEO, TechStart",
                    quote:
                      "Working with Foge transformed our digital presence. Their team understood our vision and delivered beyond our expectations.",
                  },
                  {
                    name: "Michael Chen",
                    role: "Marketing Director, GrowthBrand",
                    quote:
                      "The attention to detail and creative solutions provided by Foge helped us increase our conversion rates by 40% in just three months.",
                  },
                  {
                    name: "Emma Rodriguez",
                    role: "Founder, EcoLife",
                    quote:
                      "Foge didn't just build us a website, they created a digital ecosystem that perfectly represents our brand values and mission.",
                  },
                  {
                    name: "David Kim",
                    role: "CTO, InnovateTech",
                    quote:
                      "The development team at Foge is exceptional. They delivered our complex web application on time and with impeccable code quality.",
                  },
                  {
                    name: "Jessica Taylor",
                    role: "Creative Director, ArtHouse",
                    quote:
                      "As a design-focused company, we have high standards. Foge not only met them but exceeded them with their creative approach and technical expertise.",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                        <Image
                          src="/e.png"
                          width={64}
                          height={64}
                          alt={testimonial.name}
                          className="rounded-full"
                        />
                      </div>
                      <CardTitle className="mt-4">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to Transform Your Digital Presence?
                  </h2>
                  <p className="max-w-[900px] md:text-xl/relaxed">
                    Let's collaborate to create something extraordinary
                    together.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="secondary" className="rounded-full">
                    Get in Touch
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    View Our Process
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full border-t bg-background py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                      N
                    </div>
                  </div>
                  <span className="text-xl font-bold">Foge</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Creating exceptional digital experiences that drive business
                  growth and user engagement.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      E-commerce Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Content Strategy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Brand Identity
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-muted-foreground">
                      123 Innovation Street, New York, NY 10001
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-muted-foreground">
                      +1 (555) 123-4567
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="text-muted-foreground">
                      hello@Fogeagency.com
                    </span>
                  </li>
                </ul>
                <form className="mt-4 flex flex-col gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="rounded-full"
                  />
                  <Button className="rounded-full">
                    Subscribe to Newsletter
                  </Button>
                </form>
              </div>
            </div>
            <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} Foge Digital Agency. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
