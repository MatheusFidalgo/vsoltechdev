export default function HomePage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Desafio VSolTech Dev
      </h1>
      <p className="text-gray-700">
        Teste prático desenvolvido para a VSolTech Dev.
      </p>
      <p className="text-gray-700">
        Explicação das páginas:
      </p>
      <p>­

      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Home
        </h2>
        <p className="text-gray-700">
          Página explicando as abas e funcionalidades, ela não está setada como pagina principal, a aba produtos está definida como a principal '/'
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Produtos
        </h2>
        <p className="text-gray-700">
          Na página principal, você pode ver a nossa lista de produtos. Cada item mostra uma imagem, nome e preço.
        </p>
        <p className="text-gray-700">
          Clique no botão "Comprar" para incluir um produto no seu carrinho de compras. Você pode adicionar a mesma quantidade várias vezes.
        </p>
        <p className="text-gray-700">
          No carrinho, você pode aumentar ou diminuir a quantidade de cada produto, ou removê-lo completamente. O total da compra é atualizado automaticamente.        
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Sobre
        </h2>
        <p className="text-gray-700">
          Informações sobre a minha pessoa.
        </p>
      </div>
    </main>
  );
}