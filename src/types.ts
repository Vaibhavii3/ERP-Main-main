export interface Product {
  _id: string;
  name: string;
  description: string;
  sku: string;
  category: string;
  price: number;
  stocks: number;
  status: string;
}

export interface TrackingEvent {
  id: string;
  productId: string;
  timestamp: string;
  location: string;
  action: 'Procured' | 'Stored' | 'Shipped' | 'Received' | 'Sold';
  notes: string;
}

export interface Warehouse {
  id: string;
  name: string;
  location: string;
  zones: string[];
}

export interface StockLevel {
  productId: string;
  warehouseId: string;
  quantity: number;
  threshold: number;
}