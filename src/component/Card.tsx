import CircleColor from "./CircleColor";

import Image from "./Image";
import Button from "./UI/Button";
import { maxTxt } from "./Utiles/functions";
import { IProduct } from "./interfaces";
interface IProps {
  product: IProduct;
  setProductEdit: (product: IProduct) => void;
  openEditModal: () => void;
  setProductToEditIndex: (value: number) => void;
  index: number
}
const Card = ({ product  , setProductEdit , openEditModal , setProductToEditIndex ,index }: IProps) => {
      
  const { ImageUrl, title, colors, description, price, category } = product;
    const renderColorsCard = colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
    />
    ));
  /**onEdit */
  const OnEdit = () => {
    setProductEdit(product);
    openEditModal();
    setProductToEditIndex(index)
  }
  return (
    <div className="flex flex-col w-fit justify-between  border p-2 rounded-md mx-auto ">
      <Image ImgURL={ImageUrl} alt="product1" className="w-full rounded-md  h-[50%]" />
      <h3 className="text-lg font-semibold">{title}</h3>
         <div className=" flex items-center flex-wrap space-x-1">
        {renderColorsCard}
              </div>
      <div className="text-sm text-gray-500 break-words">{maxTxt(description)}</div>
      <div className="flex justify-between">
        <div>{price}</div>
        <Image
          ImgURL={category.imageURL}
          className="w-5 h-5  rounded-full"
          alt="prodectOne"
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <Button className=" bg-gray-500 hover:bg-gray-600 " onClick={OnEdit}>Edit</Button>
        <Button className="  flex-1 bg-red-700  hover:bg-red-800">
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Card;
