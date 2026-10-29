import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import Explore from "./pages/Explore";
import Places from "./pages/Places";
import Hotels from "./pages/Hotels";
import Restaurants from "./pages/Restaurants";
import Cafes from "./pages/Cafes";
import Transport from "./pages/Transport";


// Home Page
function Home() {

  const [destination, setDestination] = useState("");

  const navigate = useNavigate();


  const handleExplore = () => {

    if (destination.trim() === "") {

      alert("Please enter a destination!");

      return;
    }

    navigate(
      `/explore?destination=${encodeURIComponent(destination.trim())}`
    );
  };


  return (

    <div className="app">

      <nav className="navbar">

        <div className="logo">
          ✈️ TravelMate
        </div>

        <div className="nav-links">

          <a href="/">Home</a>

          <a href="/explore">Explore</a>

          <a href="#">My Trips</a>

          <a href="#">About</a>

        </div>

        <button className="login-btn">
          Login
        </button>

      </nav>

      <section className="hero">

        <div className="hero-content">

          <p className="small-heading">
            ✨ Your AI Travel Companion
          </p>

          <h1>

            Explore the world.
            <br />
            <span>
              Plan your perfect trip.
            </span>

          </h1>

          <p className="description">

            Discover amazing places, hotels,
            restaurants, cafes and transportation
            — all in one place.

          </p>

          <div className="search-box">

            <span className="location-icon">
              📍
            </span>

            <input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}

              onChange={(event) =>
                setDestination(event.target.value)
              }

              onKeyDown={(event) => {

                if (event.key === "Enter") {
                  handleExplore();
                }

              }}
            />

            <button
              className="explore-btn"
              onClick={handleExplore}
            >
              Explore
            </button>

          </div>

          <p className="popular-text">
            Popular:
          </p>

          <div className="popular-destinations">

            <button
              onClick={() => setDestination("Goa")}
            >
              🌴 Goa
            </button>

            <button
              onClick={() => setDestination("Banaras")}
            >
              🛕 Banaras
            </button>

            <button
              onClick={() => setDestination("Manali")}
            >
              🏔️ Manali
            </button>

            <button
              onClick={() => setDestination("Jaipur")}
            >
              🏰 Jaipur
            </button>

          </div>

        </div>

        <div className="hero-card">

          <div className="travel-card">

            <div className="card-image">
              🌄
            </div>

            <div className="card-content">

              <p>
                ✨ Recommended for you
              </p>

              <h2>
                Discover Beautiful Places
              </h2>

              <span>
                Hotels • Food • Places • Transport
              </span>

            </div>

          </div>

        </div>

      </section>

      <section className="features">

        <h2>
          Everything you need for your trip
        </h2>

        <p>
          Plan, explore and manage your complete journey
          from one platform.
        </p>

        <div className="feature-container">

          <div className="feature-card">

            <div className="feature-icon">
              🏨
            </div>

            <h3>
              Hotels
            </h3>

            <p>
              Find the best hotels according to
              your budget and location.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              🍽️
            </div>

            <h3>
              Restaurants
            </h3>

            <p>
              Discover popular restaurants
              and local food.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              ☕
            </div>

            <h3>
              Cafes
            </h3>

            <p>
              Find beautiful and popular cafes
              near your destination.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              🚕
            </div>

            <h3>
              Transport
            </h3>

            <p>
              Find cab, auto and other
              transportation options.
            </p>

          </div>

        </div>

      </section>

      <section className="ai-section">

        <div>

          <p className="small-heading">
            🤖 Powered by AI
          </p>

          <h2>
            Let AI plan your entire trip
          </h2>

          <p>

            Tell us your destination, budget and
            preferences. TravelMate AI will create
            a personalized day-wise itinerary for you.

          </p>

          <button className="ai-btn">
            Create AI Trip
          </button>

        </div>

      </section>

      <footer>

        <h3>
          ✈️ TravelMate
        </h3>

        <p>
          Your AI-powered travel companion.
        </p>

        <p>
          © 2026 TravelMate. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

// Main App
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/places"
          element={<Places />}
        />

        <Route
          path="/hotels"
          element={<Hotels />}
        />

        <Route
          path="/restaurants"
          element={<Restaurants />}
        />

        <Route
          path="/cafes"
          element={<Cafes />}
        />

        <Route
          path="/transport"
          element={<Transport />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;