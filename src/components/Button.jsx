import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva('py-3 px-8 transition-all rounded-lg font-bold leading-5 flex items-center justify-between gap-2', {
    variants: {
        variant: {
            primary: 'bg-primary text-white hover:bg-tertiary disabled:bg-light-gray-2',
            secondary: 'bg-light-gray-3 text-primary hover:bg-secondary [&:not(:disabled):hover]:text-white disabled:bg-transparent disabled:border-[1px] disabled:border-primary',
            shop: 'bg-[#ffb31f] text-white hover:bg-[#CF8900] disabled:bg-light-gray-2',
        },
    },

    defaultVariants: {
        variant: 'primary'
    }
})

export function Button({variant, className, children, ...props}) {

    return (
        <button className={clsx(buttonVariants({variant}), className)} {...props}>
            {children}
        </button>
    )
}