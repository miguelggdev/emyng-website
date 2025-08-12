import { Mail } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contacto() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("¡Mensaje enviado! Me pondré en contacto contigo pronto.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  }

  return (
    <section id="contacto" className="max-w-3xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Mail className="text-blue-400" size={32} />
        Contacto
      </h2>
      <p className="text-white/90 mb-6">
        ¿Tienes alguna pregunta, propuesta o mensaje? ¡Escríbeme!
      </p>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input name="nombre" placeholder="Tu nombre" required className="bg-white/10 text-white rounded-xl" />
        <Input name="email" type="email" placeholder="Tu correo electrónico" required className="bg-white/10 text-white rounded-xl" />
        <Textarea name="mensaje" placeholder="Escribe tu mensaje aquí" required className="bg-white/10 text-white rounded-xl" />
        <Button type="submit" className="w-full bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] text-white rounded-xl" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </section>
  );
}