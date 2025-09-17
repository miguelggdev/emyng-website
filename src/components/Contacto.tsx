import { Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo válido." }),
  mensaje: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export default function Contacto() {
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInViewAnimation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      mensaje: "",
    },
  });

  // TODO: Reemplaza esta URL con la de tu formulario de Formspree.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado! Me pondré en contacto contigo pronto.");
        form.reset();
      } else {
        throw new Error("Hubo un problema al enviar el formulario.");
      }
    } catch (error) {
      toast.error("Error al enviar el mensaje. Inténtalo de nuevo más tarde.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      ref={ref}
      id="contacto"
      className={`max-w-3xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Mail className="text-blue-400" size={32} />
        Contacto
      </h2>
      <p className="text-white/90 mb-6">
        ¿Tienes alguna pregunta, propuesta o mensaje? ¡Escríbeme!
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} className="bg-white/10 text-white rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Tu correo electrónico" {...field} className="bg-white/10 text-white rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Escribe tu mensaje aquí" {...field} className="bg-white/10 text-white rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] text-white rounded-xl" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Form>
    </section>
  );
}