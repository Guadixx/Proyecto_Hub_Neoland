

import "./Other.css";

const template = () => `
<section class="other">
    <h2>Other</h2>
</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};