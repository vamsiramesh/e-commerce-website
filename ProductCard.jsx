function ProductCard({ name, price }) {

    return (

        <div className="card">

            <h2>{name}</h2>

            <h3>₹ {price}</h3>

            <button>Buy Now</button>

        </div>

    );

}

export default ProductCard;