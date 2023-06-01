import "./App.css";
import Routing from "../src/routes/index";
import { UserProvider } from "./context/UserContext";
import { ProductProvider } from "./context/ProductContext";
function App() {
  return (
    <>
      <ProductProvider>
        <UserProvider>
          <Routing />
        </UserProvider>
      </ProductProvider>
    </>
  );
}

export default App;
