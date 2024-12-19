"use client"

    import * as React from "react"
    import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
    import { cn } from "@/lib/utils"
    import { ChevronDown } from "lucide-react"

    const NavigationMenu = NavigationMenuPrimitive.Root

    const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
      <NavigationMenuPrimitive.List
        ref={ref}
        className={cn(
          "group flex flex-1 list-none items-center justify-center space-x-1",
          className
        )}
        {...props}
      />
    ))
    NavigationMenuList.displayName = "NavigationMenuList"

    const NavigationMenuItem = React.forwardRef(({ className, ...props }, ref) => (
      <NavigationMenuPrimitive.Item
        ref={ref}
        className={cn("group relative flex h-12 items-center justify-center", className)}
        {...props}
      />
    ))
    NavigationMenuItem.displayName = "NavigationMenuItem"

    const NavigationMenuTrigger = React.forwardRef(
      ({ className, children, ...props }, ref) => (
        <NavigationMenuPrimitive.Trigger
          ref={ref}
          className={cn(
            "group flex h-12 select-none items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-foreground outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
            className
          )}
          {...props}
        >
          {children}
          <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground group-hover:text-foreground" />
        </NavigationMenuPrimitive.Trigger>
      )
    )
    NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

    const NavigationMenuContent = React.forwardRef(
      ({ className, ...props }, ref) => (
        <NavigationMenuPrimitive.Content
          ref={ref}
          className={cn(
            "absolute top-0 left-0 w-auto overflow-hidden rounded-md bg-popover p-4 text-popover-foreground shadow-md animate-in fade-in-50 slide-in-from-top-1",
            className
          )}
          {...props}
        />
      )
    )
    NavigationMenuContent.displayName = "NavigationMenuContent"

    const NavigationMenuLink = React.forwardRef(
      ({ className, ...props }, ref) => (
        <NavigationMenuPrimitive.Link
          ref={ref}
          className={cn(
            "block select-none rounded-md px-3 py-1.5 text-sm font-medium leading-none text-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        />
      )
    )
    NavigationMenuLink.displayName = "NavigationMenuLink"

    const NavigationMenuViewport = React.forwardRef(
      ({ className, ...props }, ref) => (
        <div
          className={cn(
            "absolute left-0 top-full flex justify-center overflow-hidden",
            className
          )}
          ref={ref}
        >
          <NavigationMenuPrimitive.Viewport
            className={cn(
              "relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full rounded-md bg-popover shadow-lg",
            )}
            {...props}
          />
        </div>
      )
    )
    NavigationMenuViewport.displayName = "NavigationMenuViewport"

    export {
      NavigationMenu,
      NavigationMenuList,
      NavigationMenuItem,
      NavigationMenuTrigger,
      NavigationMenuContent,
      NavigationMenuLink,
      NavigationMenuViewport,
    }
