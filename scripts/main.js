    

const certificates = [
    {
        title: `Bachelor's Degree in Computer Engineering`,
        college: `National Institute of Telecommunications – INATEL`,
        conclusion: `Concluded in 2019.`

    },
    {
        title: `IT Technical Certificate`,
        college: `IFSULDEMINAS – Câmpus Machado`,
        conclusion: `Concluded in 2013.`
    },
    {
        title: `English – CEFR level C1.`,
        college: `English Live`,
        conclusion: `<a href="https://www.efset.org/cert/sjVzGx" target="_blank"> Certificate`
    },
    {
        title: `Volunteer Professor in IT`,
        college: `Inatel Casa Viva`,
        conclusion: `In 2016`
    }
]


const professional_history = [

]


const tools_and_knowledge = [
    {        
        tool: "Postman",
        img: `postman_icon.webp`
    },
    {        
        tool: "Selenium",
        img: `selenium_icon.webp`
    },
    {        
        tool: "Python",
        img: `python_icon.webp`
    },
    {        
        tool: "Cypress",
        img: `cypress_icon.webp`
    },
    {
        tool: "Jenkins",
        img: `jenkins_icon.webp`
    },
    {
        tool: `Playwright`,
        img: `playwright_icon.webp`
    },
    {
        tool: `Flask`,
        img: `flask_icon.webp`
    },
    {
        tool: `Django`,
        img: `django_icon.webp`
    },
    {
        tool: `Sqlite`,
        img: `sqlite_icon.webp`
    },
    {
        tool: `Javascript`,
        img: `js_icon.webp`
    }
    ]
    
    const github_repositories = [
    {
        title: 'Soccer Players Database with Tkinter',
        url: `https://github.com/PedroCarvalho1500/estudo_tkinter/tree/master/tkinter_projeto`,
        preview: `images_soccer_project`,
        number_of_images: 2
    },
    {
        title: 'Web Blog with Flask',
        url: `https://github.com/PedroCarvalho1500/BLOG_WITH_FLASK`,
        preview: `web_blog_with_flask`,
        number_of_images: 3
    },
    {
        title: 'Good Cafes around the World',
        url: `https://github.com/PedroCarvalho1500/WEB_CAFE_SEARCHING`,
        preview: `cafes`,
        number_of_images: 2
    },
    {
        title: `Playwright Projects developed through Courses`,
        url: `https://github.com/PedroCarvalho1500/PLAYWRIGHT/tree/main/COURSE`
    },
    {
        title: `Tkinter APP with Python to play BINGO`,
        url: `https://github.com/PedroCarvalho1500/BINGO_APP_TKINTER`,
        preview: `bingo_app`,
        number_of_images: 1
    },
    {
        title: `API Tests integrated with TKinter + Python`,
        url: `https://github.com/PedroCarvalho1500/API_TESTS_TKINTER`
    },
    {
        title: `Tkinter APP to study English`,
        url: `https://github.com/PedroCarvalho1500/ENGLISH_APP_TKINTER`,
        preview: `english_app`,
        number_of_images: 2
    },
    {
        title: `Amazon clone using HTML + Javascript`,
        url: `https://github.com/PedroCarvalho1500/AMAZON_JAVASCRIPT/tree/main/JAVASCRIPT_HTML/DOM`
    },
    {
        title: `Automation using Selenium with Java`,
        url: `https://github.com/PedroCarvalho1500/teste_sicredi/tree/main/projeto_sicredi`
    }
    ]

    const certificateItems = document.querySelector(`#certs_list`);
    const githubItems = document.querySelector(`.github_projects`);

    certificates.forEach((certificate) => {
        // <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        //   <div class="col d-flex align-items-start">
        //     <div>
        //       <h3 class="fs-2 text-body-emphasis">Bachelor's Degree in Computer Engineering</h3>
        //       <p>National Institute of Telecommunications – INATEL</p>
        //       <p> Concluded in 2019</p>
        //     </div>
        //   </div>
        // </div>
        const new_certification_html = `        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div>
              <h3 class="fs-2 text-body-emphasis">${certificate.title}</h3>
              <p>${certificate.college}</p>
              <p> ${certificate.conclusion}</p>
            </div>
          </div>
        </div>`;

        certificateItems.innerHTML+=new_certification_html;
    })

    github_repositories.forEach((item) => {
        const html = `<a href="${item.url}" target="_blank"><li>${item.title}</li><a href="./project_preview.html?project=${item.preview}&nimg=${item.number_of_images}" target="_blank">Project Preview</a><hr/>`;
        githubItems.innerHTML+=html;
    })


    const ulListItems = document.querySelector(`.technology`);

    tools_and_knowledge.forEach((item,index) => {
        const new_li = document.createElement(`li`);
        new_li.innerHTML = `<img width=20px src=./assets/images/${item.img}>${item.tool}
        `;
        ulListItems.appendChild(new_li);
    });

    insertFooter();

function insertFooter(){
    document.querySelector(`.body`).innerHTML+=`  <footer>
    <p>©2024 Pedro</p>
  </footer>`
}