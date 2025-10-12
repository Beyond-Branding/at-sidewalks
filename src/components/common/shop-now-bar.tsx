import { Button } from "./button";

export interface ShopNowBarProps {
  children: React.ReactNode;
  ctaText?: string;
}

export function ShopNowBar({
  children,
  ctaText = "shop now",
}: ShopNowBarProps) {
  return (
    <div className="flex justify-between items-center pt-16">
      {children}
      <div>
        <Button>{ctaText}</Button>
      </div>
    </div>
  );
}
