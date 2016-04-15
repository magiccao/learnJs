window.onload = initAll;

function initAll() {	
	document.getElementById("submit").onclick = add;
}

function add() {
	var lop = document.getElementById("lop").value;
	var rop = document.getElementById("rop").value;
	try {
		if (!lop || isNaN(lop) || !rop || isNaN(rop)) {
			throw new Error("Not valid number");
		}
		document.getElementById("result").value = Number(lop) + Number(rop);
	} catch (errMsg) {
		alert(errMsg.message);
	}
}
