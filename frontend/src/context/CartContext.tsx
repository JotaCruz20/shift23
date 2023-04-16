import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { CartContextProps, ICartProviderProps } from '../interfaces/IProps';
import { Action, CartItem, CartState  } from '../interfaces/IContext';



const CartContext = createContext<CartContextProps>({
    state: { items: [] },
    addItem: () => {},
    removeItem: () => {},
    updateQuantity: () => {},
    items: [],
    dispatch: () => {},
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
    case 'SET_ITEMS':
      console.log(action.payload)
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }: ICartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load cart data from localStorage on mount
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const items = JSON.parse(cartData);
      if(items.length > 0){
        dispatch({ type: 'SET_ITEMS', payload: items });
      }
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]); 

  const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (itemId: string) => dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  const updateQuantity = (itemId: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, updateQuantity, items: state.items, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart, CartContext };