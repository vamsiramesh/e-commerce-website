import ProductCard from "../components/ProductCard";

const products = [

    {
        name: "Laptop",
        price: 65000
    },

    {
        name: "Smart Phone",
        price: 25000
    },

    {
        name: "Headphones",
        price: 3000
    }

];

function Products() {

    return (

        <div className="container">

            <h1>Products</h1>

            {

                products.map((product, index) => (

                    <ProductCard

                        key={index}

                        name={product.name}

                        price={product.price}

                    />

                ))

            }

        </div>

    );

}

export default Products;