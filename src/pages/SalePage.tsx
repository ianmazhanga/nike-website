export function SalePage() {
  const products = [
    {
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      name: 'Air Max 90',
      category: "Men's Shoes",
      price: 'R1,699',
      originalPrice: 'R2,399',
      discount: '30% OFF',
    },
    {
      image:
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
      name: 'Air Max 270',
      category: "Women's Shoes",
      price: 'R2,099',
      originalPrice: 'R2,999',
      discount: '30% OFF',
    },
    {
      image:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      name: "Blazer Mid '77",
      category: 'Unisex Shoes',
      price: 'R1,449',
      originalPrice: 'R1,999',
      discount: '30% OFF',
    },
    {
      image:
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
      name: 'Air Jordan 1 Mid',
      category: "Men's Shoes",
      price: 'R1,599',
      originalPrice: 'R2,299',
      discount: '30% OFF',
    },
    {
      image:
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
      name: 'Dunk Low Retro',
      category: "Men's Shoes",
      price: 'R1,499',
      originalPrice: 'R2,099',
      discount: '30% OFF',
    },
    {
      image:
        'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&q=80',
      name: 'Air Force 1',
      category: "Kids' Shoes",
      price: 'R999',
      originalPrice: 'R1,399',
      discount: '30% OFF',
    },
    {
      image:
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80',
      name: 'Metcon 8',
      category: "Men's Training Shoes",
      price: 'R1,949',
      originalPrice: 'R2,799',
      discount: '30% OFF',
    },
    {
      image:
        'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80',
      name: 'Air Force 1 Shadow',
      category: "Women's Shoes",
      price: 'R1,549',
      originalPrice: 'R2,199',
      discount: '30% OFF',
    },
  ]
  return (
    <>
      {/* Sale Hero */}
      <section className="relative w-full h-[50vh] lg:h-[60vh] bg-gradient-to-br from-red-600 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 lg:px-12 max-w-[1920px] mx-auto">
          <p className="text-white/90 text-sm lg:text-base font-medium mb-3 tracking-wider uppercase">
            Limited Time Offer
          </p>
          <h1 className="text-white text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
            UP TO 30% OFF
          </h1>
          <p className="text-white/90 text-lg lg:text-xl mb-8 max-w-2xl">
            Score big savings on select styles. Don't miss out on these
            deals—shop now before they're gone.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
            Shop Sale
          </button>
        </div>
      </section>

      {/* Sale Products */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 max-w-[1920px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Sale Items</h2>
            <p className="text-gray-600">
              {products.length} products available
            </p>
          </div>
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
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {product.discount}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600 font-medium">
                  {product.category}
                </p>
                <h3 className="font-semibold text-base group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-base text-red-600">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}