import { Input } from "./components/Input";
import { List } from "./components/List";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <div className="bg-blue-300 h-screen w-screen grid justify-center content-center">
      <GlobalProvider>
        <Input />
        <List />
      </GlobalProvider>
    </div>
  );
}

export default App;
