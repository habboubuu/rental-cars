// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/golf.png";
import img05 from "../all-images/cars-img/audi1.jpg";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/benz.jpg";
import img08 from "../all-images/cars-img/passatcc.jpg";

const carData = [
  {
    id: 1,
    brand: "nissan",
    rating: 112,
    carName: "Nissan Sentra",
    imgUrl: img01,
    model: "M-2021",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Auto",
    status:["electric", "prestige"],
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    brand: "toyota",
    rating: 102,
    carName: "Yaris Sedan",
    imgUrl: img02,
    model: "M-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Auto",
    status:["electric"],
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "bmw",
    rating: 132,
    carName: "BMW X6",
    imgUrl: img03,
    model: "M-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Auto",
    status:["prestige"],
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "vw",
    rating: 102,
    carName: "Golf 6",
    imgUrl: img04,
    model: "M-2016",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Auto",
    status:["city"],
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "audi",
    rating: 94,
    carName: "Audi A1",
    imgUrl: img05,
    model: "M-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Auto",
    status:["family", "prestige"],
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "mercedes",
    rating: 119,
    carName: "C-Class",
    imgUrl: img06,
    model: "M-2016",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Auto",
    status:["prestige"],
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "mercedes",
    rating: 82,
    carName: "Benz GLK",
    imgUrl: img07,
    model: "M-10",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Auto",
    status:["city", "family"],

    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "vw",
    rating: 52,
    carName: "VW Passat CC",
    imgUrl: img08,
    model: "M-13",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Auto",
    status:["city", "electric"],
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;
