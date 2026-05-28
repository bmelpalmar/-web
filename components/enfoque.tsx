import Image from "next/image";

const features = [
  {
    image: "/images/descubre-local.jpg",
    title: "Descubre lo local",
    description: "Conoce los mejores restaurantes, bares y chiringuitos recomendados por locales",
  },
  {
    image: "/images/eventos-planes.jpg",
    title: "Eventos y planes",
    description: "Mantente al día de todo lo que pasa en El Palmar: conciertos, mercadillos y más",
  },
  {
    image: "/images/condiciones-mar.jpg",
    title: "Condiciones del mar",
    description: "Información en tiempo real sobre mareas, olas y viento para surfistas",
  },
  {
    image: "/images/todo-en-tu-movil.jpg",
    title: "Todo en tu móvil",
    description: "Accede a toda la información desde cualquier lugar con nuestra app",
  },
];

export function Enfoque() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sabemos cómo es El Palmar
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Creado por amantes de El Palmar, para quienes quieren vivir la experiencia completa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
