// hooks/types.ts
export interface Notification {
    id: string;
    type: 'info' | 'warning' | 'error';
    message: string;
    read: boolean;
  }
  