import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classess = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-teal-400 text-neutral-950 border-teal-400",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: "h-10",
            lg: "h-14 px-8 text-lg",
        },
    },
});

const Button = (
    props: {
        variant: "primary" | "secondary";
        size?: "sm" | "lg";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
    const { variant, className, size, ...rest } = props;

    return (
        <button className={classess({ variant, className, size })} {...rest} />
    );
};

export default Button;
