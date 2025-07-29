import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow px-4 sm:px-8 py-6 max-w-7xl mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
