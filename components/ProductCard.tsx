import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card data-testid="product-card" className="group flex flex-col h-full overflow-hidden border-slate-200/60 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 rounded-2xl">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-white/90 backdrop-blur-md text-xs font-bold px-2.5 py-1 rounded-full text-indigo-700 shadow-sm">
            New
          </span>
        </div>
        <Image
          data-testid="product-image"
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradient for bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader className="pb-3 pt-5 px-5">
        <div className="flex justify-between items-start gap-2 mb-1">
          <CardTitle data-testid="product-name" className="text-lg font-bold text-slate-800 leading-tight line-clamp-2">
            {product.name}
          </CardTitle>
          <span data-testid="product-price" className="text-lg font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow px-5 pb-5">
        <CardDescription data-testid="product-description" className="text-slate-500 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="px-5 pb-5 pt-0 border-none bg-transparent">
        <Button className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-medium rounded-xl h-11 transition-all duration-300 shadow-md hover:shadow-indigo-500/25">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
