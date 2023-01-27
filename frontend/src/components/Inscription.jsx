import React, { useState } from 'react';
import {addUser} from '../utils/apicalls'

function Inscription() {
  // Create local state to save state of from
  const [formVisible, setFormVisible] = useState(false);
  // Create local state to save state of btn
  const [buttonVisible, setButtonVisible] = useState(true);
  // Import Data  clients from form
  const [pseudo, setPseudo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  // Hide or display form
  const toggleForm = () => {
    setFormVisible(!formVisible);
    if(!formVisible){
        setButtonVisible(false)
    }else{
        setButtonVisible(true)
    }
  }

  // Verify regex of forms
  const validateForm = () => { 
    let regexEmail  =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let regexPassword =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{6,50})$/;

    if(password === "" || password.length < 6){
      alert('Mot de passe trop court')
      return false
    }
    if(regexPassword.test(password)){
      alert('Mot de passe invalide : 6 caractères mini, un caractère spécial, une majuscule et une minuscule obligatoire')
      return false
    }
    if(password != passwordRepeat){
      alert('Les mots de passe ne correspondent pas')
      return false
    }
    if(!regexEmail.test(email)){
      alert("format du mail incorrect")
      return false
    }
    else{
      alert('Enregistrement réussi, vous pouvez vous connecter !')
      return true
    }
  }

  const onClickHandler = () => {
    console.log(addUser)
    if (!validateForm()) {
        alert('Erreur dans le formulaire')
    }
    addUser({ pseudo, password, email })
};

  return (
    <div className="inscription">
      {/* Bouton "S'inscrire" qui affiche le formulaire lorsqu'il est cliqué */}
      {buttonVisible && (
        <button onClick={toggleForm} className="main__button">Inscription</button>
      )}
      {/* Formulaire d'inscription qui n'est affiché que si l'état du formulaire est "true" */}
      {formVisible && (
        <form className="form p-4 d-flex flex-column">
          {/* Croix qui permet de fermer le formulaire lorsqu'elle est cliquée */}
          <span onClick={toggleForm}>&times;</span>
          {/* Champ "Pseudo" */}
          <label>
            Pseudo:<br/>
            <input type="text" name="pseudo" placeholder="Minimum 3 caractères" onChange={(e)=>{setPseudo(e.target.value)}}/>
          </label>
          {/* Champ "Email" */}
          <label>
            Email:<br/>
            <input type="email" name="email"  placeholder="abdel@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} />
          </label>
          {/* Champ "Mot de passe" */}
          <label>
            Mot de passe:<br/>
            <input type="password" name="password" placeholder="6 caractères, une majuscule et un chiffre" onChange={(e)=>{setPassword(e.target.value)}}/>
          </label>
               {/* Champ "Confirmation mot de passe" */}
               <label>
            Confirmation mdp:<br/>
            <input type="password" name="confirm-password" className="form__input" placeholder="6 caractères, une majuscule et un chiffre" onChange={(e)=>{setPasswordRepeat(e.target.value)}}/>
          </label>
          {/* Bouton "S'inscrire" */}
          <button type="submit" className="main__button--secondary mt-2" onClick={onClickHandler}>S'inscrire</button>
        </form>
      )}
    </div>
  );
}

export default Inscription;