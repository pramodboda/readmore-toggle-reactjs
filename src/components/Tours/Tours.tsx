import Tour from "../Tour/Tour";

const Tours = ({ tours }) => {
  // All Tours component
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
