import React, { useState } from 'react';
import Nav from '../components/Nav';
import Summary from '../components/Summary'
import profilpic from '../assets/profil_pic.webp'
import { UserContext } from '../utils/userContext'
import { useContext} from "react";

function Test(){
    const [user] = useContext(UserContext);
    if(localStorage.getItem('token')){
        return(
            <>
                {user.pseudo}
            </>
        )
    }
}

function Homepage() {
    const [user] = useContext(UserContext);

    
    return(
        <>
        <Nav />
        <section className="homepage">
            <Summary />
        </section>
        <div className="homepage__main d-flex justify-content-around">
                <img className="homepage__img" src={profilpic} alt="Photo de Mathieu Baugard sur un fond de bureau"/>
            <aside className="homepage__profile">   <p className="text-justify">Bienvenue sur mon Porfolio <Test/>!<br/>
                                                    Ce site a entièrement été réalisé de ma main en utilisant divers outils.<br/>
                                                    Le backend a été réalisé en JavaScript grâce au runtime Node et une
                                                    base de donnée noSQL ( MongoDB ).<br/>
                                                    Le Frontend lui est réalisé grâce à React.js, avec l'aide de SCSS et la
                                                    méthode BEM, ainsi que des classes de base Bootstrap pour gérer le
                                                    responsive. Bonne visite !</p><div className="homepage__bar"></div></aside>
        </div>
        </>
    )
    
}

export default Homepage;