"use client";

import type { CartItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Icons
import CarbonNeutralIcon from "@/public/assets/images/icon-carbon-neutral.svg";
import RemoveItemIcon from "@/public/assets/images/icon-remove-item.svg";
import EmptyCartIllustration from "@/public/assets/images/illustration-empty-cart.svg";

interface CartProps {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
  onRemoveItem: (productName: string) => void;
  onConfirmOrder: () => void;
}

export function Cart({
  items,
  totalPrice,
  totalItems,
  onRemoveItem,
  onConfirmOrder,
}: CartProps) {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-rose-900 mb-6">
          Your Cart (0)
        </h2>
        <div className="text-center py-8">
          <Image
            src={EmptyCartIllustration}
            alt="Empty cart"
            width={128}
            height={128}
            className="mx-auto"
          />
          <p className="text-rose-500 mt-4">
            Your added items will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold text-rose-900 mb-6">
        Your Cart ({totalItems})
      </h2>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between py-4 border-b border-[hsl(13,31%,94%)]"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-rose-900 mb-2">
                {item.name}
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-red font-semibold">
                  {item.quantity}x
                </span>
                <span className="text-rose-500">
                  @ ${item.price.toFixed(2)}
                </span>
                <span className="font-semibold text-rose-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
            <Button
              onClick={() => onRemoveItem(item.name)}
              className="bg-transparent hover:bg-transparent text-rose-300 hover:text-rose-900 border border-rose-300 rounded-full w-6 h-6 p-0 flex items-center justify-center ml-4"
              aria-label={`Remove ${item.name} from cart`}
            >
              <Image
                src={RemoveItemIcon}
                alt="Remove item"
                width={12}
                height={12}
              />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-rose-900">Order Total</span>
        <span className="text-2xl font-bold text-rose-900">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center justify-center gap-2 mb-6 p-4 bg-rose-50 rounded-lg">
        <Image
          src={CarbonNeutralIcon}
          alt="Carbon neutral"
          width={20}
          height={20}
        />
        <span className="text-sm text-rose-900">
          This is a <strong>carbon-neutral</strong> delivery
        </span>
      </div>

      <Button
        onClick={onConfirmOrder}
        className="w-full bg-red hover:bg-red/80 text-white font-semibold py-4 rounded-full"
      >
        Confirm Order
      </Button>
    </div>
  );
}
