
import "./App.css";
import Card from "./component/Card";
import { formInput, productCard } from "./component/Data/index.ts";
import Modal from "./component/Modal.tsx";
import { useState } from "react";
import Button from "./component/UI/Button.tsx";
import { Input } from "@headlessui/react";



function App() {
 
  /*____________________Render____________*/
    /*____________________Render_card____________*/
  const productList = productCard.map(
product =>    <Card key={product.id} product={ product}  />
  )
  /*____________________Render_FormInput____________*/
  const renderformInput = formInput.map(
    input => (
       <div className="flex flex-col">
      <label htmlFor={input.id}>
        {input.label}
      </label>
        <Input title={input.name} id={input.id} name={input.name}  type="text"/>
        </div>)
    
  )
   /*___________Modal ____________*/
  
   const [isOpen, setIsOpen] = useState(false);

  function open() { 
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  //no open 
  return (
    
    <main className="container">
       <Button  className ="border px-3 py-1  bg-red-700" onClick={open}>
         open 
      </Button>
      <Modal isOpen={isOpen} title="open" open={open} close={close}  >
        <div className="space-y-3">
          {renderformInput}
                 <div className="flex justify-between gap-2 w-full">
        <Button className="border px-3 py-1  bg-red-700 ">Edit</Button>
        <Button className="border px-3 py-1   bg-green-400 ">
          Remove
        </Button>
      </div>
        </div>
   
     
        </Modal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  
      gap-2 lg:gap-4
      border-2 border-red-900 m-2
      ">
     {productList}
      </div>
     
    </main>
  );
}

export default App;
