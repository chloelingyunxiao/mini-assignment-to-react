import "./App.css";
import { ColorBox } from "./components/colorBox";
import { ContactTable } from "./components/contactTable";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header headerContent={"Lingyun Xiao"} />
      <ColorBox />
      <ContactTable />
    </>
  );
}

export default App;
