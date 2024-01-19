import { Navigate, useParams } from "react-router-dom";

function MovieId(props) {
  const params = useParams();
  return <Navigate replace to={`/movie/${params.id}`} />;
}

export default MovieId;
