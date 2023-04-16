export interface CartItem {
    id: number
    title: string
    image: string
    value: number
    quantity: number
    unit: string
    producerName: string
  }
  
export  interface CartState {
    items: CartItem[];
  }
  
export interface Action {
    type: string;
    payload: any;
  }