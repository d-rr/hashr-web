import Hashr from "./components/Hashr";
import Hero from "./components/Hero";

function App() {
  return (
    <div class="bg-white dark:bg-slate-800 min-h-screen">
      <div class="max-w-screen-lg mx-auto">
        <div class="p-8">
          <Hero />
          <Hashr />
        </div>
      </div>
    </div>
  );
}

export default App;
