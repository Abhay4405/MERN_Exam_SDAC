import { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-4">

      {/* Hero Section */}
      <div className="bg-success text-white p-5 rounded shadow mb-5">
        <h1 className="display-5 fw-bold">
          Upcoming Events 📅
        </h1>

        <p className="lead">
          Stay updated with the latest career fairs, hackathons,
          and tech conferences.
        </p>
      </div>

      <h2 className="text-center mb-4">
        Featured Events
      </h2>

      {events.length === 0 ? (
        <div className="text-center">
          <h4>No Events Available</h4>
        </div>
      ) : (
        <div className="row">
          {events.map((event) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={event._id}
            >
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body">

                  <h4 className="fw-bold">
                    {event.title}
                  </h4>

                  <hr />

                  <p>
                    📍 <strong>Location:</strong>{" "}
                    {event.location}
                  </p>

                  <p>
                    📅 <strong>Date:</strong>{" "}
                    <span className="text-success fw-bold">
                      {new Date(
                        event.eventDate
                      ).toLocaleDateString()}
                    </span>
                  </p>

                  <p>
                    <strong>Description:</strong>
                    <br />
                    {event.description}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;