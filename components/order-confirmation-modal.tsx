"use client";

import type { CartItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Icons
import OrderConfirmedIcon from "@/public/assets/images/icon-order-confirmed.svg";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  items: CartItem[];
  totalPrice: number;
  onStartNewOrder: () => void;
}

export function OrderConfirmationModal({
  isOpen,
  items,
  totalPrice,
  onStartNewOrder,
}: OrderConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center md:p-4 z-50">
      <div className="bg-white rounded-lg p-6 md:max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className=" mb-6">
          <Image
            src={OrderConfirmedIcon}
            alt="Order confirmed"
            width={48}
            height={48}
            className="mb-4"
          />
          <h2 className="text-3xl font-bold text-rose-900 mb-2">
            Order Confirmed
          </h2>
          <p className="text-rose-500">We hope you enjoy your food!</p>
        </div>

        <div className="bg-rose-50 rounded-lg p-4 mb-6">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 pb-4 border-b border-[hsl(13,31%,94%)] last:border-b-0 last:pb-0"
              >
                {/* ✅ Use the thumbnail directly from the item prop */}
                <Image
                  src={item.image.thumbnail}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-rose-900 text-sm">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-red font-semibold text-sm">
                      {item.quantity}x
                    </span>
                    <span className="text-rose-500 text-sm">
                      @ ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <span className="font-semibold text-rose-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 mt-4 border-t border-[hsl(13,31%,94%)]">
            <span className="text-rose-900">Order Total</span>
            <span className="text-2xl font-bold text-rose-900">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <Button
          onClick={onStartNewOrder}
          className="w-full bg-red hover:bg-red/80 text-white font-semibold py-4 rounded-full"
        >
          Start New Order
        </Button>
      </div>
    </div>
  );
}