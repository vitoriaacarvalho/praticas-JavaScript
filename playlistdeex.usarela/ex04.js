/*function clicou(){
    strn=document.getElementById('strn')
    resp=document.getElementById('resp')
    number=Number(strn.value)
    resp.innerHTML=`Contando`
    if (number<0||number==0){
        window.alert('ERRO! Tente novamente, com outro número')
    }else{
        for (let c=1;c<=10;c++){
            var result=(number*c)
            resp.innerHTML+=`${number}x${c}=${result}`
        }
    }
    resp.innerHTML+=`fim do programa!`
    console.log(result)
    console.log(resp)
}essa foi a que eu fiz sozinha! tive alguns pequenos probleminhas em alguns detalhes, ex: window.alert=() quando nao deveria ter o "=". mas em geral, muitissimo feliz com o resultado! foi o primeiro exercicio dessa playlist que eu fiz sozinha e ainda não vi o vídeo do guanabara. Não usei o <select></select> pq ainda não conheço ele, por isso, vou fazer agora a resolução do jeito dele! parabéns pra mim! data 07/04/22*/

function clicou(){
    let num=document.getElementById('strn')
    let tab=document.getElementById('seltab')
    if (num.value.length==0){
        window.alert('ERRO')
    }else{
        let n=Number(num.value)
        let c=1
        tab.innerHTML=` `
        while (c<=10){
            let item=document.createElement('option')
            item.text=`${n}x${c}=${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}
//deu certo de primeira!!!!!!