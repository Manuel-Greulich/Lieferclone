let card =  [
 {
    "burger": "Grand Royal Classic",
    "description": "mit Salat, Käse, Tomaten, Gewürzgurken, roten Zwiebeln und Haussauce",
    "price": 11.50,
    "amount": "1", 
 },

 {
    "burger": "Hot'n Spicy Burger",
    "description": "mit Salat, Tomaten, Gewürzgurken, roten Zwiebeln, Jalapenos und hausgemachter Chillisauce",
    "price": 10.00,
    "amount": "1", 
 },

 {
    "burger": "BBQ Grand Royal",
    "description": "mit karamellisierten Zwiebeln, Bacon und Barbecuesauce",
    "price": 9.80,
    "amount": "1", 
 },

 {
    "burger": "Sour Bacon Fritten",
    "description": "Classic Fritten mit Sour Cream, Frühlingszwiebeln und Bacon",
    "price": 5.50,   
    "amount": "1", 
 },

   // {
   //    "burger": "Salat",
   //    "description": "Grand Royal Krautsalat",
   //    "price": 8.50,   
   //    "amount": "1", 
   // },


   // {
   //    "burger": "Getränke",
   //    "description": "Coca-Cola, Fanta, Spezi, Wasser",
   //    "price": 2.50,   
   //    "amount": "1", 
   // },


]

let basket = [];

function render () {
   let meal = document.getElementById('mealcard');
      meal.innerHTML= ``;

      for (let i = 0; i < card.length; i++) {
         const food = card[i];
         meal.innerHTML += `
         
         <div class="dynamic-meal" id="mealcard">
               <div class="meal" id="meal">
                  <div class="flex-button">
                     <div class="plus"><img src="img/plus.png" onclick="addToBasket(${i})"></div>
                  </div>   
                  <div class="burger">${food['burger']}</div>
                  <div class="description">${food['description']}</div>
                  <div class="price">${food['price']} € </div>
               </div>
         </div>`;
      
      }
}


function renderBasket() {
   let basket = document.getElementById('basket');
      basket.innerHTML = '';
      basket.innerHTML += `
         
            <div class="shopping-card">
                  
                  <div><img src="img/shopping-basket-64.png" alt=""></div>
                  <div class="flex-basket">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</div>
                  
            </div>`;
}



function renderFilledBasket() {
   let basketContainer = document.getElementById('basket')
   
      basketContainer.innerHTML = '';
   
      if (basket.length >= 1) {
      for (let i = 0; i < basket.length; i++) {  
            let basketFilled = basket[i];
            basketContainer.innerHTML += `
           
          
            <div class="basketFilled">
            
               <div class="basked-card">${basketFilled['amount']}&nbsp;x</div>
               <div class="basked-card">${basketFilled['burger']}</div>
               <div class="basked-card">${basketFilled['price']}&nbsp;€</div>
               <div class="flex-button-second"> 
                  <div class="basketButton1" onclick="deleteBasket(${i})"><img src="img/minus.png" alt=""></div>
                  <div class="basketButton2" onclick="addToBasket(${i})"><img src="img/plus.png" alt=""></div>
               </div>      
            </div>`;     
      }
      basketContainer.innerHTML += `
      <div id="sumBetween"></div> 
      <div class="pay">
   
      <button id="total" class="pay-button"></button>
      </div>
      `;
      
   } else {
      renderBasket();

   }
}




function addToBasket(i) {
	if (basket.includes(card[i])){
		let k;
		for (j = 0;j < basket.length;j++) {
			if(basket[j]==card[i]) {
				k = j;
			}
		}
		basket[k].amount++;
		renderFilledBasket();	
	}
	else {
		basket.push(card[i]);
		renderFilledBasket();
	}
   calc();
}


function deleteBasket(i) {
 
   if (basket[i].amount <= 1) {
       basket.splice(i, 1);
       renderFilledBasket();
   } 
   else {
       basket[i].amount--;
       renderFilledBasket();
   }
   calc();
}


function calc() {
   let sum = 3;
   let sum2 = 0;
   for (let i = 0; i < basket.length; i++) {
       sum += basket[i].price * basket[i].amount;
       sum2 += basket[i].price * basket[i].amount;
   }

   document.getElementById('total').innerHTML += `
   Bezahlen ( ${sum.toFixed(2).toString().replace(".",",")} € )
   `;

   document.getElementById('sumBetween').innerHTML += `
   <div class="betweenSum">
   <div class="pay"><div>Zwischensumme</div><div> ${sum2.toFixed(2).toString().replace(".",",")}&nbsp;€</div></div>
   <div class="pay"><div>Lieferkosten </div><div>3.00&nbsp;€</div></div>
   <div class="pay"><div><b>Gesamt</b> </div><div><b>${sum.toFixed(2).toString().replace(".",",")}&nbsp;€</b></div></div>
   </div>`;
}






