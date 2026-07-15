import { Routes, Route } from "./router";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { routes } from "./routes.jsx";
import CallToAction from "./components/CallToAction.jsx";
import LeadPopup from "./components/LeadPopup.jsx";

const App = () => {
  return (
    <>
      <LeadPopup />
      <Header />
      <ScrollToTop />

      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <CallToAction />
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
};

export default App;
