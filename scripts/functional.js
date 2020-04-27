var array_big_characters=[
    [,,],
    [,,],
    [,,],
    [,,],
    [,,],
    [,,],
    [,,],
    [,,],
    [,,],
    [,,],
    [,,],
    '<img src="assets/char_le_grande_big.jpg" alt="" >',
    '<img src="assets/char_the_root_pack_big.jpg" alt="" >',
    '<img src="assets/char_wernwer_werman_big.jpg" alt="" >',
    [,,],
]

function on(char_index) { 
  document.getElementById("overlay").style.display = "block";
  let image=document.getElementById("overlay-image");
  image.innerHTML=array_big_characters[char_index];

//   document.getElementById("overlay-img").style.top= window.screen.height;
//   document.getElementById("overlay-img").style.left="200px";
//   document.getElementById("overlay-text").innerHTML=array_big_characters[char_index][1]+array_big_characters[char_index][2];

}

function off() {
  document.getElementById("overlay").style.display = "none";
}