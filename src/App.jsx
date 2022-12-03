import { useState } from "react";
import Container from "./components/Container";
import Overlay from "./components/Overlay";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);

  return (
    <>
      <Overlay isOpen={isOpen} />
      <Container isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default App;
