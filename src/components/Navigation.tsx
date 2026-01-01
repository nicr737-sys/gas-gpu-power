import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.jpg";

const projectSubLinks = [
  { href: "/project", label: "Описание" },
  { href: "/progress", label: "Реализация" },
  { href: "/docs", label: "Документы" },
];

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/terms", label: "Условия выпуска" },
  { href: "/about", label: "О компании" },
  { href: "/contact", label: "Контакты" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const location = useLocation();

  const isProjectActive = projectSubLinks.some(link => location.pathname === link.href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center h-12">
            <img src={logo} alt="ЭнергоТех" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={cn(
                "text-base font-semibold transition-colors hover:text-energy",
                location.pathname === "/" ? "text-energy" : "text-foreground"
              )}
            >
              Главная
            </Link>

            {/* Project Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "flex items-center gap-1 text-base font-semibold transition-colors hover:text-energy outline-none",
                isProjectActive ? "text-energy" : "text-foreground"
              )}>
                Проект
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background border-border">
                {projectSubLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      to={link.href}
                      className={cn(
                        "w-full cursor-pointer",
                        location.pathname === link.href ? "text-energy" : ""
                      )}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/terms"
              className={cn(
                "text-base font-semibold transition-colors hover:text-energy",
                location.pathname === "/terms" ? "text-energy" : "text-foreground"
              )}
            >
              Условия выпуска
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-base font-semibold transition-colors hover:text-energy",
                location.pathname === "/about" ? "text-energy" : "text-foreground"
              )}
            >
              О компании
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-base font-semibold transition-colors hover:text-energy",
                location.pathname === "/contact" ? "text-energy" : "text-foreground"
              )}
            >
              Контакты
            </Link>
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
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-2 text-base font-semibold transition-colors hover:text-energy",
                location.pathname === "/" ? "text-energy" : "text-foreground"
              )}
            >
              Главная
            </Link>
            
            {/* Mobile Project Submenu */}
            <div>
              <button
                onClick={() => setProjectOpen(!projectOpen)}
                className={cn(
                  "flex items-center gap-1 w-full py-2 text-base font-semibold transition-colors hover:text-energy",
                  isProjectActive ? "text-energy" : "text-foreground"
                )}
              >
                Проект
                <ChevronDown className={cn("h-4 w-4 transition-transform", projectOpen && "rotate-180")} />
              </button>
              {projectOpen && (
                <div className="pl-4">
                  {projectSubLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => { setIsOpen(false); setProjectOpen(false); }}
                      className={cn(
                        "block py-2 text-base font-medium transition-colors hover:text-energy",
                        location.pathname === link.href ? "text-energy" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/terms"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-2 text-base font-semibold transition-colors hover:text-energy",
                location.pathname === "/terms" ? "text-energy" : "text-foreground"
              )}
            >
              Условия выпуска
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-2 text-base font-semibold transition-colors hover:text-energy",
                location.pathname === "/about" ? "text-energy" : "text-foreground"
              )}
            >
              О компании
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-2 text-base font-semibold transition-colors hover:text-energy",
                location.pathname === "/contact" ? "text-energy" : "text-foreground"
              )}
            >
              Контакты
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
