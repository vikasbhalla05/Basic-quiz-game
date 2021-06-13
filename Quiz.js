var question = ['1+4=?','1+7=?','4-3=?','8-5=?'];
var count =0;

function myFunction(){
    var person = prompt("Please Enter your name");
    document.getElementById("demo").innerHTML = "So "+ person+ " we will start the quize when you start:";

    document.getElementById("star").style.display="block";
}

function afunc(){
    document.getElementById("ques").innerHTML=question[0];
    count=0;
    document.getElementById("demo").innerHTML="";
    document.getElementById("skr").innerHTML="";
    document.getElementById("hela").style.display="none";
}

function bfunc(i){
    var c=i+1
    document.getElementById("ques").innerHTML=question[c]
    ans()
}


function Next(){
    document.getElementById('result').innerHTML=''
    var i=0
    var c=question.length

    for(i; i<c; i++){
        if(document.getElementById('ques').innerHTML==question[i]){
            bfunc(i)
            break;
        }
    }
}

function Score(){
    document.getElementById('skr').innerHTML='Your score is '+count+ ' out of 4'
}

function ans(){
    if(document.getElementById("ques").innerHTML === question[0]){
        var opt1 = document.createElement('button')
        opt1.innerHTML=6
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt2 = document.createElement('button')
        opt2.innerHTML=5
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById('result').style.color='green';
            document.getElementById('result').innerHTML="Correct Answer"
            count++
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt3 = document.createElement('button')
        opt3.innerHTML=4
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt4 = document.createElement('button')
        opt4.innerHTML=8
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
    }

    else if(document.getElementById("ques").innerHTML === question[1]){
        var opt1 = document.createElement('button')
        opt1.innerHTML=6
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt2 = document.createElement('button')
        opt2.innerHTML=5
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt3 = document.createElement('button')
        opt3.innerHTML=8
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById('result').style.color='green';
            document.getElementById('result').innerHTML="Correct Answer"
            count++
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt4 = document.createElement('button')
        opt4.innerHTML=7
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
    }

    else if(document.getElementById("ques").innerHTML === question[2]){
        var opt1 = document.createElement('button')
        opt1.innerHTML=1
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById('result').style.color='green';
            document.getElementById('result').innerHTML="Correct Answer"
            count++
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt2 = document.createElement('button')
        opt2.innerHTML=2
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt3 = document.createElement('button')
        opt3.innerHTML=8
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt4 = document.createElement('button')
        opt4.innerHTML=5
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
    }

    else if(document.getElementById("ques").innerHTML === question[3]){
        var opt1 = document.createElement('button')
        opt1.innerHTML=4
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt2 = document.createElement('button')
        opt2.innerHTML=1
        document.body.appendChild(opt2)
        opt2.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt3 = document.createElement('button')
        opt3.innerHTML=7
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt4 = document.createElement('button')
        opt4.innerHTML=3
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById('result').style.color='green';
            document.getElementById('result').innerHTML="Correct Answer"
            count++
            setTimeout(Next, 1000)
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
    }

    else{
        document.getElementById('ques').innerHTML="Quiz ends here"
        Score()
    }
}