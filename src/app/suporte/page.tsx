"use client";

import HeaderPage from "@/components/HeaderPage";
import { Download, Loader2 } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import Image from "next/image";

type GhRelease = {
  assets?: Array<{
    name?: string;
    browser_download_url?: string;
  }>;
};

const CACHE_KEY = "rustdesk_latest_x86_64_url_v1";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

function getCachedUrl(): string | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    const age = Date.now() - parsed.ts;
    if (age > CACHE_TTL_MS) return null;

    return parsed.url;
  } catch {
    return null;
  }
}

function setCachedUrl(url: string) {
  localStorage.setItem(CACHE_KEY, JSON.stringify({ url, ts: Date.now() }));
}

async function fetchLatestRustDeskX64Exe(): Promise<string> {
  const res = await fetch("https://api.github.com/repos/rustdesk/rustdesk/releases/latest");
  if (!res.ok) throw new Error("Erro ao buscar release");

  const data = (await res.json()) as GhRelease;

  const asset = data.assets?.find(
    (a) => typeof a?.name === "string" && a.name.endsWith("-x86_64.exe")
  );

  if (!asset?.browser_download_url) throw new Error("EXE não encontrado");
  return asset.browser_download_url;
}

const Suporte = () => {
  const [loading, setLoading] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  const fallbackUrl = useMemo(
    () => "https://github.com/rustdesk/rustdesk/releases/latest",
    []
  );

  const handleDownload = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    try {
      const cached = getCachedUrl();
      let url = cached;

      if (!url) {
        url = await fetchLatestRustDeskX64Exe();
        setCachedUrl(url);
      }

      setShowSteps(true);
      window.location.href = url;
    } catch {
      window.open(fallbackUrl, "_blank");
      setShowSteps(true);
    } finally {
      setLoading(false);
    }
  }, [fallbackUrl, loading]);

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderPage />

      <main className="flex-1 flex">
        <div className="flex-1 bg-linear-to-br from-green-800 to-green-500 flex justify-start items-center flex-col">
          <h1 className="text-7xl font-bold pt-5 text-white">
            Suporte Remoto <span className="text-green-100">InfoMag</span>
          </h1>

          {showSteps ? (
            <p onClick={handleDownload} className="text-gray-100 pt-2 underline hover:cursor-pointer">
              Clique aqui caso o download não tenha iniciado
            </p>
          ) : (
            <p className="text-gray-100 pt-2">Aplicativo de Acesso Remoto destinado a clientes InfoMag</p>
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

              <span className="text-5xl text-white font-semibold">{loading ? "Preparando..." : "Baixar"}</span>
            </button>

            {/* ✅ Seta no canto superior direito (tipo Google Downloads) */}
            {showSteps && (
              <div className="fixed top-3 right-3 z-50 hidden md:block pointer-events-none">
                {/* balão */}
                <div className="relative">
                  <div className="bg-black/70 text-white px-4 py-3 rounded-xl shadow-xl backdrop-blur-sm">
                    <div className="text-base font-bold">Seu download está aqui em cima</div>
                    <div className="text-sm text-white/90">Se não aparecer, veja a lista de downloads do navegador.</div>
                  </div>

                  {/* seta apontando pro canto superior */}
                  <div className="absolute -top-3 right-16 text-gray-300 text-5xl animate-bounce drop-shadow-lg">
                    ↑
                  </div>
                </div>
              </div>
            )}

            {showSteps && (
              <div className="flex gap-5 bg-white rounded-xl shadow-2xl p-4 mt-3 max-w-4xl text-center animate-fade-in">
                <div className="min-w-60">
                  <h2 className="text-3xl font-bold text-green-800 mb-4 underline">Próximos Passos</h2>

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