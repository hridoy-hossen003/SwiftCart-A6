const loadAllProduct = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  displayTrendingProducts(data);
};


const displayTrendingProducts = (products) => {
  // const trendingProducts = products.slice(0,6);
  const container = document.getElementById("trending-container");
  const trendingItems = products.filter((product) => product.rating.rate > 4.2);

     const trendingProds = trendingItems.forEach((product) => {
       const { title, price, description, category, rating, image } = product;
       const card = document.createElement("div");
       card.innerHTML = `
       <div class="card bg-base-100 shadow-lg object-cover h-full ">
          <figure class='bg-gray-200 box-border p-8'>
              <img src="${image}" class="md:h-[400px] h-[300px] w-[250px] md:w-[350px] bg-gray-200" alt="Shoes" />
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
                  <div class="btn btn-outline"> <i class="fa-regular fa-eye"></i> Detail</div>
                  <div class="btn btn-primary"><i class="fa-solid fa-cart-plus "></i> Add</div>
              </div>
          </div>
      </div>
      `;

       container.append(card);
     });
}

loadAllProduct()











