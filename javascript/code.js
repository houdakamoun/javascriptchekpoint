var plus = document.getElementsByClassName("fa-square-plus");
console.log(plus);
for (let index = 0; index < plus.length; index++) {
  const element = plus[index];
  console.log(element);
  element.addEventListener("click", function (e) {
    console.log(element.previousElementSibling.innerText++);
    calcule_totals();
  });
}
var moin = document.getElementsByClassName("fa-square-minus");
console.log(moin);
for (let index = 0; index < moin.length; index++) {
  const element = moin[index];
  console.log(element);
  element.addEventListener("click", function (e) {
    if (element.nextElementSibling.innerText > 0) {
      console.log(element.nextElementSibling.innerText--);
      calcule_totals();
    }
  });
}
var like = document.getElementsByClassName("fa-thumbs-up");
console.log(like);
for (let index = 0; index < like.length; index++) {
  const element = like[index];
  console.log(element);
  element.addEventListener("click", function (e) {
    element.classList.toggle("completed");
  });
}
var remove = document.getElementsByClassName("fa-trash");
console.log(remove);
for (let index = 0; index < remove.length; index++) {
  const element = remove[index];
  console.log(element);
  element.addEventListener("click", function (e) {
    console.log(element);
    element.closest("div").remove();
    calcule_totals();
  });
}
function calcule_totals() {
  var prixuni = document.querySelectorAll("h2 span");
  console.log(prixuni);
  var somme = 0;
  for (let index = 0; index < prixuni.length; index++) {
    const element = prixuni[index];
    console.log(element.innerText);
    console.log(plus[index].previousElementSibling.innerText);
    somme += element.innerText * plus[index].previousElementSibling.innerText;
    console.log(somme);
  }

  var total = document.querySelector("#total h2");
  total.innerText = somme;
}
calcule_totals();
