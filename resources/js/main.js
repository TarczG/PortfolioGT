let navBar = document.getElementById('hiddenBar');

let prevScrollPosition = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPosition = window.pageYOffset;
    if(prevScrollPosition>currentScrollPosition){
        navBar.style.top="0";
    }else{
        navBar.style.top = "-70px";
    }
    prevScrollPosition=currentScrollPosition;

}




const context ={
    title: 'Witaj !',
    body: 'Cześć, jestem Grzesiek. Z wykształcenia jestem zarówno architektem i programistą. Umiejętności analityczne wykształcone podczas programowania pomagają w rowziązywaniu problemów w dziedzinach na pozór oderwany od sfery IT. Problemy architektoniczne są dla mnie inspiracją do rozwiązywania ich za pomocą narzędzi komputerowych. Przedstawiam stronę będącą kombinacją treści ARCH i IT. Zapraszam ! ',
        projects: [            {
            name:'Data Science Portfolio ',
            technology: 'HTML/CSS/JS',
            description: 'Strona przedstawiająca wyniki analiz z m.in. Python + Dash + Pandas',
            image:'./resources/images/dsport.JPG',
            url:'https://tarczg.github.io/DsPortfolio/',
            live:'https://tarczg.github.io/DsPortfolio/'
        },
          {
            name:'Akustyk',
            technology: 'JAVA, OOP, Design Pattern',
            description: 'Program akustyk jest programem demonstracyjnym, testowym , który po dalszym rozbudowaniu może służyć do określania odporności stolarki okiennej i drzwiowej w oparciu o dostarczaną dokumentację analiz akustycznej dla otoczenia budynku.',
            image:'./resources/images/widokAkustyk.JPG',
            url:'https://github.com/TarczG/Akustyk'
        },
        {
            name:'Analiza wpływu biedy na długość życia',
            technology: 'PYTHON, PANDAS, DASH',
            description: 'Analiza wpływu zamożności krajów na długość życia mieszkańców na przestrzeni lat i kontynentów',
            image:'./resources/images/dsport.JPG',
            url:'https://github.com/TarczG/dashApp'
        },
        {
            name:'Baza prac dyplomowych',
            technology: 'SQL',
            description: 'Procedury składowane / kwerendy np: PraceObronionewPrzedziale, PraceRecenzowanePrzezRecenzenta, PraceWzgledemTypuStudiow, SzukajPoPromotorze, SzukajPoTematyce',
            image:'./resources/images/WdiokBazy.jpg',
            url:'https://github.com/TarczG/Baza-Danych-Prac-Dyplomowych'
        },
        {
            name:'Saper',
            technology: 'JAVA, OOP, Design Pattern',
            description: 'Wzorec MVC, projekt w oparciu o bibliotekę Swing, Metoda wypelniajaca sasiadujace pola ktore nie possiadaja min - metoda rekurencyjna z algorytmem flood fill',
            image:'./resources/images/widokmina.JPG',
            url:'https://github.com/TarczG/Mina'
        },
        {
            name:'Portfolio Architektoniczne ',
            technology: 'HTML/CSS/JS',
            description: 'Strona przedstawiająca prace podczas studiów na kierunku Architektura',
            image:'./resources/images/widokStronaArch.JPG',
            url:'https://github.com/TarczG/GT_Website',
            live:'https://tarczg.github.io/GT_Website/'
        },
        {
            name:'Snake',
            technology: 'JAVA',
            description: 'Progam w części funkcjonalnej gry oparty na podstawie tutorialu online - Autor BrandonioProductions link: https://www.youtube.com/watch?v=FABTl1Q1byw&list=PL13bz4SHGmRzIHoVh-B30U7jttLxYN_yi&index=38',
            image:'./resources/images/WidokWaz.JPG',
            url:'https://github.com/TarczG/Waz'
        },  
         {
            name:'Trzy Karty',
            technology: 'HTML/CSS/JS',
            description: 'Czy więcej szans masz na wygraną jak zmienisz kartę w czasie gry czy nie ?  ',
            image:'./resources/images/widokTrzyKarty.JPG',
            url:'https://github.com/TarczG/ThreeCards',
            live:'https://tarczg.github.io/ThreeCards/'
        }
    ],
    skills: [
        {
            id:'HTML',
            progress:'p60',
            image:'./resources/images/html.svg'
        },
        {
            id:'CSS',
            progress:'p50',
            image:'./resources/images/css.svg'
        },
        {
            id:'JS',
            progress:'p40',
            image:'./resources/images/jsIcon.svg'
        },
        {
            id:'JAVA',
            progress:'p70',
            image:'./resources/images/java.svg'
        },
        {
            id:'SPRING',
            progress:'p20',
            image:'./resources/images/spring.svg'
        },
        {
            id:'SQL',
            progress:'p40',
            image:'./resources/images/sql.svg'
        },
        {
            id:'Python',
            progress:'p60',
            image:'./resources/images/archi2dv2.svg'
        },
        {
            id:'3DS',
            progress:'p70',
            image:'./resources/images/ds.svg'
        },
        {
            id:'Archi3D',
            progress:'p80',
            image:'./resources/images/archi.svg'
        }
    ]

};

const templateElement = document.getElementById('templateIntroduction');
const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);
const compiledHTML=template(context);

document.getElementById('information').innerHTML = compiledHTML;



const templateElementProjects = document.getElementById('templateProjects');
const templateSourceProjects = templateElementProjects.innerHTML;

const templateProjects = Handlebars.compile(templateSourceProjects);
const compiledHTMLProjects=templateProjects(context);

document.getElementById('projectsList').innerHTML = compiledHTMLProjects;

const templateSkills = document.getElementById('templateSkills');
const templateSourceSkills = templateSkills.innerHTML;

const templateElementSkills = Handlebars.compile(templateSourceSkills);
const compiledHTMLSkills = templateElementSkills(context);

document.getElementById('skillInformation').innerHTML=compiledHTMLSkills;






