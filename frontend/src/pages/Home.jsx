import Header from "../components/Header";

// Category image map (can be relative paths from public folder)
const categoryImages = {
  Men: "men-1.png",
  Women: "woman-1.png",
  Sport: "sport-1.jpg",
};

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-100 via-white to-slate-100 min-h-screen w-full text-gray-800">
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-20 max-w-7xl mx-auto">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-brand-blue">
            Discover the <span className="text-brand-yellow">Perfect</span> Pair
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Upgrade your style with premium sunglasses — designed for comfort,
            clarity, and confidence.
          </p>
          <a
            href="/shop"
            className="inline-block mt-6 bg-brand-blue text-white px-6 py-3 rounded-full text-lg font-medium shadow hover:bg-brand-yellow hover:text-black transition-all duration-300"
          >
            Shop Now
          </a>
        </div>

        <div className="flex-1 max-w-md md:max-w-xl mx-auto">
          <img
            src="men-1.png"
            alt="Hero - Sunglasses"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center text-brand-blue">
          Explore Our Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Men", "Women", "Sport"].map((category) => (
            <a
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={categoryImages[category]}
                  alt={`${category} Collection`}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-brand-blue">
                  {category} Collection
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-brand-yellow py-16 px-8 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Summer Sale is On!
            </h2>
            <p className="text-lg text-gray-800">
              Get up to 30% off on selected styles this season.
            </p>
            <a
              href="/shop"
              className="inline-block bg-brand-blue text-white px-6 py-2 rounded-full hover:bg-gray-900 transition"
            >
              Browse Sale
            </a>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <img
              src="men-1.png"
              alt="Summer Sale"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
