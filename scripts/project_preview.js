

//DEPLOY
const current_url = (window.location.href);
const url = new URL(current_url);
const project = url.searchParams.get("project");
const number_of_files = parseInt(url.searchParams.get("nimg"));

const img_style = `style="padding-left: 10%;padding-right: 10%;"`

const carrosel_active = document.querySelector(`.carousel-item`);
carrosel_active.innerHTML = `                    <img ${img_style} src="./assets/images/${project}/IMG_1.gif" class="img-carrosel d-block w-100 img-fluid" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    </div>`;


for(let i=2;i<=number_of_files;i++){
    const new_html = `    <div class="carousel-item" style="background-color: black;">
        <img ${img_style} src="./assets/images/${project}/IMG_${i}.gif" class="d-block w-100 img-fluid" alt="...">
    </div>`;

    document.querySelector(`.carousel-inner`).innerHTML+=new_html;
    document.querySelector(`.carousel-indicators`).innerHTML+=`
    <button type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="${i-1}" aria-label="Slide ${i}">
    </button>`
}



