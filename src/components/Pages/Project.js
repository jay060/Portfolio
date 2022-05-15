import React from 'react'
import movies from '../images/moviedb.png';
import oyawi from '../images/oyawiorgs.png';
import boran from '../images/boranafrica.png';
import recipe from '../images/recipe.png';
import calculator from '../images/calculator.png';
import ipadress from '../images/ipaddress.png';
import meety from '../images/meety.png';
import BottomAbout from '../BottomAbout'
import {FaGithub} from 'react-icons/fa'

function Project() {
    return (
        <div className="Project">
            <div className="head">
                My Projects
                <div className="projectsIntro">
                    <div>Here are some of the projects that I have done</div>
                </div>
            </div>
            <div className="container">
                <div className="projs">
                    <div className="img">
                        <img src={movies} alt="movies" />
                    </div>
                    <div className="title">
                        Movies
                    </div>
                    <div className="projinfo">
                        A movie listing app made with Reactjs and tmdb api.
                    </div>
                    <div className="projlinks">
                        <a href="http://movie-jay060.vercel.app/">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={meety} alt="meety"/>
                    </div>
                    <div className="title">
                    Chat Application
                    </div>
                    <div className="projinfo">
                    This is a Microsoft Teams clone built with React JS and Chat Engine!
                    </div>
                    <div className="links">
                    <a href="https://chat-app-jay060.vercel.app/" target='_blank' rel="noreferrer">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={oyawi} alt="oyawi" />
                    </div>
                    <div className="title">Ecommerce application</div>
                    <div className="projinfo">
                        A modern full stack ecommerce application with payments functionality that is fully responsive
                    </div>
                    <div className="links">
                        <a href="https://ecommerce-app-chi.vercel.app/" target='_blank' rel="noreferrer">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={boran} alt="" />
                    </div>
                    <div className="title">
                    Soccer Highlights App
                    </div>
                    <div className="projinfo">
                    SoccerHighlights is a video highlights app that allows you to watch video highlights of your favorite soccer teams and games. React.js and Redux Toolkit were used to construct the app.
                    </div>
                    <div className="links">
                    <a href="https://soccer-highlights-jzt90e1ct-jay060.vercel.app/" target='_blank' rel="noreferrer">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={recipe} alt="recipe" />
                    </div>
                    <div className="title">Pokemon Catalog</div>
                    <div className="projinfo">
                    The project retrieves data from an API and stores it in the Redux Store.
                    </div>
                    <div className="links">
                        <a href="https://pokemon-catalog-bcqdc7it3-jay060.vercel.app/">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={calculator} alt="calculator" />
                    </div>
                    <div className="title">
                    React Todo App
                    </div>
                    <div className="projinfo">
                    Todo app made with react js
                    </div>
                    <div className="links">
                        <a href="https://to-do-list-gilt-one.vercel.app/">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={ipadress} alt="ipadress" />
                    </div>
                    <div className="title">
                    Weather app
                    </div>
                    <div className="projinfo">
                    Weather Application with React
                    </div>
                    <div className="links">
                        <a href="https://weather-8e2b2csyq-jay060.vercel.app/">Live</a>
                    </div>
                </div>
            </div>
            <div className="moreprojs">
                <div>For more You can view my github</div>
                <div><a href="https://github.com/jay060"><FaGithub /> Github</a></div>
            </div>
            <BottomAbout/>
        </div>
    )
}

export default Project
