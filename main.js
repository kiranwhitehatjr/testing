
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "black"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.arc(485, 200, 50 ,0 , 360);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    //addition activity ends
    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    //circle(mouse_x , mouse_y);   
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 360);
ctx.stroke(); 
}

// function circle(mouse_x , mouse_y)
// {

// }

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
