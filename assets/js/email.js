const mailto = "mailto:";
const name = "alexandra";
const surname = "verschuuren";
const at = "@";
const provider = "gmail";
const dotcom = ".com";

const fullEmail = (mailto + name + surname + at + provider + dotcom);

function sendEmail() {
    window.location = fullEmail;
};