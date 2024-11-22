import { create } from "zustand";
import { CartItem } from "./types/CartItem";

type CartStore = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [product, ...state.cart],
    })),
  clearCart: () => set(() => ({ cart: [] })),
}));
