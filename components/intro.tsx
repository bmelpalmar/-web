import { Compass, MapPin, Users } from "lucide-react";

export function Intro() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Todo en un solo lugar
        </h2>
        <p className="text-xl text-gray-600 mb-4 font-medium text-teal-600">
          BM El Palmar
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          La guía más completa de El Palmar. Restaurantes, surf, ocio, alojamientos, 
          servicios y todo lo que necesitas para disfrutar de este paraíso gaditano.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-8 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <Compass className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Explora</h3>
            <p className="text-gray-600 text-center">
              Descubre todos los rincones de El Palmar con nuestra guía interactiva
            </p>
          </div>

          <div className="flex flex-col items-center p-8 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Localiza</h3>
            <p className="text-gray-600 text-center">
              Encuentra fácilmente restaurantes, tiendas y servicios cerca de ti
            </p>
          </div>

          <div className="flex flex-col items-center p-8 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Conecta</h3>
            <p className="text-gray-600 text-center">
              Forma parte de la comunidad de El Palmar y sus visitantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
