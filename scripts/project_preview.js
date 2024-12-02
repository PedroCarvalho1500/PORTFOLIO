


const current_url = (window.location.href);
const url = new URL(current_url);
const project = url.searchParams.get("project");
const number_of_files = parseInt(url.searchParams.get("nimg"));
console.log(project);
console.log(number_of_files)


const carrosel_active = document.querySelector(`.carousel-item`);
carrosel_active.innerHTML = `                    <img src="./assets/images/${project}/IMG_1.png" class="img-carrosel d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Main Dashboard.</p>
                    </div>`;


for(let i=2;i<=number_of_files;i++){
    const new_html = `    <div class="carousel-item">
        <img src="./assets/images/${project}/IMG_${i}.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the ${i} slide.</p>
        </div>
    </div>`;

    document.querySelector(`.carousel-inner`).innerHTML+=new_html;
    document.querySelector(`.carousel-indicators`).innerHTML+=`
    <button type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="${i-1}" aria-label="Slide ${i}">
    </button>`
}



