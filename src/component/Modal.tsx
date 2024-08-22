import {  Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode } from "react";

interface IProp {
  title: string;
  open: () => void;
  close: () => void; 

  isOpen: boolean
 children : ReactNode
}



export default function Modal({ title, children, close , isOpen  }:IProp) {

  return (
    <>
    
     
      <Dialog open={isOpen} as="div" className="relative  z-10 focus:outline-none" onClose={close} __demoMode>
          <div className="fixed inset-0 backdrop-blur-md" />
        <div className="fixed inset-0  z-10 w-screen overflow-y-auto">
          <div className="flex  min-h-[100%] items-center m-auto justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-black">
              {title}
              </DialogTitle>
         
              <div className="mt-5">
             {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
