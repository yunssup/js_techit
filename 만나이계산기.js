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

  elResult.innerText = "귀하의 만 나이는 ${age} 입니다.";
  return age;
}

elSubmit.addEventListener("click", calculaetAge);
