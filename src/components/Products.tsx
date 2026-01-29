import productEspresso from "@/assets/product-espresso.jpg";
import productCappuccino from "@/assets/product-cappuccino.jpg";
import productCroissant from "@/assets/product-croissant.jpg";
import productCake from "@/assets/product-cake.jpg";
import productIcedLatte from "@/assets/product-iced-latte.jpg";
import productAvocadoToast from "@/assets/product-avocado-toast.jpg";

const products = [
  {
    name: "Signature Espresso",
    description: "Rich, bold, and perfectly balanced with notes of dark chocolate and caramel.",
    price: "$4.50",
    image: productEspresso,
  },
  {
    name: "Velvet Cappuccino",
    description: "Silky smooth foam atop our signature espresso with a hint of cinnamon.",
    price: "$5.50",
    image: productCappuccino,
  },
  {
    name: "Butter Croissant",
    description: "Flaky, golden layers of French perfection, baked fresh every morning.",
    price: "$4.00",
    image: productCroissant,
  },
  {
    name: "Belgian Chocolate Cake",
    description: "Decadent layers of rich chocolate ganache and moist chocolate sponge.",
    price: "$7.50",
    image: productCake,
  },
  {
    name: "Iced Caramel Latte",
    description: "Cold-brewed perfection with house-made caramel and creamy oat milk.",
    price: "$6.00",
    image: productIcedLatte,
  },
  {
    name: "Avocado Toast",
    description: "Artisan sourdough topped with fresh avocado and a perfectly poached egg.",
    price: "$12.00",
    image: productAvocadoToast,
  },
];

const Products = () => {
  return (
    <section id="menu" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Our Selection
          </span>
          <h2 className="section-title mb-6">Crafted with Passion</h2>
          <div className="divider-gold mb-6" />
          <p className="section-subtitle mx-auto">
            Each creation is a masterpiece, from our artisan coffee blends to our freshly baked delights.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article 
              key={product.name} 
              className="card-elegant group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-medium text-foreground">
                    {product.name}
                  </h3>
                  <span className="text-gold font-medium text-lg">
                    {product.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
