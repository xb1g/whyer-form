"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/whyer-logo.svg"
            alt="Whyer Logo"
            width={160}
            height={53}
            className="h-16 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/thinks/working"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Take Quiz
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Resources
          </Link>
          <Button variant="outline" className="border-blue-600 text-blue-600">
            Join Community
          </Button>
        </nav>
      </div>
    </header>
  );
}
