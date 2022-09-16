import { AppProvider} from "./Component/CrudWithJson/Context"
import FetchPost from "./Component/CrudWithJson/FetchPost";

function App() {
  return (
    <AppProvider>
      <FetchPost/>
    </AppProvider>
      
  );
}

export default App;
