var removeCartItemButtons = document.getElementsByClassName("delete");
console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  });
}

function updateCartTotal() {
  var carItemContainer = document.getElementsByClassName("shoppingItems")[0];
  var cartBox = carItemContainer.getElementsByClassName("boxes");
  for (var i = 0; i < cartBox.length; i++) {
    var cartBox = cartBox[i];
    var priceElement = cartBox.getElementsByClassName("price")[0];
    var quantityElement = cartBox.getElementsByClassName("quantity")[0];
    var prices = parseFloat(priceElement.innerText.replace("$", ""));
    console.log(prices);
  }
}
var plus = document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");
var deletee = document.querySelectorAll(".delete");
console.log(plus);
console.log(minus);
console.log(deletee);
plus.forEach((el) =>
  el.addEventListener("click", () => {
    console.log(el.nextElementSibling.innerHTML++);
  })
);
minus.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.previousElementSibling.innerHTML > 0) {
      console.log(el.previousElementSibling.innerHTML--);
    }
  })
);
deletee.forEach((el) =>
  el.addEventListener("click", () => {
    el.parentElement.parentElement.remove();
  })
);

//button Like
function myFunction(a) {
  console.log(a);
  a.classList.toggle("ilike");
}

// adding and removing total prices
//button plus

// var btnplus = document.getElementsByClassName("plus")
// for (let i=0; i<btnplus.length; i++) {
//     btnplus[i].addEventListener('click' , () => {
//       var cible = e.target
//      let parent = cible.parentElement.parentElement
//      let quantityelement = parent.getElementsByClassName(".quantity")[0]
//      quantityelement.value = parseInt(quantityelement.value)+1
//      let h3=e.target.parentElement.parentElement.querySelectorByClassName(".price")
//      let sum=document.getElementById("somme")
//      sum.value=parseFloat(sum.value)+parseFloat(h3.textContent)
//     })
//     }
