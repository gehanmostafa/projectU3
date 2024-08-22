export interface IProduct 
  {
      id?: number;
    ImageUrl: string;
    title: string;
    colors: string[];
    description: string;
  price: string;
  category: {
    name: string;
    imageURL: string;
  };
}
export interface IInput
   {
  id: string,
  name:    "title" | "ImageUrl"|"description"|"price"
  label: string,
  type :string
    
  
}
export interface ICategory{
  id: number, 
  imageURL: string,
  name:string
}
export interface ICategory {
   id: number
    name: string;
    imageURL: string;
}
 export type ProductNameTypes ="title" | "ImageUrl"|"description"|"price"
  