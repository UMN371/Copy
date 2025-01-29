document.addEventListener('DOMContentLoaded', function () {
    const password = prompt('Enter the password to access this page:');

   
    if (password === 'Momcology2025') {
        document.getElementById('protected-content').style.display = 'block';
    } else {
        alert('Incorrect password!');
        window.location.href = 'https://momcology.org/'; // Redirect to another page if the password is incorrect
    }
});
