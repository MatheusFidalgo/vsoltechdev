'use client';

import { useCart } from '../hooks/useCart';

const CartSummary = () => {
  const { cartItems } = useCart();
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const finalTotal = subtotal + tax;
  
  return (
    <div className="mt-8 pt-4 border-t border-gray-200">
      <div className="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span>R$ {subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-gray-700 mt-2">
        <span>Frete</span>
        <span>R$ {tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-xl mt-4">
        <span>Total</span>
        <span>R$ {finalTotal.toFixed(2)}</span>        
      </div>
      <span className="text-sm italic text-gray-500" >Valor do frete é 5% do valor do produto</span>
    </div>
  );
};

export default CartSummary;