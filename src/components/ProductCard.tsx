interface ProductCardProps {
  image: string
  name: string
  category: string
  price: string
  colors?: number
}
export function ProductCard({
  image,
  name,
  category,
  price,
  colors,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {colors && (
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium">
            {colors} Colors
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-600 font-medium">{category}</p>
        <h3 className="font-semibold text-base group-hover:text-gray-600 transition-colors">
          {name}
        </h3>
        <p className="font-semibold text-base">{price}</p>
      </div>
    </div>
  )
}
 
export default ProductCard