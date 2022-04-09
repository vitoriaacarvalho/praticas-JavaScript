function clicou(){
    var data=new Date()
    var anoatual= 2022
    var nasc=document.getElementById('txtano')
    var resp=document.getElementById('resp')
    //var nasc=Number(nasceu.value)
    //var sexo=document.getElementsByName('radsex')
    if (Number(nasc.value).length==0 || Number(nasc.value)>anoatual){
        window.alert('[ERRO] digite um ano válido')
    }else{
        var sex=document.getElementsByName('radsex')
        var idade= anoatual-Number(nasc.value)
        var sexo= ''
        var img=document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            sexo='homem'
            if (idade>=0 && idade<=12){
                img.setAttribute('src', 'menino.png')
            }else if (idade>=13 && idade<=18){
                img.setAttribute('src', 'garoto.png')
            }else if (idade>=19){
                img.setAttribute('src', 'homem2.png')
            }
        }else if (sex[1].checked){
                sexo='mulher'
            if (idade>=0 && idade<=12){
                    img.setAttribute('src', 'menina.png')
            }else if (idade>=13 && idade<=18){
                    img.setAttribute('src', 'garota.png')
            }else if (idade>=19){
                    img.setAttribute('src', 'mulher.png')
            }         
        } 
    }
    resp.style.textAlign='center'
    resp.innerHTML=`detectamos ${sexo} com ${idade} anos`
    resp.appendChild(img)
    console.log(resp)
    console.log(sexo)
    console.log(clicou)
    console.log(img)
}