"use client";

import { useState } from "react";
import { z } from "zod";

const ContactSchema = z.object({
  nom: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom doit contenir au plus 100 caractères"),
  email: z
    .string()
    .email("Le courriel doit être valide")
    .max(250, "Le courriel doit contenir au plus 250 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message doit contenir au plus 1000 caractères"),
  site: z.string().max(0, "Bot détecté"),
});

type ContactInput = z.infer<typeof ContactSchema>;
type Errors = Partial<Record<keyof ContactInput, string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<null | boolean>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSent(null);

    const formData = new FormData(e.currentTarget);
    const data: ContactInput = {
      nom: (formData.get("nom") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      message: (formData.get("message") || "").toString().trim(),
      site: (formData.get("site") || "").toString(),
    };

    const parsed = ContactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ContactInput | undefined;
        if (path && !fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });
      setSent(response.ok);
      if (response.ok) {
        (e.currentTarget as HTMLFormElement).reset();
      }
    } catch {
      setSent(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      id="contact-form"
      className="rounded-4xl bg-white px-18 py-8 drop-shadow-xl max-w-[1060px] mx-auto"
    >
      <div className="flex flex-col gap-2 items-center pb-12">
        <h3 className="font-finalsix text-[30px] font-bold text-center">
          NAVIGUER ENTRE STRATÉGIE, EXÉCUTION ET HUMAIN.
        </h3>
        <p className="text-center">Planifions votre consultation gratuite dès maintenant</p>
      </div>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-10 items-center"
      >
        {/* Honeypot */}
        <input
          type="text"
          name="site"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
        />

        <div className="flex flex-col w-full gap-8 md:flex-row md:justify-between">
          <div className="relative w-full md:w-1/2">
            <input
              id="nom"
              name="nom"
              type="text"
              placeholder="nom complet"
              aria-invalid={!!errors.nom}
              aria-describedby={errors.nom ? "nom-error" : undefined}
              className="
                peer w-full border-b-2 pb-[2px] border-[#1E1F3F]
                placeholder:text-xl placeholder:text-[#1E1F3F] placeholder:font-bold
                focus:outline-none focus:ring-0 focus:placeholder-transparent
                data-[invalid=true]:border-red-500
              "
              data-invalid={!!errors.nom}
            />
            <label
              htmlFor="nom"
              className="
                absolute left-0 top-full mt-1 text-sm text-[#1E1F3F]
                opacity-0 -translate-y-1
                transition-all duration-200
                peer-focus:opacity-100 peer-focus:translate-y-0
                peer-[&:not(:placeholder-shown)]:opacity-100
                peer-[&:not(:placeholder-shown)]:translate-y-0
              "
            >
              nom complet
            </label>
            {errors.nom && (
              <p id="nom-error" className="mt-1 text-sm text-red-600">
                {errors.nom}
              </p>
            )}
          </div>
          <div className="relative w-full md:w-1/2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="
                peer w-full border-b-2 pb-[2px] border-[#1E1F3F]
                placeholder:text-xl placeholder:text-[#1E1F3F] placeholder:font-bold
                focus:outline-none focus:ring-0 focus:placeholder-transparent
                data-[invalid=true]:border-red-500
              "
              data-invalid={!!errors.email}
            />
            <label
              htmlFor="email"
              className="
                absolute left-0 top-full mt-1 text-sm text-[#1E1F3F]
                opacity-0 -translate-y-1
                transition-all duration-200
                peer-focus:opacity-100 peer-focus:translate-y-0
                peer-[&:not(:placeholder-shown)]:opacity-100
                peer-[&:not(:placeholder-shown)]:translate-y-0
              "
            >
              email
            </label>
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <div className="relative w-full">
          <textarea
            id="message"
            name="message"
            rows={1}
            placeholder="message"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="
              peer w-full border-b-2 pb-2 border-[#1E1F3F]
              placeholder:text-xl placeholder:text-[#1E1F3F] placeholder:font-bold
              resize-none focus:outline-none focus:ring-0 focus:placeholder-transparent
              data-[invalid=true]:border-red-500
            "
            data-invalid={!!errors.message}
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
              const target = e.currentTarget;
              target.style.height = "auto";
              target.style.height = target.scrollHeight + "px";
            }}
          />
          <label
            htmlFor="message"
            className="
              absolute left-0 top-full mt-1 text-sm text-[#1E1F3F]
              opacity-0 -translate-y-1
              transition-all duration-200
              peer-focus:opacity-100 peer-focus:translate-y-0
              peer-[&:not(:placeholder-shown)]:opacity-100
              peer-[&:not(:placeholder-shown)]:translate-y-0
            "
          >
            message
          </label>
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-1/2 md:w-1/2 border-[1px] border-[#1E1F3F] rounded-4xl py-2 px-20 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] hover:cursor-pointer transition-transform duration-100 disabled:opacity-60 disabled:cursor-not-allowed mx-auto"
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
        {sent === true && (
          <p className="text-green-600 text-sm">Message envoyé ✅</p>
        )}
        {sent === false && (
          <p className="text-red-600 text-sm">Échec de l&apos;envoi ❌</p>
        )}
      </form>
    </div>
  );
}
