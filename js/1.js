//slider
var index=0;
function plusSlajd(n){
	index+=n;
	prikaziSlajd(index);
}
function trenutniSlajd(n){
	index=n;
	prikaziSlajd(index);
}
function prikaziSlajd(n){
	var x=document.getElementsByClassName("slajder-slika");
	var tekst=document.getElementsByClassName("tekst");
	if(n>x.length){
		index=1;
	}
	
	if(n<1){
		index=x.length;
	}
	for(var i=0; i<x.length; i++){
		x[i].style.display="none";
		tekst[i].style.display="none";
	}
	x[index-1].style.display="block";
	tekst[index-1].style.display="block";
}
slajd();
function slajd(){
	plusSlajd(1);
	setTimeout(slajd,3500);
}
function slajdSlika(){
	var w=window.innerWidth+"px";
	var h=window.innerHeight+"px";
				
	var x=document.getElementsByClassName("slajder-slika");
	for(var i=0;i<x.length;i++){
		x[i].style.width=w;
		x[i].style.height=h;
	}
};

//---------------------------------------------------------------
