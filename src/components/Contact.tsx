import { Input, Textarea, Button } from "@heroui/react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 },
            colors: ["#FFF000", "#000000", "#ffffff"]
        });

        setTimeout(() => {
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <section id="contact" className="section-padding relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-20 items-center"
                >
                    <div>
                        <h2 className="text-4xl md:text-7xl font-display italic mb-8">HABLEMOS</h2>
                        <h2 className="text-5xl md:text-9xl font-display italic text-primary-text mt-[-20px] md:mt-[-40px] mb-12">AHORA</h2>

                        <div className="text-default-600 text-xl font-bold uppercase tracking-tighter space-y-4 italic">
                            <p>¿TIENES UN PROYECTO?</p>
                            <p>¿QUIERES COLABORAR?</p>
                            <p className="text-primary-text">ROMPE EL HIELO!</p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-black p-12 rounded-[60px] border-4 border-black dark:border-white shadow-[16px_16px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_rgba(255,255,255,0.1)] transition-all"
                    >
                        <div className="flex flex-col gap-10">
                            <Input
                                isRequired
                                label="NOMBRE"
                                placeholder="ESCRIBE TU NOMBRE"
                                variant="underlined"
                                labelPlacement="outside"
                                classNames={{
                                    label: "font-display text-2xl italic text-primary-text !mb-6",
                                    input: "font-bold text-xl uppercase py-6",
                                }}
                            />
                            <Input
                                isRequired
                                type="email"
                                label="EMAIL"
                                placeholder="TU@CORREO.COM"
                                variant="underlined"
                                labelPlacement="outside"
                                classNames={{
                                    label: "font-display text-2xl italic text-primary-text !mb-6",
                                    input: "font-bold text-xl uppercase py-6",
                                }}
                            />
                            <Textarea
                                isRequired
                                label="MENSAJE"
                                placeholder="¿EN QUÉ PUEDO AYUDARTE?"
                                variant="underlined"
                                labelPlacement="outside"
                                minRows={6}
                                classNames={{
                                    label: "font-display text-2xl italic text-primary-text !mb-6",
                                    input: "font-bold text-lg uppercase py-4",
                                }}
                            />

                            <Button
                                isLoading={isSubmitting}
                                type="submit"
                                className="bg-primary text-black font-display text-2xl py-10 rounded-full shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                            >
                                ENVIAR!
                            </Button>
                        </div>
                    </form>
                </motion.div>

                <div className="mt-40 text-center border-t-4 border-black pt-12">
                    <p className="font-display text-2xl italic">&copy; {new Date().getFullYear()} GABRIEL PORTFOLIO</p>
                    <p className="font-bold text-default-400 mt-2 uppercase tracking-widest">INNOVACION QUE FUNCIONA</p>
                </div>
            </div>
        </section>
    );
};
