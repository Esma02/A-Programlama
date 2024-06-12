var svg = document.getElementById("svg-turkiye-haritasi");
var turkeyText = document.getElementById("diyarbakir");
var arrowLine = null;
var arrowLine2 = null;
var arrowLine3 = null;
var arrowLine4 = null;
var arrowLine5 = null;
var text1 = null;
var text2 = null;
var text3 = null;
var text4 = null;
var text5 = null;
var clicked = false;

turkeyText.addEventListener("click", function(event) {
    if (!clicked) {
        var point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        var svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
        var adiyamanX = 780;var adiyamanY= 280;
        var afyonX = 250;   var afyonY = 250;
        var aksarayX = 420; var aksarayY = 270;
        var amasyaX=520;    var amasyaY=120;
        var ankaraX=350;    var ankaraY=170;
        var antalyaX=270;   var antalyaY=350;
        var artvinX=830;    var artvinY=80;
        var aydınX=110;     var aydınY=300;
        var balıkesirX=110; var balıkesirY=155;
        var bartinX=360;    var bartinY=50;
        var boluX=300;      var boluY=120;
        var burdurX=210;    var burdurY=320;
        var bursaX=185;     var bursaY=130;
        var canakkaleX=70;  var canakkaleY=130;
        var corumX=460;     var corumY=130;
        var denizliX=165;   var denizliY=300;
        var erzincanX=720;  var erzincanY=180;
        var erzurumX=830;   var erzurumY=160;
        var eskişehirX=270; var eskişehirY=180;
        var ispartaX=260;   var ispartaY=300;
        var istanbulX=180;  var istanbulY=80;
        var izmirX=80;      var izmirY=260;
        var karamanX=380;   var karamanY=360;
        var kayseriX=520;   var kayseriY=250;
        var kırklareliX=95; var kırklareliY=30;
        var kirsehirX=440;  var kirsehirY=210;
        var kocaeliX=220;   var kocaeliY=90;
        var konyaX=350;     var konyaY=300;
        var manisaX=110;    var manisaY=230;
        var mardinX=790;    var mardinY=335;
        var mersinX=400;    var mersinY=390;
        var muglaX=140;     var muglaY=350;
        var nevsehirX=460;  var nevsehirY=250;
        var orduX=610;      var orduY=100;
        var sakaryaX=255;   var sakaryaY=100;
        var sinopX=480;     var sinopY=50;
        var yalovaX=185;    var yalovaY=110;
        var yozgatX=500;    var yozgatY=180;
        var agriX=910;      var agriY=170;
        var bayburtX=750;   var bayburtY=140;
        var bilecikX=230;   var bilecikY=150;
        var bitlisX=860;    var bitlisY=250;
        var cankiriX=400;   var cankiriY=110;
        var duzceX=280;     var duzceY=100;
        var giresunX=670;   var giresunY=120;
         var hakkariX=970;   var hakkariY=310;
        var ıgdırX=945;     var ıgdırY=150;
        var sivasX=600;     var sivasY=180;
        var tunceliX=720;   var tunceliY=210;
        var vanX=950;       var vanY=250;
        var ardahanX=880;   var ardahanY=80;



        arrowLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine.setAttribute("x1", adiyamanX);
        arrowLine.setAttribute("y1", adiyamanY);
        arrowLine.setAttribute("x2", afyonX);
        arrowLine.setAttribute("y2", afyonY);
        arrowLine.setAttribute("stroke", "blue");
        arrowLine.setAttribute("stroke-width", "1");

        text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text1.setAttribute("x", 250);
        text1.setAttribute("y",250);
        text1.setAttribute("fill", "aqua");
        text1.setAttribute("font-size","12px");
        text1.textContent = "745";

        arrowLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine2.setAttribute("x1", adiyamanX);
        arrowLine2.setAttribute("y1", adiyamanY);
        arrowLine2.setAttribute("x2", aksarayX);
        arrowLine2.setAttribute("y2", aksarayY);
        arrowLine2.setAttribute("stroke", "blue");
        arrowLine2.setAttribute("stroke-width", "1");

        text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", 420);
        text2.setAttribute("y", 270);
        text2.setAttribute("fill", "aqua");
        text2.setAttribute("font-size","12px");
        text2.textContent = "66";


        arrowLine3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine3.setAttribute("x1", adiyamanX);
        arrowLine3.setAttribute("y1", adiyamanY);
        arrowLine3.setAttribute("x2", amasyaX);
        arrowLine3.setAttribute("y2", amasyaY);
        arrowLine3.setAttribute("stroke", "blue");
        arrowLine3.setAttribute("stroke-width", "1");

        text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text3.setAttribute("x", 520);
        text3.setAttribute("y", 120);
        text3.setAttribute("fill", "aqua");
        text3.setAttribute("font-size","12px");
        text3.textContent = "75";


        arrowLine4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine4.setAttribute("x1", adiyamanX);
        arrowLine4.setAttribute("y1", adiyamanY);
        arrowLine4.setAttribute("x2", ankaraX);
        arrowLine4.setAttribute("y2", ankaraY);
        arrowLine4.setAttribute("stroke", "blue");
        arrowLine4.setAttribute("stroke-width", "1");

        text4 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text4.setAttribute("x", 350);
        text4.setAttribute("y", 170);
        text4.setAttribute("fill", "aqua");
        text4.setAttribute("font-size","12px");
        text4.textContent = "479";


        arrowLine5 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine5.setAttribute("x1", adiyamanX);
        arrowLine5.setAttribute("y1", adiyamanY);
        arrowLine5.setAttribute("x2", antalyaX);
        arrowLine5.setAttribute("y2", antalyaY);
        arrowLine5.setAttribute("stroke", "blue");
        arrowLine5.setAttribute("stroke-width", "1");

        text5 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text5.setAttribute("x", 270);
        text5.setAttribute("y", 350);
        text5.setAttribute("fill", "aqua");
        text5.setAttribute("font-size","12px");
        text5.textContent = "7900";


        arrowLine6 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine6.setAttribute("x1", adiyamanX);
        arrowLine6.setAttribute("y1", adiyamanY);
        arrowLine6.setAttribute("x2", artvinX);
        arrowLine6.setAttribute("y2", artvinY);
        arrowLine6.setAttribute("stroke", "blue");
        arrowLine6.setAttribute("stroke-width", "1");

        text6 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text6.setAttribute("x", 830);
        text6.setAttribute("y", 80);
        text6.setAttribute("fill", "aqua");
        text6.setAttribute("font-size","12px");
        text6.textContent = "56";


    
        arrowLine7 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine7.setAttribute("x1", adiyamanX);
        arrowLine7.setAttribute("y1", adiyamanY);
        arrowLine7.setAttribute("x2", aydınX);
        arrowLine7.setAttribute("y2", aydınY);
        arrowLine7.setAttribute("stroke", "blue");
        arrowLine7.setAttribute("stroke-width", "1");

        text7 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text7.setAttribute("x", 110);
        text7.setAttribute("y", 300);
        text7.setAttribute("fill", "aqua");
        text7.setAttribute("font-size","12px");
        text7.textContent = "490";


        arrowLine8 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine8.setAttribute("x1", adiyamanX);
        arrowLine8.setAttribute("y1", adiyamanY);
        arrowLine8.setAttribute("x2", balıkesirX);
        arrowLine8.setAttribute("y2", balıkesirY);
        arrowLine8.setAttribute("stroke", "blue");
        arrowLine8.setAttribute("stroke-width", "1");

        text8 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text8.setAttribute("x", 110);
        text8.setAttribute("y", 155);
        text8.setAttribute("fill", "aqua");
        text8.setAttribute("font-size","12px");
        text8.textContent = "913";


        arrowLine9 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine9.setAttribute("x1", adiyamanX);
        arrowLine9.setAttribute("y1", adiyamanY);
        arrowLine9.setAttribute("x2", bartinX);
        arrowLine9.setAttribute("y2", bartinY);
        arrowLine9.setAttribute("stroke", "blue");
        arrowLine9.setAttribute("stroke-width", "1");

        text9 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text9.setAttribute("x", 360);
        text9.setAttribute("y", 50);
        text9.setAttribute("fill", "aqua");
        text9.setAttribute("font-size","12px");
        text9.textContent = "200";


        arrowLine10 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine10.setAttribute("x1", adiyamanX);
        arrowLine10.setAttribute("y1", adiyamanY);
        arrowLine10.setAttribute("x2", ardahanX);
        arrowLine10.setAttribute("y2", ardahanY);
        arrowLine10.setAttribute("stroke", "blue");
        arrowLine10.setAttribute("stroke-width", "1");

        text10 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text10.setAttribute("x", 880);
        text10.setAttribute("y", 80);
        text10.setAttribute("fill", "aqua");
        text10.setAttribute("font-size","12px");
        text10.textContent = "12";

        arrowLine11 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine11.setAttribute("x1", adiyamanX);
        arrowLine11.setAttribute("y1", adiyamanY);
        arrowLine11.setAttribute("x2", boluX);
        arrowLine11.setAttribute("y2", boluY);
        arrowLine11.setAttribute("stroke", "blue");
        arrowLine11.setAttribute("stroke-width", "1");

        text11 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text11.setAttribute("x", 300);
        text11.setAttribute("y", 120);
        text11.setAttribute("fill", "aqua");
        text11.setAttribute("font-size","12px");
        text11.textContent = "146";

        arrowLine12 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine12.setAttribute("x1", adiyamanX);
        arrowLine12.setAttribute("y1", adiyamanY);
        arrowLine12.setAttribute("x2", burdurX);
        arrowLine12.setAttribute("y2", burdurY);
        arrowLine12.setAttribute("stroke", "blue");
        arrowLine12.setAttribute("stroke-width", "1");

        text12 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text12.setAttribute("x", 210);
        text12.setAttribute("y", 320);
        text12.setAttribute("fill", "aqua");
        text12.setAttribute("font-size","12px");
        text12.textContent = "202";


        arrowLine12 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine12.setAttribute("x1", adiyamanX);
        arrowLine12.setAttribute("y1", adiyamanY);
        arrowLine12.setAttribute("x2", bursaX);
        arrowLine12.setAttribute("y2", bursaY);
        arrowLine12.setAttribute("stroke", "blue");
        arrowLine12.setAttribute("stroke-width", "1");

        text12 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text12.setAttribute("x", 185);
        text12.setAttribute("y", 130);
        text12.setAttribute("fill", "aqua");
        text12.setAttribute("font-size","12px");
        text12.textContent = "2450";



        arrowLine13 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine13.setAttribute("x1", adiyamanX);
        arrowLine13.setAttribute("y1", adiyamanY);
        arrowLine13.setAttribute("x2", canakkaleX);
        arrowLine13.setAttribute("y2", canakkaleY);
        arrowLine13.setAttribute("stroke", "blue");
        arrowLine13.setAttribute("stroke-width", "1");

        text13 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text13.setAttribute("x", 70);
        text13.setAttribute("y", 130);
        text13.setAttribute("fill", "aqua");
        text13.setAttribute("font-size","12px");
        text13.textContent = "207";


        arrowLine14 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine14.setAttribute("x1", adiyamanX);
        arrowLine14.setAttribute("y1", adiyamanY);
        arrowLine14.setAttribute("x2", corumX);
        arrowLine14.setAttribute("y2", corumY);
        arrowLine14.setAttribute("stroke", "blue");
        arrowLine14.setAttribute("stroke-width", "1");

        text14 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text14.setAttribute("x", 460);
        text14.setAttribute("y", 130);
        text14.setAttribute("fill", "aqua");
        text14.setAttribute("font-size","12px");
        text14.textContent = "157";



        arrowLine15 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine15.setAttribute("x1", adiyamanX);
        arrowLine15.setAttribute("y1", adiyamanY);
        arrowLine15.setAttribute("x2", erzincanX);
        arrowLine15.setAttribute("y2", erzincanY);
        arrowLine15.setAttribute("stroke", "blue");
        arrowLine15.setAttribute("stroke-width", "1");

        text15 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text15.setAttribute("x", 720);
        text15.setAttribute("y", 180);
        text15.setAttribute("fill", "aqua");
        text15.setAttribute("font-size","12px");
        text15.textContent = "858";



        arrowLine16 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine16.setAttribute("x1", adiyamanX);
        arrowLine16.setAttribute("y1", adiyamanY);
        arrowLine16.setAttribute("x2", erzurumX);
        arrowLine16.setAttribute("y2", erzurumY);
        arrowLine16.setAttribute("stroke", "blue");
        arrowLine16.setAttribute("stroke-width", "1");

        text16 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text16.setAttribute("x", 830);
        text16.setAttribute("y", 160);
        text16.setAttribute("fill", "aqua");
        text16.setAttribute("font-size","12px");
        text16.textContent = "417";



        arrowLine17 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine17.setAttribute("x1", adiyamanX);
        arrowLine17.setAttribute("y1", adiyamanY);
        arrowLine17.setAttribute("x2", eskişehirX);
        arrowLine17.setAttribute("y2", eskişehirY);
        arrowLine17.setAttribute("stroke", "blue");
        arrowLine17.setAttribute("stroke-width", "1");

        text17 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text17.setAttribute("x", 270);
        text17.setAttribute("y", 180);
        text17.setAttribute("fill", "aqua");
        text17.setAttribute("font-size","12px");
        text17.textContent = "264";




        arrowLine18 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine18.setAttribute("x1", adiyamanX);
        arrowLine18.setAttribute("y1", adiyamanY);
        arrowLine18.setAttribute("x2", denizliX);
        arrowLine18.setAttribute("y2", denizliY);
        arrowLine18.setAttribute("stroke", "blue");
        arrowLine18.setAttribute("stroke-width", "1");

        text18 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text18.setAttribute("x", 165);
        text18.setAttribute("y", 300);
        text18.setAttribute("fill", "aqua");
        text18.setAttribute("font-size","12px");
        text18.textContent = "345";

        arrowLine19 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine19.setAttribute("x1", adiyamanX);
        arrowLine19.setAttribute("y1", adiyamanY);
        arrowLine19.setAttribute("x2", ispartaX);
        arrowLine19.setAttribute("y2", ispartaY);
        arrowLine19.setAttribute("stroke", "blue");
        arrowLine19.setAttribute("stroke-width", "1");

        text19 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text19.setAttribute("x", 260);
        text19.setAttribute("y", 300);
        text19.setAttribute("fill", "aqua");
        text19.setAttribute("font-size","12px");
        text19.textContent = "243";


        arrowLine20 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine20.setAttribute("x1", adiyamanX);
        arrowLine20.setAttribute("y1", adiyamanY);
        arrowLine20.setAttribute("x2", istanbulX);
        arrowLine20.setAttribute("y2", istanbulY);
        arrowLine20.setAttribute("stroke", "blue");
        arrowLine20.setAttribute("stroke-width", "1");

        text20 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text20.setAttribute("x", 180);
        text20.setAttribute("y", 80);
        text20.setAttribute("fill", "aqua");
        text20.setAttribute("font-size","12px");
        text20.textContent = "259";



        arrowLine21 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine21.setAttribute("x1", adiyamanX);
        arrowLine21.setAttribute("y1", adiyamanY);
        arrowLine21.setAttribute("x2", izmirX);
        arrowLine21.setAttribute("y2", izmirY);
        arrowLine21.setAttribute("stroke", "blue");
        arrowLine21.setAttribute("stroke-width", "1");

        text21 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text21.setAttribute("x", 80);
        text21.setAttribute("y", 260);
        text21.setAttribute("fill", "aqua");
        text21.setAttribute("font-size","12px");
        text21.textContent = "800";



        arrowLine22 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine22.setAttribute("x1", adiyamanX);
        arrowLine22.setAttribute("y1", adiyamanY);
        arrowLine22.setAttribute("x2", karamanX);
        arrowLine22.setAttribute("y2", karamanY);
        arrowLine22.setAttribute("stroke", "blue");
        arrowLine22.setAttribute("stroke-width", "1");

        text22 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text22.setAttribute("x", 380);
        text22.setAttribute("y", 360);
        text22.setAttribute("fill", "aqua");
        text22.setAttribute("font-size","12px");
        text22.textContent = "300";



        arrowLine23 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine23.setAttribute("x1", adiyamanX);
        arrowLine23.setAttribute("y1", adiyamanY);
        arrowLine23.setAttribute("x2", kayseriX);
        arrowLine23.setAttribute("y2", kayseriY);
        arrowLine23.setAttribute("stroke", "blue");
        arrowLine23.setAttribute("stroke-width", "1");

        text23 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text23.setAttribute("x", 520);
        text23.setAttribute("y", 250);
        text23.setAttribute("fill", "aqua");
        text23.setAttribute("font-size","12px");
        text23.textContent = "279";



        arrowLine25 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine25.setAttribute("x1", adiyamanX);
        arrowLine25.setAttribute("y1", adiyamanY);
        arrowLine25.setAttribute("x2", kırklareliX);
        arrowLine25.setAttribute("y2", kırklareliY);
        arrowLine25.setAttribute("stroke", "blue");
        arrowLine25.setAttribute("stroke-width", "1");

        text25 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text25.setAttribute("x", 95);
        text25.setAttribute("y", 30);
        text25.setAttribute("fill", "aqua");
        text25.setAttribute("font-size","12px");
        text25.textContent = "675";




        arrowLine26 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine26.setAttribute("x1", adiyamanX);
        arrowLine26.setAttribute("y1", adiyamanY);
        arrowLine26.setAttribute("x2", kirsehirX);
        arrowLine26.setAttribute("y2", kirsehirY);
        arrowLine26.setAttribute("stroke", "blue");
        arrowLine26.setAttribute("stroke-width", "1");

        text26 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text26.setAttribute("x", 440);
        text26.setAttribute("y", 210);
        text26.setAttribute("fill", "aqua");
        text26.setAttribute("font-size","12px");
        text26.textContent = "661";




        arrowLine27 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine27.setAttribute("x1", adiyamanX);
        arrowLine27.setAttribute("y1", adiyamanY);
        arrowLine27.setAttribute("x2", kocaeliX);
        arrowLine27.setAttribute("y2", kocaeliY);
        arrowLine27.setAttribute("stroke", "blue");
        arrowLine27.setAttribute("stroke-width", "1");

        text27 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text27.setAttribute("x", 220);
        text27.setAttribute("y", 90);
        text27.setAttribute("fill", "aqua");
        text27.setAttribute("font-size","12px");
        text27.textContent = "510";




        arrowLine28 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine28.setAttribute("x1", adiyamanX);
        arrowLine28.setAttribute("y1", adiyamanY);
        arrowLine28.setAttribute("x2", konyaX);
        arrowLine28.setAttribute("y2", konyaY);
        arrowLine28.setAttribute("stroke", "blue");
        arrowLine28.setAttribute("stroke-width", "1");

        text28 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text28.setAttribute("x", 350);
        text28.setAttribute("y", 300);
        text28.setAttribute("fill", "aqua");
        text28.setAttribute("font-size","12px");
        text28.textContent = "500";




        arrowLine30 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine30.setAttribute("x1", adiyamanX);
        arrowLine30.setAttribute("y1", adiyamanY);
        arrowLine30.setAttribute("x2", manisaX);
        arrowLine30.setAttribute("y2", manisaY);
        arrowLine30.setAttribute("stroke", "blue");
        arrowLine30.setAttribute("stroke-width", "1");

        text30 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text30.setAttribute("x", 110);
        text30.setAttribute("y", 230);
        text30.setAttribute("fill", "aqua");
        text30.setAttribute("font-size","12px");
        text30.textContent = "202";




        arrowLine31 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine31.setAttribute("x1", adiyamanX);
        arrowLine31.setAttribute("y1", adiyamanY);
        arrowLine31.setAttribute("x2", mardinX);
        arrowLine31.setAttribute("y2", mardinY);
        arrowLine31.setAttribute("stroke", "blue");
        arrowLine31.setAttribute("stroke-width", "1");

        text31 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text31.setAttribute("x", 790);
        text31.setAttribute("y", 335);
        text31.setAttribute("fill", "aqua");
        text31.setAttribute("font-size","12px");
        text31.textContent = "1264";



        arrowLine32 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine32.setAttribute("x1", adiyamanX);
        arrowLine32.setAttribute("y1", adiyamanY);
        arrowLine32.setAttribute("x2", mersinX);
        arrowLine32.setAttribute("y2", mersinY);
        arrowLine32.setAttribute("stroke", "blue");
        arrowLine32.setAttribute("stroke-width", "1");

        text32 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text32.setAttribute("x", 400);
        text32.setAttribute("y", 390);
        text32.setAttribute("fill", "aqua");
        text32.setAttribute("font-size","12px");
        text32.textContent = "600";



        arrowLine33 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine33.setAttribute("x1", adiyamanX);
        arrowLine33.setAttribute("y1", adiyamanY);
        arrowLine33.setAttribute("x2", muglaX);
        arrowLine33.setAttribute("y2", muglaY);
        arrowLine33.setAttribute("stroke", "blue");
        arrowLine33.setAttribute("stroke-width", "1");

        text33 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text33.setAttribute("x", 140);
        text33.setAttribute("y", 350);
        text33.setAttribute("fill", "aqua");
        text33.setAttribute("font-size","12px");
        text33.textContent = "347";

        arrowLine34 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine34.setAttribute("x1", adiyamanX);
        arrowLine34.setAttribute("y1", adiyamanY);
        arrowLine34.setAttribute("x2", nevsehirX);
        arrowLine34.setAttribute("y2", nevsehirY);
        arrowLine34.setAttribute("stroke", "blue");
        arrowLine34.setAttribute("stroke-width", "1");

        text34 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text34.setAttribute("x", 460);
        text34.setAttribute("y", 250);
        text34.setAttribute("fill", "aqua");
        text34.setAttribute("font-size","12px");
        text34.textContent = "210";

        arrowLine36 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine36.setAttribute("x1", adiyamanX);
        arrowLine36.setAttribute("y1", adiyamanY);
        arrowLine36.setAttribute("x2", orduX);
        arrowLine36.setAttribute("y2", orduY);
        arrowLine36.setAttribute("stroke", "blue");
        arrowLine36.setAttribute("stroke-width", "1");

        text36 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text36.setAttribute("x", 610);
        text36.setAttribute("y", 100);
        text36.setAttribute("fill", "aqua");
        text36.setAttribute("font-size","12px");
        text36.textContent = "234";

        arrowLine37 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine37.setAttribute("x1", adiyamanX);
        arrowLine37.setAttribute("y1", adiyamanY);
        arrowLine37.setAttribute("x2", sakaryaX);
        arrowLine37.setAttribute("y2", sakaryaY);
        arrowLine37.setAttribute("stroke", "blue");
        arrowLine37.setAttribute("stroke-width", "1");

        text37 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text37.setAttribute("x", 255);
        text37.setAttribute("y", 100);
        text37.setAttribute("fill", "aqua");
        text37.setAttribute("font-size","12px");
        text37.textContent = "250";



        arrowLine38 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine38.setAttribute("x1", adiyamanX);
        arrowLine38.setAttribute("y1", adiyamanY);
        arrowLine38.setAttribute("x2", sinopX);
        arrowLine38.setAttribute("y2", sinopY);
        arrowLine38.setAttribute("stroke", "blue");
        arrowLine38.setAttribute("stroke-width", "1");

        text38 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text38.setAttribute("x", 480);
        text38.setAttribute("y", 50);
        text38.setAttribute("fill", "aqua");
        text38.setAttribute("font-size","12px");
        text38.textContent = "275";

        arrowLine40 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine40.setAttribute("x1", adiyamanX);
        arrowLine40.setAttribute("y1", adiyamanY);
        arrowLine40.setAttribute("x2", yalovaX);
        arrowLine40.setAttribute("y2", yalovaY);
        arrowLine40.setAttribute("stroke", "blue");
        arrowLine40.setAttribute("stroke-width", "1");

        text40 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text40.setAttribute("x", 185);
        text40.setAttribute("y", 110);
        text40.setAttribute("fill", "aqua");
        text40.setAttribute("font-size","12px");
        text40.textContent = "60";




        arrowLine41 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine41.setAttribute("x1", adiyamanX);
        arrowLine41.setAttribute("y1", adiyamanY);
        arrowLine41.setAttribute("x2", yozgatX);
        arrowLine41.setAttribute("y2", yozgatY);
        arrowLine41.setAttribute("stroke", "blue");
        arrowLine41.setAttribute("stroke-width", "1");

        text41 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text41.setAttribute("x", 500);
        text41.setAttribute("y", 180);
        text41.setAttribute("fill", "aqua");
        text41.setAttribute("font-size","12px");
        text41.textContent = "210";


        arrowLine42 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine42.setAttribute("x1", adiyamanX);
        arrowLine42.setAttribute("y1", adiyamanY);
        arrowLine42.setAttribute("x2", agriX);
        arrowLine42.setAttribute("y2", agriY);
        arrowLine42.setAttribute("stroke", "blue");
        arrowLine42.setAttribute("stroke-width", "1");

        text42 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text42.setAttribute("x", 910);
        text42.setAttribute("y", 170);
        text42.setAttribute("fill", "aqua");
        text42.setAttribute("font-size","12px");
        text42.textContent = "398";

   
        arrowLine44 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine44.setAttribute("x1", adiyamanX);
        arrowLine44.setAttribute("y1", adiyamanY);
        arrowLine44.setAttribute("x2", bayburtX);
        arrowLine44.setAttribute("y2", bayburtY);
        arrowLine44.setAttribute("stroke", "blue");
        arrowLine44.setAttribute("stroke-width", "1");

        text44 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text44.setAttribute("x", 750);
        text44.setAttribute("y", 140);
        text44.setAttribute("fill", "aqua");
        text44.setAttribute("font-size","12px");
        text44.textContent = "140";

        arrowLine45 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine45.setAttribute("x1", adiyamanX);
        arrowLine45.setAttribute("y1", adiyamanY);
        arrowLine45.setAttribute("x2", bilecikX);
        arrowLine45.setAttribute("y2", bilecikY);
        arrowLine45.setAttribute("stroke", "blue");
        arrowLine45.setAttribute("stroke-width", "1");

        text45 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text45.setAttribute("x", 230);
        text45.setAttribute("y", 150);
        text45.setAttribute("fill", "aqua");
        text45.setAttribute("font-size","12px");
        text45.textContent = "157";

        arrowLine46 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine46.setAttribute("x1", adiyamanX);
        arrowLine46.setAttribute("y1", adiyamanY);
        arrowLine46.setAttribute("x2", bitlisX);
        arrowLine46.setAttribute("y2", bitlisY);
        arrowLine46.setAttribute("stroke", "blue");
        arrowLine46.setAttribute("stroke-width", "1");

        text46 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text46.setAttribute("x", 860);
        text46.setAttribute("y", 250);
        text46.setAttribute("fill", "aqua");
        text46.setAttribute("font-size","12px");
        text46.textContent = "99";

        arrowLine47 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine47.setAttribute("x1", adiyamanX);
        arrowLine47.setAttribute("y1", adiyamanY);
        arrowLine47.setAttribute("x2", cankiriX);
        arrowLine47.setAttribute("y2", cankiriY);
        arrowLine47.setAttribute("stroke", "blue");
        arrowLine47.setAttribute("stroke-width", "1");

        text47 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text47.setAttribute("x", 400);
        text47.setAttribute("y", 110);
        text47.setAttribute("fill", "aqua");
        text47.setAttribute("font-size","12px");
        text47.textContent = "143";

        arrowLine48 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine48.setAttribute("x1", adiyamanX);
        arrowLine48.setAttribute("y1", adiyamanY);
        arrowLine48.setAttribute("x2", duzceX);
        arrowLine48.setAttribute("y2", duzceY);
        arrowLine48.setAttribute("stroke", "blue");
        arrowLine48.setAttribute("stroke-width", "1");

        text48 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text48.setAttribute("x", 280);
        text48.setAttribute("y", 100);
        text48.setAttribute("fill", "aqua");
        text48.setAttribute("font-size","12px");
        text48.textContent = "314";


        arrowLine51 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine51.setAttribute("x1", adiyamanX);
        arrowLine51.setAttribute("y1", adiyamanY);
        arrowLine51.setAttribute("x2", giresunX);
        arrowLine51.setAttribute("y2", giresunY);
        arrowLine51.setAttribute("stroke", "blue");
        arrowLine51.setAttribute("stroke-width", "1");

        text51 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text51.setAttribute("x", 670);
        text51.setAttribute("y", 120);
        text51.setAttribute("fill", "aqua");
        text51.setAttribute("font-size","12px");
        text51.textContent = "159";

        arrowLine53 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine53.setAttribute("x1", adiyamanX);
        arrowLine53.setAttribute("y1", adiyamanY);
        arrowLine53.setAttribute("x2", hakkariX);
        arrowLine53.setAttribute("y2", hakkariY);
        arrowLine53.setAttribute("stroke", "blue");
        arrowLine53.setAttribute("stroke-width", "1");

        text53 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text53.setAttribute("x", 970);
        text53.setAttribute("y", 310);
        text53.setAttribute("fill", "aqua");
        text53.setAttribute("font-size","12px");
        text53.textContent = "546";

        arrowLine54 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine54.setAttribute("x1", adiyamanX);
        arrowLine54.setAttribute("y1", adiyamanY);
        arrowLine54.setAttribute("x2", ıgdırX);
        arrowLine54.setAttribute("y2", ıgdırY);
        arrowLine54.setAttribute("stroke", "blue");
        arrowLine54.setAttribute("stroke-width", "1");

        text54 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text54.setAttribute("x", 945);
        text54.setAttribute("y", 150);
        text54.setAttribute("fill", "aqua");
        text54.setAttribute("font-size","12px");
        text54.textContent = "558";

   
        arrowLine60 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine60.setAttribute("x1", adiyamanX);
        arrowLine60.setAttribute("y1", adiyamanY);
        arrowLine60.setAttribute("x2", sivasX);
        arrowLine60.setAttribute("y2", sivasY);
        arrowLine60.setAttribute("stroke", "blue");
        arrowLine60.setAttribute("stroke-width", "1");

        text60 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text60.setAttribute("x", 600);
        text60.setAttribute("y", 180);
        text60.setAttribute("fill", "aqua");
        text60.setAttribute("font-size","12px");
        text60.textContent = "850";

    
        arrowLine63 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine63.setAttribute("x1", adiyamanX);
        arrowLine63.setAttribute("y1", adiyamanY);
        arrowLine63.setAttribute("x2", tunceliX);
        arrowLine63.setAttribute("y2", tunceliY);
        arrowLine63.setAttribute("stroke", "blue");
        arrowLine63.setAttribute("stroke-width", "1");

        text63 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text63.setAttribute("x", 720);
        text63.setAttribute("y", 210);
        text63.setAttribute("fill", "aqua");
        text63.setAttribute("font-size","12px");
        text63.textContent = "481";


        arrowLine65 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine65.setAttribute("x1", adiyamanX);
        arrowLine65.setAttribute("y1", adiyamanY);
        arrowLine65.setAttribute("x2", vanX);
        arrowLine65.setAttribute("y2", vanY);
        arrowLine65.setAttribute("stroke", "blue");
        arrowLine65.setAttribute("stroke-width", "1");

        text65 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text65.setAttribute("x", 950);
        text65.setAttribute("y", 250);
        text65.setAttribute("fill", "aqua");
        text65.setAttribute("font-size","12px");
        text65.textContent = "2300";

 

        


        svg.appendChild(arrowLine);
        svg.appendChild(arrowLine2);
        svg.appendChild(arrowLine3);
        svg.appendChild(arrowLine4);
        svg.appendChild(arrowLine5);
        svg.appendChild(arrowLine6);
        svg.appendChild(arrowLine7);
        svg.appendChild(arrowLine8);
        svg.appendChild(arrowLine9);
        svg.appendChild(arrowLine10);
        svg.appendChild(arrowLine11);
        svg.appendChild(arrowLine12);
        svg.appendChild(arrowLine13);
        svg.appendChild(arrowLine14);
        svg.appendChild(arrowLine15);
        svg.appendChild(arrowLine16);
        svg.appendChild(arrowLine17);
        svg.appendChild(arrowLine18);
        svg.appendChild(arrowLine19);
        svg.appendChild(arrowLine20);
        svg.appendChild(arrowLine21);
        svg.appendChild(arrowLine22);
        svg.appendChild(arrowLine23);
        svg.appendChild(arrowLine25);
        svg.appendChild(arrowLine26);
        svg.appendChild(arrowLine27);
        svg.appendChild(arrowLine28);
        svg.appendChild(arrowLine30);
        svg.appendChild(arrowLine31);
        svg.appendChild(arrowLine32);
        svg.appendChild(arrowLine33);
        svg.appendChild(arrowLine34);
        svg.appendChild(arrowLine36);
        svg.appendChild(arrowLine37);
        svg.appendChild(arrowLine38);
        svg.appendChild(arrowLine40);
        svg.appendChild(arrowLine41);
        svg.appendChild(arrowLine42);
        svg.appendChild(arrowLine44);
        svg.appendChild(arrowLine45);
        svg.appendChild(arrowLine46);
        svg.appendChild(arrowLine47);
        svg.appendChild(arrowLine48);
        svg.appendChild(arrowLine51);
        svg.appendChild(arrowLine53);
        svg.appendChild(arrowLine54);
        svg.appendChild(arrowLine60);
        svg.appendChild(arrowLine65);
        svg.appendChild(text1);
        svg.appendChild(text2);
        svg.appendChild(text3);
        svg.appendChild(text4);
        svg.appendChild(text5);
        svg.appendChild(text6);
        svg.appendChild(text7);
        svg.appendChild(text8);
        svg.appendChild(text9);
        svg.appendChild(text10);
        svg.appendChild(text11);
        svg.appendChild(text12);
        svg.appendChild(text13);
        svg.appendChild(text14);
        svg.appendChild(text15);
        svg.appendChild(text16);
        svg.appendChild(text17);
        svg.appendChild(text18);
        svg.appendChild(text19);
        svg.appendChild(text20);
        svg.appendChild(text21);
        svg.appendChild(text22);
        svg.appendChild(text23);
        svg.appendChild(text25);
        svg.appendChild(text26);
        svg.appendChild(text27);
        svg.appendChild(text28);
        svg.appendChild(text30);
        svg.appendChild(text31);
        svg.appendChild(text32);
        svg.appendChild(text33);
        svg.appendChild(text34);
        svg.appendChild(text36);
        svg.appendChild(text37);
        svg.appendChild(text38);
        svg.appendChild(text40);
        svg.appendChild(text41);
        svg.appendChild(text42);
        svg.appendChild(text44);
        svg.appendChild(text45);
        svg.appendChild(text46);
        svg.appendChild(text47);
        svg.appendChild(text48);
        svg.appendChild(text51);
        svg.appendChild(text53);
        svg.appendChild(text54);
        svg.appendChild(text60);
        svg.appendChild(text65);





        clicked = true;
    } else {
         if (arrowLine&&arrowLine2&&arrowLine3&&arrowLine4&&arrowLine5&&arrowLine6&&arrowLine7&&arrowLine8&&arrowLine9&&arrowLine10&&arrowLine11
            &&arrowLine12&&arrowLine13&&arrowLine14&&arrowLine15&&arrowLine16&&arrowLine17&&arrowLine18&&arrowLine19&&arrowLine20&&arrowLine21&&
            arrowLine22&&arrowLine23&&arrowLine25&&arrowLine26&&arrowLine27&&arrowLine28&&arrowLine30&&arrowLine31&&
            arrowLine32&&arrowLine33&&arrowLine34&&arrowLine36&&arrowLine37&&arrowLine38&&arrowLine40&&arrowLine41
            &&arrowLine42&&arrowLine44&&arrowLine45&&arrowLine46&&arrowLine47&&arrowLine48&&arrowLine51&&arrowLine53
            &&arrowLine54&&arrowLine60&&arrowLine65
            
            &&text1&&text2&&text3&& text4 && text5&&text6&&text7&&text8&&text9&&text10&&text11&&text12&&text13&&text14&&text15&&text16&&text17
        &&text18&&text19&&text20&&text21&&text22&&text23&&text25&&text26&&text27&&text28&&text30&&text31&&text32&&text33
    &&text34&&text36&&text37&&text38&&text40&&text41&&text42&&text44&&text45&&text46&&text47&&text48&&text51&&text53&&text54
    &&text60&&text65) {
            arrowLine.remove();
            arrowLine2.remove();
            arrowLine3.remove();
            arrowLine4.remove();
            arrowLine5.remove();
            arrowLine6.remove();
            arrowLine7.remove();
            arrowLine8.remove();
            arrowLine9.remove();
            arrowLine10.remove();
            arrowLine11.remove();
            arrowLine12.remove();
            arrowLine13.remove();
            arrowLine14.remove();
            arrowLine15.remove();
            arrowLine16.remove();
            arrowLine17.remove();
            arrowLine18.remove();
            arrowLine19.remove();
            arrowLine20.remove();
            arrowLine21.remove();
            arrowLine22.remove();
            arrowLine23.remove();
            arrowLine25.remove();
            arrowLine26.remove();
            arrowLine27.remove();
            arrowLine28.remove();
            arrowLine30.remove();
            arrowLine31.remove();
            arrowLine32.remove();
            arrowLine33.remove();
            arrowLine34.remove();
            arrowLine36.remove();
            arrowLine37.remove();
            arrowLine38.remove();
            arrowLine40.remove();
            arrowLine41.remove();
            arrowLine42.remove();
            arrowLine44.remove();
            arrowLine45.remove();
            arrowLine46.remove();
            arrowLine47.remove();
            arrowLine48.remove();
            arrowLine51.remove();
            arrowLine53.remove();
            arrowLine54.remove();
            arrowLine60.remove();
            arrowLine65.remove();


            text1.remove();
            text2.remove();
            text3.remove();
            text4.remove();
            text5.remove();
            text6.remove();
            text7.remove();
            text8.remove();
            text9.remove();
            text10.remove();
            text11.remove();
            text12.remove();
            text13.remove();
            text14.remove();
            text15.remove();
            text16.remove();
            text17.remove();
            text18.remove();
            text19.remove();
            text20.remove();
            text21.remove();
            text22.remove();
            text23.remove();
            text25.remove();
            text26.remove();
            text27.remove();
            text28.remove();
            text30.remove();
            text31.remove();
            text32.remove();
            text33.remove();
            text34.remove()
            text36.remove()
            text37.remove()
            text38.remove()
            text40.remove()
            text41.remove()
            text42.remove()
            text44.remove()
            text45.remove()
            text46.remove()
            text47.remove()
            text48.remove()
            text51.remove()
            text53.remove()
            text54.remove()
            text60.remove()
            text65.remove()


            
        }

        


        clicked = false;
    }
});

