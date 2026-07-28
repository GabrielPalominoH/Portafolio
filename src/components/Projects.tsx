import { Card, CardFooter, Image, Button } from "@heroui/react";
import { motion } from "framer-motion";

export const Projects = () => {
    const projectsList = [
        {
            title: "COLORGUEST V1",
            image: "/projects/colorguest.png",
            tech: "REACT + VITE + CSS",
            type: "WEB APP",
            link: "https://guest-color-sigma.vercel.app"
        },
        {
            title: "CALCULADORA MVVM",
            image: "/projects/calculator.png",
            tech: "C# + WPF + MVVM",
            type: "DESKTOP APP",
            link: "https://github.com/GabrielPalominoH/calculadora-MVVM-C-"
        },
        {
            title: "TODO LIST MVVM",
            image: "/projects/todolist.png",
            tech: "C# + WPF + MVVM",
            type: "DESKTOP APP",
            link: "https://github.com/GabrielPalominoH/ToDoList-MVVM-C--WPF"
        },
        {
            title: "PORTAFOLIO",
            image: "/projects/portafolio.png",
            tech: "TYPESCRIPT + NEXT.JS",
            type: "WEB APP",
            link: "https://github.com/GabrielPalominoH/portafolio"
        }
    ];

    return (
        <section id="projects" className="section-padding relative bg-black text-white mt-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-8xl font-display italic">MIS</h2>
                    <h2 className="text-5xl md:text-9xl font-display italic text-primary-text mt-[-20px] md:mt-[-40px]">PROYECTOS</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="w-full h-[500px] border-none rounded-[40px] overflow-hidden group">
                                <Image
                                    removeWrapper
                                    alt={project.title}
                                    className="z-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100"
                                    src={project.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                                <CardFooter className="absolute bottom-0 z-20 w-full flex-col items-start p-8">
                                    <span className="bg-primary text-black px-4 py-1 font-bold text-xs rounded-full mb-4">
                                        {project.type}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-display text-white italic group-hover:text-primary-text transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 font-bold mt-2">{project.tech}</p>

                                    <Button
                                        radius="full"
                                        className="mt-6 bg-white text-black font-display opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all"
                                        onPress={() => project.link !== "#" && window.open(project.link, '_blank')}
                                    >
                                        VAMOS A SU WEB!
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
