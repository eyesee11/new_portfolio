"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

interface MobileMenuProps {
  onNavigate: (panel: string) => void;
}

const navigation = [
  { name: "home", icon: Home, panel: "home" },
  { name: "about", icon: User, panel: "about" },
  { name: "projects", icon: Briefcase, panel: "projects" },
  { name: "contact", icon: Mail, panel: "contact" },
];

export default function MobileMenu({ onNavigate }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (panel: string) => {
    if (panel === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onNavigate(panel);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        className="lg:hidden fixed top-4 right-4 z-40 p-2 bg-white border border-neutral-200 rounded-lg shadow-sm"
        onClick={() => setMobileMenuOpen(true)}
      >
        <Menu className="w-5 h-5 text-neutral-900" />
      </button>

      {/* Mobile Menu Dialog */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden relative z-50"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                    <div className="flex h-full flex-col bg-white shadow-xl">
                      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
                        <h2 className="text-base font-normal text-neutral-900">
                          menu
                        </h2>
                        <button
                          type="button"
                          className="text-neutral-500 hover:text-neutral-900"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <nav className="flex-1 px-4 py-6">
                        <ul className="space-y-2">
                          {navigation.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.name}>
                                <button
                                  onClick={() => handleNavigate(item.panel)}
                                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg transition-all"
                                >
                                  <Icon className="w-4 h-4" />
                                  <span>{item.name}</span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
