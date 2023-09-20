export interface News {
    id: number;
    title: {
      rendered: string;
    };
    media: string;
    content: {
      rendered: string;
    };
    category: string;
  }
  