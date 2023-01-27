import React from "react"

function ContactForm() {
  return (
    <div className="sendmail">
      <form
        name="sendmail"
        method="post"
        className="sendmail__form"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="sendmail" />
        <label for="name">Nom: </label>
        <input type="text" name="name" />

        <label for="email">Email: </label>
        <input type="email" name="email" />

        <label for="message">Message: </label>
        <textarea name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
      ,
    </div>
  )
}

export default ContactForm