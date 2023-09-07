const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Front End Developer",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique omnis excepturi dolorem. Exercitationem, corporis! Minus repellendus molestiae earum culpa, amet sit odio aperiam autem magnam!"
    },

    {
        id: 2,
        name: "Anna Johnson",
        job: "Developer",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique omnis excepturi dolorem. Exercitationem, corporis! Minus repellendus molestiae earum culpa, amet sit odio aperiam autem magnam!"
    },

    {
        id: 3,
        name: "Peter Jones",
        job: "Web Developer",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique omnis excepturi dolorem. Exercitationem, corporis! Minus repellendus molestiae earum culpa, amet sit odio aperiam autem magnam!"
    },

    {
        id: 1,
        name: "Liza Smith",
        job: "Web Designer",
        img: "https://images.unsplash.com/photo-1542292402-a2a622869b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique omnis excepturi dolorem. Exercitationem, corporis! Minus repellendus molestiae earum culpa, amet sit odio aperiam autem magnam!"
    }
]

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn =  document.querySelector(".prev-btn");
const forwrdBtn =  document.querySelector(".forwrd-btn");
const randomBtn =  document.querySelector(".random-btn");

// set starting item

    let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function() {
        showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

forwrdBtn.addEventListener("click", function () {
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

// show perv person

prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// random button

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
});