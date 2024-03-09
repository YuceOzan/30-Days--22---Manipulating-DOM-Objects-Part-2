import asabenehChallenges2020 from "./projects.js";
document.body.style.fontFamily = 'san-serif, helvetica';
let wrapper = document.querySelector('.wrapper');

let getDate = () => {
    let d = new Date();

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let monthIndex = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();

    date = date < 10 ? '0' + date.toString() : date;
    hour = hour < 10 ? '0' + hour.toString() : hour;
    mins = mins < 10 ? '0' + mins.toString() : mins;

    return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}`;
}

let generateColor = () => {
    let alphanums = '0123456789abcdef';

    let colorArr = [];
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 15);
        colorArr.push(alphanums[index]);
    }
    return '#' + colorArr.join('');
}

let h1 = document.createElement('h1');
h1.innerHTML = 'Asabeneh Yetayeh Challenges in <strong>2020</strong>';
h1.style.textAlign = 'center';
h1.style.fontSize = '20px';
h1.style.fontWeight = '400';
h1.style.marginBottom = '5px';
h1.style.padding = '5px';
wrapper.appendChild(h1);

let yearText = document.querySelector('strong');
yearText.style.fontSize = '40px';

setInterval(() => yearText.style.color = generateColor(), 1000);

let h3 = document.createElement('h3');
h3.textContent = '30DaysOfJavaScript Challenge';
h3.style.fontWeight = '370';
h3.style.fontSize = '15px';
h3.style.textDecoration = 'underline';
h3.style.textAlign = 'center';
h3.style.padding = '3px';
h3.style.margin = '0px';

wrapper.appendChild(h3);


let date = document.createElement('h4');
date.textContent = getDate();
date.style.fontSize = '12px';
date.style.padding = '6px';
date.style.margin = 'auto';
date.style.textAlign = 'center';
date.style.width = '15%';
date.style.fontWeight = '400';
date.style.marginBottom = '15px';
date.style.marginTop = '15px';
setInterval(() => {
    date.style.backgroundColor = generateColor();
}, 1000);

wrapper.appendChild(date);

let list = document.createElement('ul');
list.style.listStyleType = 'none';
list.style.width = '60%';
list.style.margin = 'auto';



asabenehChallenges2020.challenges.forEach((x, index) => {
    let item = document.createElement('li');

    let bgColor;
    switch (x.status) {
        case 'Done':
            bgColor = 'green'; 
            break;
        case 'Ongoing':
            bgColor = 'yellow'; 
            break;
        case 'Coming':
            bgColor = 'red'; 
            break;
        default:
            bgColor = '#ffffff'; 
            break;
    }
    item.style.backgroundColor = bgColor;

    let containerDiv = document.createElement('div');
    containerDiv.style.display = 'flex';
    containerDiv.style.flexDirection = 'column';
    containerDiv.style.justifyContent = 'space-between';


    let titleSpan = document.createElement('span');
    let title = document.createTextNode(x.name);
    titleSpan.appendChild(title);

    let dropdown = document.createElement('details');
    let dropdownSpan = document.createElement('span');

    let summary = document.createElement('summary');
    summary.textContent = x.name.split(' ')[x.name.split(' ').length - 1];
  
    let topics = document.createElement('ul');

    x.topics.forEach(i => {
        let item = document.createElement('li');
        item.textContent = i;

        topics.appendChild(item);

        item.style.padding = '5px';
        item.style.width = '90%';
        item.style.marginTop = '3px';
        item.style.marginBottom = '3px';

    })

    topics.style.listStyleType = 'none';
    topics.style.width = '80%';
    topics.style.margin = 'auto';
    


    dropdownSpan.appendChild(dropdown);

    let status = document.createTextNode(x.status);
    let statusSpan = document.createElement('span');
    statusSpan.appendChild(status);

    item.appendChild(titleSpan);
    dropdown.appendChild(summary);
    dropdown.appendChild(topics);
    item.appendChild(dropdownSpan);
    item.appendChild(statusSpan);
    list.appendChild(item);

    item.setAttribute("id", "listed-style-" + (index + 1));
    item.style.border = '1px blue solid';
    item.style.padding = '25px';
    item.style.width = '90%';
    item.style.marginTop = '3px';
    item.style.marginBottom = '3px';
    item.style.display = 'flex'
    item.style.justifyContent = 'space-between'

});

wrapper.appendChild(list);

let asabenehTitle = document.createElement('h1');
asabenehTitle.textContent = 'Asabeneh Yetayeh';
asabenehTitle.style.textAlign = 'center';
asabenehTitle.style.marginTop = '20px';
wrapper.appendChild(asabenehTitle);

let socialMediaContainer = document.createElement('div');
socialMediaContainer.style.display = 'flex';
socialMediaContainer.style.justifyContent = 'center';
socialMediaContainer.style.marginTop = '20px';
wrapper.appendChild(socialMediaContainer);


// Add social media icons
let socialMediaLinks = [
    { name: 'Twitter', url: 'https://twitter.com/asabeneh', iconClass: 'fab fa-twitter' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/asabeneh/', iconClass: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/Asabeneh', iconClass: 'fab fa-github' }
];

socialMediaLinks.forEach(socialMedia => {
    let socialMediaLink = document.createElement('a');
    socialMediaLink.href = socialMedia.url;
    socialMediaLink.target = '_blank';

    let socialMediaIcon = document.createElement('i');
    socialMediaIcon.className = socialMedia.iconClass; // Use className instead of classList.add
    socialMediaIcon.style.fontSize = '30px';
    socialMediaIcon.style.margin = '0 10px';
    socialMediaIcon.style.color = 'black';


    socialMediaLink.appendChild(socialMediaIcon);
    socialMediaContainer.appendChild(socialMediaLink);
});

let loremParagraph = document.createElement('p');
loremParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget turpis placerat ultrices. Nullam vel risus id elit consequat consectetur. Vestibulum non erat ut quam tempus ultrices ac et nunc. Vivamus tincidunt mi id luctus accumsan. Cras tempus nibh vel est ultrices fringilla. Sed rhoncus sapien in ipsum sollicitudin, et feugiat justo tempor. Aenean gravida felis vel ex suscipit vehicula.';
loremParagraph.style.textAlign = "center"
loremParagraph.style.maxWidth = "1000px"
loremParagraph.style.margin = "auto"
loremParagraph.style.marginBottom = "30px"
loremParagraph.style.marginTop = "30px"
wrapper.appendChild(loremParagraph);


let titlesList = document.createElement('ul');
let titlesHeader = document.createElement('h2');
titlesHeader.textContent = 'Titles';
titlesList.appendChild(titlesHeader);
titlesList.style.listStyleType = 'none';
let titles = ['Educator', 'Programmer', 'Developer', 'Motivator', 'Content Creator'];
titles.forEach(title => {
    let listItem = document.createElement('li');
    listItem.textContent = title;
    titlesList.appendChild(listItem);
});


let skillsList = document.createElement('ul');
let skillsHeader = document.createElement('h2');
skillsHeader.textContent = 'Skills';
skillsList.appendChild(skillsHeader);
skillsList.style.listStyleType = 'none';
let skills = ['Web Development', 'Data Analysis', 'Data Visualization', 'Programming', 'Databases', 'Developing API'];
skills.forEach(skill => {
    let listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});


let qualificationsList = document.createElement('ul');
let qualificationsHeader = document.createElement('h2');
qualificationsHeader.textContent = 'Qualifications';
qualificationsList.appendChild(qualificationsHeader);
qualificationsList.style.listStyleType = 'none';
let qualifications = ['MSc. Computer Science Ongoing', 'BSc. Information and Communication Eng.', 'MSc. Food Technology', 'BSc. Food Technology'];
qualifications.forEach(qualification => {
    let listItem = document.createElement('li');
    listItem.textContent = qualification;
    qualificationsList.appendChild(listItem);
});


let listsContainer = document.createElement('div');
listsContainer.style.display = 'flex';
listsContainer.style.justifyContent = 'space-between';
listsContainer.style.width = "1000px"
listsContainer.style.margin = "auto"



listsContainer.appendChild(titlesList);
listsContainer.appendChild(skillsList);
listsContainer.appendChild(qualificationsList);


wrapper.appendChild(listsContainer);


let keywords = [
    'HTML', 'HTML5', 'CSS', 'CSS3', 'JS', 'JavaScript', 'ES6', 'Promise', 'async await', 'Database',
    'React', 'React Hooks', 'Context API', 'React Router', 'Web Storage', 'localStorage', 'sessionStorage',
    'Redux', 'Node', 'MongoDB', 'SQL', 'API', 'DOM', 'data science', 'MERN', 'Python', 'Flask', 'Statistics',
    'Linear Algebra', 'Numpy', 'Pandas', 'Scipy', 'Scikit-learn', 'Visualization', 'D3.js'
];

let keywordsContainer = document.createElement('div');
keywordsContainer.style.width = '60%'; 
keywordsContainer.style.margin = 'auto';
keywordsContainer.style.padding = '20px';
keywordsContainer.style.boxSizing = 'border-box';

let keywordsTitle = document.createElement('h1');
keywordsTitle.textContent = 'Key Words';
keywordsTitle.style.marginBottom = '20px';
keywordsTitle.style.fontSize = '20px';
keywordsContainer.appendChild(keywordsTitle);

let keywordsList = document.createElement('ul');
keywordsList.style.listStyleType = 'none';
keywordsList.style.display = 'flex';
keywordsList.style.flexWrap = 'wrap';
keywordsList.style.justifyContent = 'center';

keywords.forEach(keyword => {
    let keywordItem = document.createElement('li');
    keywordItem.textContent = keyword;
    keywordItem.style.backgroundColor = generateColor();
    keywordItem.style.padding = '5px';
    keywordItem.style.margin = '5px';
    keywordsList.appendChild(keywordItem);
});

keywordsContainer.appendChild(keywordsList);
wrapper.appendChild(keywordsContainer);


