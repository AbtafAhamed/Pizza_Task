export default function() {
  return {
    //
    products: [
      {
        id: 1,
        title: "Margherita",
        description: "Classic delight with 100% real mozzarella cheese",
        prize: 199,
        image: "https://images.dominos.co.in/new_margherita_2502.jpg"
      },
      {
        id: 2,
        title: "Farmhouse",
        description:
          "Delightful combination of onion, capsicum, tomato & grilled mushroom",
        prize: 470,
        image: "https://images.dominos.co.in/farmhouse.png"
      },
      {
        id: 3,
        title: "Peppy Paneer",
        description:
          "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
        prize: 395,
        image: "https://images.dominos.co.in/new_peppy_paneer.jpg"
      },
      {
        id: 4,
        title: "Veg Extravaganza",
        description:
          "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
        prize: 450,
        image: "https://images.dominos.co.in/new_veg_extravaganza.jpg"
      },
      {
        id: 5,
        title: "Veggie Paradise",
        description:
          "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
        prize: 395,
        image: "https://images.dominos.co.in/new_veggie_paradise.jpg"
      },
      {
        id: 6,
        title: "Cheese n Corn",
        description: "A delectable combination of sweet & juicy golden corn",
        prize: 305,
        image: "https://images.dominos.co.in/new_pepper_barbeque_chicken.jpg"
      },
      {
        id: 7,
        title: "Pepper Barbecue Chicken",
        description: "Pepper barbecue chicken for that extra zing",
        prize: 335,
        image: "https://images.dominos.co.in/new_pepper_barbeque_chicken.jpg"
      }
    ],
    cart: [],
    count: 0,
    status: [
      {
        id: 1,
        title: "Order Received"
      },
      {
        id: 2,
        title: "Preparing"
      },
      {
        id: 3,
        title: "Ready to serve"
      }
    ]
  };
}
