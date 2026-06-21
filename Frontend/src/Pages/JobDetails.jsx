import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/jobs/${id}`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!job) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading Job Details...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="card shadow-lg border-0">
        <div className="card-body p-4">

          <h1 className="fw-bold text-primary mb-3">
            {job.title}
          </h1>

          <hr />

          <div className="row">

            <div className="col-md-6">
              <p>
                📍 <strong>Location:</strong>{" "}
                {job.location}
              </p>

              <p>
                💰 <strong>Salary:</strong>{" "}
                <span className="text-success fw-bold">
                  ₹{job.salary}
                </span>
              </p>

              <p>
                🏢 <strong>Company ID:</strong>{" "}
                {job.companyId}
              </p>
            </div>

            <div className="col-md-6">
              <p>
                💼 <strong>Job Type:</strong>
              </p>

              <span className="badge bg-success fs-6">
                {job.jobType}
              </span>

              <p className="mt-3">
                📅 <strong>Posted Date:</strong>{" "}
                {new Date(
                  job.postedDate
                ).toLocaleDateString()}
              </p>
            </div>

          </div>

          <hr />

          <h4>Description</h4>

          <p className="text-muted">
            {job.description}
          </p>

          <div className="mt-4">
            <Link
              to="/"
              className="btn btn-dark"
            >
              ← Back to Jobs
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

export default JobDetails;