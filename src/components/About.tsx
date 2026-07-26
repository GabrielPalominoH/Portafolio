import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

export const About = () => {
    const skills = [
        "C#", ".NET", "SQL", "NODE", "JS",
        "TS", "REACT", "NEXT", "TWD", "GIT"
    ];

    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-20 items-center"
                >
                    <div>
                        <h2 className="text-4xl md:text-7xl font-display italic mb-8">SOBRE</h2>
                        <h2 className="text-5xl md:text-9xl font-display italic text-primary-text mt-[-20px] md:mt-[-40px] mb-12">MI</h2>

                        <div className="text-default-600 text-xl font-bold uppercase tracking-tighter space-y-8 italic">
                            <p>
                                Hola! Soy Gabriel Palomino, un desarrollador <span className="text-foreground border-b-4 border-primary">fullstack</span> con experiencia en backend con C# y .NET, y frontend con React y Next.js.
                            </p>
                            <p>
                                Mi enfoque es construir <span className="text-foreground">soluciones completas y escalables</span>, desde la API hasta la interfaz de usuario.
                            </p>
                        </div>
                    </div>

                    <Card className="bg-black text-white p-12 rounded-[60px] border-none shadow-2xl">
                        <CardBody>
                            <h3 className="text-2xl font-display italic text-primary-text mb-12 text-center">SKILLS</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group cursor-pointer"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center font-display text-white text-xs group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
                                            {skill}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};
