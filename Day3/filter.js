const data = [
    {
        id: 1,
        name: "Bulgari Leather",
        img: "Images/bulgari-luxury.png",
        price: 5891,
        cat: "Casual"
    },
    {
        id: 2,
        name: "Apple Watch",
        img: "Images/apple-watch.png",
        price: 8791,
        cat: "Sports"
    },
    {
        id: 3,
        name: "G Shock SP",
        img: "Images/gshock.png",
        price: 2561,
        cat: "Sports"
    },
    {
        id: 4,
        name: "Omega Premium",
        img: "Images/omega.png",
        price: 2291,
        cat: "Premium"
    },
    {
        id: 5,
        name: "Rolex Silver Black",
        img: "Images/rolex.png",
        price: 8891,
        cat: "Premium"
    },
    {
        id: 6,
        name: "Rolex Titanium",
        img: "Images/rolex-black-silver1.png",
        price: 5699,
        cat: "Premium"
    },
    {
        id: 6,
        name: "Tissot",
        img: "Images/tissot.png",
        price: 229,
        cat: "Dress"
    },
    {
        id: 7,
        name: "Sports Wear",
        img: "Images/sports-1.png",
        price: 999,
        cat: "Sports"
    },
    {
        id: 8,
        name: "Casual Wear",
        img: "Images/sport2.png",
        price: 699,
        cat: "Casual"
    },

];

const productContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".catSection")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")

const displayProducts = (filteredProducts)=>{
    productContainer.innerHTML = filteredProducts.map(product=>
         `
        <div class="product">
                    <img src=${product.img} alt=${product.name}>
                    <span class="name">${product.name}</span>
                    <span class="priceText">$${product.price}</span>
                </div>
        `
        ).join("")
}
displayProducts(data);

searchInput.addEventListener("keyup",(e)=>{
   const searchedValue = e.target.value.toLowerCase();
   if(searchedValue){
    displayProducts(data.filter(item=> item.name.toLowerCase().indexOf(searchedValue) !== -1)) 
    //if searched Value does not match any value, it returns -1
   }else{
    displayProducts(data)
   }
})

//Set Categories Dynamically

const setCategory = ()=>{
    const allCats = data.map((item)=>item.cat)
    const Categories = ["All" , ...allCats.filter((item,i)=>{
        return allCats.indexOf(item)===i;
    })]
    console.log(Categories)
    categoriesContainer.innerHTML = Categories.map(item=>
    `
    <span class="cat">${item}</span>
    `).join("");

    categoriesContainer.addEventListener('click',(e)=>{
        selectedCat = e.target.textContent
        selectedCat==="All" ? displayProducts(data) : displayProducts(data.filter((item)=>item.cat===selectedCat));
    });
};
setCategory()   
const setPrice = ()=>{
    const priceList = data.map((item)=>item.price)
    console.log(priceList);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice
    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter((item)=>item.price<=e.target.value))
    })
}
setPrice()