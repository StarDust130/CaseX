// bg-blue-400 border-blue-400
// bg-rose-400 border-rose-400
// bg-zinc-900 border-zinc-900
// bg-yellow-400 border-yellow-400
// bg-green-400 border-green-400
// bg-red-400 border-red-400
// bg-purple-400 border-purple-400
// bg-orange-400 border-orange-400
// bg-gray-400 border-gray-400
// bg-pink-400 border-pink-400
// bg-brown-400 border-brown-400

// import { PRODUCT_PRICES } from "@/config/products";



export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Transparent", value: "transparent", tw: "transparent" },
  { label: "Blue", value: "blue", tw: "blue-400" },
  { label: "Rose", value: "rose", tw: "rose-400" },
  { label: "Yellow", value: "yellow", tw: "yellow-400" },
  { label: "Green", value: "green", tw: "green-400" },
  { label: "Gray", value: "gray", tw: "gray-400" },
  
] as const;


export const MODELS = {
  name: "model",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
  ],
} as const;

// export const MATERIALS = {
//   name: "material",
//   options: [
//     {
//       label: "Silicone",
//       value: "silicone",
//       description: undefined,
//       price: PRODUCT_PRICES.material.silicone,
//     },
//     {
//       label: "Soft Polycarbonate",
//       value: "polycarbonate",
//       description: "Scratch-resistant coating",
//       price: PRODUCT_PRICES.material.polycarbonate,
//     },
//   ],
// } as const;

// export const FINISHES = {
//   name: "finish",
//   options: [
//     {
//       label: "Smooth Finish",
//       value: "smooth",
//       description: undefined,
//       price: PRODUCT_PRICES.finish.smooth,
//     },
//     {
//       label: "Textured Finish",
//       value: "textured",
//       description: "Soft grippy texture",
//       price: PRODUCT_PRICES.finish.textured,
//     },
//   ],
// } as const;