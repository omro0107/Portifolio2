import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './pages/About';
import Vaultbid from './pages/Vaultbid';
import Swiftcart from './pages/Swiftcart';
import Holidaze from './pages/Holidaze';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen w-full overflow-x-hidden flex flex-col">
        <Header />
        <main className="w-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/vaultbid" element={<Vaultbid />} />
            <Route path="/projects/swiftcart" element={<Swiftcart />} />
            <Route path="/projects/holidaze" element={<Holidaze />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
