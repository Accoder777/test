console.log('Hello World')

const answer = document.querySelectorAll('.answer');



for(let index1 = 0; index1 < 4; index1++){
    answer[index1].addEventListener(('click'),()=>{
        let answerInnerHTML = answer[index1].innerHTML;
        if(answerInnerHTML[answerInnerHTML.indexOf(')')-1] == 'C')
        {
            answer[0].style.backgroundColor = 'yellow'
            answer[1].style.backgroundColor = 'yellow'
            answer[2].style.backgroundColor = 'yellow'
            answer[3].style.backgroundColor = 'yellow'
            answer[index1].style.backgroundColor = 'green'
        }
        else{
            for(let index = 0; index < 4; index++){
                answerInnerHTML = answer[index].innerHTML
                if(answerInnerHTML[answerInnerHTML.indexOf(')')-1] == 'C'){
                    answer[0].style.backgroundColor = 'yellow'
                    answer[1].style.backgroundColor = 'yellow'
                    answer[2].style.backgroundColor = 'yellow'
                    answer[3].style.backgroundColor = 'yellow'
                    answer[index1].style.backgroundColor = 'red'
                    answer[index].style.backgroundColor = 'green'
                }
            }
        }
    })
}

for(let index1 = 4; index1 < 8; index1++){
    answer[index1].addEventListener(('click'),()=>{
        let answerInnerHTML = answer[index1].innerHTML;
        if(answerInnerHTML[answerInnerHTML.indexOf(')')-1] == 'C')
        {
            answer[4].style.backgroundColor = 'yellow'
            answer[5].style.backgroundColor = 'yellow'
            answer[6].style.backgroundColor = 'yellow'
            answer[7].style.backgroundColor = 'yellow'
            answer[index1].style.backgroundColor = 'green'
        }
        else{
            for(let index = 4; index < 8; index++){
                answerInnerHTML = answer[index].innerHTML
                if(answerInnerHTML[answerInnerHTML.indexOf(')')-1] == 'C'){
                    answer[4].style.backgroundColor = 'yellow'
                    answer[5].style.backgroundColor = 'yellow'
                    answer[6].style.backgroundColor = 'yellow'
                    answer[7].style.backgroundColor = 'yellow'
                    answer[index1].style.backgroundColor = 'red'
                    answer[index].style.backgroundColor = 'green'
                }
            }
        }
    })
}

for(let index1 = 8; index1 < 12; index1++){
    answer[index1].addEventListener(('click'),()=>{
        let answerInnerHTML = answer[index1].innerHTML;
        if(answerInnerHTML[answerInnerHTML.indexOf(')')-1] == 'C')
        {
            answer[8].style.backgroundColor = 'yellow'
            answer[9].style.backgroundColor = 'yellow'
            answer[10].style.backgroundColor = 'yellow'
            answer[11].style.backgroundColor = 'yellow'
            answer[index1].style.backgroundColor = 'green'
        }
        else{
            for(let index = 8; index < 12; index++){
                answerInnerHTML = answer[index].innerHTML
                if(answerInnerHTML[answerInnerHTML.indexOf(')')-1] == 'C'){
                    answer[8].style.backgroundColor = 'yellow'
                    answer[9].style.backgroundColor = 'yellow'
                    answer[10].style.backgroundColor = 'yellow'
                    answer[11].style.backgroundColor = 'yellow'
                    answer[index1].style.backgroundColor = 'red'
                    answer[index].style.backgroundColor = 'green'
                }
            }
        }
    })
}

for(let index1 = 12; index1 < 16; index1++){
    answer[index1].addEventListener(('click'),()=>{
        let answerInnerHTML = answer[index1].innerHTML;
        if(answerInnerHTML[answerInnerHTML.indexOf(')')-1] == 'C')
        {
            answer[12].style.backgroundColor = 'yellow'
            answer[13].style.backgroundColor = 'yellow'
            answer[14].style.backgroundColor = 'yellow'
            answer[15].style.backgroundColor = 'yellow'
            answer[index1].style.backgroundColor = 'green'
        }
        else{
            for(let index = 12; index < 16; index++){
                answerInnerHTML = answer[index].innerHTML
                if(answerInnerHTML[answerInnerHTML.indexOf(')')-1] == 'C'){
                    answer[12].style.backgroundColor = 'yellow'
                    answer[13].style.backgroundColor = 'yellow'
                    answer[14].style.backgroundColor = 'yellow'
                    answer[15].style.backgroundColor = 'yellow'
                    answer[index1].style.backgroundColor = 'red'
                    answer[index].style.backgroundColor = 'green'
                }
            }
        }
    })
}