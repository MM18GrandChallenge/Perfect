// JavaScript Document


//back to top start
//var floatPanel = new McFloatPanel();

//function McFloatPanel(){var i=[],s=[],h="className",t="getElementsByClassName",d="length",l="display",C="transition",m="style",B="height",c="scrollTop",k="offsetHeight",a="fixed",e=document,b=document.documentElement,j=function(a,c,b){if(a.addEventListener)a.addEventListener(c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},o=function(c,d){if(typeof getComputedStyle!="undefined")var b=getComputedStyle(c,null);else b=c.currentStyle;return b?b[d]:a},L=function(){var a=e.body;return Math.max(a.scrollHeight,a[k],b.clientHeight,b.scrollHeight,b[k])},O=function(a,c){var b=a[d];while(b--)if(a[b]===c)return true;return false},g=function(b,a){return O(b[h].split(" "),a)},q=function(a,b){if(!g(a,b))if(!a[h])a[h]=b;else a[h]+=" "+b},p=function(a,f){if(a[h]&&g(a,f)){for(var e="",c=a[h].split(" "),b=0,i=c[d];b<i;b++)if(c[b]!==f)e+=c[b]+" ";a[h]=e.replace(/^\s+|\s+$/g,"")}},n=function(){return window.pageYOffset||b[c]},z=function(a){return a.getBoundingClientRect().top},F=function(b){var c=n();if(c>b.oS&&!g(b,a))q(b,a);else g(b,a)&&c<b.oS&&p(b,a)},x=function(){for(var a=0;a<s[d];a++)J(s[a])},J=function(a){if(a.oS){a.fT&&clearTimeout(a.fT);a.fT=setTimeout(function(){if(a.aF)F(a);else y(a)},50)}else y(a)},w=function(d,c,b){p(d,a);c[l]="none";b.position=b.top=""},y=function(c){var j=z(c),f=c[k],e=c[m],d=c.pH[m],h=n();if(j<c.oT&&h>c.oS&&!g(c,a)&&(window.innerHeight||b.clientHeight)>f){c.tP=h+j-c.oT;var p=L();if(f>p-c.tP-f)var i=f;else i=0;d[l]="block";d[C]="none";d[B]=f+1+"px";c.pH[k];d[C]="height .3s";d[B]=i+"px";q(c,a);e.position=a;e.top=c.oT+"px";if(o(c,"position")!=a)d[l]="none"}else if(g(c,a)&&(h<c.tP||h<c.oS)){var s=o(c,"animation");if(c.oS&&c.classList&&s.indexOf("slide-down")!=-1){var r=o(c,"animationDuration");c.classList.remove(a);e.animationDirection="reverse";e.animationDuration="300ms";void c[k];c.classList.add(a);setTimeout(function(){w(c,d,e);e.animationDirection="normal";e.animationDuration=r},300)}else w(c,d,e)}},I=function(){var f=[],c,b;if(e[t]){f=e[t]("float-panel");i=e[t]("slideanim")}else{var k=e.getElementsByTagName("*");c=k[d];while(c--)g(k[c],"float-panel")&&f.push(k[c])}c=f[d];for(var h=0;h<c;h++){b=s[h]=f[h];b.oT=parseInt(b.getAttribute("data-top")||0);b.oS=parseInt(b.getAttribute("data-scroll")||0);if(b.oS>20&&o(b,"position")==a)b.aF=1;b.pH=e.createElement("div");b.pH[m].width=b.offsetWidth+"px";b.pH[m][l]="none";b.parentNode.insertBefore(b.pH,b.nextSibling)}if(s[d]){setTimeout(x,160);j(window,"scroll",x)}},f,D=200,E=0,r,u,H=function(){return window.innerWidth||b.clientWidth||e.body.clientWidth};function K(){if(!r)r=setInterval(function(){var a=e.body;if(a[c]<3)a[c]=0;else a[c]=a[c]/1.3;if(b[c]<3)b[c]=0;else b[c]=b[c]/1.3;if(!n()){clearInterval(r);r=null}},14)}function A(){clearTimeout(u);if(n()>D&&H()>E){u=setTimeout(function(){p(f,"mcOut")},60);f[m][l]="block"}else{q(f,"mcOut");u=setTimeout(function(){f[m][l]="none"},500)}}var N=function(){f=e.getElementById("backtop");if(f){var a=f.getAttribute("data-v-w");if(a){a=a.replace(/\s/g,"").split(",");D=parseInt(a[0]);if(a[d]>1)E=parseInt(a[1])}j(f,"click",K);j(window,"scroll",A);A()}},v=function(){for(var c=n(),e=c+window.innerHeight,g=i[d],b,f,a=0;a<g;a++){b=c+z(i[a]),f=b+i[a][k];if(b<e)q(i[a],"slide");else p(i[a],"slide")}},G=function(){if(i[d]){j(window,"scroll",v);v()}},M=function(){I();N();G()};j(window,"load",M);j(document,"touchstart",function(){})}

