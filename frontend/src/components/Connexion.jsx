import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {userLogin} from '../utils/apicalls'
import { useContext} from "react";
import { UserContext } from '../utils/userContext'



const button = document.getElementsByClassName("main__button")

function Connexion() {
  // create local state to show/display form and btn
  const [formVisible, setFormVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  // Retrieve user Info
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useContext(UserContext);
  const [loginFail, setLoginFail] = useState(false);

  const navigate = useNavigate();


  // Hide or display btn or form
  const toggleForm = () => {
    setFormVisible(!formVisible);
    if(!formVisible){
        setButtonVisible(false)
    }else{
        setButtonVisible(true)
    }
    // hide btn if form displayed
  }

  // Verify if email and password are corrects
  const validateForm = () => {
    if (!email) {
        alert('Email invalide');
        return false;
    }
    if (!password) {
        alert('Mot de passe invalide');
        return false;
    }
    return true;
};

  // after virifying email/password, make a call to the db 'userLogin', connect him and send an auth token
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
        return;
    }
    userLogin({ password, email }).then(function (response) {

        if (response.user && response.user._id && response.token) {
            localStorage.setItem("token", response.token);
            setUser(response.user);
            navigate('/homepage');
        } else {
            setLoginFail(true)
            alert('Connexion impossible');
        }
    })
};


  return (
    <div className="connexion">
      {/* Bouton "S'inscrire" qui affiche le formulaire lorsqu'il est cliqué */}
      {buttonVisible && (
        <button onClick={toggleForm} className="main__button">Connexion</button>
      )}
      {/* Formulaire d'inscription qui n'est affiché que si l'état du formulaire est "true" */}
      {formVisible && (
        <form className="form p-4 d-flex flex-column" onSubmit={handleSubmit}>
          {/* Croix qui permet de fermer le formulaire lorsqu'elle est cliquée */}
          <span onClick={toggleForm}>&times;</span>
          {/* Champ "Email" */}
          <label>
            Email:<br/>
            <input type="email" name="email"  placeholder="abdel@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
          </label>
          {/* Champ "Mot de passe" */}
          <label>
            Mot de passe:<br/>
            <input type="password" name="password" className="form__input"  placeholder="*********" onChange={(e)=>{setPassword(e.target.value)}}/>
          </label>
          {/* Bouton "S'inscrire" */}
          <button type="submit"  className="main__button--secondary mt-2" >Connexion</button>
        </form>
      )}
    </div>
  );
}

export default Connexion