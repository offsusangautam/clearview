import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow w-full px-4 sm:px-8 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
