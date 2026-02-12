
export interface Player {
  id: string;
  name: string;
  title?: string;
  rating: number;
  category: string;
  image: string;
}

export interface Prize {
  position: string;
  amount: string;
  color: string;
}

export interface ScheduleItem {
  day: string;
  date: string;
  events: {
    time: string;
    description: string;
  }[];
}

export interface Winner {
  year: string;
  name: string;
  image: string;
  title: string;
}