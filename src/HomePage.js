import logo from './logo.svg';
import restauranfood from './assets/restauranfood.jpg';
import './HomePage.css';
import {Fragment} from "react";
import Header from "./conponents/Header";

function HomePage() {
    return (
        <>
            <meta name="og:title" content="Little lemon restaurant"/>
            <meta name="description"
                  content="The best restaurant ever"/>
            <div className="page-body">
                <Header/>
                <main>
                    <article>
                        <div>
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
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

export default HomePage;
