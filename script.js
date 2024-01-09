let User = document.getElementById('loginAvatar');
let create = document.getElementById('createButton')
let SignIn = document.getElementById('SignIn')
let recommendedGroups = document.getElementById('recommendedGroups')
SignIn.addEventListener('click',(e)=>{
    console.log('Sign in clicked')
    create.classList.toggle('d-none')
    User.classList.toggle('d-none')
    recommendedGroups.classList.toggle('d-none')
})

let JoinGroup = document.getElementById('join')
let LeaveGroup = document.getElementById('exit')
function toogleButtons(){
    JoinGroup.classList.toggle('d-none');
    LeaveGroup.classList.toggle('d-none');
}
JoinGroup.addEventListener('click',toogleButtons)
LeaveGroup.addEventListener('click',toogleButtons)
