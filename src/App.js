import { Helmet } from "react-helmet";
import Hashr from "./components/Hashr";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
      </Helmet>
      <div className="bg-white dark:bg-slate-800 min-h-screen">
        <div className="max-w-screen-lg mx-auto">
          <div className="p-8">
            <div className="mb-8">
              <Hero />
            </div>
            <div className="my-8">
              <Hashr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
