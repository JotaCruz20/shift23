export interface CartItem {
    id: number
    title: string
    image: string
    price: number
    quantity: number
    unit: string
  }
  
export  interface CartState {
    items: CartItem[];
  }
  
export interface Action {
    type: string;
    payload: any;
  }