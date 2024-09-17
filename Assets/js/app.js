const AppTitle = "Online Szakácskönyv";
const Appversion = "v1.0";
const Author = "Kulimák Máté és Tátrai Dominik Oszkár";
const Company = "Bajai SZC Türr István Technikum";


const serverUrl = 'http://localhost:3000';

let title = document.querySelector('title');
let header = document.querySelector('header');
let footer = document.querySelector('footer');

title.innerHTML = AppTitle + ' ' + Appversion;
header.innerHTML = AppTitle;
footer.innerHTML = Company + ' | ' + Author + ' | 2024.';

async function render(view){
    let main = document.querySelector('main');
    main.innerHTML = await (await fetch(`Views/${view}.html`)).text();
    header.innerHTML = String(view);

    switch(view){
        case 'profile': {
            getMe();
            break;
        }
        case 'users': {
            getUsers();
            break;
        }
        case 'steps': {
            getStepDatas();
            break;
        }
        case 'statistics': {
            getUserStats();
            getAdminStats(); // feltételhez kell kötni! hogy admin-e a bejelentkezett user
            break;
        }
    }
}