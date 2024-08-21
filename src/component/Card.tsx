import CircleColor from "./CircleColor";

import Image from "./Image";
import Button from "./UI/Button";
import { maxTxt } from "./Utiles/functions";
import { IProduct } from "./interfaces";
interface IProps {
  product: IProduct;
}
const Card = ({ product }: IProps) => {

  const { ImageUrl, title, colors, description, price, category } = product;
    const renderColorsCard = colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
    />
  ));
  return (
    <div className="flex flex-col w-fit justify-between  border p-2 rounded-md mx-auto ">
      <Image ImgURL={ImageUrl} alt="product1" className="w-full rounded-md  h-[50%]" />
      <h3>{title}</h3>
         <div className="flex ">
        {renderColorsCard}
              </div>
      <div>{maxTxt(description)}</div>
      <div className="flex justify-between">
        <div>{price}</div>
        <Image
          ImgURL={category.imageURL}
          className="w-5 h-5  rounded-full"
          alt="prodectOne"
        />
      </div>
      <div className="flex justify-between gap-2">
        <Button className="border px-3 py-1 flex-1 bg-red-700 ">Edit</Button>
        <Button className="border px-3 py-1 flex-1 bg-green-400 ">
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Card;
