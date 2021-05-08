
const container = document.getElementById('container')
let index = 0
let resultmain = []

const timer = ms => new Promise(res => setTimeout(res,ms))

fibo();

function creator(i,result){
    let bb = document.createElement('span')
    let nn = `<span id="blew" >${i}</span>`
    bb.setAttribute('id','logger')
    container.appendChild(bb)
    bb.innerHTML = "F" + nn + " = " + result
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

