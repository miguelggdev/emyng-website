"use client";

import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const languages = [
  { code: "es", name: "Español" },
  { code: "en", name: "English" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
  { code: "zh-CN", name: "中文 (Simplificado)" },
];

export default function LanguageSwitcher() {
  const handleLanguageChange = (langCode: string) => {
    // El widget de Google Translate funciona leyendo una cookie llamada 'googtrans'.
    // Al establecer esta cookie y recargar la página, forzamos la traducción.
    // El valor debe ser '/<idioma_origen>/<idioma_destino>'.
    document.cookie = `googtrans=/es/${langCode}; path=/`;
    window.location.reload();
  };

  // Función para obtener el idioma actual de la cookie y establecer el valor por defecto
  const getCurrentLanguage = () => {
    const cookies = document.cookie.split(';').map(c => c.trim());
    const transCookie = cookies.find(c => c.startsWith('googtrans='));
    if (transCookie) {
      return transCookie.split('/')[2] || 'es';
    }
    return 'es';
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={getCurrentLanguage()}>
      <SelectTrigger className="w-auto bg-transparent border-none text-white/70 hover:text-white focus:ring-0 p-2 rounded-full hover:bg-white/20 transition-colors">
        <Globe size={22} />
      </SelectTrigger>
      <SelectContent className="bg-black/80 text-white border-white/20">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} className="cursor-pointer focus:bg-white/20">
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}