"use client";

type Category = {
  name: string;
  image: string;
};

const categories: Category[] = [
  { name: "Mobiles", image: "https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg" },
  { name: "Fashion", image: "https://www.yellowbrick.co/wp-content/uploads/2023/08/fashion_blog_styling_blog_two-models-min-1024x683.jpg" },
  { name: "Electronics", image: "https://www.lg.com/eastafrica/images/tvs/md06144916/gallery/D01.jpg" },
  { name: "Home", image: "https://m.media-amazon.com/images/I/61+pE-svRuL.jpg" },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          >
            <img src={cat.image} alt={cat.name} className="h-32 w-32 object-cover rounded" />
            <p className="mt-2 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
