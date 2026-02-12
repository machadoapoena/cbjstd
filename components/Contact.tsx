
import React, { useState } from 'react';
import { Send, MessageSquare, Phone, Mail } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_WA, TOURNAMENT_NAME } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Constructing the WhatsApp message
    const text = `Olá! Gostaria de entrar em contato sobre o ${TOURNAMENT_NAME}.
    
*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Mensagem:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${CONTACT_PHONE_WA}?text=${encodedText}`;
    
    // Redirecting the user to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Resetting the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neutral-200 to-lime-600"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-oswald text-4xl font-bold uppercase mb-6 tracking-tight text-neutral-900">
              Entre em <span className="text-lime-600">Contato</span>
            </h2>
            <p className="text-neutral-600 mb-10 text-lg">
              Dúvidas sobre inscrições, parcerias ou imprensa? Nossa equipe está pronta para ajudar você diretamente via WhatsApp.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-lime-600 border border-neutral-200 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-neutral-900 font-bold">Email</h4>
                  <p className="text-neutral-500">{CONTACT_EMAIL}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-lime-600 border border-neutral-200 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-neutral-900 font-bold">WhatsApp</h4>
                  <p className="text-neutral-500">{CONTACT_PHONE_DISPLAY}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-lime-600 border border-neutral-200 shadow-sm">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-neutral-900 font-bold">Suporte</h4>
                  <p className="text-neutral-500">Atendimento para jogadores e organizadores</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-neutral-200 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md py-3 px-4 text-neutral-900 focus:outline-none focus:border-lime-600 focus:bg-white transition-all"
                  placeholder="Seu nome aqui"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Seu Melhor Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md py-3 px-4 text-neutral-900 focus:outline-none focus:border-lime-600 focus:bg-white transition-all"
                  placeholder="email@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md py-3 px-4 text-neutral-900 focus:outline-none focus:border-lime-600 focus:bg-white transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-neutral-900 hover:bg-lime-400 hover:text-black text-white font-black uppercase py-4 rounded-md transition-all flex items-center justify-center gap-2 group shadow-lg"
              >
                ENVIAR MENSAGEM VIA WHATSAPP
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
