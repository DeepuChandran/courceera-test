var student = {
    name : "",
    type : "student"
};

document.addEventListener("DOMContentLoaded",contentLoaded)

function contentLoaded(event)
{
    document.getElementById("name").addEventListener("keyup",keyup);
}

function keyup(event)
{
    CalculateNumericOutput();
}

function CalculateNumericOutput()
{
    student.name= document.getElementById("name").value;

    var totalnumberofChar= 0 ;

    for(var i=0;i <= student.name.length;i++)
    {
        totalnumberofChar = totalnumberofChar + 1
    }

    document.getElementById("output").innerText= "Total Char :" + totalnumberofChar;
}