import React from "react";
import Tour from "../Tour/Tour";

interface TourType {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
}

interface ToursProps {
  tours: TourType[];
}

const Tours: React.FC<ToursProps> = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
