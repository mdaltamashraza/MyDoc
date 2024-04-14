import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LayoutStyles.css";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  const base64Data = doctor.base64Data;
  return (
    <>
      <div
        className="card m-2 card-container"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`data:image;base64,${base64Data}`}
                className="img-fluid rounded-start"
                style={{ height: "190px" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Dr. {doctor.firstName} {doctor.lastName}
                </h5>
                <p className="card-text">
                  <b>Specialization</b> {doctor.specialization}
                </p>
                <p className="card-text">
                  <b>Experience</b> {doctor.experience}
                </p>
                <p className="card-text">
                  <b>Fees Per Cunsaltation</b> {doctor.feesPerCunsaltation}
                </p>
                <p className="card-text">
                  <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
