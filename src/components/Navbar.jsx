import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Link para a página inicial */}
        <Link to="/" className="text-white text-xl font-bold hover:text-gray-300">
          Pokédex
        </Link>

        {/* Links de navegação */}
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Início
          </Link>
          <Link to="/favoritos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ml-4">
            Meus Favoritos
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;