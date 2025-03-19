export default function Rute() {
    return (
      <div className="mx-auto p-6 bg-zinc-900">
        <h2 className="sm:text-6xl md:text-6xl lg:text-xl text-4xl text-zinc-200 font-bold text-center mb-6">Rute Perjalanan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
          <div className="bg-zinc-300 text-zinc-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">🛤️ DALAM PULAU (Jawa)</h3>
            <ul className="space-y-2">
              <li>✅ Wonosobo - Jakarta <span className="font-bold">Rp 300.000,00</span></li>
              <li>✅ Banjarnegara - Jogja - Solo <span className="font-bold">Rp 150.000,00</span></li>
              <li>✅ Purwokerto - Semarang <span className="font-bold">Rp 170.000,00</span></li>
              <li>✅ Wonosobo - Salatiga <span className="font-bold">Rp 150.000,00</span></li>
              <li>✅ Wonosobo - Jepara - Demak - Kudus - Pati <span className="font-bold">Rp 250.000,00</span></li>
              <li>✅ Wonosobo - Surabaya <span className="font-bold">Rp 400.000,00</span></li>
            </ul>
          </div>
  
          <div className="bg-zinc-300 text-zinc-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">🌍 LUAR PULAU</h3>
            <ul className="space-y-2">
              <li>✅ Sumatra - Jawa</li>
              <li>✅ Lampung - Jawa</li>
              <li>✅ Jambi - Jawa</li>
              <li>✅ Riau - Jawa</li>
              <li>✅ Kalimantan - Jawa</li>
            </ul>
          </div>
  
        </div>
  
        <p className="mt-6 text-center text-yellow-400 font-semibold">
          ⚠️ Note: Tersedia setiap hari!
        </p>
      </div>
    );
  }
  