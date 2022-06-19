import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import { FaArrowCircleLeft } from "react-icons/fa";
import Topbar from "./Topbar";
import { Navbar} from "react-bootstrap";

const DetailPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="bg-dark"><Navbar.Brand className= "text-light fs-1 fw-bold " href="#home">Movie<span className= "text-primary">Home</span></Navbar.Brand>
      </div>
      <div className="container-button bg-dark">
        <button className="return-button btn-success" onClick={returnBack}>
          <FaArrowCircleLeft /> &nbsp; Return
        </button>
      </div>
      <MovieDetails movieId={movieId} />
    </>
  );
};

export default DetailPage;