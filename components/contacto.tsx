"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contacto() {
  const [userType, setUserType] = useState<"turista" | "negocio">("turista");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio de email - aqui conectarias con tu servicio de email
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Aqui puedes integrar con EmailJS, Resend, o tu backend
    console.log("Form submitted:", { ...formData, userType });

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hablemos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tienes una consulta, quieres anunciar tu negocio o simplemente saludarnos
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Email</p>
                <a
                  href="mailto:bmelpalmar@gmail.com"
                  className="flex items-center gap-3 text-gray-900 hover:text-teal-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  bmelpalmar@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Teléfono</p>
                <a
                  href="tel:+34692974017"
                  className="flex items-center gap-3 text-gray-900 hover:text-teal-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  692 974 017
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Ubicación</p>
                <p className="flex items-center gap-3 text-gray-900">
                  <MapPin className="w-5 h-5" />
                  El Palmar, Cádiz
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mensaje enviado</h3>
                <p className="text-gray-600">Te responderemos lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* User Type Toggle */}
                <div className="flex gap-2 mb-6">
                  <button
                    type="button"
                    onClick={() => setUserType("turista")}
                    className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-colors ${
                      userType === "turista"
                        ? "bg-teal-600 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-teal-600"
                    }`}
                  >
                    SOY TURISTA
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("negocio")}
                    className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-colors ${
                      userType === "negocio"
                        ? "bg-teal-600 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-teal-600"
                    }`}
                  >
                    TENGO UN NEGOCIO
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm text-gray-500 uppercase tracking-wide mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-500 uppercase tracking-wide mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm text-gray-500 uppercase tracking-wide mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 text-white py-4 rounded-full font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
