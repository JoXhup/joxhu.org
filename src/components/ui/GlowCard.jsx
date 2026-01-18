import React from 'react';
import { cn } from "@/lib/utils";

const GlowCard = ({ children, className, glowColor = "blue" }) => {
    return (
        <div className={cn(
            "group relative rounded-3xl border border-zinc-900/50 bg-[#0a0a0a] p-8 transition-all duration-300 overflow-hidden hover:border-zinc-800",
            className
        )}>
            {/* Top Spotlight Effect - Beam */}
            <div className={cn(
                "absolute inset-x-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:h-[3px] group-hover:shadow-[0_0_20px_0px_currentColor]",
                glowColor === 'blue' && "text-[#5865F2]",
                glowColor === 'green' && "text-emerald-500",
                glowColor === 'purple' && "text-purple-500",
                glowColor === 'orange' && "text-orange-500"
            )} />

            {/* Ambient Glow */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none",
                glowColor === 'blue' && "bg-[radial-gradient(circle_at_50%_0%,#5865F2,transparent_70%)]",
                glowColor === 'green' && "bg-[radial-gradient(circle_at_50%_0%,#10b981,transparent_70%)]",
                glowColor === 'purple' && "bg-[radial-gradient(circle_at_50%_0%,#a855f7,transparent_70%)]",
                glowColor === 'orange' && "bg-[radial-gradient(circle_at_50%_0%,#f97316,transparent_70%)]"
            )} />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GlowCard;