//back to top end

function myFunction() {
    var x = document.getElementById('dt_top_hover_content_mk');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

  $(function(){    
   $("#dt_top_bar_icon_item_c_me_pic_id").click(function(){
        $("#me_explore_extend_id").toggle();
        })
  });

  $(function(){    
    $("#dt_top_bar_icon_item_a_id").click(function(){
        $("#dt_search_area_id").toggle();
        $("#dt_menu_txt_area_id").css("display","none");
        $("#dt_top_bar_icon_item_a_id").css("display","none");
        $("#dt_top_bar_icon_item_a_close_s_id").css("display","inline-block");   
       })   
  });

  $(function(){    
    $("#btn_explore_id").click(function(){
        $("#explore_part_id").toggle();
        })   
  });

  $(function(){    
    $("#dt_top_bar_icon_item_a_close_s_id").click(function(){
        $("#dt_search_area_id").toggle();
         $("#dt_menu_txt_area_id").css("display","initial");
         $("#dt_top_bar_icon_item_a_close_s_id").css("display","none");
         $("#dt_top_bar_icon_item_a_id").css("display","inline-block");
        })   
  });

  $(function(){    
    $("#dt_top_bar_info_country_id").click(function(){
        $("#dt_top_bar_flag_dropdown_id").toggle();
        //$("#dt_top_bar_icon_item_c_me_pic_id").css("z-index","-1");
        $("#dt_top_bar_icon_item_c_me_pic_id").toggle();
        //$("#dt_menu_txt_area_id").toggle();
        
        })   
  });

$(function() {
    // Add active class to the current button (highlight it)
    $('ul li a').click(function () {
        console.log("ul li a click!!: ", $('li a'));
        console.log($(this));
        $('li a').removeClass("menu-active");
        $(this).addClass("menu-active");
        console.log($(this));
    });
});

function setActiveListElements(event){
    var windowPos = $(window).scrollTop();
    //console.log("position: ", windowPos);
    /*
    console.log($("#item1").position().top - windowPos);
    console.log($("#item3").position().top - windowPos - $("#item2").height());
    console.log($("#item3").position().top - windowPos);
    console.log($("#item4").position().top - windowPos);
    console.log($("#item5").position().top - windowPos);
    console.log($("#item6").position().top - windowPos);
    console.log($("#item7").position().top - windowPos);
    console.log($("#item8").position().top - windowPos);
    console.log($("#item9").position().top - windowPos);
    console.log($("#item10").position().top - windowPos);
    console.log($("#item11").position().top - windowPos);
    */
    /*
    console.log($("#item1").position().top - windowPos);
    console.log( "222: ", ($("#item1m").height()/2));
    console.log($("#item3").position().top - windowPos - ($("#item2").height() / 2));
    console.log($("#item4").position().top - windowPos - ($("#item3").height() / 2));
    console.log($("#item5").position().top - windowPos - ($("#item4").height() / 2));
    console.log($("#item6").position().top - windowPos - ($("#item5").height() / 2));
    console.log($("#item7").position().top - windowPos - ($("#item6").height() / 2));
    console.log($("#item8").position().top - windowPos - ($("#item7").height() / 2));
    console.log($("#item9").position().top - windowPos - ($("#item8").height() / 2));
    console.log($("#item11").position().top - windowPos - ($("#item10").height() / 2));
*/
    if (windowPos >= $("#item11").position().top - windowPos - ($("#item10").height() / 2)) { // leader board
        $('li a').removeClass("menu-active");
        $('#menu11').addClass("menu-active");
    } else if (windowPos >= $("#item9").position().top - windowPos - ($("#item8").height() / 2)) { // Task Description
        $('li a').removeClass("menu-active");
        $('#menu9').addClass("menu-active");
    } else if (windowPos >= $("#item8").position().top - windowPos - ($("#item7").height() / 2)) { // Dataset
        $('li a').removeClass("menu-active");
        $('#menu8').addClass("menu-active");
    } else if (windowPos >= $("#item7").position().top - windowPos - ($("#item6").height() / 2)) { // Task Chairs & Main Contact
        $('li a').removeClass("menu-active");
        $('#menu7').addClass("menu-active");
    } else if (windowPos >= $("#item6").position().top - windowPos - ($("#item5").height() / 2)) { // Sponsors
        $('li a').removeClass("menu-active");
        $('#menu6').addClass("menu-active");
    } else if (windowPos >= $("#item5").position().top - windowPos - ($("#item4").height() / 2)) { // Main Organizers
        $('li a').removeClass("menu-active");
        $('#menu5').addClass("menu-active");
    } else if (windowPos >= $("#item4").position().top - windowPos - ($("#item3").height() / 2)) { // Citation
        $('li a').removeClass("menu-active");
        $('#menu4').addClass("menu-active");
    } else if (windowPos >= $("#item3").position().top - windowPos - ($("#item2").height() / 2)) { // Timeline
        $('li a').removeClass("menu-active");
        $('#menu3').addClass("menu-active");
    } else if (windowPos >= ($("#item1m").height()/2)) { // Participation
        $('li a').removeClass("menu-active");
        $('#menu2').addClass("menu-active");
    } else { // Overview
        $('li a').removeClass("menu-active");
        $('#menu1').addClass("menu-active");
    }
    /*
    if (windowPos >= 7250) { // leader board
        $('li a').removeClass("menu-active");
        $('#menu11').addClass("menu-active");
    } else if (windowPos >= 5800) { // Task Description
        $('li a').removeClass("menu-active");
        $('#menu9').addClass("menu-active");
    } else if (windowPos >= 4800) { // Dataset
        $('li a').removeClass("menu-active");
        $('#menu8').addClass("menu-active");
    } else if (windowPos >= 4160) { // Task Chairs & Main Contact
        $('li a').removeClass("menu-active");
        $('#menu7').addClass("menu-active");
    } else if (windowPos >= 3600) { // Sponsors
        $('li a').removeClass("menu-active");
        $('#menu6').addClass("menu-active");
    } else if (windowPos >= 2900) { // Main Organizers
        $('li a').removeClass("menu-active");
        $('#menu5').addClass("menu-active");
    } else if (windowPos >= 2300) { // Citation
        $('li a').removeClass("menu-active");
        $('#menu4').addClass("menu-active");
    } else if (windowPos >= 1500) { // Timeline
        $('li a').removeClass("menu-active");
        $('#menu3').addClass("menu-active");
    } else if (windowPos >= 600) { // Participation
        $('li a').removeClass("menu-active");
        $('#menu2').addClass("menu-active");
    } else { // Overview
        $('li a').removeClass("menu-active");
        $('#menu1').addClass("menu-active");
    }
    */
}

$(window).scroll(function() {
    // Call function
    setActiveListElements();
});

