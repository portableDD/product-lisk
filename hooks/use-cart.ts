"use client";

import { useState, useCallback } from "react";
import type { Product, CartItem } from "@/lib/types";

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.name === product.name);
      if (existingItem) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productName: string) => {
    setCartItems((prev) => prev.filter((item) => item.name !== productName));
  }, []);

  const updateQuantity = useCallback(
    (productName: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productName);
        return;
      }
      setCartItems((prev) =>
        prev.map((item) =>
          item.name === productName ? { ...item, quantity } : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const getItemQuantity = useCallback(
    (productName: string) => {
      const item = cartItems.find((item) => item.name === productName);
      return item ? item.quantity : 0;
    },
    [cartItems]
  );

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    getItemQuantity,
  };
}
