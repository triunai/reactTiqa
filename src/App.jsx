// component imports - used barrel files UNNECESSARY, use regular imports
import { Header} from "./components";
import CoreConcepts from './components/CoreConcepts.jsx';
import Descriptions from "./components/Descriptions.jsx";

function App() {

  // Actual HTML implementation

  return (
    <>
      <Header></Header>
      <main>
      <CoreConcepts></CoreConcepts>
      <Descriptions />
      </main>
    </>
  );
}

export default App;
