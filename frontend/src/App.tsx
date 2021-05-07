import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>

        <DataTable />   
      </div>
      <Footer />
    </>
  );
}

export default App;

// No retorno da função que é o componente do React, pode ter apenas
// um elemento e como incluímos <NavBar/> e <div><div/>, para delimitarmos 
// com um elemento apenas, inserimos o fragment, que seria <> antes do 
// elemento e </> fechando.
