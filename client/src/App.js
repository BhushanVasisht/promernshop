import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";
import ProductScreens from "./screens/ProductScreens";

const App = () => {
  return (
      <Router>
          <Header />
          <main className={'py-3'}>
              <Container>
                  <Route exact path={'/'} component={HomeScreen} />
                  <Route path={'/product/:id'} component={ProductScreens} />
              </Container>
          </main>
          <Footer />
      </Router>
  )
}

export default App;
