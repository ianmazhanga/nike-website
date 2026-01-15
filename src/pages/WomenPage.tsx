import { CategoryHero } from '../components/CategoryHero'
import { ProductCard } from '../components/ProductCard'
export function WomenPage() {
  const categories = [
    {
      name: 'Running',
      image:
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80',
    },
    {
      name: 'Training',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    },
    {
      name: 'Yoga',
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    },
    {
      name: 'Lifestyle',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    },
  ]
  const products = [
    {
      image:
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
      name: 'Air Max 270',
      category: "Women's Shoes",
      price: 'R2,999',
      colors: 5,
    },
    {
      image:
        'https://images.unsplash.com/photo-1603787081207-362bcef7f812?w=800&q=80',
      name: 'Air Zoom Pegasus 40',
      category: "Women's Running Shoes",
      price: 'R2,599',
      colors: 6,
    },
    {
      image:
        'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80',
      name: 'Dunk Low',
      category: "Women's Shoes",
      price: 'R2,099',
      colors: 7,
    },
    {
      image:
        'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80',
      name: 'Air Force 1 Shadow',
      category: "Women's Shoes",
      price: 'R2,199',
      colors: 4,
    },
    {
      image:
        'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80',
      name: 'Blazer Low Platform',
      category: "Women's Shoes",
      price: 'R1,999',
      colors: 5,
    },
    {
      image:
        'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&q=80',
      name: 'React Infinity 3',
      category: "Women's Running Shoes",
      price: 'R2,999',
      colors: 4,
    },
    {
      image:
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
      name: 'Air Jordan 1 Mid',
      category: "Women's Shoes",
      price: 'R2,299',
      colors: 6,
    },
    {
      image:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      name: 'Cortez',
      category: "Women's Shoes",
      price: 'R1,699',
      colors: 8,
    },
  ]
  return (
    <>
      <CategoryHero
        title="MOVE WITH CONFIDENCE"
        subtitle="Women's Collection"
        description="Designed for every move you make. From high-intensity workouts to everyday style, find performance and comfort that moves with you."
        image="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=1920&q=80"
      />

      {/* Categories */}
      <section className="py-12 lg:py-16 px-6 lg:px-12 max-w-[1920px] mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">
          Shop by Activity
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100">
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
          <h2 className="text-2xl lg:text-3xl font-bold">Featured Products</h2>
          <div className="flex gap-4 text-sm">
            <button className="font-medium hover:text-gray-600 transition-colors">
              Filter
            </button>
            <button className="font-medium hover:text-gray-600 transition-colors">
              Sort
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </>
  )
}