import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import NavbarBs from "./components/NavbarBs";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ShoppingCartProvider  from './context/ShoppingCartContext';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShoppingCartProvider>
    <Row>
      <NavbarBs />
      <Container className="mb-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Row>
    </ShoppingCartProvider>
  </React.StrictMode>
);
