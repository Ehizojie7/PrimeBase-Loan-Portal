// TODO: refactor navigation
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Logo } from 'components/Logo/Logo';

import { Bars3BottomLeftIcon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline';

import { NavItem } from './NavItem';

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="z-50">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed -z-50 inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-[#fff]  pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <Logo className="filt" />
                </div>
                <div className="mt-5 h-0 flex-1 pr-2">
                  <NavItem closeSidebar={() => setSidebarOpen(false)} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="flex flex-1 flex-col md:pl-64 fixed w-full z-10 top-0">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}>
            <Bars3BottomLeftIcon className="h-6 w-6 text-blue" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-end px-4">
            <div className="flex items-center">
              <button type="button" className="relative text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <div className="relative inline-flex items-center  px-2.5 py-1.5 text-xs  font-medium">
                  <BellIcon className="h-6 w-6" aria-hidden="true" onClick={() => setOpen(true)} />
                </div>
              </button>

              {/* Profile dropdown */}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col bg-[#fff] border shadow-lg pt-5 pr-2">
          <div className="flex flex-shrink-0 items-center px-4 mt-2">
            <Logo />
          </div>
          <div className="mt-5 flex flex-1 flex-col">
            <NavItem closeSidebar={() => setSidebarOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};
