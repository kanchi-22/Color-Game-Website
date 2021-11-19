function game(){
let r = Math.ceil(Math.random()*255);
let g = Math.ceil(Math.random()*255);
let b = Math.ceil(Math.random()*255);
let boxes = document.getElementsByClassName('box');
let button = document.querySelector('button');
let rgb = document.getElementById("rgb");
rgb.innerText = `rgb(${r},${g},${b})`;
let ans = Math.ceil(Math.random()*6);
for(let i = 0 ; i <= 5 ; i++){
    let x = Math.ceil(Math.random()*255);
    let y = Math.ceil(Math.random()*255);
    let z = Math.ceil(Math.random()*255);
    let currBox = boxes[i];
    if(i==ans-1){
        currBox.style.backgroundColor = `rgb(${r},${g},${b})`;
        console.log(`rgb(${r},${g},${b})`);
    }
    else{
        currBox.style.backgroundColor = `rgb(${x},${y},${z})`;
        console.log(`rgb(${x},${y},${z})`);
    }
}
//checking answer-->
for(item of boxes){
    item.addEventListener('click',(e)=>{
        let temp = e.target.style.backgroundColor;
        if(temp == `rgb(${r}, ${g}, ${b})`){
            e.target.innerText = "Right Answer !!";
        }
        else{
            e.target.innerText = "Wrong Answer :("; 
        }
    })
}
button.addEventListener('click',function(){
    for(let i = 0 ; i < 6 ; i++){
        boxes[i].innerText = "";
    }
    game();
})
}
game();
