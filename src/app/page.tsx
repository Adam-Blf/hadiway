import dynamic from 'next/dynamic';
import { Menu, Navigation, AlertTriangle } from 'lucide-react';

const MapComponent = dynamic(() => import('@/components/Map/MapComponent'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col bg-slate-50 relative overflow-hidden">
      {/* Floating Header */}
      <header className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm border border-slate-200/50">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer" aria-label="Menu">
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
            HadiWay
          </h1>
        </div>

        {/* Profile Avatar placeholder */}
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center border-2 border-emerald-500">
          <span className="text-emerald-700 font-bold">AB</span>
        </div>
      </header>

      {/* Map Container */}
      <div className="flex-1 w-full relative z-0">
        <MapComponent />
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute bottom-24 right-4 flex flex-col gap-3 z-50">
        <button
          className="flex items-center justify-center w-14 h-14 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Signaler un obstacle"
        >
          <AlertTriangle className="w-6 h-6" />
        </button>
        <button
          className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Ma position"
        >
          <Navigation className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Search/Route Panel */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-[0_-4px_25px_-5px_rgba(0,0,0,0.1)] p-6 transition-transform sm:max-w-md sm:left-1/2 sm:-translate-x-1/2 sm:w-full">
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6" />

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Où voulez-vous aller ?"
            className="w-full bg-slate-100 border-none rounded-xl px-4 py-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium placeholder:text-slate-500"
          />
          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-colors cursor-pointer">
            Calculer l'itinéraire PMR
          </button>
        </div>
      </div>
    </main>
  );
}
