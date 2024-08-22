import "./App.css";
import Card from "./component/Card";
import { categories, Colors, formInput, productCard } from "./component/Data/index.ts";
import Modal from "./component/Modal.tsx";
import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import Button from "./component/UI/Button.tsx";
import { Input} from "@headlessui/react";
import { IProduct, ProductNameTypes } from "./component/interfaces";
import { productValidation } from "./validation/index.ts";
import ErrorMessage from "./component/ErrorMessage/index.tsx";
import CircleColor from "./component/CircleColor.tsx";
// import Select from "./component/UI/Select.tsx"
import Select from "./component/UI/Select.tsx";


function App() {
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
   const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    ImageUrl: "",
    price: "",
  });
    /*____________________Render_Colors____________*/
  const [tempcolor, setTempcolor] = useState<string[]>([]);
 
    const [createUpDateProduct, setCreateUpDateProduct] =
      useState<IProduct>(defaultProduct);
    //________________Category _______________/
  const [selectedCategoty , setSelectedCategory] = useState(categories[0])
   //__________________Edit _______________/
  const [productEdit, setProductEdit] = useState<IProduct>(defaultProduct)
  const [editModal, setEditModal] = useState(false);
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
// const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  /*___________Modal && Errors ____________*/


  // const closeConfirmModal = () => setIsOpenConfirmModal(false);
  // const openConfirmModal = () => setIsOpenConfirmModal(true);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  
  function openEditModal() {
    setEditModal(true);
  }

  function closeEditModal() {
    setEditModal(false);
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
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
      //add Data into productList
      setProduct((prev) => [...prev, { ...createUpDateProduct, id: productList.length, colors: tempcolor , category:selectedCategoty }])
      setCreateUpDateProduct(defaultProduct);
      setTempcolor([]);
      close()
    }
  };

    const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const { title, price, ImageUrl, description } = productEdit;
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
      //add Data into productList
  
         const updatedProducts = [...product];
      updatedProducts[productToEditIndex] = { ...productEdit, colors: tempcolor.concat(productEdit.colors) }
      setProduct(updatedProducts);
      setTempcolor([]);
      closeEditModal();
    }
  };
  function cancelHandler(): void {
    close();
    setCreateUpDateProduct(defaultProduct);
    console.log("cencel");
  }
  
  /*____________________Render_Colors____________*/
  const renderColors = Colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        if (tempcolor.includes(color)) {
             setTempcolor(
          // prev[all colors]
          (prev) => prev.filter((item) => item !== color)
        );
          return;
        }
         if (productEdit.colors.includes(color)) {
             setTempcolor(
          // prev[all colors]
          (prev) => prev.filter((item) => item !== color)
        );
          return;
        }
        setTempcolor((prev) => [...prev, color]);
     
      }}
    />
  ));
  console.log(tempcolor);
 
 
  // const removeProductHandler = () => { }


  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateUpDateProduct({
      ...createUpDateProduct,
      [name]: value,
    });
    //The first time User writes the error, it goes
    setErrors({
      ...errors, //all  message  and add  update message
      [name]: "",
    });
  };
    const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductEdit({
      ...productEdit,
      [name]: value,
    });
    //The first time User writes the error, it goes
    setErrors({
      ...errors, //all  message  and add  update message
      [name]: "",
    });
    };
    const renderProductEditWithErrorMsg = (id: string, label: string, name: ProductNameTypes) => {
    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor={id} className="my-2 text-sm font-medium text-gray-700">
          {label}
        </label>
        <Input type="text" id={id} name={name} value={productEdit[name]} onChange={onChangeEditHandler} className="p-3 mb-3"/>
         <ErrorMessage message={errors[name]} />
      </div>
    );
  };
  const renderformInput = formInput.map((input) => (
    <div className={`flex flex-col `} key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        title={input.name}
        id={input.id}
        name={input.name}
        value={createUpDateProduct[input.name]}
        onChange={onChangeHandler}
        type="text"
        className="p-3 focus:outline-green-700 m-1"
      />
      <ErrorMessage message={errors[input.name]} />
    </div>
  ));


  /*____________________Render_card____________*/
  const [product, setProduct] = useState(productCard);
  const productList = product.map((product ,  index) => (
    <Fragment key={index}>
      <Card key={product.id} product={product} index={index}  setProductToEditIndex={setProductToEditIndex}    setProductEdit={setProductEdit} openEditModal={openEditModal} />
      </Fragment>
  ));

  return (
    <main className="container">
      <Button className="block bg-green-500 hover:bg-green-700 mx-auto my-10 px-10 font-medium" onClick={open}>
      Build a Product
      </Button>
      <Modal isOpen={isOpen }  title="ADD A NEW PRODUCT" open={open} close={close}>
        <form onSubmit={submitHandler} >
          <div className="space-y-3" >
            {renderformInput}
            <Select selected={ selectedCategoty}  setSelected={setSelectedCategory}   />
            <div className="flex items-center flex-wrap space-x-1">
              {renderColors}
          
              <div className="flex items-center flex-wrap space-x-1 ">
                {tempcolor.map((color) => (
                  <span key={color} style={{ backgroundColor: `${color}` }}>
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between gap-2 w-full">
              <Button className="border px-3 py-1  bg-red-700  hover:bg-red-800">Submit</Button>
              <Button
                className={`border px-3 py-1   bg-green-400 hover:bg-green-500`}
                onClick={cancelHandler}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Modal>
            <Modal isOpen={editModal}  title="ADD A NEW PRODUCT" open={openEditModal} close={closeEditModal}>
        <form onSubmit={submitEditHandler} >
          <div className="space-y-3" >
            <div className={`flex flex-col `} >
         {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg("description", "Product Description", "description")}
          {renderProductEditWithErrorMsg("ImageUrl", "Product Image URL", "ImageUrl")}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}
  
    
    </div>
            <Select selected={productEdit.category} setSelected={(value) =>setProductEdit(
              {...productEdit  , category: value}
            )}   />
            <div className="flex items-center flex-wrap space-x-1">
              {renderColors}
          
              <div className="flex items-center flex-wrap space-x-1 ">
                {tempcolor.concat(productEdit.colors).map((color) => (
                    
                  <span key={color}  className="p-1 mr-1 mb-1 text-xs rounded-md text-white" style={{ backgroundColor: `${color}` }}>
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between gap-2 w-full">
              <Button className="border px-3 py-1  bg-red-700  hover:bg-red-800">Submit</Button>
              <Button
                className={`border px-3 py-1   bg-green-400 hover:bg-green-500`}
                onClick={cancelHandler}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Modal>
       {/* <Modal
        isOpen={isOpenConfirmModal}
        closeModal={closeConfirmModal}
        title="Are you sure you want to remove this Product from your Store?"
        description="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
      >
        <div className="flex items-center space-x-3">
          <Button className="bg-[#c2344d] hover:bg-red-800" onClick={removeProductHandler}>
            Yes, remove
          </Button>
          <Button type="button" className="bg-[#f5f5fa] hover:bg-gray-300 !text-black" onClick={closeConfirmModal}>
            Cancel
          </Button>
        </div>
      </Modal> */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  
      gap-2 lg:gap-4
       m-2
      "
      >
        {productList}
   
      </div>

    </main>
  );
}

export default App;
