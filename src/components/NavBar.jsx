const Navbar = () => {
  return (
    <div>
          <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
              <div className="max-w-xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
                  <a className="hover:text-gray-300" href="#">Design</a>
                  <a className="hover:text-gray-300" href="#">Camera</a>
                  <a className="hover:text-gray-300" href="#">Perforance</a>
                  <a className="hover:text-gray-300" href="#">Cores</a>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">Comparar</button>
              </div>
        </nav>
    </div>
  );
};

export default Navbar;
