import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./Routes/ProductDeatil";
import Product from "./Routes/Products";
import Welcome from "./Routes/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
        <Route path='/product-detail/:productId'>
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;


// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/anything