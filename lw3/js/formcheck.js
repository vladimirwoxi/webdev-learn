function registrationform(email, password, passwordConfirm)

{
  var check = document.getElementsByClassName('check')[0].checked;
  var mask = email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (!mask) {
    return 'Введён некорректный E-mail';
  } else if (password.length < 6) {
    return 'Пароль слишком короткий';
  } else if (password != passwordConfirm) {
    return 'Введенные пароли не совпадают';
  } else if (!check) {
    return 'Чтобы зарегистрироваться, необходимо принять правила сайта';
  } else {
    return true;
  }
}

function registration(event) {
      var email = document.getElementsByClassName("email")[0].value;
      var pass = document.getElementsByClassName("password")[0].value;
      var passConfirm = document.getElementsByClassName("passwordConfirm")[0].value;
      var validateResult = registrationform(email, pass, passConfirm);
      if (validateResult === true) {
        alert("Вы зарегистрированы");
      } else {
        alert(validateResult);
        event.preventDefault();
      }
}
    
window.onload = function() {
      document.getElementById('registration').addEventListener('submit', registration);
 }