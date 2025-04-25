import Nav from "./components/Nav";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Nav />
    </>
  );
}

export default App;
