document.getElementById('h2s').onclick = function() {
    var radio = document.getElementById("h2m");
    radio.checked = false;
}

document.getElementById('h2m').onclick = function() {
    var radio = document.getElementById("h2s");
    radio.checked = false;
}

document.getElementById("convert").addEventListener("click",func);

function func()
{
    const input = document.getElementById('inp').value;

    if(document.getElementById('h2m').checked) //Hours2Minutes
    {
        var temp="";
        if (input < 0)
            alert ("Kindly avoid Negative Values.");
        else if (input == 0)
            temp = temp + "0 Hour = "+ input*60 + " Minutes";
        else if (input > 1)
            temp = temp + input + "  Hours = "+ input*60 + " Minutes";
        else
            temp = temp + input + "  Hour = "+ input*60 + " Minutes";
    }

    if(document.getElementById('h2s').checked) //Hours2Seconds
    {
        var temp="";
        if (input < 0)
            alert ("Kindly avoid Negative Values.");
        else if (input == 0)
            temp = temp + "0 Hour = "+ input*60 + " Seconds";
        else
            temp = temp + input + "  Hour = "+ input*3600 + " Seconds";
    }
    document.getElementById("result").innerHTML = temp;
}