
import './App.css';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { StatusComponent } from './components/Status/StatusComponent';
import { Capsules } from './components/Capsules/Capsules';

function App() {
  return (
    <>
      <Header></Header>
      <StatusComponent></StatusComponent>
      <Capsules></Capsules>
      <Footer></Footer>
    </>
  );
}

export default App;
