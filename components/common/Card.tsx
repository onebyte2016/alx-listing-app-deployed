import React from "react";
import { CardProps } from "../../interfaces";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden max-w-sm">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill    // lets the image fill the container
          className="object-cover"
          sizes="100vw" // responsive optimization
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;



// import React from 'react';
// import { CardProps } from '../../interfaces';
// import Image from "next/image";

// const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
//   return (
//     <div className="border rounded-lg shadow-md overflow-hidden max-w-sm">
//       <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h2 className="text-lg font-semibold mb-2">{title}</h2>
//         <p className="text-gray-600">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;


