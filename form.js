function formvalidate(){
    var userName=document.getElementById('username').value;
    var Email=document.getElementById('email').value;
    var Password=document.getElementById('password').value;
    var ConfirmPassword=document.getElementById('confirmpass').value;
    if (userName.trim()===''||Email.trim() === '' || Password.trim() === '' || ConfirmPassword.trim() === '') {
        alert('All fields are required');
        return false;
        }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
        }
        return true;
    
}
