const loadCategorys = async () => {
  const url = "https://fakestoreapi.com/products/categories";
  const res = await fetch(url);
  const data = await res.json();
  displayCategories(data);
};

const manageLoader = (status) => {
    if(status === true){
        document.getElementById("loading-container").classList.remove('hidden');
        document
          .getElementById("all-product-container")
          .classList.add("hidden");
    }else{
        document.getElementById("all-product-container")
        .classList.remove("hidden");

        document.getElementById("loading-container").classList.add("hidden");
        

    }
}

const loadAllProduct = async () => {
    manageLoader(true)
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  displayProducts(data);
  //   const allBtn = document.getElementById("all-btns");
  //   allBtn.classList.remove('active')
  //   addActive()
};

const loadDetails = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  displayDetails(data);
};

const removeActive = () => {
  const activeBtns = document.querySelectorAll(".categories-btn");
  const remove = activeBtns.forEach((btn) => btn.classList.remove("active"));
};

const loadProductByCat = async (category, i) => {
     manageLoader(true);
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  const data = await res.json();
  removeActive();
  const clickBtn = document.getElementById(`category-${i}`);
  clickBtn.classList.add("active");
  displayProductsByCategory(data);
 
};

const addActive = () => {
  const clickBtn = document.getElementById(`all-btns`);
  clickBtn.classList.add("active");
};

const displayProductsByCategory = (datas) => {
  const container = document.getElementById("all-product-container");
  container.innerHTML = null;
  const products = datas.forEach((data) => {
    const { title, price, id, description, category, rating, image } = data;
    const card = document.createElement("div");
    card.innerHTML = `
     <div class="card bg-base-100 shadow-lg f-100">
        <figure class='bg-gray-200 box-border p-8'>
            <img src="${data.image}" class="md:h-[350px] md:max-w-[300px]  p-10 bg-gray-200" alt="Shoes" />
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
            <div class="card-actions justify-between flex-1 items-end">
                <div onclick='loadDetails(${id})' class="btn btn-outline px-6"> <i class="fa-regular fa-eye"></i> Detail</div>
                <div class="btn btn-primary"><i class="fa-solid fa-cart-plus "></i> Add</div>
            </div>
        </div>
    </div>
    `;

    container.append(card);
  });
  manageLoader(false)
};

const displayDetails = (details) => {
  const container = document.getElementById("modal-container");
  const { title, price, description, image, rating } = details;
  container.innerHTML = `
       <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box md:w-11/12 md:max-w-2xl">
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
};

const displayProducts = (datas) => {
  const container = document.getElementById("all-product-container");
  container.innerHTML = null;
  const products = datas.forEach((data) => {
    const { title, price, id, description, category, rating, image } = data;
    const card = document.createElement("div");
    card.innerHTML = `
     <div class="card bg-base-100 shadow-lg h-full ">
        <figure class='bg-gray-200 box-border p-4'>
            <img src="${data.image}" class="md:h-[350px] md:max-w-[250px] object-contain p-10 bg-gray-200" alt="Shoes" />
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
            <div class="card-actions justify-between flex-1 items-end">
                <div onclick='loadDetails(${id})' class="btn btn-outline px-6"> <i class="fa-regular fa-eye"></i> Detail</div>
                <div class="btn btn-primary"><i class="fa-solid fa-cart-plus "></i> Add</div>
            </div>
        </div>
    </div>
    `;

    container.append(card);
  });
  manageLoader(false)
};

// const categoriesButtons = document.querySelectorAll(".categories-btn");
// console.log(categoriesButtons);

const displayCategories = (categories) => {
  const container = document.getElementById("category-container");
  container.innerHTML = null;
  const allBtnDiv = document.createElement("div");
  allBtnDiv.innerHTML = `
 <button id="all-btns" onclick="loadAllProduct()" class="btn btn-outline rounded-2xl btn-primary">All</button>
 `;
  container.append(allBtnDiv);
  const categoriesBtn = categories.forEach((cat, i) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button id="category-${i}" onclick="loadProductByCat(&quot;${cat}&quot; , ${i})" class="btn btn-outline rounded-2xl btn-primary categories-btn category-btn">${cat}</button>
    `;
    container.append(btnDiv);
  });
 
};

loadAllProduct();
loadCategorys();
