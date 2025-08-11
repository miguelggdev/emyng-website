import { Handshake } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Patrocinio() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("¡Gracias por tu interés en patrocinar! Me pondré en contacto pronto.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  }

  return (
    <section id="patrocinio" className="max-w-3xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Handshake className="text-green-400" size={32} />
        Patrocinio
      </h2>
      <p className="text-white/90 mb-6">
        Si deseas apoyar mi carrera deportiva y ser parte de mi equipo de patrocinadores, por favor completa el siguiente formulario. ¡Toda ayuda es bienvenida!
      </p>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input name="nombre" placeholder="Nombre o empresa" required className="bg-white/10 text-white" />
        <Input name="email" type="email" placeholder="Correo electrónico" required className="bg-white/10 text-white" />
        <Textarea name="mensaje" placeholder="¿Cómo te gustaría apoyar?" required className="bg-white/10 text-white" />
        <Button type="submit" className="w-full bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] text-white" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </section>
  );
}