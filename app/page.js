import ExperienceContainer from "./components/experience/ExperienceContainer";
import Nav from "./components/navigation/Nav";
import Projects from "./components/projects/Projects";
import Socials from "./components/socials/Socials";
import Image from "next/image";

export default function Home() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <header className="lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <div className="flex justify-center items-center h-32 w-32 rounded-full overflow-hidden mb-4 lg:ml-8">
                            <Image
                                src="/profile.png"
                                alt="Profile picture"
                                className="h-full w-full object-cover"
                                width="100"
                                height="100"
                                priority={true}
                                quality={100}
                            />
                        </div>
                        <a href="/">
                            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                                Josh Allen
                            </h1>
                        </a>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                            Senior Software Engineer
                        </h2>
                        <div className="flex flex-row items-center mt-3">
                            <Image
                                src="/home.svg"
                                height={20}
                                width={20}
                                alt="home"
                                priority={true}
                                quality={100}
                            />

                            <span className="ml-2 text-slate-200">
                                Solihull, UK
                            </span>
                        </div>
                        <p className="mt-3 max-w-xs leading-normal">
                            I build professional and simple solutions for
                            complex problems.
                        </p>

                        <Nav />
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <Socials />
                    </div>
                </header>
                <main className="pt-20 lg:w-1/2 lg:py-24" id="content">
                    <section id="about" className="mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only mb-6">
                            About
                        </h2>
                        <p className="mb-6">
                            Back in 2009, I embarked on creating a private
                            server for a popular game, which catapulted me into
                            the intricate world of software development.
                            Fast-forward to today, and I&lsquo;ve had the
                            privilege of building software professionally.
                        </p>
                        <p className="mb-6">
                            My main focus these days is building a mixture of
                            front and back end solutions for{" "}
                            <a
                                className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                                href="https://www.gsfcarparts.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GSF Carparts
                            </a>
                            . Leading a team of engineers, I am tasked with
                            constructing cataloging software tailored to serve
                            both our customers and internal branches. This
                            encompasses the creation of a diverse array of APIs
                            and applications designed to facilitate the seamless
                            delivery of our services.
                        </p>

                        <p className="mb-6">
                            When i&lsquo;m not at my desk, you can find me in
                            the gym, watching football or working on side
                            projects.
                        </p>
                    </section>

                    <section id="experience">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only mb-6">
                            Experience
                        </h2>
                        <ExperienceContainer />
                    </section>
                </main>
            </div>
            <section id="projects" className="mt-24 lg:py-24">
                <h2 className="text-3xl font-bold text-slate-200 mb-8">
                    Projects
                </h2>

                <Projects />
            </section>
        </div>
    );
}
