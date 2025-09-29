'use client';

import { CartItem as CartItemType } from '../types';
import { useCart } from '../hooks/useCart';
import Image from 'next/image';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-4">
        <Image 
          src={item.image} 
          alt={item.name} 
          width={40} 
          height={40} 
          className="rounded-md" 
        />
        <span className="text-lg font-medium">{item.name}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md">
          <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 text-xl">-</button>
          <span className="px-3">{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 text-xl">+</button>
        </div>
        <span className="text-lg font-bold">R$ {(item.price * item.quantity).toFixed(2)}</span>
        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 transition-colors ml-4">
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartItem;