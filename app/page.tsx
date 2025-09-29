import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { mockProducts } from '../data/products';

export default async function HomePage() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  const products = await res.json();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </main>
  );
}