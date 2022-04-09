function carregou(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('img')
    var data= new Date()
    var hora=data.getHours()
    msg.innerHTML=``
    if(hora>=0 && hora<12){
        //manhã
        img.src='manha.jpeg'
        msg.innerHTML+=`Bom dia! Agora são ${hora} horas.`
        document.body.style.background='yellow'
    }else if(hora>=12 && hora<=17){
        //tarde
        img.src='tarde.webp'
        msg.innerHTML+=`Boa tarde! Agora são ${horas} horas.`
        document.body.style.background='orange'
    }else{
        //noite
        img.src='night.jpeg'
        msg.innerHTML+=`Boa noite! Agora são ${horas} horas.`
        document.body.style.background='darkblue'
    }
}