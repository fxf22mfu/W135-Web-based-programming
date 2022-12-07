// body
const body = document.querySelector('body');




//------------------------------------------------------------------------------//




// header
const header = document.createElement("section");
header.classList.add("header");
header.setAttribute("id","header");
body.insertAdjacentElement('afterbegin', header);

// headerLogo
const aheader = document.createElement("a");
aheader.href = "index.html";
header.appendChild(aheader);

const headerLogo = document.createElement("img"); 
headerLogo.classList.add("headerlogo");
headerLogo.src = "Images/Logo.png";
aheader.appendChild(headerLogo);

// navbar
const navbarContainer = document.createElement("div"); 
header.appendChild(navbarContainer);

const navbar = document.createElement("ul"); 
navbar.setAttribute("id","navbar");
navbarContainer.appendChild(navbar);

// First Li Home
const Home = document.createElement("li"); 
Home.setAttribute("id","Home");
navbar.appendChild(Home);

const aHome = document.createElement("a");
aHome.href = "index.html";
const nodeHome = document.createTextNode("Home"); 
aHome.appendChild(nodeHome);
Home.appendChild(aHome);

// Second Li Chapters
const Chapters = document.createElement("li"); 
Chapters.setAttribute("id","Chapters");
navbar.appendChild(Chapters);

const aChapters = document.createElement("a");
aChapters.href = "chapters.html";
const nodeChapters = document.createTextNode("Chapters"); 
aChapters.appendChild(nodeChapters);
Chapters.appendChild(aChapters);

const navbarContent = document.createElement("ul"); 
navbarContent.setAttribute("id","navbarContent");
navbarContent.classList.add("navbar2");
Chapters.appendChild(navbarContent);

    // First Chapter
const FirstChapter = document.createElement("li"); 
FirstChapter.setAttribute("id","FirstChapter");
navbarContent.appendChild(FirstChapter);

const aFirstChapter = document.createElement("a");
aFirstChapter.href = "chapter7.html";
const nodeFirstChapter = document.createTextNode("Chapter 7: Fuel Supply"); 
aFirstChapter.appendChild(nodeFirstChapter);
FirstChapter.appendChild(aFirstChapter);

    // Second Chapter
const SecondChapter = document.createElement("li"); 
SecondChapter.setAttribute("id","SecondChapter");
navbarContent.appendChild(SecondChapter);

const aSecondChapter = document.createElement("a");
aSecondChapter.href = "chapter10.html";
const nodeSecondChapter = document.createTextNode("Chapter 10: Shipping"); 
aSecondChapter.appendChild(nodeSecondChapter);
SecondChapter.appendChild(aSecondChapter);

    // Third Chapter
const ThirdChapter = document.createElement("li"); 
ThirdChapter.setAttribute("id","ThirdChapter");
navbarContent.appendChild(ThirdChapter);

const aThirdChapter = document.createElement("a");
aThirdChapter.href = "chapter13.html";
const nodeThirdChapter = document.createTextNode("Chapter 13: Engineered Removals"); 
aThirdChapter.appendChild(nodeThirdChapter);
ThirdChapter.appendChild(aThirdChapter);

// Third li: Contact
const Contact = document.createElement("li"); 
Contact.setAttribute("id","Contact");
navbar.appendChild(Contact);

const aContact = document.createElement("a");
aContact.href = "contact.html";
const nodeContact = document.createTextNode("Contact Us"); 
aContact.appendChild(nodeContact);
Contact.appendChild(aContact);

// Fourth li: Team
const Team = document.createElement("li"); 
Team.setAttribute("id","Team");
navbar.appendChild(Team);

const aTeam = document.createElement("a");
aTeam.href = "team.html";
// aTeam.classList.add("active");
const nodeTeam = document.createTextNode("About Us"); 
aTeam.appendChild(nodeTeam);
Team.appendChild(aTeam);

// Close
const close = document.createElement("a"); 
close.setAttribute("id","close");
close.href = "#";
navbar.appendChild(close);

const IconClose = document.createElement("i");
IconClose.classList.add('fa-regular');
IconClose.classList.add('fa-circle-xmark');
close.appendChild(IconClose);


// Mobile
const mobile = document.createElement("div"); 
mobile.setAttribute("id","mobile");
header.appendChild(mobile);

const bar = document.createElement("i"); 
bar.classList.add("fas");
bar.classList.add('fa-outdent');
bar.setAttribute("id","bar");
mobile.appendChild(bar);

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}




//------------------------------------------------------------------------------//





// SecondNav
const SecondNav = document.createElement("section"); // New element
SecondNav.classList.add("SecondNav");
SecondNav.classList.add("feature");
SecondNav.setAttribute("id","SecondNav");
body.insertAdjacentElement('beforeend', SecondNav);


// SecondNav Feature Images
class Feature {
    constructor(id, href, img, title, color) {
        this.id = id;
        this.href = href;
        this.img = img;
        this.title = title; 
        this.color = color;
    }
}

