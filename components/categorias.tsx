import Image from "next/image";
import Link from "next/link";

const categories = [
  { image: "/images/cat-comer.jpg", title: "Comer", href: "https://app.bmelpalmar.es/explorar?categoria=comer" },
  { image: "/images/cat-ocio.jpg", title: "Ocio", href: "https://app.bmelpalmar.es/explorar?categoria=ocio" },
  { image: "/images/cat-surf.jpg", title: "Surf", href: "https://app.bmelpalmar.es/explorar?categoria=surf" },
  { image: "/images/cat-tiendas.jpg", title: "Tiendas", href: "https://app.bmelpalmar.es/explorar?categoria=tiendas" },
  { image: "/images/cat-parking.jpg", title: "Parking", href: "https://app.bmelpalmar.es/explorar?categoria=parking" },
  { image: "/images/cat-alojamiento.jpg", title: "Alojamiento", href: "https://app.bmelpalmar.es/explorar?categoria=alojamiento" },
  { image: "/images/cat-playas.jpg", title: "Playas", href: "https://app.bmelpalmar.es/explorar?categoria=playas" },
  { image: "/images/cat-contenedores.jpg", title: "Reciclaje", href: "https://app.bmelpalmar.es/explorar?categoria=reciclaje" },
  { image: "/images/cat-aventura.jpg", title: "Aventura", href: "https://app.bmelpalmar.es/explorar?categoria=aventura" },
  { image: "/images/cat-servicios.jpg", title: "Servicios", href: "https://app.bmelpalmar.es/explorar?categoria=servicios" },
  { image: "/images/cat-cultura.jpg", title: "Cultura", href: "https://app.bmelpalmar.es/explorar?categoria=cultura" },
  { image: "/images/cat-mapa.jpg", title: "Mapa", href: "https://app.bmelpalmar.es/mapa" },
];

export function Categorias() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explora El Palmar
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas, organizado para que lo encuentres fácilmente
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              target="_blank"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-white font-semibold text-sm sm:text-base">
                  {category.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
