import { CategoryHero } from '../components/CategoryHero'
import { ProductCard } from '../components/ProductCard'
export function KidsPage() {
  const categories = [
    {
      name: 'Little Kids (10.5C-3Y)',
      image:
        'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=600&q=80',
    },
    {
      name: 'Big Kids (3.5Y-7Y)',
      image:
        'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600&q=80',
    },
    {
      name: 'Toddler (2C-10C)',
      image:
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
    },
  ]
  const products = [
    {
      image:
        'https://images.unsplash.com/photo-1514590734052-344a18719611?w=800&q=80',
      name: 'Air Max 90',
      category: "Kids' Shoes",
      price: 'R1,599',
      colors: 5,
    },
    {
      image:
        'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&q=80',
      name: 'Air Force 1',
      category: "Kids' Shoes",
      price: 'R1,399',
      colors: 6,
    },
    {
      image:
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80',
      name: 'Dunk Low',
      category: "Big Kids' Shoes",
      price: 'R1,499',
      colors: 4,
    },
    {
      image:
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      name: 'Cortez',
      category: "Kids' Shoes",
      price: 'R1,199',
      colors: 5,
    },
    {
      image:
        'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80',
      name: 'Revolution 6',
      category: "Little Kids' Shoes",
      price: 'R999',
      colors: 4,
    },
    {
      image:
        'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=800&q=80',
      name: 'Blazer Mid',
      category: "Big Kids' Shoes",
      price: 'R1,399',
      colors: 3,
    },
  ]
  return (
    <>
      <CategoryHero
        title="PLAY WITHOUT LIMITS"
        subtitle="Kids' Collection"
        description="Built for adventure, designed for comfort. From the playground to practice, keep them moving in styles they'll love."
        image="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1920&q=80"
        ctaText="Shop Kids"
      />

      {/* Categories */}
      <section className="py-12 lg:py-16 px-6 lg:px-12 max-w-[1920px] mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Shop by Age</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-3 bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="relative z-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none" />
              </div>
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-12 lg:py-16 px-6 lg:px-12 max-w-[1920px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold">Popular Picks</h2>
          <div className="flex gap-4 text-sm">
            <button className="font-medium hover:text-gray-600 transition-colors">
              Filter
            </button>
            <button className="font-medium hover:text-gray-600 transition-colors">
              Sort
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </>
  )
}