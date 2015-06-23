function draw() {
	var canvas = document.getElementById("canvas");

	if (canvas.getContext) {  //检测getContext是否存在
		var context = canvas.getContext("2d");

		context.shadowOffsetX = 5;
		context.shadowOffsetY = 5;
		context.shadowBlur = 5;
		context.shadowColor = "rgba(0,0,0,0.5)";

		context.fillStyle = "red";
		context.fillRect(0, 0, 150, 75);

		context.fillStyle = "rgba(0, 0, 255, 0.5)";
		context.fillRect(20, 20, 150, 75);

		context.clearRect(40, 40, 10, 10);

		context.beginPath();
		context.arc(200, 200, 99, 0, 2 * Math.PI);

		context.moveTo(294, 200); //把路径移动到内圆上的一点，以避免绘制出多余的线
		context.arc(200, 200, 94, 0, 2 * Math.PI);

		context.moveTo(200, 200);
		context.lineTo(200, 120);

		context.moveTo(200, 200);
		context.lineTo(150, 200);

		context.font = "bold 14px Arial";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText("12", 200, 120);

		context.stroke();

		context.font = "20px Arial";
		context.fillText("hello", 100, 350);
	}
}
draw();