import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva('transition-all font-bold leading-5 flex items-center justify-center gap-2', {
    variants: {
        variant: {
            primary: 'bg-primary text-white hover:bg-tertiary disabled:bg-light-gray-2',
            secondary: 'bg-light-gray-3 text-primary hover:bg-secondary [&:not(:disabled):hover]:text-white disabled:bg-transparent disabled:border-[1px] disabled:border-primary',
            shop: 'bg-[#ffb31f] text-white hover:bg-[#CF8900] disabled:bg-light-gray-2',
            productOptions: 'w-fit border-1 border-light-gray-2 bg-white text-dark-gray-2 text-lg hover:bg-light-gray-2 disabled:bg-light-gray-2',
        },
        size: {
            default: 'py-3 px-8',
            icon: 'p-3',
            full: 'w-full'
        },
        rounded: {
            default: 'rounded-lg',
            full: 'rounded-full',
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'default',
        rounded: 'default',
    }
})

export function Button({variant, size, rounded, className, children, ...props}) {

    return (
        <button className={clsx(buttonVariants({variant, size, rounded}), className)} {...props}>
            {children}
        </button>
    )
}