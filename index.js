// const cvBtn=document.getElementById('resume-btn')
// const hirebtn=document.getElementById('hire')



// cvBtn.addEventListener('click',findCv)
// function findCv(){
// return //projects.textContent=`https://koech161.github.io/week-2-code-challenge/`
// }findCv()


const icon= document.getElementById('icon')

icon.onclick= function(){
    document.body.classList.toggle('dark-theme')

    if(document.body.classList.contains('dark-theme')){
        icon.src="./sun.png"
    }else{
        icon.src="./moon.png"
    }
}