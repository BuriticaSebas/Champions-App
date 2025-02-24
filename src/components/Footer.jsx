function Footer() {
    return (
      <footer className="bg-purple-800 text-white p-4 mt-6">
        <div className="container mx-auto text-center ">
          <p className="text-sm">
            © {new Date().getFullYear()} Champions League App. Todos los derechos reservados.
          </p>
          <p className="text-sm mt-2">
            Desarrollado con ❤️ por Sebastian Buritica
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;