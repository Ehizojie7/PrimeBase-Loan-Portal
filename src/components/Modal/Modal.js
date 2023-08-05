import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

export const Modal = ({
  open,
  setOpen,
  children,
  size = 'sm',
  showCloseIcon = true,
  dismissOnclickOutside = true
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={(state) => (dismissOnclickOutside ? setOpen(state) : {})}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 relative">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel
                className={classNames(
                  'relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6',
                  {
                    'sm:max-w-lg': size === 'lg',
                    'sm:max-w-md': size === 'md',
                    'sm:max-w-sm': size === 'sm'
                  }
                )}>
                {showCloseIcon && (
                  <div className="absolute -top-6 -right-4">
                    <button
                      className="bg-white rounded-full p-2 shadow-md text-gray-600"
                      onClick={() => setOpen(false)}>
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                )}
                <div className="relative">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
