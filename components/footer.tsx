import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#planes", label: "Planes" },
  { href: "#visitantes", label: "Visitantes" },
  { href: "#negocios", label: "Negocios" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">BM El Palmar</h3>
            <p className="text-gray-400 leading-relaxed">
              Tu guía local para descubrir lo mejor de El Palmar. Creada por quienes viven y aman este rincón de la costa gaditana.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <a
                href="mailto:bmelpalmar@gmail.com"
                className="block hover:text-white transition-colors"
              >
                bmelpalmar@gmail.com
              </a>
              <a
                href="tel:+34692974017"
                className="block hover:text-white transition-colors"
              >
                692 974 017
              </a>
              <p>El Palmar, Vejer de la Frontera, Cádiz</p>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/bmelpalmar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/bmelpalmar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:bmelpalmar@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2026 BM El Palmar. Todos los derechos reservados.</p>
          <p>Hecho con amor desde El Palmar</p>
        </div>
      </div>
    </footer>
  );
}
