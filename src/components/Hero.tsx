import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden py-32">
            {/* Background geometric decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-40 h-40 border-[10px] border-primary/20 rounded-full -z-10"
            ></motion.div>
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 w-60 h-60 bg-primary/10 rounded-[40px] rotate-12 -z-10"
            ></motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <h1 className="omelet-heading mb-4">
                    PORTAFOLIO
                </h1>
                <h1 className="omelet-heading text-primary-text">
                    2026
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl mt-8 font-bold max-w-2xl text-default-600 italic uppercase tracking-tighter"
            >
                Desarrollo de Experiencias <span className="text-foreground">Digitales de Alto Impacto</span>
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12"
            >
                <a href="#contact">
                    <Button
                        size="lg"
                        className="bg-primary text-black font-display text-xl px-12 py-8 rounded-full shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                        HABLEMOS!
                    </Button>
                </a>
            </motion.div>
        </section>
    );
};
