export interface User {
  id: number;
  username: string;
  password: string;
}

export const users: User[] = [
  { id: 1, username: 'GG', password: 'pass123' },
  { id: 2, username: 'Goku', password: 'pass234' }
];
