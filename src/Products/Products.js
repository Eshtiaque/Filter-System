
import "./Product.css"; // Make sure you import the file

const Products = ({ result }) => {
  return (
    // Make sure the className matches the CSS
    <section className="products-container"> 
      {result}
    </section>
  );
};

export default Products;