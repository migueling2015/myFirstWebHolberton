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
    ['<img src="assets/char_ribby_and_criaks_big.jpg" alt="Ribby and Criaks" >','Ribby and Criaks','Two bastard frogs, members of the fighting club'],
    ['<img src="assets/char_le_grande_big.jpg" alt="" >','Goopy le grande','Goopy is merely a small blob who hops around the screen. Watch carefully to get a feel for how far he jumps before crashing back down. Sometimes Goopy jumps high with short range, and other times he jumps lower with a longer range. This is key to avoiding damage from above. Generally, you can stick near the sides of the screen without fear of getting hit. You will, however, have to dash from time to time if you can tell Goopy will land on the side of the screen.'],
    ['<img src="assets/char_the_root_pack_big.jpg" alt="" >','The root pack','In the first phase, a potato spews clumps of dirt at you. In the second, an onion incessantly cries, forcing you to dodge the tear shower from above. The final phase, a psychedelic carrot, the carrot shoots homing baby carrots in your direction and shoots hypnosis rays from its eyes.'],
    ['<img src="assets/char_wernwer_werman_big.jpg" alt="" >','Wernwer Wrman','Rats!!!'],
    [,,],
]

function on(char_index) { 

  string_HTML=''
 
  string_HTML+='<div class="overlay-spacer-vertical"></div>'
  string_HTML+='<div id="overlay-content" class="overlay-content">'
  string_HTML+='<div id="overlay-container">'
  string_HTML+='<div id="overlay-image">'
  string_HTML+=array_big_characters[char_index][0]
  string_HTML+='</div>'
  string_HTML+='<div id="overlay-text">'
  string_HTML+='<div class="char-info-name">'
  string_HTML+='<h2>'+ array_big_characters[char_index][1] +'</h2>'
  string_HTML+='</div>'
  string_HTML+='<div class="char-info-description">'
  string_HTML+='<p>'+ array_big_characters[char_index][2] +'</p>'
  string_HTML+='</div>'
  string_HTML+='</div>'
  string_HTML+='</div>'
  string_HTML+='</div>'
  string_HTML+='<div class="overlay-spacer-vertical"></div>'
 
  console.log(`string insert like a HTNL: ${string_HTML}`)

  let div_overlay=document.getElementById("overlay")

  div_overlay.innerHTML=string_HTML

  div_overlay.style.display="flex";
  div_overlay.style.flex="row";
  div_overlay.style.justifyContent="center";
  div_overlay.style.position="fixed";
  div_overlay.style.width="100%";
  div_overlay.style.height="100%";
  div_overlay.style.top="0";
  div_overlay.style.left="0";
  div_overlay.style.right="0";
  div_overlay.style.bottom="0";
  div_overlay.style.backgroundColor="rgba(0,0,0,0.8)";
  div_overlay.style.zIndex ="2";
  div_overlay.style.cursor="pointer";

  var x = document.getElementsByClassName("overlay-spacer-vertical");

  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.flex="1";
  }

  let div_overlay_content=document.getElementById("overlay-content")

  div_overlay_content.style.height="auto";
  div_overlay_content.style.flex="3";
  div_overlay_content.style.justifyContent="center";

  let div_overlay_container=document.getElementById("overlay-container")

  div_overlay_container.style.height="auto";
  div_overlay_container.style.backgroundColor="#f2e3bc";
  div_overlay_container.style.justifyContent="center";
  div_overlay_container.style.borderRadius="3px";
  div_overlay_container.style.boxShadow="1px 1px 1px 1px #c19875"
  div_overlay_container.style.marginTop="70px"
  div_overlay_container.style.padding="30px"
}

function off() {
  string_HTML=''
  console.log(`string insert like a HTNL: ${string_HTML}`)
  let div_overlay=document.getElementById("overlay")
  div_overlay.innerHTML=string_HTML
  div_overlay.style.display = "none";
}