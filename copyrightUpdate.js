// updating copyright is annoying, so now i wont have to

const date = new Date();
const currYear = date.getFullYear();

const copyrightElement = document.getElementById('copyright-date');
copyrightElement.textContent = `© ${currYear} Mathew Gutoskie`;