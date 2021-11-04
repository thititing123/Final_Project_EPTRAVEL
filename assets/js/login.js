function show(){
    var p = document.getElementById('pass');
    p.setAttribute('type', 'text');
}
function hidden(){
    var p = document.getElementById('pass');
    p.setAttribute('type', 'password')
}
function showAndHidden(){
    var passwordShow = 0;
    document.getElementById("iconeye").addEventListener("click", function()
    {
        if (passwordShow==0)
        {
            passwordShow=1;
            show();
        }
        else
        {
            passwordShow=0;
            hidden();
        }
    })

}
// function changeIcon(){
//     if (document.getElementById("eyeHidden").hre)
// }