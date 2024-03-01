document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class "option"
    var optionButtons = document.querySelectorAll(".option");

    // Add event listeners to each option button
    optionButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get the URL from the href attribute of the anchor tag within the button
            var url = this.querySelector("a").getAttribute("href");
            // Redirect to the URL
            window.location.href = url;
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var getButton = document.querySelector(".get");

    // Add event listener to the button
    getButton.addEventListener("click", function() {
        // Get the URL from the href attribute of the anchor tag within the button
        var url = this.querySelector("a").getAttribute("href");
        // Redirect to the URL
        window.location.href = url;
    });
});







