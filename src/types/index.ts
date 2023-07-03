```typescript
export interface User {
  id: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface Admin {
  id: string;
  email: string;
  password: string;
}

export interface Raffle {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  winner: User | null;
}

export interface AuthResponse {
  user: User | null;
  error: string | null;
}

export interface RaffleResponse {
  raffle: Raffle | null;
  error: string | null;
}
```