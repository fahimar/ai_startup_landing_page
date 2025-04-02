"use client";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import CloseIcon from "@/assets/close-red-icon.svg";
import { Button } from "@/components/Button";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-3 md:py-4 border-b bg-black text-white border-white/15 md:border-none relative">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center gap-2 border border-white/15 rounded-xl p-2 md:p-2.5 mx-auto">
          {/* Logo Section */}
          <div>
            <div className="border h-8 w-8 md:h-10 md:w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-6 w-6 md:h-8 md:w-8" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex gap-4 lg:gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>

          {/* Actions Section */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden sm:block">
              <Button>Join Waitlist</Button>
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-white/15 z-50 backdrop-blur-sm">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4 mb-6">
              <a
                href="#"
                className="text-white/70 hover:text-white transition py-1"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition py-1"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition py-1"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition py-1"
              >
                Changelog
              </a>
            </nav>
            <div className="sm:hidden">
              <Button className="w-full">Join Waitlist</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
