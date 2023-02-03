

import "./Contact.css";

const template = () => `
<section class="contact">
    <h2>Contact me</h2>
</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};