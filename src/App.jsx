import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

import ExistingRooms from "./components/room/ExistingRooms";
import Home from "./components/home/Home";
import EditRoom from "./components/room/EditRoom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRoom from "./components/room/AddRoom";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import RoomListing from "./components/room/RoomListing";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route path="/all-rooms" element={<RoomListing />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </>
  );
}

export default App;
