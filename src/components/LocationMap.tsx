import { MapPin, Navigation } from 'lucide-react'; // Biblioteca de ícones, opcional mas recomendada!

interface LocationMapProps {
  embedUrl: string;
  directionsUrl: string;
  addressLine1: string;
}

const LocationMap = ({ embedUrl, directionsUrl, addressLine1 }: LocationMapProps) => {
  return (
    <section className="w-11/12 xl:w-10/12 mx-auto py-6 px-2 md:px-3">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Onde nos encontrar?</h2>
        <p className="mt-2 text-lg text-gray-600">
          Venha nos visitar! Estamos ansiosos para recebê-lo.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg shadow-xl bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Coluna do Mapa */}
          <div className="w-full h-80">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização no Google Maps"
            ></iframe>
          </div>

          {/* Coluna de Informações */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="h-8 w-8 text-green-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Nosso Endereço</h3>
                <address className="mt-2 not-italic text-gray-600">
                  <p>{addressLine1}</p>
                </address>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full justify-center rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <Navigation className="h-6 w-6" />
                Traçar Rota no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;