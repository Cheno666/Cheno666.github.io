/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-09 10:05:56
 * @version $Id$
 */



document.getElementById("p1").onclick=function(){
	document.getElementById("p1").style.color="red";
	alert("p1");
}
document.getElementById("p2").onclick=function(){
	let today = new Date();
	let x=document.getElementById("date");
	x.innerHTML=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    alert("p2");
}
document.getElementById("p3").onclick=function(){
	document.getElementById("p3").classList.add("fn-active");
	alert("p3");

}
document.getElementById("p4").onclick=function(){
	 var child=document.getElementById("p8");
  document.getElementById("ul").removeChild(child);
  alert("p4");
}
document.getElementById("p5").onclick=function(){
	 window.location.assign("http://www.taobao.com"); 
	 alert("p5");

}
document.getElementById("p6").onclick=function(){
	 var oLi = document.createElement("li");
    oLi.innerHTML = "p9";
    document.getElementById("ul").appendChild(oLi);
    alert("p6");
}
document.getElementById("p7").onclick=function(){
	 var m = document.getElementById("m-box");
	 m.style.width= screen.width;
    alert("p7");
}
document.getElementById("p8").onclick=function(){
	 
    alert("p8");
}
