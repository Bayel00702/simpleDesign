
let loginBtn = document.querySelector('#login');
let login = document.querySelector('.login');

let loginExit = document.querySelector('#loginExit');

loginBtn.onclick = function () {
    login.style.display =  'flex';
};

loginExit.onclick = function () {
    login.style.display = 'none'
}
;