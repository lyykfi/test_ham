export class Product {
  id: number;
  title: string;
  zipCode: string;
  city: string;
  thumbnail: string;
  attachments: string[];
  counter: ProductCounter;
  isAwarded: boolean;
  categories: number[];
  state: string;
  description: string;
  endDate: string;
  createdAt: string;
}

export class ProductCounter {
  messagesTotal: number;
  messagesUnread: number;
}
