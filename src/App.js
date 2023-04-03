import Hashr from "./components/Hashr";
import Hero from "./components/Hero";

function App() {
  return (
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
  );
}

export default App;
