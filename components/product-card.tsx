"use client";

import Image from "next/image";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

// Icons
import AddToCartIcon from "@/public/assets/images/icon-add-to-cart.svg";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

export function ProductCard({
  product,
  quantity,
  onAddToCart,
  onUpdateQuantity,
}: ProductCardProps) {
  const isInCart = quantity > 0;

  return (
    <div className="group">
      <div className="relative mb-8">
        <div
          className={cn(
            "relative rounded-lg overflow-hidden transition-all duration-200",
            isInCart && "ring-2 ring-red"
          )}
        >
          {/* ✅ Use the <picture> element for responsive art direction */}
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={product.image.desktop}
            />
            <source media="(min-width: 500px)" srcSet={product.image.tablet} />
            {/* The Image component acts as the default <img> tag and fallback */}
            <Image
              src={product.image.mobile}
              alt={product.name}
              width={240}
              height={240}
              className="w-full aspect-square object-cover"
              priority={true}
            />
          </picture>
        </div>

        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          {!isInCart ? (
            <Button
              onClick={onAddToCart}
              className="bg-white hover:bg-white text-rose-900 border border-rose-300 hover:border-red hover:text-red rounded-full px-6 py-3 font-semibold transition-all duration-200 flex items-center gap-2"
              aria-label={`Add ${product.name} to cart`}
            >
              <Image
                src={AddToCartIcon}
                alt="add to cart"
                width={100}
                height={100}
                className="w-4 h-4"
              />
              Add to Cart
            </Button>
          ) : (
            <div className="bg-red text-white rounded-full px-4 py-3 flex items-center gap-4 font-semibold">
              <Button
                onClick={() => onUpdateQuantity(quantity - 1)}
                className="bg-transparent hover:bg-white/20 text-white border border-white rounded-full w-5 h-5 p-0 flex items-center justify-center"
                aria-label={`Decrease quantity of ${product.name}`}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span
                className="min-w-[20px] text-center"
                aria-label={`Quantity: ${quantity}`}
              >
                {quantity}
              </span>
              <Button
                onClick={() => onUpdateQuantity(quantity + 1)}
                className="bg-transparent hover:bg-white/20 text-white border border-white rounded-full w-5 h-5 p-0 flex items-center justify-center"
                aria-label={`Increase quantity of ${product.name}`}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-rose-500">{product.category}</p>
        <h3 className="font-semibold text-rose-900">{product.name}</h3>
        <p className="text-red font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
