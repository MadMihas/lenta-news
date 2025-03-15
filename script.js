document.getElementById('button').addEventListener('click', function(){
    const loginuser = document.getElementById('login').value
    const passworduser = document.getElementById('pass').value

    if(loginuser == "admin" && passworduser == "admin"){
        window.open('index.html')
    }
});