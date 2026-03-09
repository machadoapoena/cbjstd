
import { Player, Prize, ScheduleItem, Winner } from './types';

export const TOURNAMENT_NAME = "FESTIVAL BRASILIENSE";
export const TOURNAMENT_EDITION = "DA CRIANÇA STD";
export const VENUE = "BRASÍLIA";
export const VENUE_DETAILS = "Clube ASSEFE";
export const DATE_RANGE = "28 - 29 DE MARÇO";
export const TOURNAMENT_START_DATE = "2026-03-28T09:30:00";
export const TOTAL_PRIZE = "Troféus & Medalhas";
export const CHESS_RESULTS_URL = "https://chess-results.com/Default.aspx?lan=1&SNode=S1";
export const REGISTRATION_EXTERNAL_URL = "https://forms.gle/exemplo-inscricao-fbx";
export const RULES_PDF_URL = "https://drive.google.com/file/d/1kmq2t6IU3FC3F4Wi214h6JBEFi51HPXB/view?usp=sharing"; 

export const CONTACT_PHONE_DISPLAY = "+55 (61) 98122-2312";
export const CONTACT_PHONE_WA = "556181484131";
export const CONTACT_EMAIL = "camposwesterley@gmail.com";

export const PIX_KEY = "00.359.752/0001-43";

// Valores únicos por lote
export const PROMO_PRICE = "R$ 50,00";
export const PROMO2_PRICE = "R$ 60,00";
export const REGULAR_PRICE = "R$ 70,00";

export const PROMO_DEADLINE = "15 de Março";
export const PROMO2_DEADLINE = "16 a 25 de Março";
export const PROMO3_DEADLINE = "25 de Março";

export const DEFAULT_PARTICIPANTS_COUNT = "05";
export const DEFAULT_CATEGORY_COUNTS = [
  { label: 'U06', count: 0 },
  { label: 'U08', count: 0 },
  { label: 'U10', count: 1 },
  { label: 'U12', count: 4 }
];

export const FEATURED_PLAYERS: Player[] = [
  { id: '1', name: 'Luís Areda', title: '', rating: 0, category: 'U12', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_areda.jpg' },
  { id: '2', name: 'Rafael Mazzochin', title: '', rating: 1512, category: 'U12', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_mazzochin.jpg' },
  { id: '3', name: 'Leonardo Tosetto', title: '', rating: 1596, category: 'U12', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_leotosetto.jpg' },
  { id: '4', name: 'João Pedro', title: 'CMN', rating: 1641, category: 'U12', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_joaobraz.jpg' },
  { id: '5', name: 'Rafael Júnior', title: 'CMN', rating: 1605, category: 'U10', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_rafaelzinho.jpg' }
];

export const PRIZES: Prize[] = [
  { position: '1º Lugar', amount: 'Troféu', color: 'bg-yellow-500' },
  { position: '2º ao 5 ºLugar', amount: 'Medalha', color: 'bg-slate-300' }
];

export const SCHEDULE: ScheduleItem[] = [
  { day: 'Dia 1', date: '28/03', events: [{ time: '08:45', description: 'Congresso Técnico' }, { time: '09:00', description: 'Rodada 1' }, { time: '13:00', description: 'Rodada 2' }, { time: '15:15', description: 'Rodada 3' }] },
  { day: 'Dia 2', date: '29/03', events: [{ time: '09:00', description: 'Rodada 4' }, { time: '13:00', description: 'Rodada 5' }, { time: '15:15', description: 'Rodada 6' }] }
];

export const WINNERS: Winner[] = [
  { year: '2025', name: 'Rafael Mazzochin', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_mazzochin.jpg', title: '', achievement: 'Categoria U12' },
  { year: '2025', name: 'João Pedro', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_joaobraz.jpg', title: 'CMN', achievement: 'Categoria U10' },
  { year: '2025', name: 'Rafel Júnior', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_rafaelzinho.jpg', title: 'CMN', achievement: 'Categoria U08' },
  { year: '2025', name: 'Larissa Alencar', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_larissa.jpg', title: 'WNM', achievement: 'Categoria U12' }
];
 
export const PARTNERS = {
  realization: [
    { name: 'FBX', logo: 'https://i0.wp.com/fbx.org.br/wp-content/uploads/2022/05/Logo-FBX-1.png' },
    { name: 'CBX', logo: 'https://cbx.org.br/files/textos/003659/TN_000965.jpg' }
  ],
  support: [
    { name: 'Clube ASSEFE', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqs3GKOAaJ2-ercW3vP-Zhv3cIghuoHVWYXw&s' },
    { name: 'Xadrez Brasília', logo: 'https://imagens.xadrezbrasilia.com/imagens/logo_xb.png' }
  ]
};
