import { Instagram, Youtube, Facebook, Mail } from "lucide-react";
import { TiktokIcon } from "@/components/icons/TiktokIcon";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/emilynicollegonzalezpatinadora/", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
  { icon: TiktokIcon, href: "https://tiktok.com/", label: "TikTok" },
  { icon: Mail, href: "mailto:emily@email.com", label: "Email" },
];

export default function SidebarSocial() {
  return (
    <aside className="hidden lg:flex fixed top-1/3 left-4 z-40 flex-col gap-4 bg-black/60 rounded-2xl px-2 py-4 shadow-lg border border-[#3b82f6]/30">
      {socialLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white/80 hover:text-[#a78bfa] transition-colors p-2 rounded-full hover:bg-gradient-to-br hover:from-[#3b82f6]/30 hover:to-[#8b5cf6]/30"
          aria-label={s.label}
        >
          <s.icon size={24} />
        </a>
      ))}
    </aside>
  );
}