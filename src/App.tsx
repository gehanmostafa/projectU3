import "./App.css";
import Card from "./component/Card";
import { formInput, productCard } from "./component/Data/index.ts";
import Modal from "./component/Modal.tsx";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./component/UI/Button.tsx";
import { Input } from "@headlessui/react";
import { IProduct } from "./component/interfaces";
import { productValidation } from "./validation/index.ts";
import ErrorMessage from "./component/ErrorMessage/index.tsx";


function App() {
  /*____________________Render_card____________*/
  const productList = productCard.map((product) => (
    <Card key={product.id} product={product} />
  ));
 
  /*___________Modal && Errors ____________*/

  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
        title: "",
    description: "",
    ImageUrl: "",
    price: ""
  })

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, price, ImageUrl, description } = createUpDateProduct;
    const errors = productValidation({
      //  title :title // store message error 
      title,
      price,
      ImageUrl,
        description,
      });
    //submit  has Error (true) =>if all key empity  
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      //store errors and send to component Error
      setErrors(errors);
      return;
    
    } else {
      console.log("true")
    }
  };

  function cancelHandler(): void {
    close();
    setCreateUpDateProduct(defaultProduct);
    console.log("cencel");
  }
 /*____________________Render_FormInput____________*/
  const defaultProduct = {
    title: "",
    description: "",
    ImageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  const [createUpDateProduct, setCreateUpDateProduct] =
    useState<IProduct>(defaultProduct);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateUpDateProduct({
      ...createUpDateProduct,
      [name]: value,
    });
    //The first time User writes the error, it goes
    setErrors({
      ...errors, //all  message  and add  update message
      [name]: ""  
    })
  };
  const renderformInput = formInput.map((input) => (
    <div className={`flex flex-col ${input.id} `}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        title={input.name}
        id={input.id}
        name={input.name}
        value={createUpDateProduct[input.name]}
        onChange={onChangeHandler}
        type="text"
      />
      <ErrorMessage message={errors[input.name]} />
    </div>
  ));
  //no open
  return (
    <main className="container">
      <Button className="border px-3 py-1  bg-red-700" onClick={open}>
        open
      </Button>
      <Modal isOpen={isOpen} title="open" open={open} close={close}>
        <form onSubmit={submitHandler}>
          <div className="space-y-3">
            {renderformInput}
            <div className="flex justify-between gap-2 w-full">
              <Button className="border px-3 py-1  bg-red-700 ">Submit</Button>
              <Button
                className={`border px-3 py-1   bg-green-400`}
                onClick={cancelHandler}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Modal>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  
      gap-2 lg:gap-4
      border-2 border-red-900 m-2
      "
      >
        {productList}
      </div>
    </main>
  );
}

export default App;
