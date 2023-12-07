import { ProductType } from "../types/ProductType"

type ProductProps = {
    product: ProductType;
}

export function Products({ product } : ProductProps) {
    return(
        <div className="flex flex-col shadow-lg h-96 bg-slate-950 text-gray-300 p-5">
            <div className="relative max-h-72 flex-1">
                IMG
            </div>
            <div className="flex justify-between font-semibold text-sm m-3">
                {product.title}
            </div>
            <button className="rounded-md bg-emerald-600 px-2 py-2.5 text-sm">Adicionar ao carrinho</button>
        </div>
    )
}