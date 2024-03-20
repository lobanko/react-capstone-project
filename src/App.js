import logo from './logo.svg';
import restauranfood from './assets/restauranfood.jpg';
import './App.css';
import {Fragment} from "react";

function App() {
  return (
      <>
          <div className="page-body">
              <div className="top">
                  <header>LOG</header>
                  <nav>navigation
                      navigation
                      navigation
                      navigation
                      navigation
                      navigation
                  </nav>
              </div>
              <main>
                  <article>
                      <div>
                          <h1>Little Lemon</h1>
                          <h2>Chicago</h2>
                          <div>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </div>
                          <button>
                              Reserve a Table
                          </button>
                      </div>
                      <div className="restauranfood-logo-wrapper">
                          <img className="restauranfood-logo" src={restauranfood} alt="restarauntfood"/>
                      </div>
                  </article>
              </main>
              <aside className="specials-block">
                  <h1> Specials </h1>
                  <button>
                      menu button
                  </button>
              </aside>
              <article className="specials-block-content">
                  <section>product 1</section>
                  <section>product 2</section>
                  <section>product 3</section>
              </article>
              <aside className="about-restarant-block">
                  <h1>ABOUT THE RESTORANT</h1>
              </aside>
              <footer>
                  <div> logo</div>
                  <div> nav</div>
                  <div> contact</div>
                  <div> social</div>

              </footer>
          </div>
      </>

  );
}

export default App;
