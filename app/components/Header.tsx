import { useState } from "react";
import photo from "~/images/Waterland logo.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScrollTo = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    return (
        <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/80 shadow-md border-b border-surface">
            <div className="max-w-7xl mx-auto px-6 md:px-0 py-4 flex items-center justify-between relative">
                {/* LEFT - LOGO */}

                <a
                    href="#home"
                    onClick={(e) => handleScrollTo(e, "#home")}
                    className="flex items-center gap-3 text-2xl font-bold text-primary-text tracking-wide"
                >
                    <img src={photo} alt="logo" className="w-12 h-12 rounded-full shadow-md" />
                    <h2 className="hidden sm:block">Waterland Resort</h2>
                </a>
            </div>
        </nav>
    );
}