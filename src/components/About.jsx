import ProductCard from "./shared/ProductCard";

const products = [
  {
    image:
      "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-17-pro-17-pro-max-hero.png",
    productName: "iPhone 17 Pro Max",
    description:
      "The iPhone 17 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
    specialPrice: 720,
    price: 780,
  },
  {
    image:
      "https://media.gadgetbytenepal.com/2025/01/Samsung-Galaxy-S25-Ultra-Titanium-Grey.jpg",
    productName: "Samsung Galaxy S25 Ultra",
    description:
      "Experience the brilliance of the Samsung Galaxy S25 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
    specialPrice: 699,
    price: 799,
  },
  {
    image:
      "https://media.gadgetbytenepal.com/2025/08/Pixel-10-pro-Design-and-Display.jpg",
    productName: "Google Pixel 6",
    description:
      "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
    price: 599,
    specialPrice: 400,
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px4 py-8">
      <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
        About us
      </h1>

      <div
        className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-4
      "
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-lg mb-4">
            Our eCommerce platform is designed to make online shopping simple,
            reliable, and accessible for everyone. We connect customers with a
            wide range of quality products, from everyday essentials to unique
            finds, all in one place. With a focus on user-friendly design,
            secure transactions, and fast delivery, we aim to provide a smooth
            and enjoyable shopping experience. Whether you're browsing, buying,
            or selling, our platform empowers users with convenience, trust, and
            innovation at every step.
          </p>
        </div>

        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://miro.medium.com/v2/1*VNoETQG1aBwujmj9qMBbLQ.png"
            alt="About us"
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          ></img>
        </div>
      </div>

      <div className="py-7 space-y-8">
        <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((products, i) => (
            <ProductCard key={i} about {...products} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
