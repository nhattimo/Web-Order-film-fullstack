import React from "react";
import Slideshow from "./Slideshow";
import ComboProduct from "./ComboProduct";
import Films from "./Film/Films";

const Home = () => (
    <main className="container home">
        <Slideshow />
        <ComboProduct />
        <Films />
    </main>
);

export default Home;
