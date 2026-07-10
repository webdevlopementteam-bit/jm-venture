import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { routes } from "./routes.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />

     <Routes>
  {routes.map(({ path, component: Component }) => (
    <Route
      key={path}
      path={path}
      element={<Component />}
    />
  ))}
</Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;