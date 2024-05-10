import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <div key={product.id} className="card">
      <div className="image-box-card">
        <img className="image-card" src={product.image} alt={product.name} />
      </div>
      <div className="info-card">
        <h2 className="title-card">{product.name}</h2>
        <p className="price-card">$ {product.price}</p>
        <div className="box-button-item">
          <Link to={`/detail/${product.id}`} className="button-item">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Item;