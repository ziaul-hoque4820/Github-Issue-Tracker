document.getElementById("js-login-btn").addEventListener('click', (event) => {
    event.preventDefault();

    const userName = document.getElementById("js-user-name").value.trim();
    const userPassword = document.getElementById("js-password").value.trim();

    console.log(userName, userPassword);

    if (!userName || !userPassword) {
        alert("Please fill the both User Name and Password")
        return;
    }
    if (userName === 'admin' && userPassword === "admin123") {
        alert("login Success!");
        window.location.href = '../home.html'
    } else {
        alert("Invalid User Name or Password")
    }
})