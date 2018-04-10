<script language="javascript">
window.onload=function(){
var nav=document.getElementById("tab").getElementsByTagName("li");  
var con=document.getElementById("con").getElementsByTagName("div");
for(i=0;i<nav.length;i++){
    nav[i].index = i;
    nav[i].onmouseover=function(){
        for(var n = 0; n < con.length; n++) {
            con[n].style.display = "none";
            nav[n].className = "";
        }
        con[this.index].style.display = "block"
        nav[this.index].className = "cur";
        }
    
    }
}
</script>
