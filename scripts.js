document.querySelector('.toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const darkModeStyles = `
    body.dark-mode {
        background-color: #333;
        color: white;
    }

    body.dark-mode .navbar {
        background-color: #222;
    }

    body.dark-mode .btn-primary {
        background-color: #555;
        color: white;
    }

    body.dark-mode .contact-section,
    body.dark-mode .footer {
        background-color: #222;
        color: white;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
