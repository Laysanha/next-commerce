import { formatPrice } from "../lib/utils";
import { ProductType } from "../types/ProductType"
import { ProductImage } from "./ProductImage";

type ProductProps = {
    product: ProductType;
}

export function Product({ product } : ProductProps) {
    return(
        <div className="flex flex-col p-5 h-96 text-gray-300
        relative space-y-5 overflow-hidden rounded-2xl bg-white/5 shadow-lg shadow-black/5 
        ">
            <div className="relative rounded-lg max-h-72 flex-1">
                <ProductImage product={product} fill />
            </div>
            <div className="flex justify-between items-center font-semibold text-sm my-3">
                <p className="w-52 truncate">
                    {product.name}
                </p>
                
                <p className="text-lg text-emerald-600">
                    {formatPrice(product.price)}
                </p>
            </div>
            <button className="rounded-md bg-emerald-600 px-2 py-2.5 text-sm hover:bg-emerald-700 transition">Adicionar ao carrinho</button>
        </div>
    )
}