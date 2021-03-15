listaHist = [];

  
function somar(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = Number(n1) + Number(n2)
    n4 = `${n1} + ${n2} = ${n3}`
    hist(n4)
        document.getElementById('resultado').innerHTML = `A sua soma é </br> ${n3}`
            
}
function sub(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = Number(n1) - Number(n2)
    n4 = `${n1} - ${n2} = ${n3}`
    hist(n4)
    document.getElementById('resultado').innerHTML = `A sua subtração é </br> ${n3}`
}
function divi(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = Number(n1)/Number(n2)
     n4 = `${n1} / ${n2} = ${n3}`
    hist(n4)
    document.getElementById('resultado').innerHTML = `A sua divisão é </br> ${n3}` 
}
function resto(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = Number(n1)%Number(n2)
     n4 = `${n1} % ${n2} = ${n3}`
    hist(n4)
    document.getElementById('resultado').innerHTML = `O seu resto é </br> ${n3}`
}
function muti(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = Number(n1)*Number(n2)
     n4 = `${n1} * ${n2} = ${n3}`
    hist(n4)
    document.getElementById('resultado').innerHTML = `A sua Mutiplicação é </br> ${n3}`
}
function porcentagem(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = (Number(n1)*Number(n2))/100
     n4 = `${n1} % ${n2} = ${n3}`
    hist(n4)
    document.getElementById('resultado').innerHTML = `A sua  Porcentagem é </br> ${n3}%`
}
function hist (item){
    listaHist.push(item)
    listaHist.leght = 5
      document.getElementById('historico').innerHTML= listaHist.join("<br>")
    console.log(listaHist)
        
}