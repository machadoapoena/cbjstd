
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Upload, CheckCircle2 } from 'lucide-react';
import { CONTACT_PHONE_WA } from './constants';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    dataNascimento: '',
    idFIDE: '',
    idCBX: '',
    categoria: 'U08',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Strip the "data:image/xxx;base64," prefix
        const base64String = result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let base64Image = '';
      if (file) {
        base64Image = await fileToBase64(file);
      }

      // 1. Send to Google Apps Script
      const scriptUrl = "https://script.google.com/macros/s/AKfycbyOfUzfLRyIyUCKFfzZqpMXsNP1JU2B1QWBnEJPd3kCUIYhaUuwKPgOOwfmf7sBfeLO/exec";
      
      const payload = {
        nome: formData.nome,
        email: formData.email,
        imagem: base64Image,
        categoria: formData.categoria,
        idFIDE: formData.idFIDE,
        idCBX: formData.idCBX,
      };

      // Using text/plain with no-cors is the most reliable way to send data to Apps Script 
      // from a browser without triggering CORS preflight issues.
      // The Apps Script doPost(e) will receive this in e.postData.contents
      fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      }).catch(err => console.error("Erro silencioso no fetch:", err));

      // 2. Prepare WhatsApp Message
      const message = `*Inscrição Festival Brasiliense da Criança*%0A%0A` +
        `*Nome:* ${formData.nome}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Data de Nascimento:* ${formData.dataNascimento}%0A` +
        `*ID FIDE:* ${formData.idFIDE || 'N/A'}%0A` +
        `*ID CBX:* ${formData.idCBX || 'N/A'}%0A` +
        `*Categoria:* ${formData.categoria}%0A%0A` +
        `_Por favor, anexe o comprovante de pagamento a seguir._`;

      const waUrl = `https://wa.me/${CONTACT_PHONE_WA}?text=${message}`;
      window.open(waUrl, '_blank');

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-neutral-900 border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden relative shadow-2xl"
        >
          {/* Header */}
          <div className="bg-lime-400 p-6 flex justify-between items-center">
            <div>
              <h2 className="text-black font-oswald text-2xl font-bold uppercase leading-tight">Formulário de Inscrição</h2>
              <p className="text-black/60 text-xs font-black uppercase tracking-widest">Preencha todos os campos abaixo</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-black/10 rounded-full transition-colors text-black"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">Nome Completo Enxadrista</label>
                  <input
                    required
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Ex: João Silva"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">E-mail do responsável</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex: joao@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">Data de Nascimento</label>
                    <input
                      required
                      type="date"
                      name="dataNascimento"
                      value={formData.dataNascimento}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">Categoria</label>
                    <select
                      required
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all appearance-none"
                    >
                      <option value="U06" className="bg-neutral-900">U06</option>
                      <option value="U08" className="bg-neutral-900">U08</option>
                      <option value="U10" className="bg-neutral-900">U10</option>
                      <option value="U12" className="bg-neutral-900">U12</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">ID FIDE</label>
                    <input
                      required
                      type="text"
                      name="idFIDE"
                      value={formData.idFIDE}
                      onChange={handleChange}
                      placeholder="0000000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">ID CBX</label>
                    <input
                      required
                      type="text"
                      name="idCBX"
                      value={formData.idCBX}
                      onChange={handleChange}
                      placeholder="00000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">Comprovante de Pagamento</label>
                  <div className="relative group">
                    <input
                      required
                      type="file"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className={`w-full border-2 border-dashed ${file ? 'border-lime-400 bg-lime-400/5' : 'border-white/10 bg-white/5'} rounded-xl p-6 flex flex-col items-center justify-center gap-2 transition-all group-hover:border-lime-400/50`}>
                      <Upload size={24} className={file ? 'text-lime-400' : 'text-neutral-500'} />
                      <span className="text-sm text-neutral-400 font-medium">
                        {file ? file.name : 'Clique ou arraste o arquivo aqui'}
                      </span>
                      <span className="text-[10px] text-neutral-600 uppercase font-black tracking-widest">PDF, JPG ou PNG</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${isSubmitting ? 'bg-neutral-700 cursor-not-allowed' : 'bg-lime-400 hover:bg-white'} text-black font-black uppercase py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_10px_20px_rgba(163,230,53,0.1)] mt-4`}
                >
                  {isSubmitting ? 'Processando...' : 'Enviar Inscrição via WhatsApp'}
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-lime-400/20 rounded-full flex items-center justify-center text-lime-400 mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-oswald font-bold uppercase mb-2">Quase lá!</h3>
                <p className="text-neutral-400 mb-8 max-w-xs">
                  Sua mensagem foi gerada. Agora você deve enviá-la no WhatsApp e <strong>anexar o comprovante</strong> que você selecionou.
                </p>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase rounded-full transition-all"
                >
                  Fechar Janela
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RegistrationModal;
