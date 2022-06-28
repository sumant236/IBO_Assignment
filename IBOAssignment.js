const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

function getUniqueProductCount() {
  let map1 = new Map();
  for(let i=0; i<listOfProducts.length; i++){
    if(!map1.has(listOfProducts[i].productName)){
      map1.set(listOfProducts[i].productName, 1);
    }
    else{
      let count = map1.get(listOfProducts[i].productName);
      map1.set(listOfProducts[i].productName, count+1);
    }
  }
    for (const [key, value] of map1) {
        console.log(`${key}: ${value}`)
    }
}

function getUniqueProducts(){
	for(let i=0; i<listOfProducts.length; i++){
  	for(let j=i+1; j<listOfProducts.length; j++){
    	if(listOfProducts[i].productName===listOfProducts[j].productName){
      	listOfProducts[i].quantity += listOfProducts[j].quantity;
        listOfProducts.splice(j, 1);
        j--;
      }
    }
  }
  console.log(listOfProducts);
}

getUniqueProductCount();
getUniqueProducts();