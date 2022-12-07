// sectionmember
const sectionmember = document.createElement("section"); // New element
sectionmember.classList.add("section-member");
sectionmember.setAttribute("id","section-member");
body.insertBefore(sectionmember, SecondNav)

//----------------------------------------------------------------------------------//



    // #1 Element of sectionmember 
    // headlineContainer
    const headlineContainer = document.createElement("div");
    headlineContainer.setAttribute("id","headline1Container");
    sectionmember.appendChild(headlineContainer);

    const headline1 = document.createElement("h4"); // New element
    const node1 = document.createTextNode("Climate Monitoring People"); // Text of the element
    headline1.appendChild(node1); // Coupling of new element with its text
    headlineContainer.appendChild(headline1);

    const headline2 = document.createElement("h1"); // New element
    const node2 = document.createTextNode("The Team"); // Text of the element
    headline2.appendChild(node2); // Coupling of new element with its text
    headlineContainer.appendChild(headline2);

    //----------------------------------------------------------------------------------//



    // #2 Element of sectionmember 
    // memberContainer
    const membercontainer = document.createElement("div");
    membercontainer.setAttribute("id","member-container");
    membercontainer.setAttribute("class","member-container");
    sectionmember.appendChild(membercontainer);


    class Member {
        constructor(id, infoIcon, title, category, img, task1, task2, task3, task4, task5, task6, task7, task8, task9, task10 ) {
            this.id = id;
            this.infoIcon = infoIcon;
            this.title = title; 
            this.category = category; 
            this.img = img; 
            this.task1 = task1;
            this.task2 = task2;
            this.task3 = task3;
            this.task4 = task4;
            this.task5 = task5;
            this.task6 = task6;
            this.task7 = task7;
            this.task8 = task8;
            this.task9 = task9;
            this.task10 = task10;
        }
    }

    const member1 = new Member (
        1, 
        'infoIcon1',
        'Maik Jörger', 
        'Developer', 
        'Images/ImageMaik.png', 
        // Fill in contribution here
        '- navigation.js (sole contributor)',
        '- style.css (main/sole contributor)',
        '- team.js & team.html (sole contributor)',
        '- contact.js & contact.html (partial contributor)',
        '- app.js (partial contributor)',
        '- chapter pages (js & html; partial contributor)',
        '- index.js & index.html (partial contributor)',
        '- Trello organization (partial contributor)',
        '',
        '',
    );
    const member2 = new Member (
        2, 
        'infoIcon2',
        'Jasmine Eze', 
        'Developer', 
        'Images/Jamie.jpeg', 
        // Fill in contribution here
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
    );
    const member3 = new Member (
        3, 
        'infoIcon3',
        'Lorenzo Francisco', 
        'Developer', 
        'Images/Jamie.jpeg', 
        // Fill in contribution here
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
    );
    const member4 = new Member (
        4, 
        'infoIcon4',
        'Jamie Turay', 
        'Developer', 
        'Images/Jamie.jpeg', 
        // Fill in contribution here
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',   
    );

    const members = [];
    members.push(member1);
    members.push(member2);
    members.push(member3);
    members.push(member4);

    function loadContent(){
        let displayItem = members.map( (item) => {
            return `
            
            <div class="member" id=${item.id}>
                <img type='button' src=${item.img} alt=${item.title}>
                
                <div type='button' class="des">
                    <span>${item.category}</span>
                    <h5>${item.title}</h5>
                </div>
                <i id=${item.infoIcon} type='button' class="fa-solid fa-info info "></i>
            </div>

            `;
            
        });
        displayItem = displayItem.join("");
        membercontainer.innerHTML = displayItem;
        membercontainer.addEventListener('click', clickHandler);
    };

    function clickHandler(e) {
        if (e.currentTarget != e.target) {
            const targetID = e.target.id;
            const item = members.find( i => i.infoIcon == targetID);
            if (typeof item !== 'undefined') {
                alert('\n' + item.category + ': ' + item.title + '\n'+'\n'+ 'Contribution to the project: ' + '\n' + item.task1 + '\n' + item.task2 + '\n' + item.task3 + '\n' + item.task4 + '\n' + item.task5 + '\n' + item.task6 + '\n' + item.task7 + '\n' + item.task8 + '\n' + item.task9 + '\n'+ item.task10 + '\n' );
            }
        }
    }
    
    window.addEventListener("DOMContentLoaded", loadContent, false);

    //----------------------------------------------------------------------------------//



    // #3 Element of sectionmember
    // textContainer
    const textContainer = document.createElement('section');
    textContainer.classList.add("textContainer");
    textContainer.setAttribute("id","textContainer");
    sectionmember.appendChild(textContainer);

    const divtextContainer = document.createElement('div');
    textContainer.appendChild(divtextContainer);

    const h3textContainer = document.createElement('h3');
    const nodeh3textContainer = document.createTextNode("Who are we?"); 
    h3textContainer.appendChild(nodeh3textContainer);
    divtextContainer.appendChild(h3textContainer);


    const ptextContainer1 = document.createElement('p');
    ptextContainer1.setAttribute("id","ptextContainer1");
    const nodetextContainer1 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus. Nunc pulvinar sapien et ligula ullamcorper malesuada. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. In massa tempor nec feugiat nisl pretium fusce id velit. Tortor pretium viverra suspendisse potenti nullam ac tortor. Urna nec tincidunt praesent semper feugiat. Ac tincidunt vitae semper quis lectus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Gravida neque convallis a cras semper auctor. Elementum eu facilisis sed odio morbi quis. Eros in cursus turpis massa tincidunt dui ut ornare. Sit amet tellus cras adipiscing enim eu turpis egestas."); // Text of the element
    ptextContainer1.appendChild(nodetextContainer1); // Coupling of new element with its text
    divtextContainer.appendChild(ptextContainer1);


    const ptextContainer2 = document.createElement('p');
    ptextContainer2.setAttribute("id","ptextContainer2");
    const nodetextContainer2 = document.createTextNode("Est placerat in egestas erat imperdiet sed. Habitant morbi tristique senectus et netus et malesuada fames ac. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Nibh sed pulvinar proin gravida hendrerit lectus a. Vitae congue mauris rhoncus aenean vel. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Nec feugiat in fermentum posuere urna. Id eu nisl nunc mi ipsum faucibus vitae. Diam sollicitudin tempor id eu. Diam ut venenatis tellus in metus. Sed enim ut sem viverra aliquet eget sit amet tellus. In hac habitasse platea dictumst vestibulum rhoncus est."); // Text of the element
    ptextContainer2.appendChild(nodetextContainer2); // Coupling of new element with its text
    divtextContainer.appendChild(ptextContainer2);

    //----------------------------------------------------------------------------------//