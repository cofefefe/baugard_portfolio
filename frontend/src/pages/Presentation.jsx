import React, { useState, Component } from 'react';
import Nav from '../components/Nav';
// icons
import { FaFeatherAlt, FaDog, FaBookOpen, FaReact, FaNodeJs } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';
import { BsWordpress } from 'react-icons/bs'
import { SiPhp } from 'react-icons/si'
//image
import niang from '../assets/presentation/mamadouniang.webp'
import fm from '../assets/presentation/fm23.webp'
import paradox from '../assets/presentation/paradox_logo.webp'
import civ from '../assets/presentation/civ.webp'
import nobody from '../assets/presentation/mrnobody.webp'


function Presentation (){
    const [selected, setSelected] = useState('');
    const contentDiv = document.getElementById('content')

    const handleClick = (elem) => {
        setSelected(elem);
    }

    function Biography(){
        contentDiv.textContent="Biographie : Ici, je fais une présentation un peu plus poussée de mon parcours !"
        return(
            <>
            <section className="card d-flex flex-column flex-lg-row flex-wrap w-80 mt-4">            
                <aside className="card_football col-12 col-lg-6">
                <div className="d-flex">
                    <h5 className="text-center card__titles">Le " margat "</h5>
                </div>
                    <p className="card__text">La première fois que j’ai vu le ciel, il pleuvait. La naissance d’un petit “ ch’ti “ entouré de sa famille mais qui ne grandira pas longtemps dans les humides contrées du Nord. Suffisamment pour avoir quelques termes que le sud ne comprend, quand je dis d’un enfant que c’est un “ margat “, le cheval devient du “bidal” ou encore la fameuse wassingue. Entre les cousin(e)s et les grand parents, j’ai absorbé petit à petit la culture du nord, une bonne dose d’humour, l’accueil chaleureux et la nourriture grasse. J’ai pu m’habituer à la mer du nord et au vent, mais en 2002, à mes 5 ans, mon père part à Toulouse pour une nouvelle aventure professionnelle et familiale !</p>
                </aside>
                <aside className="card_videogames col-12 col-lg-6">
                <div className="d-flex">
                    <h5 className="text-center card__titles">Le " minot "</h5>
                </div>
                    <p className="card__text">Le sud me voit plus grand et mon premier été se passe sous le signe du bronzage à la ferme ! Début de l’école primaire, des amis, des disputes et de l’intégration sociale pour le jeune moi. J’ai assez vite deux bons amis, mais on s’aperçoit que je bégaie, j’ai du mal à m’exprimer à l’oral, d’après l’orthophoniste mes idées vont plus vite que ma langue. Après coup je m’aperçois qu’elle était vraiment gentille.  Le contre pouvoir d’un bégaiement qui m’a fait relativement mal par moment, c’était le football. Je n’étais absolument pas talentueux, mais j’étais passionné, j’avais une force de travail et je réfléchissais en jouant. Ce qui m’a permis de m’améliorer et de me donner confiance jusqu’à aller au collège en sport étude. A 18 ans, j’avais une grande bande d’amis, des concerts dans toute la France, et un bac littéraire qui me plaisait énormément, bien que je n’avais pas d’idée pour l’avenir. Viens la fac, je pars, par défaut, en licence de sociologie. Les sujets encore une fois me plaisent mais n’ayant aucune idée de ce que je souhaites faire, j’arrête après avoir eu ma l1 et fais un service civique à l’AFEV, ou j’ai appris la gestion humaine à travers une quarantaine de bénévole réalisant des accompagnements personnalisés avec des enfants en difficultés scolaire ou sociale. Après quelques années de travail dans le social, en restauration ou dans des champs, j’ai décidé de me lancer dans l’aventure du développement web !</p>
                </aside>
            </section>            
            </>
        )
    }

    function Hobbies(){
        contentDiv.textContent="Passion";
        return(
            <>
            <section className="card d-flex flex-column flex-lg-row flex-wrap w-80 mt-4">
                <aside className="card_football col-12 col-lg-4">
                    <h5 className="text-center card__titles">Le football</h5>
                        <p className=" card__text mt-3 "><img className="card__mamad"src={niang}/>A 5 ans j'ai commencé le football, j'étais tout jeune et plein d'entrain et je dessinais l'ébauche de mes premières relations sociales hors scolaires, et experimentais non sans mal les premiers " effet de groupe ". Trois ans plus tard, l'occupation est devenue une passion en regardant le Marseille de Mamadou Niang qui ne me quittera plus et me fera vivre des hauts et des bas, toujours dans le respect et l'esprit sportif. J'ai eu la chance de cotôyer un bon niveau et de développer mes appétences de leadership jusqu'à devenir capitaine de mon équipe et selectionné en départemental. J'y aurais appris durant 14 années de pratique : l'esprit d'équipe, le respect, le dépassement de soi et l'envie d'apporter des rires au sein d'un groupe.</p>
                </aside>
                <aside className="card_videogames col-12 col-lg-4">
                    <h5 className="text-center card__titles">Les jeux vidéos</h5>
                        <p className=" card__text mt-3 "><img className="card__fm" src={fm}/>Plus tardivement et non sans lien avec mon arrêt du foot suite à de multiples déménagements, je me suis pris de passion pour les jeux vidéos. J'ai commencé par des grands classiques tel que Metal Gear Solid ou Tomb Raider. Mais assez vite j'ai pu lier ma passion pour le football et celle pour le jeux viédo grâce à Football Manager. Ce jour là, j'ai été prit dans une boucle nommé : jeux de gestion. J'adore manager, préparer un plan sur du moyen terme et adapter<img className="card__paradox" src={paradox}/> ses reflexions au contexte. J'ai pu me découvrir une autre passion grâce à ça, l'histoire. A travers les jeux de l'éditeur Paradox j'ai conquis la scandinavie, développé l'écologie en France plutôt que de coloniser. Bref, j'ai vécu bien des histoires, et éveillé un amour pour la discipline, notamment dans l'axe médiéval / renaissance.</p>
                </aside>
                <aside className="card_history col-12 col-lg-4">
                    <h5 className="text-center card__titles">L'histoire</h5>
                        <p className=" card__text mt-3 ">Cette dernière est arrivée plus tardivement, j'étais ouvrier agricole et m'occupais d'une dizaine de champs de maïs. Le but étant d'injecter différentes maladies aux cultures composés de multiples variétés, et d'élaborer un plan de notation afin d'estimer les varités les plus resistantes. Un travail de longue haleine avec beaucoup de marche, où chaque plan doit être observé. <img className="card__civ" src={civ}/>J'accompagnais mes 15km quotidien de différents podcasts ou reportage sur des périodes d'histoires : le Florence de Michel Ange et Da Vinci, la dévotion de Saint Louis, l'Aquitaine reine d'Angleterre ou encore le duel entre François premier et Charles Quint sont autant de sujet qui accompagnent désormais mes pérégrinations au sein de dame nature !</p>
                </aside>
            </section>            
            </>
        )
    }

    function Objectives(){
        contentDiv.textContent="Objectifs";
        return(
            <>
            <section className="card d-flex flex-column flex-lg-row flex-wrap w-80 mt-4">
                <aside className="card_football col-12 col-lg-6">
                <div className="d-flex">
                    <BsWordpress className="card__icons--wordpress"/>
                    <h5 className="text-center card__titles">Apprentissage</h5>
                    <SiPhp className="card__icons--php"/>
                </div>
                    <p className="card__text">Pour mon apprentissage futur, j'ai beaucoup d'objectifs à accomplir et de perfectionnement à opérer. Tout d'abord j'aimerais à terme m'expertiser sur React.js. Pour l'instant j'ai encore besoin de confirmer les connaissances acquises lors de ma formation par la pratique, d'où le choix, qui certes n'apparaît comme techniquement pertiment, de réaliser ce portfolio en utilisant React et les outils proposés comme les Hooks, props et states. Cette page a été réalisée grâce aux states et une condition qui affiche le thème selectionné.<br/>Ensuite j'aimerais me former à Wordpress. J'habite dans une ville assez rurale et donc les opportunités ne sont pas légions. Me former à Wordpress me permettrait de faire des sites en indépendant et la porportion charge d'apprentissage/ rentabilité potentielle est trop interessante pour m'en détourner<br/>Pour finir, j'aimerais apprendre un langage backend autre que le js et node couplés, ça me permettrait de postuler à des offres bien plus diversifiés et consolider les connaissances du developpement web que j'ai aujourd'hui.</p>
                </aside>
                <aside className="card_videogames col-12 col-lg-6">
                <div className="d-flex">
                    <FaReact className="card__icons--react"/>
                    <h5 className="text-center card__titles">Professionnel</h5>
                    <FaNodeJs className="card__icons--node"/>
                </div>
                    <p className="card__text">Dans un court terme, j’aimerais rejoindre une entreprise, si possible dans le cadre d’une alternance. J’aimerais pouvoir apporter mon expertise notamment ma connaissance des audits d’applications qu’elle soit en termes d’accessibilité, seo ou performance. Cela me permettrait de pratiquer dans un cadre professionnel, chose très différente que le code “passion”. L’optimal serait que le stack de l’entreprise soit raccord avoir mes connaissances, en outre React en front et Node en back. Mais le backend étant un de mes axes de progression à moyen terme, une entreprise qui utilise php/sql pourrait effectivement m’apporter beaucoup bien que j’aurais besoin d’une préformation pour être pertinent côté backend. A long terme j’aimerais développer ma propre activité de développement web, accompagnement branding, soutien graphisme logo et charte graphique par exemple.<br/> Un rêve serait de voir des entreprises que j’ai accompagnées à leurs débuts gagner en croissance et faire le bonheur de son propriétaire. Mais avant cela, il reste beaucoup de travail, notamment en trouver un, peut-être me donnerez-vous une chance ?</p>
                </aside>
            </section>            
            </>
        )
    }

    function Reference(){
        contentDiv.textContent="références";
        return(
            <>
            <section className="card d-flex flex-column flex-lg-row flex-wrap w-80 mt-4">               
                <aside className="card_football col-12 col-lg-4">
                    <h5 className="text-center card__titles">Littéraires</h5>
                        <ul className="card__list">
                            <li>Ainsi parlait Zarathoustra | Nietzsche</li>
                            <li>L'insoutenable légéreté de l'être | Milan Kundera</li>
                            <li>Le poète | Paulo Coelho</li>
                            <li>Le dernier jour d'un condamné | Victor Hugo</li>
                        </ul>
                </aside>
                <aside className="card_videogames col-12 col-lg-4">
                    <h5 className="text-center card__titles">Cinématographiques</h5>
                        <ul className="card__list">
                            <li>Mr Nobody | Jacob von Dormael</li>
                            <li>Princesse Mononoké | Hayao Miyazaki</li>
                            <li>Utopia | Dennis Kelly & Marc Munden</li>
                            <li>No country for old man | Frères Cohen</li>
                        </ul>
                </aside>
                <aside className="card_videogames col-12 col-lg-4">
                    <h5 className="text-center card__titles">Jeux vidéos</h5>
                        <ul className="card__list">
                            <li>Crusader King | Paradox Interactive</li>
                            <li>Kingdom come deliverance | Warhorse Studios</li>
                            <li>Dark Soul II | From software</li>
                            <li>Fable |  Lionhead Studios</li>
                        </ul>
                </aside>
            </section>            
            </>
        )
    }

    return(
        <>
        <Nav />
        <section className="presentation">
            <div className="presentation__nav d-flex justify-content-around flex-wrap">
                <button onClick={() => handleClick('Biography')} className="presentation__nav--bio d-flex mt-5 align-items-center">  
                    <p className="m-0">Biographie</p>
                    <FaFeatherAlt />
                </button>
                <button onClick={() => handleClick('Hobbies')} className="presentation__nav--hobbies d-flex mt-5 align-items-center">
                    <p className="m-0">Passions</p>
                    <FaDog />
                </button>
                <button onClick={() => handleClick('Objectives')} className="presentation__nav--goals d-flex mt-5 align-items-center">
                    <p className="m-0">Objectifs</p>
                    <FiTarget />
                </button>
                <button onClick={() => handleClick('Reference')} className="presentation__nav--ref d-flex mt-5 align-items-center">
                    <p className="m-0">Références</p>
                    <FaBookOpen />
                </button>   
            </div>
            <aside className="presentation__description mt-5" id="content">
                Voici un contenu plus personnel,<br/>pour apprendre à me connaître !
            </aside>
            {selected === 'Biography' && <section className="mt-2 Biography"> <Biography /> </section>}
            {selected === 'Hobbies' && <section className="mt-2 Hobbies"> <Hobbies /> </section>}
            {selected === 'Objectives' && <section className="mt-2 Objectives"> <Objectives /> </section>}
            {selected === 'Reference' && <section className="mt-2 Reference"> <Reference /> </section>}
        </section>
           </>
    )
}

export default Presentation