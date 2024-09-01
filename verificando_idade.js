function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res');
    if(fano.value.length == 0 || fano.value > ano){
        window.alert(' [ERRO]verifique o ano de nascimento, e tente novamente');
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
           genero = 'homem'
             if(idade >=0 && idade < 3){
                img.setAttribute('src', 'bebe_homem.png')
            }
            else if(idade <= 10){
                //criança
                img.setAttribute('src', 'criança_homem.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem_homem.png')
            } else if(idade < 50){
                img.setAttribute('src', 'adulto_homem.png')
            }else{
                img.setAttribute('src', 'idoso_homem.png')
            }
        }else if(fsex[1].checked){
            genero='mulher'
             if(idade>= 0 && idade <=10){
                img.setAttribute('src', 'criança_mulher.png')
           }else if(idade < 21){
             img.setAttribute('src', 'jovem_mulher.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulta_mulher.png')
            }else{
                img.setAttribute('src', 'idosa_mulher.png')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML=`detectamos ${genero} com ${idade}`
        res.appendChild(img)
        

      
    }
}
