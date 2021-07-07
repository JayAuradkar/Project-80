var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(300,250,60,0,360);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(220,300,60,0,360);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(120,250,60,0,360);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(380,300,60,0,360);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(480,250,60,0,360);
ctx.stroke();