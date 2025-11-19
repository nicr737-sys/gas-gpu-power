import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/project", label: "Проект" },
  { href: "/progress", label: "Реализация" },
  { href: "/terms", label: "Условия выпуска" },
  { href: "/docs", label: "Документы" },
  { href: "/faq", label: "FAQ" },
  { href: "/news", label: "Новости" },
  { href: "/contact", label: "Контакты" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            <span className="text-gradient">Энерго-контейнеры</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-energy",
                  location.pathname === link.href ? "text-energy" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-energy",
                  location.pathname === link.href ? "text-energy" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
