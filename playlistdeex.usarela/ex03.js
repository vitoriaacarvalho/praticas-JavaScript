/*function clicou(){
var i=document.getElementById('inicio')
    var f=document.getElementById('fim')
    var p=document.getElementById('passo')
    var resp=document.getElementById('resp')
    var inicio=Number(i.value)
    var fim=Number(f.value)
    var passo=Number(p.value)
    resp.innerHTML=`contando:`
    for (var c=inicio;c<=fim; c+=passo){
        resp.innerHTML+=`${c} \u{1F449}`
    }
    resp.innerHTML+=`\u{1F31F}`
} ->Primeira tentativa*/

function clicar(){
    let ini=document.getElementById('inicio')
    let fim=document.getElementById('fim')
    let passo=document.getElementById('passo')
    let resp=document.getElementById('resp')
    if (ini.value.length==0||fim.value.lenght==0||passo.value.lenght==0){
        resp.innerHTML='ERRO'
    }else{
        resp.innerHTML='contando: <br>'
        let i=Number(ini.value)
        let f=Number(fim.value)
        let p=Number(passo.value)
        if(p<=0){ //passo 0, atribuindo p=1
            window.alert('INVÁLIDO! Passo deve ser diferente de 0! Vamos considerar p=1')
            p=1
        }if(i<f){ //cont cresc
            for (let c=i; c<=f; c+=p){
                resp.innerHTML+=`${c} \u{1F449}`
            }
        }else{ //cont reg
            for (let c=i; c>=f;c-=p){
                resp.innerHTML+=`${c} \u{1F449}`
            }
       
        } 
        resp.innerHTML=`${c} \u{1F31F}`
    }
}