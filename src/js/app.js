

import '../scss/theme.scss';

/* Your JS Code goes here */

/* Demo JS */
import './demo.js';

function goToHome() {
   
    console.log(window.host);
    console.log(window.href)
}

$(document).ready(function() {
    console.log('We are ready!')
    goToHome()
});