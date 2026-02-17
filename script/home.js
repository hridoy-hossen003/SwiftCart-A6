const loadAllProduct = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  displayTrendingProducts(data);
};

const loadDetails = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json()
    displayDetails(data);
} 
// id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating": {
// "rate": 3.9,
// "count": 120
// }
const cartItems = [];

const addToCart = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json()
   storeData(data)
}

const storeData = (datas) => {
    //  cartItems.push(datas);
     cartItemsString = JSON.stringify(cartItems);
     localStorage.setItem('products' , cartItemsString)
     const localStringifyData = localStorage.getItem("products")
    const parsedData = JSON.parse(localStringifyData);
    console.log(parsedData.length);
}

const displayDetails = (details) =>{
    const container = document.getElementById("modal-container");
    const {title , price , description , image , rating} = details;   
    container.innerHTML = `
       <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box md:w-11/12 md:max-w-2xl relative">
            <div class="card bg-base-100 shadow-sm">
                <div class="card-body">
                    <span class="badge badge-xs badge-warning">${rating.rate} (${rating.count})</span>
                    <div class="">
                        <h2 class="text-3xl font-bold">${title}</h2>
                        <span class="text-xl">$ ${price}</span>
                    </div>
                    <div class="">
                        <p>${description}</p>
                    </div>
                </div>
                <div class="modal-action p-4 flex justify-between items-center">
                    <div>
                        <button class="btn btn-primary btn-outline"><i class="fa-solid fa-cart-plus"></i> Add to
                            cart</button>
                    </div>
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn btn-warning">Close</button>
                    </form>
                </div>
            </div>
        </div>
    </dialog>
    `;
    document.getElementById("my_modal_5").showModal();
}
const displayTrendingProducts = (products) => {
  // const trendingProducts = products.slice(0,6);
  const container = document.getElementById("trending-container");
  const trendingItems = products.filter((product) => product.rating.rate > 4.2);

     const trendingProds = trendingItems.forEach((product) => {
       const {id, title, price, description, category, rating, image } = product;
       const card = document.createElement("div");
       card.innerHTML = `
       <div class="card bg-base-100 shadow-lg object-cover h-full ">
          <figure class='bg-gray-200 box-border p-8'>
              <img src="${image}" class="md:h-[400px] h-[300px] w-[250px] md:w-[350px] bg-gray-200" alt="Shoes" />
          </figure>
          <div class="card-body flex flex-col">
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
              <div class="card-actions justify-between flex-1 items-end ">
                  <div onclick='loadDetails(${id})' class="btn btn-outline"> <i class="fa-regular fa-eye"></i> Detail</div>
                  <div onclick='addToCart(${id})' class="btn btn-primary"><i class="fa-solid fa-cart-plus "></i> Add</div>
              </div>
          </div>
      </div>
      `;

       container.append(card);
     });
}

loadAllProduct()











