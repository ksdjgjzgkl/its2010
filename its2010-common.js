// its2010-common.js
document.addEventListener("DOMContentLoaded", function() {
    // Header laden
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht OK');
                }
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Problem beim Laden des Headers:', error);
                headerPlaceholder.innerHTML = '<header><div class="header-content"><h1>ITS2010</h1></div></header>';
            });
    }

    // Footer laden
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht OK');
                }
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Problem beim Laden des Footers:', error);
                footerPlaceholder.innerHTML = '<footer><div class="copyright"><p>&copy; 2025 ITS2010</p></div></footer>';
            });
    }
});
