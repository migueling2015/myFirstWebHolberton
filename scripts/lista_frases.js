

function load_quote() {
    quotes_array=[['frase-1','author-1'],
    ['frase-2','author-2'],
    ['frase-3','author-3'],
    ['frase-4','author-4'],
    ['frase-5','author-5'],
    ['frase-6','author-6']
    ]

    console.log(`quote length: ${quotes_array.length}`)
    selecicon=Math.min(Math.round(Math.random()*(quotes_array.length-1),0),quotes_array.length-1)
    document.getElementById("quote-show").innerHTML = `<h3 class="quote-quote" id="quote-show">${quotes_array[selecicon][0]}</h3></h3><h4 class="quote-author">${quotes_array[selecicon][1]}</h4>`
    console.log(`quote phrase: ${selecicon}`)
    console.log(quotes_array[selecicon])
}

