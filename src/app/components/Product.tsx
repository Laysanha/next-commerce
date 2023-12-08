import { ProductType } from "../types/ProductType"
import { ProductImage } from "./ProductImage";

type ProductProps = {
    product: ProductType;
}

export function Product({ product } : ProductProps) {
    return(
        <div className="flex flex-col shadow-lg h-96 bg-slate-950 text-gray-300 p-5">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product} fill />
            </div>
            <div className="flex justify-between items-center font-semibold text-sm my-3">
                <p className="w-52 truncate">
                    {product.title}
                </p>
                
                <p className="text-lg text-emerald-600">
                    {product.price}
                </p>


            </div>
            <button className="rounded-md bg-emerald-600 px-2 py-2.5 text-sm">Adicionar ao carrinho</button>
        </div>
    )
}