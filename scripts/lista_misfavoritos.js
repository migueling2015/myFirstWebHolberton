

function cargarImagen() {
    lista_de_juegos_favoritos=['<iframe class="el-iframe" src="https://giphy.com/embed/l378lri33s1rRMX1C" width="fixed" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
                              '<iframe class="el-iframe" src="https://giphy.com/embed/l2Je3LGuLUe3x38Z2" width="fixed" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
                              '<iframe class="el-iframe" src="https://giphy.com/embed/D7xLqIu2DMFG0" width="fixed" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
                              '<iframe class="el-iframe" src="https://giphy.com/embed/3o7btQ9ep8sZXmfFra" width="fixed" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
                              '<iframe class="el-iframe" src="https://giphy.com/embed/l378w84yLljysYxeU" width="fixed" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
                              '<iframe class="el-iframe" src="https://giphy.com/embed/VKdoCR31r5EYM" width="fixed" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
                              '<iframe class="el-iframe" src="https://giphy.com/embed/uU5A1TcwwU5Og" width="fixed" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
                              '<iframe class="el-iframe" src="https://giphy.com/embed/xUA7aMrvfFPNl4lcWc" width="fixed""fixed" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
                              ' <iframe class="el-iframe" src="https://giphy.com/embed/y87Benw8AteF2" width="fixed" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    ]

    selecicon=Math.min(Math.round(Math.random()*8,0),8)
    document.getElementById("cargar-gif").innerHTML = lista_de_juegos_favoritos[selecicon];
    console.log(selecicon)
    console.log(lista_de_juegos_favoritos[selecicon])
}

