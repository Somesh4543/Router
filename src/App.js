import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./Routes/ProductDeatil";
import Product from "./Routes/Products";
import Welcome from "./Routes/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'/>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/anything
