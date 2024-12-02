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
    }
    ]
    
    const github_repositories = [
    {
        title: 'Soccer Players Database with Tkinter',
        url: `https://github.com/PedroCarvalho1500/estudo_tkinter/tree/master/tkinter_projeto`,
        preview: `images_soccer_project`,
        number_of_images: 4
    },
    {
        title: 'Web Blog with Flask',
        url: `https://github.com/PedroCarvalho1500/BLOG_WITH_FLASK`,
        preview: `images_soccer_project`,
        number_of_images: 4
    },
    {
        title: 'Good Cafes around the World',
        url: `https://github.com/PedroCarvalho1500/WEB_CAFE_SEARCHING`
    },
    {
        title: `Playwright Projects developed through Courses`,
        url: `https://github.com/PedroCarvalho1500/PLAYWRIGHT/tree/main/COURSE`
    },
    {
        title: `Tkinter APP with Python to play BINGO`,
        url: `https://github.com/PedroCarvalho1500/BINGO_APP_TKINTER`,
        preview: `bingo_app`,
        number_of_images: 3
    },
    {
        title: `API Tests integrated with TKinter + Python`,
        url: `https://github.com/PedroCarvalho1500/API_TESTS_TKINTER`
    },
    {
        title: `Tkinter APP to study English`,
        url: `https://github.com/PedroCarvalho1500/ENGLISH_APP_TKINTER`
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

    const githubItems = document.querySelector(`.github_projects`);

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
    })