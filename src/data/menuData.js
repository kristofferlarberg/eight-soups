import { v4 as uuidv4 } from "uuid";

export const menuData = [
  {
    name: "Tomat",
    image: "images/tomato.jpg",
    description:
      "Tomatsoppa med quinoa, vitlök och lök toppat och färsk basilika toppat med krispiga krutonger.",
    price: 70,
    gluten: false,
    lactose: true,
    cookingtime: 15,
    id: uuidv4(),
  },
  {
    name: "Sötpotatis",
    image: "images/potato.jpg",
    description:
      "Sötpotatis, kokosmjölk och jordnötssmör toppat med jordnötter och koriander.",
    price: 80,
    gluten: true,
    lactose: true,
    cookingtime: 20,
    id: uuidv4(),
  },
  {
    name: "Grön",
    image: "images/green.jpg",
    description:
      "Grönkål, spenat, ärtor, broccoli, potatis och vitlök toppat med pumpakärnor och havregrädde.",
    price: 90,
    gluten: true,
    lactose: true,
    cookingtime: 20,
    id: uuidv4(),
  },
  {
    name: "Morot",
    image: "images/carrot.jpg",
    description:
      "Rostade morötter, koriander, lök, och ingefära toppat med rostad lök och creme fraiche.",
    price: 85,
    gluten: true,
    lactose: false,
    cookingtime: 15,
    id: uuidv4(),
  },
  {
    name: "Butternut",
    image: "images/curry.jpg",
    description:
      "Butternut squash, curry, ingefära, koriander och linser toppat med lime.",
    price: 90,
    gluten: false,
    lactose: false,
    cookingtime: 20,
    id: uuidv4(),
  },
  {
    name: "Röd Curry",
    image: "images/potato.jpg",
    description:
      "Röd curry, kokosmjölk, risnudlar och paprika toppat med koriander och sesamfrön.",
    price: 90,
    gluten: true,
    lactose: true,
    cookingtime: 20,
    id: uuidv4(),
  },
];
