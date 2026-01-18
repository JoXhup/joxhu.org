import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeToggle({ currentTheme, onThemeChange }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors">
                    {currentTheme === 'dark' && <Moon className="w-5 h-5 text-purple-400" />}
                    {currentTheme === 'light' && <Sun className="w-5 h-5 text-orange-400" />}
                    {currentTheme === 'gradient' && <Sparkles className="w-5 h-5 text-blue-400" />}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-zinc-300">
                <DropdownMenuItem onClick={() => onThemeChange('light')} className="hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white">
                    <Sun className="mr-2 h-4 w-4 text-orange-400" />
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onThemeChange('dark')} className="hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white">
                    <Moon className="mr-2 h-4 w-4 text-purple-400" />
                    <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onThemeChange('gradient')} className="hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white">
                    <Sparkles className="mr-2 h-4 w-4 text-blue-400" />
                    <span>Gradient</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
