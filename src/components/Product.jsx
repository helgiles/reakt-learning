// src/Product.jsx

export const Product = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt={props.name} width="480" />
      <p>Price: {props.price} credits</p>
    </div>
  );
};

// export const Product = () => {
//   const price = 999;
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <img
//         src="../../public/pexels-photo.jpeg"
//         alt="Tacos With Lime"
//         width="640"
//       />
//       <p>Price: {price}credits</p>
//     </div>
//   );
// };

// <https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>
