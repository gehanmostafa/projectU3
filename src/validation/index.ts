/**
 * 
 * @param product 
 * @returns  productobj =========validation (title , desc , image , price)
 */
export const productValidation = (product: {
  title:string,
    description:string,
    ImageUrl:string,
  price: string,

}) => {
  const errors: {
    title:string,
    description:string,
    ImageUrl:string,
    price: string,
 
  } = {
    title: "",
    description: "",
    ImageUrl: "",
    price: "",
 
    };
     
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "product title must be between 10 and 80 characters !";
    }
     if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 80
  ) {
    errors.description = "product description must be between 10 and 80 characters !";
    }
    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.ImageUrl);
    if (!validUrl || !product.ImageUrl.trim()) {
           errors.ImageUrl = "Valid image URL is required";
    }
//  هل ده مش رقم ؟
//     لو true يبقي اليوزر باعت string
    // طب لو false ابعت رساله 
    if (!product.price.trim() || isNaN(Number(product.price))) {
         errors.price = "Valid price is required!";
  }

  return errors;
};
