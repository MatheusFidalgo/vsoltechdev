'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem, CartContextType } from '../types';

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addItem = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (productId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

const decreaseQuantity = (productId: string) => {
    setCartItems(prevItems =>
        prevItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0)
    );
};

  const removeItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const value = {
    cartItems,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

