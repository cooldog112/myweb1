function selectMenu(menu){    
    const content = document.getElementById('content');    
    content.src='page/'+menu;
}

function loginMenu(){
    const content = document.getElementById('content');    
    content.src='page/login.html';   

    const login = document.getElementById('loginModal');
    console.log(login);
    login.show();
}