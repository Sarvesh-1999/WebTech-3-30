const maincontainer = document.getElementById("maincontainer");

async function getProducts() {
  let resp = await fetch("https://fakestoreapi.com/products");
  let data = await resp.json();
  console.log(data); // [{},{},{},...]
  displayProducts(data);
}

function displayProducts(allProducts) {
  allProducts.map((ele) => {

    const cardsection = document.createElement("section");
    const cardImg = document.createElement("img");
    const cardTitle = document.createElement("h1");
    const cardPrice = document.createElement("p");
    const cardDesc = document.createElement("p");
    const cardBtn = document.createElement("button");

    cardImg.src = ele.image;
    cardTitle.innerText = ele.title;
    cardPrice.innerText = ele.price;
    cardDesc.innerText = ele.description;
    cardBtn.innerText = "Add to cart";

    cardsection.className = "card"

    cardsection.append(cardImg, cardTitle, cardPrice, cardDesc, cardBtn);

    maincontainer.append(cardsection);
  });
}

window.addEventListener("load", () => {
  console.log("page loaded");
  getProducts();
});
