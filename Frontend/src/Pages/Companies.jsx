import { useEffect, useState } from "react";
import axios from "axios";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/companies")
      .then((res) => {
        setCompanies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-4">

      {/* Hero Section */}
      <div className="bg-primary text-white p-5 rounded shadow mb-5">
        <h1 className="display-5 fw-bold">
          Top Companies 🏢
        </h1>

        <p className="lead">
          Discover leading companies hiring talented professionals.
        </p>
      </div>

      <h2 className="text-center mb-4">
        Featured Companies
      </h2>

      {companies.length === 0 ? (
        <div className="text-center">
          <h4>No Companies Available</h4>
        </div>
      ) : (
        <div className="row">
          {companies.map((company) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={company._id}
            >
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body">

                  <h4 className="fw-bold">
                    {company.name}
                  </h4>

                  <hr />

                  <p>
                    🏭 <strong>Industry:</strong>{" "}
                    {company.industry}
                  </p>

                  <p>
                    ⭐ <strong>Rating:</strong>{" "}
                    <span className="text-warning fw-bold">
                      {company.rating}
                    </span>
                  </p>

                  <p>
                    <strong>Description:</strong>
                    <br />
                    {company.description}
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

export default Companies;