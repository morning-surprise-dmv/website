import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <article>
                <section>
                    <header>
                        <section class="title">
                            <div class="logo-and-name-wrapper">
                                <figure 
                                    class="morning-surprise-logo"
                                ></figure>

                                <h1>MORNING SURPRISE</h1>
                            </div>

                            <h2>Breakfast Menu</h2>

                            <p class="p-small">
                                All our breakfasts includes a tray, two balloons, and a card. Balloons or a flower arrangement are offered for an additional fee.
                            </p>
                        </section>

                        <section>
                            <figure class="black-banner">
                                <p><strong>FREE DELIVERY</strong></p>
                            </figure>

                            <p class="p-small"><strong>*within 25 miles of Reston Town Center</strong></p>
                        </section>
                    </header>

                    <section className="menu-options">
                        <section className="menu-option">
                            <h3>Birthday Surprise</h3>

                            <ul>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>scrambled eggs with bacon</li>
                                        <strong>or</strong>
                                        <li>ham and cheese sandwich</li>
                                    </ul>
                                </li>
                                <li>
                                    Starbucks iced coffee
                                </li>

                                <li>
                                    Pancakes with maple syrup
                                </li>
                            </ul>
                        </section>

                        <section className="menu-option">
                            <h3>Morning Surprise Special</h3>

                            <ul>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>scrambled eggs with bacon</li>
                                        <strong>or</strong>
                                        <li>ham and cheese sandwich</li>
                                    </ul>
                                </li>
                                <li>
                                    Starbucks Iced Coffee
                                </li>
                                <li>
                                    Pancakes with Maple Syrup
                                </li>
                                <li>
                                    Chocolates
                                </li>
                            </ul>
                        </section>

                        <section className="menu-option">
                            <h3>American Breakfast</h3>

                            <ul>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>scrambled eggs with bacon</li>
                                        <strong>or</strong>
                                        <li>ham and cheese sandwich</li>
                                    </ul>
                                </li>
                                <li>Toast</li>
                                <li>
                                    Starbucks iced coffee
                                </li>
                                <li>
                                    Orange juice
                                </li>
                                <li>
                                    Pancakes with Maple Syrup
                                </li>
                                <li>
                                    Strawberries
                                </li>
                                <li>
                                    Yogurt with granola and strawberries
                                </li>
                                <li>
                                    Chocolates
                                </li>
                            </ul>
                        </section>

                        <section className="menu-option">
                            <h3>French Breakfast</h3>

                            <ul>
                                <li>
                                    Ham and cheese croissants
                                </li>
                                <li>
                                    Starbucks Iced Coffee
                                </li>
                                <li>
                                    Orange Juice
                                </li>
                                <li>
                                    Pancakes with Maple Syrup
                                </li>
                                <li>
                                    Strawberries
                                </li>
                                <li>
                                    Yogurt with granola and strawberries
                                </li>
                                <li>
                                    Chocolates
                                </li>
                            </ul>
                        </section>

                        <section className="menu-option">
                            <h3>Colombian Breakfast</h3>

                            <ul>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>cheese-stuffed arepas</li>
                                        <strong>or</strong>
                                        <li>plain arepas</li>
                                    </ul>
                                </li>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>sunny-side-up eggs</li>
                                        <strong>or</strong>
                                        <li>pericos</li>
                                    </ul>
                                </li>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>sausage</li>
                                        <strong>or</strong>
                                        <li>fried pork belly</li>
                                    </ul>
                                </li>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>Colombian coffee</li>
                                        <strong>or</strong>
                                        <li>oatmeal drink</li>
                                    </ul>
                                </li>
                                <li>
                                    Orange juice
                                </li>
                                <li>
                                    Pancakes with Maple Syrup
                                </li>
                                <li>
                                    Fresh fruits
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </article>
        )
    }
}

export default Menu;