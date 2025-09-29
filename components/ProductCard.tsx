'use client';

import { Product } from '../types';
import Image from 'next/image';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Image src={product.image} alt={product.name} width={100} height={100} className="rounded-md object-cover"/>
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
      <button 
        onClick={() => addItem(product)}
         className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Comprar
      </button>
    </div>
  );
};

export default ProductCard;