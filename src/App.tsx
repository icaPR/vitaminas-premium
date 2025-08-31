import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Headline from "./components/Headline";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <Navbar />
      <div className="mx-auto  py-8">
        <Headline />
        <VideoPlayer />
        <Button />
        <Benefits />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
