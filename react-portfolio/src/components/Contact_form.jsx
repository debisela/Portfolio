import React from "react";

const Contact_form= () => {

return (
    <>
 <section id="contact">
        <h2>Contact Me</h2>
        <form action="#" method="POST">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
  </>
)
};

export default Contact_form;
