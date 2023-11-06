import React from 'react'
import Product from './Product'


const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://media.discordapp.net/attachments/1004356980669952011/1171091558926385152/pexels-lukas-306089.jpg?ex=655b6b01&is=6548f601&hm=bc8e13cd57deb786e01c3fa08e9ff859fffb679937e23e427aa09084ed9c05b0&=&width=841&height=557" class="d-block w-100" alt="Loja" height="600px"/></div>
                        <div class="carousel-item">
                            <img src="https://media.discordapp.net/attachments/1004356980669952011/1171091559974965418/pexels-pixabay-210766.jpg?ex=655b6b01&is=6548f601&hm=024230aba28adc4c9020541f91e5fcc5123ccadf14635e3defc646a6cbebd773&=&width=836&height=557" class="d-block w-100" alt="Loja" height="600px"/></div>
                            <div class="carousel-item">
                                <img src="https://media.discordapp.net/attachments/1004356980669952011/1171091560964816946/pexels-josh-sorenson-995301.jpg?ex=655b6b01&is=6548f601&hm=c1dbc86fe8ef224016eedb20561654f17b1c0309c047d5118bfc361acfa19901&=&width=836&height=557" class="d-block w-100" alt="Loja" height="600px"/></div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        
                        
                        <Product/>
                    </div>
                    )
}

                    export default Home
