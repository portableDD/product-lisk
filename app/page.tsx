"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product-card";
import { Cart } from "@/components/cart";
import { OrderConfirmationModal } from "@/components/order-confirmation-modal";
import { useCart } from "@/hooks/use-cart";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    getItemQuantity,
  } = useCart();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        // Clean up the image paths
        const cleanedData = data.map((product) => ({
          ...product,
          image: {
            thumbnail: product.image.thumbnail.replace("./", "/"),
            mobile: product.image.mobile.replace("./", "/"),
            tablet: product.image.tablet.replace("./", "/"),
            desktop: product.image.desktop.replace("./", "/"),
          },
        }));
        setProducts(cleanedData);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);
  const handleConfirmOrder = () => {
    setShowOrderConfirmation(true);
  };

  const handleStartNewOrder = () => {
    setShowOrderConfirmation(false);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Products Section */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold text-rose-900 mb-8">
              Desserts
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  quantity={getItemQuantity(product.name)}
                  onAddToCart={() => addToCart(product)}
                  onUpdateQuantity={(quantity) =>
                    updateQuantity(product.name, quantity)
                  }
                />
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Cart
                items={cartItems}
                totalPrice={getTotalPrice()}
                totalItems={getTotalItems()}
                onRemoveItem={removeFromCart}
                onConfirmOrder={handleConfirmOrder}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        isOpen={showOrderConfirmation}
        items={cartItems}
        totalPrice={getTotalPrice()}
        onStartNewOrder={handleStartNewOrder}
      />
    </div>
  );
}
