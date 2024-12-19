"use client"

    import * as React from "react"
    import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
    import { cn } from "@/lib/utils"

    const DropdownMenu = DropdownMenuPrimitive.Root
    const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

    const DropdownMenuContent = React.forwardRef(
      ({ className, sideOffset = 4, ...props }, ref) => {
        return (
          <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
              ref={ref}
              className={cn(
                "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:translate-x-1 data-[side=right]:-translate-x-1 data-[side=top]:-translate-y-1",
                className
              )}
              sideOffset={sideOffset}
              {...props}
            />
          </DropdownMenuPrimitive.Portal>
        )
      }
    )
    DropdownMenuContent.displayName = "DropdownMenuContent"

    const DropdownMenuItem = React.forwardRef(
      ({ className, inset, ...props }, ref) => {
        return (
          <DropdownMenuPrimitive.Item
            ref={ref}
            className={cn(
              "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
              inset && "pl-8",
              className
            )}
            {...props}
          />
        )
      }
    )
    DropdownMenuItem.displayName = "DropdownMenuItem"

    const DropdownMenuSeparator = React.forwardRef(
      ({ className, ...props }, ref) => (
        <DropdownMenuPrimitive.Separator
          ref={ref}
          className={cn("-mx-1 my-1 h-px bg-border", className)}
          {...props}
        />
      )
    )
    DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

    const DropdownMenuLabel = React.forwardRef(
      ({ className, ...props }, ref) => (
        <DropdownMenuPrimitive.Label
          ref={ref}
          className={cn("px-2 py-1.5 text-sm font-semibold", className)}
          {...props}
        />
      )
    )
    DropdownMenuLabel.displayName = "DropdownMenuLabel"

    const DropdownMenuShortcut = ({ className, ...props }) => {
      return (
        <span
          className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
          {...props}
        />
      )
    }
    DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

    export {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      DropdownMenuLabel,
      DropdownMenuShortcut,
    }
