'use client'
import Image from "next/image"
import { ProductType } from "../types/ProductType"
import { useState } from "react";

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

export function ProductImage({ product, fill }: ProductImageProps) {
    return fill ? (
        <Image
            src={product.image}
            fill 
            alt={product.name}
        />
    ) : (
        <Image
            src={product.image}
            width={400}
            height={700}
            alt={product.name}
        />
    )
}