const feature1 = new Feature (
    1, 
    'index.html',
    'Images/Home.jpeg',
    'Home',
    'green',
);
const feature2 = new Feature (
    2, 
    'chapters.html',
    'Images/Chapters.jpeg',
    'Chapters',
    'rgb(107, 82, 82)',
);
const feature3 = new Feature (
    3, 
    'contact.html',
    'Images/Contact.jpeg',
    'Contact Us',
    'rgb(12, 150, 241)',
);
const feature4 = new Feature (
    4, 
    'team.html',
    'Images/Team.jpeg',
    'About Us',
    'rgb(223, 130, 69)',
);

const features = [];
features.push(feature1);
features.push(feature2);
features.push(feature3);
features.push(feature4);

function loadContent(){
    let displayItem = features.map( (item) => {
        return `
        
        <div id=${item.id} class="SecondNav-box">
            <a href=${item.href}> 
            <div class="FixedSize" style="background-image: url('${item.img}')">
            
            </div>
            <h6 style="background-color: ${item.color}">${item.title} </h6></a>
            
        </div>

        `;

    });
    displayItem = displayItem.join("");
    SecondNav.innerHTML = displayItem;
};

window.addEventListener("DOMContentLoaded", loadContent, false);




//------------------------------------------------------------------------------//




// footer
const footer = document.createElement('footer');
footer.classList.add("section-footer");
footer.setAttribute("id","footer");
body.insertAdjacentElement('beforeend', footer);


// footer Column 1
const col1 = document.createElement('div');
col1.classList.add("col");
col1.setAttribute("id","col1");
footer.appendChild(col1);

const imageLogo = document.createElement('img');
imageLogo.classList.add("imageLogo");
imageLogo.setAttribute("id","imageLogo");
imageLogo.src = "Images/Logo.png";
col1.appendChild(imageLogo);


// footer Column 2
const col2 = document.createElement('div');
col2.classList.add("col");
col2.setAttribute("id","col2");
footer.appendChild(col2);

const headlinecol2 = document.createElement('h4');
const nodeh4col2 = document.createTextNode("Contact"); // Text of the element
headlinecol2.appendChild(nodeh4col2);
col2.appendChild(headlinecol2);

const p1col2 = document.createElement('p');
const Address = document.createTextNode("Address: Somewhere in Norwich"); // Text of the element
p1col2.appendChild(Address);
col2.appendChild(p1col2);

const p2col2 = document.createElement('p');
const Phone = document.createTextNode("Phone: +44 123 456789"); // Text of the element
p2col2.appendChild(Phone);
col2.appendChild(p2col2);

const p3col2 = document.createElement('p');
const Mail = document.createTextNode("Mail: cmp@gmail.com"); // Text of the element
p3col2.appendChild(Mail);
col2.appendChild(p3col2);

const p4col2 = document.createElement('p');
const Service = document.createTextNode("Service Hours:: Monday to Friday: 10:00 - 18:00"); // Text of the element
p4col2.appendChild(Service);
col2.appendChild(p4col2);


// footer Column 3
const col3 = document.createElement('div');
col3.classList.add("col");
col3.classList.add("follow");
col3.setAttribute("id","col3");
footer.appendChild(col3);

const headlinecol3 = document.createElement('h4');
const nodeh4col3 = document.createTextNode("Follow Us"); // Text of the element
headlinecol3.appendChild(nodeh4col3);
col3.appendChild(headlinecol3);

const divcol3 = document.createElement('div');
col3.appendChild(divcol3);

const InstaLink = document.createElement('a');
InstaLink.setAttribute("id","InstaLink");
InstaLink.href = "https://www.instagram.com/";
divcol3.appendChild(InstaLink);

const InstaLogo = document.createElement('img');
InstaLogo.setAttribute("id","InstaLogo");
InstaLogo.src = "Images/Instagram.png";
InstaLink.appendChild(InstaLogo);


// footer Column 4
const col4 = document.createElement('div');
col4.classList.add("col");
col4.setAttribute("id","col4");
footer.appendChild(col4);

const headlinecol4 = document.createElement('h4');
const nodeh4col4 = document.createTextNode("About"); // Text of the element
headlinecol4.appendChild(nodeh4col4);
col4.appendChild(headlinecol4);

const p1col4 = document.createElement('a');
const About = document.createTextNode("About us"); // Text of the element
p1col4.appendChild(About);
p1col4.href = "team.html";
col4.appendChild(p1col4);

const p2col4 = document.createElement('a');
const ContactUs = document.createTextNode("Contact us"); // Text of the element
p2col4.appendChild(ContactUs);
p2col4.href = "contact.html";
col4.appendChild(p2col4);


// copyright
const copyright = document.createElement('p');
copyright.classList.add("copyright");
const nodecopyright = document.createTextNode("Copyright © Climate Monitoring People"); // Text of the element
copyright.appendChild(nodecopyright);
footer.appendChild(copyright);