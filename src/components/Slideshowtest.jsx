// import React, { useState } from "react";
// import "../style/Slideshow.css";
// import chambres from "../Fetch.json";
// import { useParams } from "react-router-dom";
// import chevron from '../assets/Vector.png'

// const Slideshow = () => {
//   const { chambreid } = useParams();
//   const chambre = chambres.find((chambre) => chambre.id === chambreid);
//   const [imageAffiche, setimageAffiche] = useState(0);

//   const handleNext = () => {
//     setimageAffiche((imageAffiche + 1) % chambre.pictures.length);
//   };

//   const handlePrev = () => {
//     setimageAffiche(
//       (imageAffiche + chambre.pictures.length - 1) % chambre.pictures.length
//     );
//   };

//   if (chambre.pictures.length === 1) {
//     return (
//       <div className="carousel">
//         <div className="slider">
//           <img
//             key={imageAffiche}
//             src={chambre.pictures[imageAffiche]}
//             alt={imageAffiche}
//           />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="carousel">
//       <div className="slider">
//         <img
//           key={imageAffiche}
//           src={chambre.pictures[imageAffiche]}
//           alt={imageAffiche}
//         />
//       {/* </div> */}
//       <p className="count">
//         {imageAffiche + 1}/{chambre.pictures.length}
//       </p>
//         <div className="contain_btn">
//           <button onClick={handlePrev} className="prev-btn"><img src={chevron} alt="" />
//           </button>
//           <button onClick={handleNext} className="next-btn"><img src={chevron} alt="" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slideshow;