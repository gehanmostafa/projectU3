import { ICategory, IInput, IProduct } from "../interfaces";
export const productCard: IProduct[] = [
  {
    id: 1,
    ImageUrl:
      "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    title: "Shaggy Plain Duvet Cover Set ",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#3C2A21",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",

      "#84D2C5",
    ],
    description:
      "Shaggy Plain Duvet Cover Set Without Filler, Plush Bedding Set, Super Soft Shaggy Blanket Cover and Matching Pillowcase",
    price: "50000",
    category: {
      name: "bii",
      imageURL:
        "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    },
  },

  {
    id: 2,
    ImageUrl:
      "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    title: "Shaggy Plain Duvet Cover Set ",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    description:
      "Shaggy Plain Duvet Cover Set Without Filler, Plush Bedding Set, Super Soft Shaggy Blanket Cover and Matching Pillowcase",
    price: "50000",
    category: {
      name: "bii",
      imageURL:
        "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    },
  },
  {
    id: 3,
    ImageUrl:
      "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    title: "Shaggy Plain Duvet Cover Set ",
    colors: [
      "#FF6E31",
      "#3C2A21",
      "#FF0032",
      "#820000",
      "#13005A",
      "#1F8A70",
      "#84D2C5",
    ],
    description:
      "Shaggy Plain Duvet Cover Set Without Filler, Plush Bedding Set, Super Soft Shaggy Blanket Cover and Matching Pillowcase",
    price: "50000",
    category: {
      name: "bii",
      imageURL:
        "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    },
  },
  {
    id: 4,
    ImageUrl:
      "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    title: "Shaggy Plain Duvet Cover Set ",
    colors: [
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#13005A",
      "#1F8A70",
      "#84D2C5",
    ],
    description:
      "Shaggy Plain Duvet Cover Set Without Filler, Plush Bedding Set, Super Soft Shaggy Blanket Cover and Matching Pillowcase",
    price: "50000",
    category: {
      name: "bii",
      imageURL:
        "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    },
  },
  {
    id: 5,
    ImageUrl:
      "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    title: "Shaggy Plain Duvet Cover Set ",
    colors: [
      "#FF6E31",
      "#3C2A21",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#13005A",
      "#1F8A70",
      "#84D2C5",
    ],
    description:
      "Shaggy Plain Duvet Cover Set Without Filler, Plush Bedding Set, Super Soft Shaggy Blanket Cover and Matching Pillowcase",
    price: "50000",
    category: {
      name: "bii",
      imageURL:
        "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    },
  },

  {
    id: 6,
    ImageUrl:
      "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    title: "Shaggy Plain Duvet Cover Set ",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    description:
      "Shaggy Plain Duvet Cover Set Without Filler, Plush Bedding Set, Super Soft Shaggy Blanket Cover and Matching Pillowcase",
    price: "50000",
    category: {
      name: "bii",
      imageURL:
        "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    },
  },
  {
    id: 7,
    ImageUrl:
      "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    title: "Shaggy Plain Duvet Cover Set ",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    description:
      "Shaggy Plain Duvet Cover Set Without Filler, Plush Bedding Set, Super Soft Shaggy Blanket Cover and Matching Pillowcase",
    price: "50000",
    category: {
      name: "bii",
      imageURL:
        "../../../public/images/1659340658bf5261b18ff5c0757fd3ed8b0733611c.webp",
    },
  },
];
export const formInput: IInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "ImageUrl",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];
//////////data colors /////////////
export const Colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
];
/////////////////
export const categories: ICategory[] = [
  {
    id: 7,
    name: "Nike",
    imageURL:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    name: "T-Shirt",
    imageURL:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 5,
    name: "Clothes",
    imageURL:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 4,
    name: "PC Desktop",
    imageURL:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
  },
  {
    id: 1,
    name: "Furniture",
    imageURL:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    name: "Cars",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    name: "Camera",
    imageURL:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];