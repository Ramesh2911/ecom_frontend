"use client";

type Product = {
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { name: "iPhone 14", price: 79999, image: "https://techcrunch.com/wp-content/uploads/2022/09/Apple-iphone-14-Pro-review-1.jpeg" },
  { name: "Samsung TV", price: 49999, image: "https://kaydeeelectronics.in/cdn/shop/files/untitled-design-2024-08-05t152903600-66b0a28a46e7c.webp?v=1737196902" },
  { name: "Nike Shoes", price: 6999, image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e1bdc567-2790-4db1-91be-ff34f1e6d880/custom-nike-air-force-1-high.png" },
  { name: "Washing Machine", price: 25999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9yLmcFhcTOvA2w1BgvwMpm0uKQ21m2wsFw&s" },
];

export default function FeaturedProducts() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((prod, i) => (
          <div
            key={i}
            className="border rounded p-4 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img src={prod.image} alt={prod.name} className="h-40 w-full object-cover mb-2" />
            <h3 className="font-medium">{prod.name}</h3>
            <p className="font-bold text-blue-600">₹{prod.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
