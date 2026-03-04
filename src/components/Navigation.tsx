import { Link } from "@heroui/react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle"; // Assuming ThemeToggle exists or needs to be moved/created

export const Navigation = () => {
    return (
        <>
            {/* Left Sidebar - Branding */}
            <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                className="fixed left-0 top-0 h-screen w-12 md:w-24 bg-primary flex flex-col items-center justify-between py-8 md:py-12 z-50 border-r-2 border-black hidden sm:flex"
            >
                <div className="flex flex-col items-center gap-8 md:gap-12">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-primary font-display text-xl md:text-2xl overflow-hidden">
                        <span className="translate-y-1">O</span>
                    </div>
                    <div className="[writing-mode:vertical-lr] rotate-180 flex items-center gap-4 md:gap-6">
                        <span className="font-display text-xl md:text-3xl tracking-widest text-black">
                            GABRIEL PORTFOLIO
                        </span>
                    </div>
                </div>
                <ThemeToggle />
            </motion.div>

            {/* Right Sidebar - Social Links */}
            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className="fixed right-0 top-0 h-screen w-12 md:w-20 bg-background flex flex-col items-center justify-center gap-8 md:gap-12 z-50 border-l-2 border-default-200 hidden sm:flex"
            >
                <div className="flex flex-col items-center gap-6 md:gap-8">
                    <Link href="https://github.com/GabrielPalominoH" target="_blank" className="text-foreground hover:text-primary transition-colors">
                        <Github size={20} className="md:w-6 md:h-6" />
                    </Link>
                    <Link href="#" className="text-foreground hover:text-primary transition-colors">
                        <Linkedin size={20} className="md:w-6 md:h-6" />
                    </Link>
                    <Link href="#" className="text-foreground hover:text-primary transition-colors">
                        <Twitter size={20} className="md:w-6 md:h-6" />
                    </Link>
                    <Link href="#" className="text-foreground hover:text-primary transition-colors">
                        <Mail size={20} className="md:w-6 md:h-6" />
                    </Link>
                </div>
                <div className="h-16 md:h-24 w-[2px] bg-default-300"></div>
                <span className="[writing-mode:vertical-lr] text-[10px] md:text-xs font-bold tracking-tighter text-default-400 rotate-180">
                    SÍGUEME
                </span>
            </motion.div>

            {/* Mobile Top Bar (Optional if you want a simplified menu on mobile) */}
            <div className="sm:hidden fixed top-0 w-full bg-primary p-4 z-[60] flex justify-between items-center border-b-2 border-black">
                <span className="font-display text-xl text-black">GP</span>
                <ThemeToggle />
            </div>
        </>
    );
};
