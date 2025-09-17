import { useState } from "react";
import { Menu, X, Instagram, Youtube, Facebook, Mail, Search } from "lucide-react";
import { TiktokIcon } from "@/components/icons/TiktokIcon";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Logros", href: "#logros" },
  { label: "Galería", href: "#galeria" },
  { label: "Valores", href: "#valores" },
  { label: "Patrocinadores", href: "#patrocinadores" },
  { label: "Patrocinio", href: "#patrocinio" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/emilynicollegonzalezpatinadora/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@emilynicollegonzalezemyng", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/emilynicollegonzalezpatinadoraoficial", label: "Facebook" },
  { icon: TiktokIcon, href: "https://www.tiktok.com/@emyngsports", label: "TikTok" },
  { icon: Mail, href: "mailto:emily@email.com", label: "Email" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-[#3b82f6]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent select-none">
            EMYNG
          </span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/90 hover:text-[#a78bfa] transition-colors font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Social icons desktop */}
        <div className="hidden md:flex items-center gap-3 ml-4">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#3b82f6] transition-colors"
              aria-label={s.label}
            >
              <s.icon size={20} />
            </a>
          ))}
          <button className="ml-2 text-white/60 hover:text-[#8b5cf6] transition-colors">
            <Search size={20} />
          </button>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur transition-all duration-300",
          open ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-semibold text-white hover:text-[#a78bfa] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-6 mt-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#3b82f6] transition-colors"
                aria-label={s.label}
              >
                <s.icon size={28} />
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}