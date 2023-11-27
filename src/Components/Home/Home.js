import React from "react";

const Home = () => {
  const tours = [
    {
      date: "JUL 16",
      city: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      city: "TORONTO,ON",
      place: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      city: "BRISTOW, VA",
      place: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      city: "PHOENIX, AZ",
      place: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      city: "LAS VEGAS, NV",
      place: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      city: "CONCORD, CA",
      place: "CONCORD PAVILION",
    },
  ];

  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center bg-secondary mx-auto w-100">
        <h3 className="border border-primary border-2 w-25 text-white rounded p-3">
          Get our Latest Album
        </h3>
        <button
          className="d-block bg-secondary border border-primary border-2 rounded-circle fs-1 fw-bold text-primary"
          style={{width: "8%", padding: "20px", margin: "20px auto"}}
        >
          ►
        </button>
      </div>
      <div>
        <h1 className="d-flex justify-content-center fst-italic mt-5">TOURS</h1>
      </div>
      {tours &&
        tours.map((tour, index) => {
          return (
            <div
              className="d-flex w-75 mx-auto border-bottom border-dark align-items-center text-align-center mb-4"
              key={index}
            >
              <p className="p-2 flex-fill ">{tour.date}</p>
              <p className="p-2 flex-fill text-secondary">{tour.city}</p>
              <p className="p-2 flex-fill text-secondary">{tour.place}</p>
              <button className="bg-primary text-white border-0 rounded fw-bold">
                BUY TICKETS
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
