import { MousePointer2 } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

const Pointer = (props: {
    name: string;
    color?: "red" | "blue";
    message?: string;
}) => {
    const { name, color, message } = props;

    return (
        <div className="flex flex-col items-start">
            <MousePointer2 size={25} className="mb-1" />
            <div className="ml-5">
                <p
                    className={twMerge(
                        "inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none",
                        color === "red" && "bg-red-500"
                    )}
                >
                    {name}
                </p>
                {message && (
                    <div className="mt-2 bg-neutral-900 border border-white/10 rounded-lg px-3 py-2 max-w-[200px]">
                        <p className="text-xs text-white/80">{message}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Pointer;
