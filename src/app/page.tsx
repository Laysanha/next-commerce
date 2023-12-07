import { ProductType } from "./types/ProductType"

async function getProduts() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const products = await getProduts()
  console.log(products)

  return (
    <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6'
      >
        {products.map((product: ProductType) => (
          <div key={product.id} className="">
            {product.title}
          </div>
        ))}
      </div>
    </div>
  )
}
