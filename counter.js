let count = 0
function increement() {
    count =count+1;
    document.getElementById('zero').innerText = count;

}
function decreement() {
    count =count-1;
    document.getElementById('zero').innerText = count;

}

let incr = document.getElementById('add');
incr.addEventListener("click", increement );

let decr = document.getElementById('sub');
decr.addEventListener("click", decreement)

let reset= document.getElementById("reset");
reset.addEventListener('click', function() {
    let zero= document.getElementById('zero');
    zero.innerText = 0;
})