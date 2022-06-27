const tipoLetra = document.getElementById('tipografia');
const bnt1 = document.getElementById('btn1');
const texto = document.getElementById('textoPrincipal');
const tipoPatron = document.getElementById('tipoPatron');
const range = document.getElementById('tamanioLetra');
tipoLetra.addEventListener('change', function(){
    //let selectOption = this.options[tipoLetra.selectedIndex];
    //texto.style.fontFamily = "san serif";
    texto.style.fontFamily = tipoLetra.value;
    console.log(tipoLetra.value);
    //document.getElementsByClassName('textoPrincipal').style.fontFamily = 'Roboto';
});

tipoPatron.addEventListener('change', function(){
    //console.log(tipoPatron.value);
    texto.style.backgroundImage = `url(${tipoPatron.value})`;
    console.log(tipoPatron.value);
});
range.addEventListener('change', function(){
    texto.style.fontSize = `${range.value}rem`;
    console.log(range.value);
});
/*
btn1.addEventListener('click', () =>{
    texto.style.backgroundImage = "url('img/patrondos')";
    console.log(texto.value);
});
*/