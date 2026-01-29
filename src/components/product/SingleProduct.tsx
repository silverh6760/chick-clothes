import { useParams } from "react-router-dom";

function SingleProduct() {
  const params = useParams();
  console.log(params);
  return <div>product of {params.id}</div>;
}

export default SingleProduct;
