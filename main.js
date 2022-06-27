const tipoLetra = document.getElementById('tipografia');
const bnt1 = document.getElementById('btn1');
const texto = document.getElementById('textoPrincipal');
const tipoPatron = document.getElementById('tipoPatron');
const range = document.getElementById('tamanioLetra');
const stroke = document.getElementById('stroke');
//Campura el texto de un select option para modificar la tipografia
tipoLetra.addEventListener('change', function(){
    //let selectOption = this.options[tipoLetra.selectedIndex];
    //texto.style.fontFamily = "san serif";
    texto.style.fontFamily = tipoLetra.value;
    //console.log(tipoLetra.value);
    //document.getElementsByClassName('textoPrincipal').style.fontFamily = 'Roboto';
});
//Captura el texto de un select option para cambiar el patron de imagen
tipoPatron.addEventListener('change', function(){
    //console.log(tipoPatron.value);
    texto.style.backgroundImage = `url(${tipoPatron.value})`;
    //console.log(tipoPatron.value);
});
//Captura los datos del input type range para modificar el tamaño de letra
range.addEventListener('change', function(){
    texto.style.fontSize = `${range.value}rem`;
    //console.log(range.value);
});

stroke.addEventListener('click', function(){
    console.log(stroke.checked);
    if(stroke.checked){
        console.log('activado');
        texto.style.webkitTextStroke = '1px solid #fff';
        //texto.style.color = 'red';
    }else{
        console.log('desactivado');
        texto.style.webkitTextStroke = 'transparent';
    }
    /*if(stroke.value === ''){
        console.log('activado');
    }else{
        console.log('desactivado');
    }
    texto.style.textStroke = "1px #fff";
    console.log('stroke');
    */
});