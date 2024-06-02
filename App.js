import "./App.css";

import Navbar from "./navbar";
import Welcome from "./Welcome";
import Badge from "./badge";
import Adbazaar from "./adbazaar";
import Adleaks from "./adleaks";
import Adbooks from "./adbooks";
import Admeet from "./admeet";
import Adguru from "./adguru";
import Adpro from "./adpro";
import Adread from "./adread";
import Signup from "./signup";
import Footer from "./footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Welcome />
      <Badge />
      <Adbazaar />
      <Adleaks />
      <Adbooks />
      <Admeet />
      <Adguru />
      <Adpro />
      <Adread />
      <Signup />
      <Footer/>
    </div>
  );
}

export default App;
