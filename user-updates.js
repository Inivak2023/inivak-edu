// Pre-defined encrypted values
const credentials = [
    { username: "ZH51fXQ=", password: "REd3emxnYEw=", redirectTo: "abc.html" }, // First username-password pair
    { username: "bm1xew==", password: "ZG9jIzE6", redirectTo: "aaa.html" }, // Second username-password pair
];

// Validate Username and Password
function validateCredentials() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        document.getElementById('result').textContent = "Please enter both username and password!";
        return;
    }

    // Encrypt both username and password
    const encryptedUsername = customEncrypt(username);
    const encryptedPassword = customEncrypt(password);

    // Check for matching credentials
    const user = credentials.find(
        (cred) => cred.username === encryptedUsername && cred.password === encryptedPassword
    );

    if (user) {
        // Redirect with username and password in query parameters
        window.location.href = `${user.redirectTo}?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    } else {
        document.getElementById('result').textContent = "වැරදිලෙස! Try again.";
    }
}