import { CategoryHero } from '../components/CategoryHero'
import { ProductCard } from '../components/ProductCard'
export function MenPage() {
  const categories = [
    {
      name: 'Running',
      image:
        'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80',
    },
    {
      name: 'Training',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    },
    {
      name: 'Basketball',
      image:
        'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600&q=80',
    },
    {
      name: 'Lifestyle',
      image:
        'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80',
    },
  ]
  const products = [
    {
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      name: 'Air Max 90',
      category: "Men's Shoes",
      price: '$130',
      colors: 4,
    },
    {
      image:
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
      name: 'Air Jordan 1 Mid',
      category: "Men's Shoes",
      price: '$125',
      colors: 3,
    },
    {
      image:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      name: "Blazer Mid '77",
      category: "Men's Shoes",
      price: '$110',
      colors: 4,
    },
    {
      image:
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
      name: 'Dunk Low Retro',
      category: "Men's Shoes",
      price: '$115',
      colors: 6,
    },
    {
      image:
        'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80',
      name: 'React Infinity Run',
      category: "Men's Running Shoes",
      price: '$160',
      colors: 3,
    },
    {
      image:
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80',
      name: 'Metcon 8',
      category: "Men's Training Shoes",
      price: '$150',
      colors: 5,
    },
    {
      image:
        'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80',
      name: 'LeBron XX',
      category: "Men's Basketball Shoes",
      price: '$200',
      colors: 4,
    },
    {
      image:
        'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
      name: "Air Force 1 '07",
      category: "Men's Shoes",
      price: '$110',
      colors: 8,
    },
  ]
  return (
    <>
      <CategoryHero
        title="BUILT FOR PERFORMANCE"
        subtitle="Men's Collection"
        description="Engineered for athletes who demand the best. From the track to the court, gear up with cutting-edge technology and uncompromising style."
        image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
      />

      {/* Categories */}
      <section className="py-12 lg:py-16 px-6 lg:px-12 max-w-[1920px] mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Shop by Sport</h2>
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