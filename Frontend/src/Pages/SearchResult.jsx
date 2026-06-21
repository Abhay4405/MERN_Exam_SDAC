import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

function SearchResults() {
  const [jobs, setJobs] = useState([]);
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("q");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/jobs/search?keyword=${keyword}`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [keyword]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        Search Results for "{keyword}"
      </h2>

      {jobs.length === 0 ? (
        <h4>No Jobs Found</h4>
      ) : (
        <div className="row">
          {jobs.map((job) => (
            <div
              className="col-md-6 mb-4"
              key={job._id}
            >
              <div className="card shadow">
                <div className="card-body">
                  <h4>{job.title}</h4>

                  <p>
                    <strong>Location:</strong>{" "}
                    {job.location}
                  </p>

                  <p>
                    <strong>Salary:</strong> ₹
                    {job.salary}
                  </p>

                  <Link
                    to={`/job/${job._id}`}
                    className="btn btn-primary"
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

export default SearchResults;