import americano from "./images/americano.jpg";
import blacksesame from "./images/blacksesame.avif";
import caffelatte from "./images/caffelatte.jpg";
import iced_americano from "./images/iced_americano.jpg";
import iced_blacksesame from "./images/iced_blacksesame.png";
import iced_caffelatte from "./images/iced_caffelatte.jpg";
import iced_jaheoble from "./images/iced_jaheoble.jpg";
import iced_milktea from "./images/iced_milktea.jpg";
import iced_oolongtea from "./images/iced_oolongtea.jpg";
import iced_ssooklatte from "./images/iced_ssooklatte.jpg";
import iced_sweetpotato from "./images/iced_sweetpotato.jpg";
import iced_vanillalatte from "./images/iced_vanillalatte.jpeg";
import jaheoble from "./images/jaheoble.jpg";
import milktea from "./images/milktea.jpg";
import oolongtea from "./images/oolongtea.jpg";
import ssooklatte from "./images/ssooklatte.jpg";
import sweetpotato from "./images/sweetpotato.jpg";
import vanillalatte from "./images/vanillalatte.jpg";

const DRINK_LIST = [
  {
    name: "바닐라 라떼",
    category: ["coffee", "sweet", "hot"],
    img: vanillalatte,
  },
  {
    name: "아이스 바닐라 라떼",
    category: ["coffee", "sweet", "cold"],
    img: iced_vanillalatte,
  },
  {
    name: "아메리카노",
    category: ["coffee", "non-sweet", "hot"],
    img: americano,
  },
  {
    name: "아이스 아메리카노",
    category: ["coffee", "non-sweet", "cold"],
    img: iced_americano,
  },
  {
    name: "카페라떼",
    category: ["coffee", "dairy", "hot"],
    img: caffelatte,
  },
  {
    name: "아이스 카페라떼",
    category: ["coffee", "dairy", "cold"],
    img: iced_caffelatte,
  },
  {
    name: "자몽 허니 블랙티",
    category: ["tea", "sweet", "hot"],
    img: jaheoble,
  },
  {
    name: "아이스 자몽 허니 블랙티",
    category: ["tea", "sweet", "cold"],
    img: iced_jaheoble,
  },
  {
    name: "우롱차",
    category: ["tea", "non-sweet", "hot"],
    img: oolongtea,
  },
  {
    name: "아이스 우롱차",
    category: ["tea", "non-sweet", "cold"],
    img: iced_oolongtea,
  },
  {
    name: "밀크티",
    category: ["tea", "dairy", "hot"],
    img: milktea,
  },
  {
    name: "아이스 밀크티",
    category: ["tea", "dairy", "cold"],
    img: iced_milktea,
  },
  {
    name: "흑임자 라떼",
    category: ["halmi", "sweet", "hot"],
    img: blacksesame,
  },
  {
    name: "아이스 흑임자 라떼",
    category: ["halmi", "sweet", "cold"],
    img: iced_blacksesame,
  },
  {
    name: "쑥 라떼",
    category: ["halmi", "non-sweet", "hot"],
    img: ssooklatte,
  },
  {
    name: "아이스 쑥 라떼",
    category: ["halmi", "non-sweet", "cold"],
    img: iced_ssooklatte,
  },
  {
    name: "고구마 라떼",
    category: ["halmi", "dairy", "hot"],
    img: sweetpotato,
  },
  {
    name: "아이스 고구마 라떼",
    category: ["halmi", "dairy", "cold"],
    img: iced_sweetpotato,
  },
];

export default DRINK_LIST;
