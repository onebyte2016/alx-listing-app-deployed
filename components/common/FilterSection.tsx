// components/FilterSection.tsx
import React, { useState } from "react";
import Pill from "./Pill";

const filters = [
  "All",
  "Top Villa",
  "Self Checkin",
  "Luxury",
  "Family Friendly",
  "Budget",
  "Pet Friendly",
  "Ocean View",
];

const FilterSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="flex gap-6 flex-wrap mt-10 mx-10">

        {/* <div className="flex gap-6 flex-wrap mt-10 mx-10 px-6 py-4 bg-white rounded-2xl shadow-md"> */}
      {filters.map((label) => (
        <Pill
          key={label}
          label={label}
          isActive={activeFilter === label}
          onClick={() =>
            setActiveFilter((prev) => (prev === label ? null : label))
          }
        />
      ))}
    </div>
  );
};

export default FilterSection;
