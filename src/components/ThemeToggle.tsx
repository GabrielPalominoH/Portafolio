import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button
            isIconOnly
            variant="light"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="text-black dark:text-foreground"
        >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </Button>
    );
};
