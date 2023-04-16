import React, { createContext, useContext, useReducer } from 'react';

import { CartContextProps, ICartProviderProps } from '../interfaces/IProps';
import { Action, CartItem, CartState  } from '../interfaces/IContext';



const CartContext = createContext<CartContextProps>({
    state: { items: [] },
    addItem: () => {},
    removeItem: () => {},
    updateQuantity: () => {},
    items: [],
});

const cartReducer = (state: CartState, action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existingItem.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }: ICartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    console.log(state);
  
    const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item });
    const removeItem = (itemId: string) => dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    const updateQuantity = (itemId: string, quantity: number) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
  
    return (
      <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, items: state.items }}>
        {children}
      </CartContext.Provider>
    );
  };

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };