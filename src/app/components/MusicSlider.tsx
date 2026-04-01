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
      <SliderPrimitive.Track
        className={cn(
          "relative h-1 w-full grow overflow-hidden rounded-full bg-zinc-700",
          variant === 'progress' && "group-hover:h-1.5 transition-all duration-200",
        )}
      >
        <SliderPrimitive.Range
          className={cn(
            "absolute h-full bg-gradient-to-r from-white to-zinc-200",
            variant === 'volume' && "from-zinc-300 to-zinc-400",
          )}
        />
      </SliderPrimitive.Track>
    </SliderPrimitive.Root>
  );
}
