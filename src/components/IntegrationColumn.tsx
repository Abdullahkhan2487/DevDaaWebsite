"use client";

import React, { Fragment, memo } from "react";
import { type IntegrationsType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";

const IntegrationColumn = memo((props: {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}) => {
    const { integrations, className, reverse } = props;
    return (
        <div
            className={twMerge(
                "flex flex-col gap-4 pb-4",
                reverse ? "animate-column-down" : "animate-column-up",
                className
            )}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((integration) => {
                        const Icon = integration.icon;
                        return (
                            <div
                                key={integration.name}
                                className="bg-neutral-900 border border-white/10 rounded-3xl p-6 "
                            >
                                <div className="flex justify-center">
                                    {Icon && (
                                        <Icon className="size-24 text-white" />
                                    )}
                                </div>
                                <h3 className="text-3xl text-center mt-6 ">
                                    {integration.name}
                                </h3>
                                <p className="text-center text-white/50 mt-2 ">
                                    {integration.description}
                                </p>
                            </div>
                        );
                    })}
                </Fragment>
            ))}
        </div>
    );
});

export default IntegrationColumn;
