import React, { useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);

  const importarProdutos = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProdutos(res.data);
    } catch (error) {
      alert('Erro ao importar produtos.');
    }
    setLoading(false);
  };

  const exportarCSV = () => {
    if (produtos.length === 0) {
      alert("Não há produtos para exportar.");
      return;
    }

    const csv = Papa.unparse(
      produtos.map(p => ({
        id: p.id,
        título: p.title,
        preço: p.price,
        categoria: p.category,
      }))
    );

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "produtos.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='container mt-5'>
      <h2 className='mb-4 text-center'>Produtos</h2>
      
      <div className='d-flex justify-content-center gap-3 mb-4'>
        <button
          className='btn text-white px-4 py-2 rounded-3 border-0'
          onClick={importarProdutos}
          disabled={loading}
          style={{ backgroundColor: '#1e133a' }}
        >
          {loading ? 'Importando...' : 'Importar Produtos'}
        </button>

        <button
          className='btn text-white px-4 py-2 rounded-3 border-0'
          onClick={exportarCSV}
          style={{ backgroundColor: '#1e133a' }}
        >
          Exportar para CSV
        </button>
      </div>

      <ul className='list-group'>
        {produtos.map(produto => (
          <li key={produto.id} className='list-group-item'>
            <strong>{produto.title}</strong> - R$ {produto.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
