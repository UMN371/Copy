document.addEventListener('DOMContentLoaded', function () {
    const password = prompt('Enter the password to access Momcology Membership Page:');

    // Replace 'yourpassword' with the actual password you want to use
    if (password === 'Momcology2025') {
        document.getElementById('protected-content').style.display = 'block';
    } else {
        alert('Incorrect password!');
        window.location.href = 'https://momcology.org/'; // Redirect to another page if the password is incorrect
    }
});
