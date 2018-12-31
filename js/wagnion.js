answer1 = "keuwa"
answer2 = "la réponse d"
answer3 = "la réponse d"

url = "http://keuwa.github.io"


function checkAnwser(){
    page = document.title
    answer = document.getElementById("answer").value.toLowerCase()
    console.log(page,answer,answer1,answer === answer1)

    switch(page){
        case "enigma_one":
        if(answer === answer1){
            document.location.href = url+"/wagnionlenoob";
            return
        }
        error()
        break
        case "enigma_two":
        if(answer === answer2){
            document.location.href = url+"madnion";
            return
        }
        error()
        break
        case "enigma_three":
        if(answer === answer2){
            document.location.href = url+"wagnionlerampant";
            return
        }
        error()
        break
    }


}

function error(){
    alert("Really ?")
}