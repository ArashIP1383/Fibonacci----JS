
let index = 0
let resultmain = []

const timer = ms => new Promise(res => setTimeout(res,ms))

fibo();

function creator(i,result){
    let span = document.createElement('span')
    let under = `<span id="blew" >${i}</span>`
    span.setAttribute('id','logger')
    document.body.appendChild(span)
    span.innerHTML = "F" + under + " = " + result
}


async function fibo(){
    if(index > 1){
        while(true){
            resultmain.push((resultmain[index - 1]) + (resultmain[index - 2]))
            creator(index,resultmain[index])
            index ++
            await timer(1000)
        }
    }else if(index == 0){
        resultmain.push(0)
        creator(index,resultmain[index])
        index=1
        fibo()
    }else if(index == 1 ){
        resultmain.push(1)
        creator(index,resultmain[index])
        index=2
        fibo()
    }
}