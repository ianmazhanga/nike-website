interface Product {
  image: string
  name: string
  category: string
  price: string
  colors: number
}

function ProductCard({ image, name, category, price, colors }: Product) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-bold">{price}</span>
          <span className="text-sm text-gray-600">{colors} colors</span>
        </div>
      </div>
    </article>
  )
}
export function ProductGrid() {
  const products = [
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
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
      name: 'Air Max 270',
      category: "Women's Shoes",
      price: '$160',
      colors: 5,
    },
    {
      image:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      name: "Blazer Mid '77",
      category: 'Unisex Shoes',
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
  ]
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 max-w-[1920px] mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2">Best of Air Max</h2>
        <p className="text-gray-600">
          Shop the latest and greatest from the Air Max family.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}