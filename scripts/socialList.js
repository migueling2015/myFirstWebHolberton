

function loadTwits(valor) {
    arreglo=[
        ["tweet-crash",'<a class="twitter-timeline" href="https://twitter.com/NinjaTheory?ref_src=twsrc%5Etfw">Tweets by NinjaTheory</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'],
        ["tweet-hellblade",'<a class="twitter-timeline" href="https://twitter.com/CrashBandicoot?ref_src=twsrc%5Etfw">Tweets by CrashBandicoot</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'],
        ["tweet-cuphead",'<a class="twitter-timeline" href="https://twitter.com/StudioMDHR?ref_src=twsrc%5Etfw">Tweets by StudioMDHR</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'],
        ["tweet-spiderman",'<a class="twitter-timeline" href="https://twitter.com/spiderman_game?ref_src=twsrc%5Etfw">Tweets by spiderman_game</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'],
    ];

    if (valor=='useRnd') {
        valor=Math.round(Math.random()*(arreglo.length-1),0)
    }

    console.log(`Se ha seleccionado ${arreglo[valor][0]}`)
    document.getElementById("tweets-panel").innerHTML = arreglo[valor][1];


    
    // console.log(selecicon)
    // console.log(lista_de_juegos_favoritos[selecicon])
}

