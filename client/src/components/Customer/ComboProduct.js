import React from "react";

const ComboProduct = () => (
    <section className="home__container">
        <div className="home__row">
            <h2 className="home__heading">Combo Product</h2>
        </div>
        <div className="home__cate row row-cols-3 row-cols-md-1">
            <div className="col">
                <a href="#!">
                    <article className="cate-item">
                        <img
                            src="./assets/img/category-item/item1.png"
                            alt=""
                            className="cate-item__thumb"
                        />
                        <div className="cate-item__info">
                            <h3 className="cate-item__title">$24 - $150</h3>
                            <p className="cate-item__desc">
                                New sumatra mandeling coffe blend
                            </p>
                        </div>
                    </article>
                </a>
            </div>
            {/* Thêm các item khác */}
        </div>
    </section>
);

export default ComboProduct;
