import Link from "next/link";
import { TrendingUp, Users, Megaphone, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Más visibilidad",
    description: "Aparece en las búsquedas de miles de visitantes que buscan servicios en El Palmar",
  },
  {
    icon: Users,
    title: "Conecta con tu público",
    description: "Llega directamente a turistas y locales interesados en lo que ofreces",
  },
  {
    icon: Megaphone,
    title: "Promociona ofertas",
    description: "Destaca tus promociones y eventos especiales para atraer más clientes",
  },
  {
    icon: BarChart3,
    title: "Analiza resultados",
    description: "Accede a estadísticas de visitas y rendimiento de tu perfil",
  },
];

export function Negocios() {
  return (
    <section id="negocios" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-sm font-medium mb-6">
            Para negocios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Haz crecer tu negocio en El Palmar
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Únete a la plataforma que conecta a los negocios locales con miles de visitantes 
            cada temporada. Aumenta tu visibilidad y atrae más clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors"
            >
              <div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#planes"
            className="inline-flex items-center justify-center bg-amber-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-400 transition-colors"
          >
            Ver planes para negocios
          </Link>
        </div>
      </div>
    </section>
  );
}
