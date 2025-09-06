import React from "react";
import Image from "next/image";

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
}

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Image wrapper */}
      <div className="relative w-full h-96">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover rounded-lg"
          sizes="100vw"
        />
      </div>

      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600 mt-2">{property.description}</p>

      <div className="mt-4">
        <p className="text-lg">
          <span className="font-semibold">Location:</span> {property.location}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Bedrooms:</span> {property.bedrooms}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Bathrooms:</span> {property.bathrooms}
        </p>
      </div>

      <p className="text-2xl font-semibold text-indigo-600 mt-6">
        ${property.price}
      </p>
    </div>
  );
}






// import React from "react";

// interface Property {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   location: string;
//   bedrooms: number;
//   bathrooms: number;
// }

// interface PropertyDetailProps {
//   property: Property;
// }

// export default function PropertyDetail({ property }: PropertyDetailProps) {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <img
//         src={property.imageUrl}
//         alt={property.title}
//         className="w-full h-96 object-cover rounded-lg"
//       />
//       <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
//       <p className="text-gray-600 mt-2">{property.description}</p>

//       <div className="mt-4">
//         <p className="text-lg">
//           <span className="font-semibold">Location:</span> {property.location}
//         </p>
//         <p className="text-lg">
//           <span className="font-semibold">Bedrooms:</span> {property.bedrooms}
//         </p>
//         <p className="text-lg">
//           <span className="font-semibold">Bathrooms:</span> {property.bathrooms}
//         </p>
//       </div>

//       <p className="text-2xl font-semibold text-indigo-600 mt-6">
//         ${property.price}
//       </p>
//     </div>
//   );
// }
