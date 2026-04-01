import React from 'react';
import { NavLink } from 'react-router';
import { Home, Library, Heart, ListMusic, X } from 'lucide-react';

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
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        
      </div>
    </>
  );
}
