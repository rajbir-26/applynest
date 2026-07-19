import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen w-full bg-paper text-neutral-dark">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;