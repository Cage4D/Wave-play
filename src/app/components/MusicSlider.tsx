import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "./ui/utils";


interface MusicSliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  variant?: 'progress' | 'volume';
}

export function MusicSlider({
  className,
  variant = 'progress',
  ...props
}: MusicSliderProps) {
  return (
    <SliderPrimitive.Root
      className={cn(
        "relative flex w-full touch-none select-none items-center group",
        className,
      )}
      {...props}
    >
      
    </SliderPrimitive.Root>
  );
}
