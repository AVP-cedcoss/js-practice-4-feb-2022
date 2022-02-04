document.getElementById("calculate").addEventListener("click",func);

function func()
{
    const length = document.getElementById('len').value;
    const width = document.getElementById('wid').value;
    let ar = "Area is "+ length*width + " sq. mtr";
    let p = "Perimeter is "+ ((2*(length))+(2*(width))) + " mtr";
    document.getElementById("area").innerHTML = ar;
    document.getElementById("peri").innerHTML = p;
}