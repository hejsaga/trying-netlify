import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./context/ProductContext";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import PrivateRoutes from "./components/PrivateRoutes";
import PageLayout from "./components/PageLayout";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductPage />} />
          </Route>

          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route
            path="/"
            element={
              <PageLayout>
                <h1>I am a public page</h1>
              </PageLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
