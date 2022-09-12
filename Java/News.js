fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data => news_category(data.data.news_category))
    .catch(error => console.log(error));  //Error Handelling



function responding(category_id, name) {

    const category = document.getElementById("category");
    category.innerText = name;
    spinner(true);

    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data.data))
        .catch(error => console.log(error));  //Error Handelling

}


function modal(id) {
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display_modal(data))
        .catch(error => console.log(error));   //Error Handelling
}
function display_modal(id) {
    const modalTitle = document.getElementById('ModalLabel');
    modalTitle.innerText = id.data[0].title;
    const Details = document.getElementById('details');

    Details.innerHTML = `
    <h5>Author: ${id.data[0].author.name ? id.data[0].author.name : 'No Data Found'}</h5> 
    <h5>Badge: ${id.data[0].rating.badge ? id.data[0].rating.badge : 'No Data Found '}</h5>
    <h5>Rating: ${id.data[0].rating.number ? id.data[0].rating.number : 'No Data Found'}</h5>
    <h5>Total View: ${id.data[0].total_view ? id.data[0].total_view : 'No Data Found'}</h5>
    <h4>Details:</h4>
    <p> ${id.data[0].details ? id.data[0].details : 'No Data Found'}</p>
    `;
}

function display(ids) {
    const no_news=document.getElementById("no_news");
     if(ids.length===0){
        no_news.classList.remove("d-none");
     }
     else{
        no_news.classList.add("d-none");
     }

    const row = document.getElementById("new_row");
    row.innerHTML = "";

    ids.sort((a, b) => {
        return b.total_view - a.total_view;
    })


    ids.forEach(id => {
        console.log(id);
        const div = document.createElement("div");
    
        div.classList.add("row");
        
        div.classList.add("bg-light");

        div.innerHTML = `
           <div class="d-flex flex-column flex-lg-row">
            <div class=" col-12 col-sm-12 col-lg-3 ">
                    <img src="${id.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
                  
            <div  class="col-12 col-sm-12 col-lg-8 ">
                     <div class="card-body" >
                        <h5 class="card-title">${id.title}</h5>
                        
                        <p>${id.details.length<400?id.details:id.details.slice(0,400)+"..."}</p>

                        <img style="height:40px ; width:40px" src="${id.author.img}" class="rounded float-start" alt="..."> <span class="ms-2" id="name">${id.author.name ? id.author.name : "No Data"}</span>
                        <span class="mx-2" id="views"><i class="fa-sharp fa-solid fa-eye"></i>  ${id.total_view ? id.total_view : "No Data"}</span> 
                        <button onClick="modal('${id._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Details
                            </button>
                    </div>
            </div>

            </div>
               
    `;
        new_row.appendChild(div);

    });
    spinner(false);  //Spinner

    const count = ids.length;
    const counter = document.getElementById("counter");
    counter.innerText = count;
}


const news_category = news => {

    let head_list = document.getElementById("head_list");
    news.forEach(news_single => {

        const ul = document.createElement("ul");
        const category_id = news_single.category_id.toString();
        ul.innerHTML = `
        <li onClick="responding('${category_id}','${news_single.category_name}')" class=" btn btn-light list-group-item border-0">${news_single.category_name}</li>
        `;
        head_list.appendChild(ul);
    });
}

const spinner = isLoading => {
    const loader = document.getElementById('loader');
    if (isLoading) {
        loader.classList.remove('d-none')
    }
    else {
        loader.classList.add('d-none');
    }
}

responding('01', 'Breaking News');
