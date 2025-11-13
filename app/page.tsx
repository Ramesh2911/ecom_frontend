import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Carousel Section */}
      <section className="w-full">
        <Carousel />
      </section>

      {/* Add spacing between sections */}
      <section className="mt-8 px-4">
        <Categories />
      </section>

      {/* Featured Products Section */}
      <section className="mt-12 px-4 pb-12">
        <FeaturedProducts />
      </section>
    </main>
  );
}
