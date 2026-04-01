import React from "react";
import { NavLink } from "react-router";
import { Home, Library, Heart, ListMusic, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed lg:relative
          inset-y-0 left-0
          w-64 bg-zinc-950 h-full flex flex-col border-r border-zinc-800
          z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-6 flex items-center justify-between">
          <h1 className="text-2xl text-white">
            Wave<span className="text-purple-500">Play</span>
          </h1>
          <button
            onClick={onClose}
            className="lg:hidden text-zinc-400 hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 px-3">
          <div className="space-y-1">
            <NavLink
              to="/"
              end
              onClick={onClose}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-zinc-800/50 text-white'
                    : 'hover:bg-zinc-800/50 text-zinc-400 hover:text-white'
                }`
              }
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </NavLink>

            
          </div>
        </nav>

      </div>
    </>
  );
}
