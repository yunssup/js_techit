let el = document.getElementById("birthday");
let elResult = document.getElementById("result");
let elSubmit = document.getElementById("submit");

const today = new Date();

function calculaetAge() {
  let birthDate = new Date(el.value);

  if (
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() == birthDate.getDate() &&
      today.getDate() >= birthDate.getDate())
  ) {
    age = today.getFullYear() - birthDate.getFullYear();
  } else {
    age = today.getFullYear() - birthDate.getFullYear() - 1;
  }
  return age;
}
