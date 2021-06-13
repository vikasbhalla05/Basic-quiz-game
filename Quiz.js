var question = ['1+4=?','1+7=?','4-3=?','8-5=?'];
var count =0;

function myFunction(){
    var person = prompt("Please Enter your name");
    document.getElementById("demo").innerHTML = "So "+ person+ " we will start the quize when you start:";

    document.getElementById("star").style.display="block";
}

function afunc(){
    document.getElementById("ques").innerHTML=question[0];
    document.getElementById("demo").innerHTML="";
    document.getElementById("skr").innerHTML="";
    document.getElementById("hela").style.display="none";
}

function ans(){
    if(document.getElementById("ques").innerHTML === question[0]){
        var opt1 = document.createElement('button')
        opt1.innerHTML=6
        document.body.appendChild(opt1)
        opt1.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
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
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt3 = document.createElement('button')
        opt1.innerHTML=4
        document.body.appendChild(opt3)
        opt3.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
        var opt4 = document.createElement('button')
        opt1.innerHTML=8
        document.body.appendChild(opt4)
        opt4.onclick = function opta(){
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML="Wrong Answer"
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
        }
    }
}