import Header from "../components/Header";


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
    
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Welcome to ClearView
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover the perfect sunglasses for every occasion.
          </p>
          <a
            href="/shop"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;