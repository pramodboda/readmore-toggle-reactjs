import { useEffect, useState } from "react";
import "./App.css";

import Loading from "./components/Loading/Loading";
import Tours from "./components/Tours/Tours";

// Use this for local testing:
// const url = "/api/react-tours-project";

// Use this for Production:
const url = "https://course-api.com/react-tours-project";

function App() {
  // By default loading is true
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    // We again setting loading to true
    setLoading(true);

    try {
      const res = await fetch(url);
      const toursData = await res.json();
      console.log(toursData);
      setLoading(false);
      setTours(toursData);
    } catch (err) {
      setLoading(false);
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <>
      <main>
        <Tours tours={tours} />
      </main>
    </>
  );
}

export default App;
