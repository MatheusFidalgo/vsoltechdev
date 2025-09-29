'use client';

import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import '../styles/globals.css'

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <aside className="mt-8 p-6 bg-white rounded-xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary />
          <button className="w-full mt-6 py-3 px-4 bg-blue-600 text-white font-bold rounded-lg text-lg hover:bg-blue-700 transition-colors">
            Finalizar compra
          </button>
        </>
      )}
    </aside>
  );
};

export default Cart;