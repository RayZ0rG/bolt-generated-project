"use client"

    import * as React from "react"
    import * as ToastPrimitive from "@radix-ui/react-toast"
    import { X } from "lucide-react"

    import { cn } from "@/lib/utils"

    const ToastProvider = ToastPrimitive.Provider

    const ToastViewport = React.forwardRef(
      ({ className, ...props }, ref) => {
        return (
          <ToastPrimitive.Viewport
            ref={ref}
            className={cn(
              "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col sm:max-w-[420px]",
              className
            )}
            {...props}
          />
        )
      }
    )
    ToastViewport.displayName = ToastPrimitive.Viewport.displayName

    const Toast = React.forwardRef(
      ({ className, ...props }, ref) => {
        return (
          <ToastPrimitive.Root
            ref={ref}
            className={cn(
              "group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-bottom-1 data-[state=open]:slide-in-from-top-1 sm:border",
              className
            )}
            {...props}
          />
        )
      }
    )
    Toast.displayName = ToastPrimitive.Root.displayName

    const ToastAction = React.forwardRef(
      ({ className, ...props }, ref) => {
        return (
          <ToastPrimitive.Action
            ref={ref}
            className={cn(
              "inline-flex h-8 items-center justify-center rounded-md bg-transparent px-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:hover:bg-destructive group-[.destructive]:focus:ring-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:text-destructive-foreground",
              className
            )}
            {...props}
          />
        )
      }
    )
    ToastAction.displayName = ToastPrimitive.Action.displayName

    const ToastClose = React.forwardRef(
      ({ className, ...props }, ref) => {
        return (
          <ToastPrimitive.Close
            ref={ref}
            className={cn(
              "absolute right-2 top-2 rounded-sm p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-destructive/50 group-[.destructive]:hover:text-destructive group-[.destructive]:focus:text-destructive",
              className
            )}
            {...props}
          >
            <X className="h-4 w-4" />
          </ToastPrimitive.Close>
        )
      }
    )
    ToastClose.displayName = ToastPrimitive.Close.displayName

    const ToastTitle = React.forwardRef(
      ({ className, ...props }, ref) => {
        return (
          <ToastPrimitive.Title
            ref={ref}
            className={cn("mb-1 text-sm font-semibold", className)}
            {...props}
          />
        )
      }
    )
    ToastTitle.displayName = ToastPrimitive.Title.displayName

    const ToastDescription = React.forwardRef(
      ({ className, ...props }, ref) => {
        return (
          <ToastPrimitive.Description
            ref={ref}
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
          />
        )
      }
    )
    ToastDescription.displayName = ToastPrimitive.Description.displayName

    export {
      ToastProvider,
      ToastViewport,
      Toast,
      ToastAction,
      ToastClose,
      ToastTitle,
      ToastDescription,
    }
