"use client";

import HeaderPage from "@/components/ui/HeaderPage";
import { Download, Loader2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const FILE_URL = "/downloads/RustDesk-Infomag-Setup.exe";

const Suporte = () => {
  const [loading, setLoading] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (!showHint) return;
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, [showHint]);

  const handleDownload = useCallback(() => {
    if (loading) return;

    setLoading(true);
    setShowSteps(true);
    setShowHint(true);

    // inicia o download do arquivo do /public
    const a = document.createElement("a");
    a.href = FILE_URL;
    a.download = "RustDesk-Infomag-Setup.exe"; // ajuda a forçar download
    document.body.appendChild(a);
    a.click();
    a.remove();

    setLoading(false);
  }, [loading]);

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderPage />

      <main className="flex-1 flex">
        <div className="flex-1 bg-linear-to-br from-green-800 to-green-500 flex justify-start items-center flex-col">
          <h1 className="text-5xl md:text-7xl font-bold pt-5 text-white text-center">
            Suporte Remoto <span className="text-green-100">InfoMag</span>
          </h1>

          {showSteps ? (
            <a
              href={FILE_URL}
              download="RustDesk-Infomag-Setup.exe"
              className="text-gray-100 text-center pt-2 underline hover:cursor-pointer"
            >
              Clique aqui caso o download não tenha iniciado
            </a>
          ) : (
            <p className="text-gray-100 text-center pt-2">
              Aplicativo de Acesso Remoto destinado a clientes InfoMag
            </p>
          )}

          <div className="flex-col flex-1 flex justify-center items-center gap-6">
            <button
              onClick={handleDownload}
              disabled={loading}
              className={`
                ${showSteps ? "hidden" : ""} 
                px-12 py-8 rounded-md bg-sky-700 brightness-95 
                shadow-xl border border-sky-800/20 transition-all flex items-center gap-3
                ${
                  loading
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:scale-105 hover:brightness-80 hover:ring-1 hover:ring-sky-700"
                }`}
            >
              {loading ? (
                <Loader2 className="w-9 h-9 stroke-green-100 animate-spin" />
              ) : (
                <Download className="w-9 h-9 stroke-green-100" />
              )}

              <span className="text-5xl text-white font-semibold">
                {loading ? "Preparando..." : "Baixar"}
              </span>
            </button>

            {/* dica no canto */}
            {showHint && (
              <div className="fixed top-3 right-3 z-50 hidden md:block pointer-events-none">
                <div className="relative">
                  <div className="bg-black/70 text-white px-4 py-3 rounded-xl shadow-xl backdrop-blur-sm">
                    <div className="text-base font-bold">Seu download está aqui em cima</div>
                    <div className="text-sm text-white/90">
                      Se não aparecer, veja a lista de downloads do navegador.
                    </div>
                  </div>

                  <div className="absolute -top-3 right-16 text-gray-300 text-5xl animate-bounce drop-shadow-lg">
                    ↑
                  </div>
                </div>
              </div>
            )}

            {showSteps && (
              <div className="flex flex-col md:flex-row gap-5 bg-white rounded-xl shadow-2xl p-4 mt-3 max-w-4xl text-center animate-fade-in">
                <div className="min-w-60">
                  <h2 className="text-3xl font-bold text-green-800 mb-4 underline">
                    Próximos Passos
                  </h2>

                  <ol className="text-left text-xl text-gray-700 space-y-6">
                    <li>1️⃣ Abra o programa baixado.</li>
                    <li>2️⃣ Copie seu ID exibido na tela.</li>
                    <li>3️⃣ Envie o ID para a InfoMag.</li>
                  </ol>
                </div>

                <div className="flex flex-col font-bold justify-center">
                  <h2>Exemplo</h2>
                  <Image
                    src="/img/suporte/rustdesk.png"
                    alt="Exemplo do que enviar"
                    width={504}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Suporte;