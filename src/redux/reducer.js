import { START, STOP } from "./actionType";
// images data
const initState = {
  isStop: false,
  imageData: [
    {
      id: 1,
      description:
        "When you picture the perfect beach paradise, clear, turquoise waters and bright white-sand beaches — like those you'd find in the Maldives — probably come to mind. Above the water, you can take in views of the palm trees lining the beach from a thatched-roof overwater bungalow, and under the surface, you can explore another world of coral reefs and sea life.",
      heading: "Maldives",
      link: "https://www.travelandleisure.com/thmb/Uv_QylnIHveRY_wzyulYW9JYKVc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/maldives-BEAUTCONT1021-bae71651fcff48f58a123c7c80a87fcc.jpg",
    },
    {
      id: 2,
      description:
        "Between the snowy French Alps, glamorous Riviera, rolling vineyard- and lavender-covered hills of Provence, verdant Loire Valley, and rocky coast of Brittany, is it any surprise France is often considered one of the most beautiful countries in the world? Plus, those natural resources provide us with French wine, cheese, and more, so what's not to love?",
      heading: "France",
      link: "https://www.travelandleisure.com/thmb/sCQBFYMh5x4B8QsKx5Mmhuxvxy8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/france-BEAUTCONT1021-f2f20da717b9439d83d5411608d02a44.jpg",
    },
    {
      id: 3,
      description:
        "Made up of thousands of islands, Indonesia has everything from green terraced rice fields to beautiful beaches, dense rain forests, and more. The island of Bali is popular among travelers seeking vistas of intricate temples against backdrops of crashing ocean waves or rolling hills with a volcano in the distance.",
      heading: "Indonesia",
      link: "https://www.travelandleisure.com/thmb/ceBa8KP1zV6uT0KmeBtM6j2oKog=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indonesia-BEAUTCONT1021-14dd111578134cacb9e64bc59968245a.jpg",
    },
    {
      id: 4,
      description:
        "From sea to shining sea, the United States offers a wide range of picturesque landscapes. With the sandy beaches and turquoise waters of the Florida Keys, the magnificent Grand Canyon, the snow-capped peaks of Alaska, and the postcard-worthy California coastline, it would take years to fully explore the country's most beautiful places.",
      heading: "United States",
      link: "https://www.travelandleisure.com/thmb/9-6vUsEecS1YMkqMkLiSNotyX6c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/united-states-BEAUTCONT1021-f8adb3083b324a2990001db120614021.jpg",
    },
  ],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case START: {
      return { ...state, isStop: true };
    }
    case STOP: {
      return { ...state, isStop: false };
    }
    default: {
      return state;
    }
  }
};
