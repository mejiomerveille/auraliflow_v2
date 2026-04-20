import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAurali from "@/assets/logo-aurali-flow.png";


const navLinks = [
  { label: "Fonctionnalités", href: "/#features" },
  { label: "Comment ça marche", href: "/#how" },
  { label: "Tarifs", href: "/pricing" },
  { label: "Boutiques", href: "/businesses" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "glass border-b border-border/60 shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoAurali} alt="Aurali Flow" className="h-6" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/login">
            <Button variant="ghost" size="sm">Telecharger</Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-bordeaux-dark shadow-bordeaux">
              Commencer gratuitement
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border bg-card p-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <Link to="/login" className="flex-1">
              <Button variant="outline" className="w-full" size="sm">Se connecter</Button>
            </Link>
            <Link to="/register" className="flex-1">
              <Button className="w-full bg-primary text-primary-foreground" size="sm">Commencer</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
