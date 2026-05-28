import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plan Base",
    price: "29",
    yearlyPrice: "249€/año (2 meses gratis)",
    categories: "Hasta 2 categorías",
    features: [
      "Aparición en hasta 2 categorías",
      "Logo visible en la ficha",
      "Hasta 5 fotografías",
      "Ficha estándar",
      "WhatsApp e Instagram",
      "1 push de bienvenida",
    ],
    popular: false,
    premium: false,
  },
  {
    name: "Plan Plus",
    price: "59",
    yearlyPrice: "499€/año (2 meses gratis)",
    categories: "Hasta 3 categorías",
    features: [
      "Aparición en hasta 3 categorías",
      '"Recomendados por BM"',
      "Hasta 10 fotografías",
      "Ficha ampliada",
      "2 ofertas al mes",
      "2 push al mes",
    ],
    popular: true,
    premium: false,
  },
  {
    name: "Plan Premium",
    price: "89",
    yearlyPrice: "849€/año (2 meses gratis)",
    categories: "Todas tus categorías",
    features: [
      "Aparición en todas tus categorías",
      "Sección Destacados",
      "Fotos ilimitadas",
      "Ficha completa + insignia",
      "Ofertas ilimitadas",
      "Push ilimitadas + Agenda eventos",
    ],
    popular: false,
    premium: true,
  },
];

export function Planes() {
  return (
    <section id="planes" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
            Planes de visibilidad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planes y Tarifas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Cuántas categorías ocupas y cómo de visible eres dentro de cada una depende del plan que elijas.
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            La visibilidad dentro de la app sigue este orden de prioridad:{" "}
            <strong className="text-gray-900">Premium → Plus → Base → Gratuito</strong>
          </p>
        </div>

        {/* Presencia Gratuita */}
        <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Presencia Básica — Gratuita
          </h3>
          <p className="text-gray-600 mb-4">
            Todos los negocios de El Palmar tienen presencia automática y gratuita en BM El Palmar:
          </p>
          <ul className="flex flex-wrap gap-4 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              Nombre comercial visible en su categoría principal
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              Botón &quot;Cómo llegar&quot;
            </li>
          </ul>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 ${
                plan.premium
                  ? "bg-gray-900 text-white"
                  : plan.popular
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  MÁS POPULAR
                </span>
              )}
              {plan.premium && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  PREMIUM
                </span>
              )}

              <h3 className={`text-xl font-semibold mb-2 ${
                plan.premium || plan.popular ? "text-white" : "text-gray-900"
              }`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${
                plan.premium || plan.popular ? "text-white/80" : "text-gray-600"
              }`}>
                {plan.categories}
              </p>

              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-4xl font-bold ${
                  plan.premium || plan.popular ? "text-white" : "text-gray-900"
                }`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${
                  plan.premium || plan.popular ? "text-white/80" : "text-gray-600"
                }`}>
                  €/mes
                </span>
              </div>
              <p className={`text-sm mb-6 ${
                plan.premium || plan.popular ? "text-white/70" : "text-gray-500"
              }`}>
                {plan.yearlyPrice}
              </p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan.premium || plan.popular ? "text-white" : "text-teal-600"
                    }`} />
                    <span className={
                      plan.premium || plan.popular ? "text-white/90" : "text-gray-600"
                    }>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contacto"
                className={`block w-full text-center py-3 rounded-full font-semibold transition-colors ${
                  plan.premium
                    ? "bg-amber-500 text-gray-900 hover:bg-amber-400"
                    : plan.popular
                    ? "bg-white text-teal-600 hover:bg-gray-100"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                Contratar
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#contacto"
            className="text-teal-600 hover:text-teal-700 font-medium underline"
          >
            Ver todos los detalles, temporadas y servicios adicionales
          </Link>
        </div>
      </div>
    </section>
  );
}
