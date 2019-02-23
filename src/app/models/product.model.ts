/**
 * An product model.
 */
export class Product {
  id: string;
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

/**
 * An product counter.
 */
export class ProductCounter {
  messagesTotal: number;
  messagesUnread: number;
}
