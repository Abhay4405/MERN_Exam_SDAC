import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-4">

      {/* Hero Section */}
      <div className="bg-dark text-white p-5 rounded shadow mb-5">
        <h1 className="display-5 fw-bold">
          Find Your Dream Job 🚀
        </h1>

        <p className="lead">
          Explore opportunities from top companies and
          kickstart your career today.
        </p>
      </div>

      {/* Jobs Section */}
      <h2 className="text-center mb-4">
        Available Jobs
      </h2>

      {jobs.length === 0 ? (
        <div className="text-center">
          <h4>No Jobs Available</h4>
        </div>
      ) : (
        <div className="row">
          {jobs.map((job) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={job._id}
            >
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body">

                  <h4 className="card-title fw-bold">
                    {job.title}
                  </h4>

                  <hr />

                  <p>
                    📍 <strong>Location:</strong>{" "}
                    {job.location}
                  </p>

                  <p>
                    💰 <strong>Salary:</strong>{" "}
                    <span className="text-primary fw-bold">
                      ₹{job.salary}
                    </span>
                  </p>

                  <p>
                    <span className="badge bg-success">
                      {job.jobType}
                    </span>
                  </p>

                  <p>
                    <strong>Description:</strong>
                    <br />
                    {job.description}
                  </p>

                  <Link
                    to={`/job/${job._id}`}
                    className="btn btn-primary w-100"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;