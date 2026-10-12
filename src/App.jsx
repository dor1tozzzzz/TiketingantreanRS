import React, { useState } from 'react';
import { Calendar, User, Clock, CheckCircle2, Hospital, Building2 } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ poli: 'Poli Umum', name: '', date: '' });

  const handleBooking = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulasi respons server (Feedback visual)
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Header ala Aplikasi Travel */}
        <div className="bg-blue-600 p-6 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 translate-x-4 -translate-y-4">
            <Hospital size={120} />
          </div>
          <h1 className="text-2xl font-bold relative z-10 flex items-center justify-center gap-2">
            <Building2 size={24} className="text-yellow-400" />
            Rumah Sakit Kelompok 7 
          </h1>
          <p className="text-blue-100 text-sm mt-1 relative z-10">Sistem Antrean Digital Terpadu</p>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <form onSubmit={handleBooking} className="space-y-5">
              <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Buat Reservasi Baru</h2>
              
              {/* Form Input: Ragam Dialog Pengisian Borang */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-600 flex items-center gap-2 mb-1">
                    <User size={16} className="text-blue-500" /> Nama Pasien
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-600 flex items-center gap-2 mb-1">
                    <Hospital size={16} className="text-blue-500" /> Pilih Dokter Spesialis
                  </label>
                  <select 
                    value={formData.poli}
                    onChange={(e) => setFormData({...formData, poli: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white"
                  >
                    <option>Dokter Umum</option>
                    <option>Dokter Gigi & Mulut</option>
                    <option>Dokter Penyakit Dalam</option>
                    <option>Dokter Anak</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-600 flex items-center gap-2 mb-1">
                    <Calendar size={16} className="text-blue-500" /> Tanggal Kunjungan
                  </label>
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-700"
                  />
                </div>
              </div>

              {/* Tombol Eksekusi dengan Umpan Balik Visual */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors shadow-md flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <span className="animate-pulse">Memproses Data...</span>
                ) : (
                  'Ambil Nomor Antrean'
                )}
              </button>
            </form>
          ) : (
            
            /* Tampilan Tiket Digital (Meniru E-Tiket Travel) */
            <div className="text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Booking Berhasil!</h2>
              <p className="text-slate-500 text-sm mt-1 mb-6">Tunjukkan E-Tiket ini kepada petugas pendaftaran</p>
              
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 relative">
                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white rounded-full border-r-2 border-slate-300 -translate-y-1/2 hidden md:block"></div>
                <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white rounded-full border-l-2 border-slate-300 -translate-y-1/2 hidden md:block"></div>
                
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{formData.poli}</p>
                <div className="text-6xl font-black text-slate-800 my-4">A-042</div>
                
                <div className="text-left space-y-2 pt-4 border-t border-slate-200 mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 flex items-center gap-1"><User size={14}/> Pasien</span>
                    <span className="font-semibold text-slate-800">{formData.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 flex items-center gap-1"><Calendar size={14}/> Tanggal</span>
                    <span className="font-semibold text-slate-800">{formData.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 flex items-center gap-1"><Clock size={14}/> Estimasi</span>
                    <span className="font-semibold text-slate-800">09:30 WIB</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setStep(1)} 
                className="mt-6 text-blue-600 font-medium hover:underline text-sm"
              >
                Buat Antrean Baru
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}