let titleCount = 1;
let totalPrice = 0;
const seats = document.querySelectorAll(".seat")
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
 seat.addEventListener("click", function () {
    const title =seat.querySelector("h3").innerText;
    const clas = "Economoy";
    const price =parseFloat( "BDT 550".split(" ")[1]) ;
    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = titleCount + ". " + title + "  " + clas  + " " + price;
    titleContainer.appendChild(p);
    titleCount++ ;

    totalPrice += price;
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

   })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener("click", function () {

   const couponElement = document.getElementById("input-field").value;
   const couponCode =couponElement.split(" ").join("").toUpperCase();
   if (couponCode === "COUPLE20" || couponCode ==="NEW15") {

      while (couponCode === "COUPLE20") {
         const discountAmount = totalPrice * 0.2 ;
      }
       while (couponCode === "NEW15") {
         const discountAmount = totalPrice * 0.15;

       }
       const grandTotal = document.getElementById("grand-total");
       grandTotal.innerText = totalPrice - discountAmount.toFixed(2);

   }else{
      alert("Invalid coupon");
   }
})