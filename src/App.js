import { Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./Routes/ProductDeatil";
import Product from "./Routes/Products";
import Welcome from "./Routes/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
              <Route path="new-user" element={<p>Welcome new user</p>} />
          </Route>
          <Route path="/products/*" element={<Product />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/anything
