function dragDrop() {
	var drag = document.getElementById("drag"),
		drag1 = document.getElementById("drag1");

	drag1.ondragstart = function() {
		event.dataTransfer.setData("Text", drag1.id);
	};
	drag.ondrop = function() {
		event.preventDefault();
		var data = event.dataTransfer.getData("Text");
		event.target.appendChild(document.getElementById(data));
	};
	drag.ondragover = function() {
		event.preventDefault();

	};
	drag.ondragenter = function() {
		event.preventDefault();
	};
}
dragDrop();

	