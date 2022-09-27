import {Container} from "react-bootstrap";
import "../src/components/app.css"
import Cards from "./components/Cards";
import FormColores from "./components/FormColores";

function App() {
  return (
    <>
    <FormColores></FormColores>
    <Container>
      <div className="row">
        <Cards></Cards>
      </div>
    </Container>
    </>
  );
}

export default App;
