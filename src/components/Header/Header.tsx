import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { titleFont } from "@/config";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { UserMenu } from "../User/UserMenu";

interface Props {
    className?: string;
}

export const Header = ({ className }: Props) => {
    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4',
                className
            )}
        >
            <div className="container flex h-16 items-center justify-between">

                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <div className={`${titleFont.className} antialiased text-2xl font-bold`}>
                        <span className="text-primary">Dxncat</span>
                        <span className="text-secondary">Flow</span>
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    <UserMenu />
                    <div className="border-l pl-4 dark:border-gray-800">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}