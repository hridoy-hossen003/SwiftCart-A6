const loadCategorys = async () => {
  const url = "https://fakestoreapi.com/products/categories";
  const res = await fetch(url);
  const data = await res.json();
  displayCategories(data)
}; 

const loadAllProduct = async () =>{
  const res = await fetch("https://fakestoreapi.com/products");
  const data= await res.json();
  displayProducts(data);
}


// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating": {
// "rate": 3.9,
// "count": 120
// }
const displayProducts = (datas) => {
  const container = document.getElementById('all-product-container');
  container.innerHTML = null;
  const products = datas.forEach(data => {
    const { title , price , description , category , rating , image} = data;
    const card = document.createElement('div');
    card.innerHTML = `
     <div class="card bg-base-100 shadow-lg object-cover h-full ">
        <figure class='bg-gray-200 box-border p-8'>
            <img src="${data.image}" class="md:h-[400px] md:max-w-[350px] bg-gray-200" alt="Shoes" />
        </figure>
        <div class="card-body">
            <div class="flex  justify-between items-center">
                <p class="p-1 text-[#4F39F6] px-2 font-semibold rounded-xl bg-[#E0E7FF] max-w-fit ">${category}</p>
                <p class="text-end max-w-fit font-semibold text-gray-700"><i class="fa-solid text-yellow-400 fa-star"></i> ${rating.rate} (${rating.count})</p>
            </div>
            <div class="space-y-2">
                <h2 class=" text-xl font-bold ">
                    ${title}
                </h2>
                <h2 class=" text-xl font-bold "> $ ${price}</h2>
                
            </div>
            <div class="card-actions justify-between ">
                <div class="btn btn-outline px-6"> <i class="fa-regular fa-eye"></i> Detail</div>
                <div class="btn btn-primary"><i class="fa-solid fa-cart-plus "></i> Add</div>
            </div>
        </div>
    </div>
    `;

    container.append(card)
  })
}

const categoriesButtons = document.querySelectorAll(".categories-btn");
console.log(categoriesButtons);

const displayCategories = (categories) => {
  const container = document.getElementById("category-container");
 container.innerHTML = null;
 const allBtnDiv = document.createElement('div');
 allBtnDiv.innerHTML = `
 <button onclick="loadAllProduct()" class="btn btn-outline rounded-2xl btn-primary">All</button>
 `;
 container.append(allBtnDiv)
 const categoriesBtn = categories.forEach(cat => {
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
    <button class="btn btn-outline rounded-2xl btn-primary categories-btn">${cat}</button>
    `;
    container.append(btnDiv)
  });
}

loadAllProduct();
loadCategorys()