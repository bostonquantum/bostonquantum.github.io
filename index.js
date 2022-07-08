function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementById('theme');

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == './node_modules/bootswatch/dist/vapor/bootstrap.min.css') {
        theme.setAttribute('href', './node_modules/bootswatch/dist/morph/bootstrap.min.css');
    } else {
        theme.setAttribute('href', './node_modules/bootswatch/dist/vapor/bootstrap.min.css');
    }
}
