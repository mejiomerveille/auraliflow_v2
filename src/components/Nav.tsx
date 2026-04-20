import logoAurali from "@/assets/logo-aurali-flow.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="flex items-center justify-between h-14 pl-5 pr-2 rounded-full bg-noir/95 backdrop-blur-xl border border-bordeaux/15 shadow-elegant">
        <img src={logoAurali} alt="Aurali Flow" className="h-6 brightness-0 invert" />

        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 text-creme/70 text-sm">
          <a href="#features" className="px-4 py-1.5 rounded-full hover:bg-creme/10 hover:text-creme transition-all">Accueil</a>
          <a href="#services" className="px-4 py-1.5 rounded-full hover:bg-creme/10 hover:text-creme transition-all">Services</a>
          <a href="#pricing" className="px-4 py-1.5 rounded-full hover:bg-creme/10 hover:text-creme transition-all">Tarifs</a>
          <a href="#temoignages" className="px-4 py-1.5 rounded-full hover:bg-creme/10 hover:text-creme transition-all">Témoignages</a>
          <Link to="/business" className="px-4 py-1.5 rounded-full hover:bg-creme/10 hover:text-creme transition-all">Business</Link>
        </div>

        <button className="hidden md:block px-5 py-2 rounded-full bg-bordeaux text-primary-foreground text-sm font-semibold hover:bg-bordeaux-dark transition-colors">
          Télécharger
        </button>

        <button className="md:hidden text-creme pr-3" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 bg-noir/95 backdrop-blur-xl rounded-3xl border border-bordeaux/15 px-5 py-5 space-y-3 shadow-elegant">
          <a href="#features" className="block text-creme/80 text-sm py-2" onClick={() => setOpen(false)}>Accueil</a>
          <a href="#services" className="block text-creme/80 text-sm py-2" onClick={() => setOpen(false)}>Services</a>
          <a href="#pricing" className="block text-creme/80 text-sm py-2" onClick={() => setOpen(false)}>Tarifs</a>
          <a href="#temoignages" className="block text-creme/80 text-sm py-2" onClick={() => setOpen(false)}>Témoignages</a>
          <Link to="/business" className="block text-creme/80 text-sm py-2" onClick={() => setOpen(false)}>Business</Link>
          <button className="w-full px-5 py-3 rounded-full bg-bordeaux text-primary-foreground text-sm font-semibold">
            Télécharger
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
