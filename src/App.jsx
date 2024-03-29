import { Jobs, Navbar, Home, About, Courses, Footer } from "./components";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <>
      <ScrollToTopButton/>
      <Navbar />
      <Home />
      <About />
      <Jobs/>
      <Courses />
      <Footer />
    </>
  );
};

export default App;
