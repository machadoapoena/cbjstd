
import { Player, Prize, ScheduleItem, Winner } from './types.ts';

export const TOURNAMENT_NAME = "CAMPEONATO BRASILIENSE";
export const TOURNAMENT_EDITION = "DE CATEGORIAS";
export const VENUE = "BRASÍLIA";
export const VENUE_DETAILS = "Biblioteca Nacional de Brasília";
export const DATE_RANGE = "22 - 27 DE FEVEREIRO";
export const TOURNAMENT_START_DATE = "2026-02-22T10:00:00";
export const TOTAL_PRIZE = "Troféus & Medalhas";
export const CHESS_RESULTS_URL = "https://s1.chess-results.com/tnr1345366.aspx?lan=1";
export const REGISTRATION_EXTERNAL_URL = "https://forms.gle/exemplo-inscricao-fbx";
export const RULES_PDF_URL = "https://exemplo.com/regulamento.pdf";

export const CONTACT_PHONE_DISPLAY = "+55 (61) 98765-4321";
export const CONTACT_PHONE_WA = "5561987654321";
export const CONTACT_EMAIL = "contato@fbx.org.br";

export const PIX_KEY = "00.359.752/0001-43";

// Valores únicos por lote
export const PROMO_PRICE = "R$ 60,00";
export const REGULAR_PRICE = "R$ 90,00";

export const PROMO_DEADLINE = "10 de Fevereiro";

export const DEFAULT_PARTICIPANTS_COUNT = 59;
export const DEFAULT_CATEGORY_COUNTS = [
  { label: 'U14', count: 5 },
  { label: 'U16', count: 2 },
  { label: 'U18', count: 1 }
];

export const FEATURED_PLAYERS: Player[] = [
  { id: '1', name: 'Miguel Damasceno', title: 'CMN', rating: 2312, category: 'U18', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_damasceno.jpg' },
  { id: '2', name: 'Rafael Mazzochin', title: '', rating: 2309, category: 'U18', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_mazzochin.jpg' },
  { id: '3', name: 'Leonardo Tosetto', title: 'FM', rating: 2122, category: 'U16', image: 'https://picsum.photos/seed/arthur/400/500' },
  { id: '4', name: 'João Pedro', title: 'CMN', rating: 2108, category: 'U14', image: 'https://picsum.photos/seed/pedro/400/500' },
  { id: '5', name: 'Larissa Alencar', title: 'WNM', rating: 2050, category: 'U18', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_larissa.jpg' },
  { id: '6', name: 'Luiz Antônio', title: 'WCM', rating: 1980, category: 'U16', image: 'https://imagens.xadrezbrasilia.com/imagens/pl_luizantonio.jpg' },
  { id: '7', name: 'Vinícius Rodrigues', title: 'NM', rating: 1850, category: 'U14', image: 'https://picsum.photos/seed/enzo/400/500' },
  { id: '8', name: 'Julia Santos', title: 'WFM', rating: 2150, category: 'U18', image: 'https://picsum.photos/seed/julia/400/500' }
];

export const PRIZES: Prize[] = [
  { position: '1º Lugar', amount: 'Troféu', color: 'bg-yellow-500' },
  { position: '2º Lugar', amount: 'Medalha', color: 'bg-slate-300' },
  { position: '3º Lugar', amount: 'Medalha', color: 'bg-amber-600' }
];

export const SCHEDULE: ScheduleItem[] = [
  { day: 'Dia 1', date: '22/02', events: [{ time: '10:00', description: 'Congresso Técnico' }, { time: '14:00', description: 'Rodada 1 - Sistema Suíço' }] },
  { day: 'Dia 2', date: '23/02', events: [{ time: '10:00', description: 'Rodada 2' }, { time: '16:00', description: 'Rodada 3' }] }
];

export const WINNERS: Winner[] = [
  { year: '2023', name: 'Rafael Leitão', image: 'https://picsum.photos/seed/winner1/300/300', title: 'GM' },
  { year: '2022', name: 'Alexandr Fier', image: 'https://picsum.photos/seed/winner2/300/300', title: 'GM' },
  { year: '2021', name: 'Krikor Mekhitarian', image: 'https://picsum.photos/seed/winner3/300/300', title: 'GM' }
];

export const PARTNERS = {
  realization: [
    { name: 'FBX', logo: 'https://i0.wp.com/fbx.org.br/wp-content/uploads/2022/05/Logo-FBX-1.png' },
    { name: 'CBX', logo: 'https://cbx.org.br/files/textos/003659/TN_000965.jpg' }
  ],
  support: [
    { name: 'Governo do DF', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logotipo_do_Governo_do_Distrito_Federal.svg/512px-Logotipo_do_Governo_do_Distrito_Federal.svg.png' },
    { name: 'Secretaria de Cultura', logo: 'https://www.cultura.df.gov.br/wp-content/uploads/2021/08/logo_secretaria_cultura_economia_criativa.png' },
    { name: 'Loja de Xadrez', logo: 'https://cdn-icons-png.flaticon.com/512/3003/3003168.png' }
  ]
};
