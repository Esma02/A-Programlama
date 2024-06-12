var svg = document.getElementById("svg-turkiye-haritasi");
var turkeyText = document.getElementById("kahramanmaras");
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
        var marasX = 590;   var marasY= 300;
        var afyonX = 250;   var afyonY = 250;
        var aksarayX = 420; var aksarayY = 270;
        var amasyaX=520;    var amasyaY=120;
        var ankaraX=350;    var ankaraY=170;
        var antalyaX=270;   var antalyaY=350;
        var artvinX=830;    var artvinY=80;
        var aydınX=110;     var aydınY=300;
        var balıkesirX=110; var balıkesirY=155;
        var bartinX=360;    var bartinY=50;
        var bingölX=780;    var bingölY=220;
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
        var kirikkaleX=420; var kirikkaleY=165;
        var kırklareliX=95; var kırklareliY=30;
        var kirsehirX=440;  var kirsehirY=210;
        var kocaeliX=220;   var kocaeliY=90;
        var konyaX=350;     var konyaY=300;
        var kütahyaX=175;   var kütahyaY=200;
        var manisaX=110;    var manisaY=230;
        var mardinX=790;    var mardinY=335;
        var mersinX=400;    var mersinY=390;
        var muglaX=140;     var muglaY=350;
        var nevsehirX=460;  var nevsehirY=250;
        var nigdeX=460;     var nigdeY=290;
        var orduX=610;      var orduY=100;
        var sakaryaX=255;   var sakaryaY=100;
        var sinopX=480;     var sinopY=50;
        var tekirdagX=80;   var tekirdagY=80;
        var yalovaX=185;    var yalovaY=110;
        var yozgatX=500;    var yozgatY=180;
        var agriX=910;      var agriY=170;
        var batmanX=825;    var batmanY=280;
        var bayburtX=750;   var bayburtY=140;
        var bilecikX=230;   var bilecikY=150;
        var bitlisX=860;    var bitlisY=250;
        var cankiriX=400;   var cankiriY=110;
        var duzceX=280;     var duzceY=100;
     //   var edirneX=65;     var edirneY=40;
        var elazigX=710;    var elazigY=250;
        var giresunX=670;   var giresunY=120;
        var gumushaneX=710; var gumushaneY=140;
     //   var hakkariX=970;   var hakkariY=310;
        var ıgdırX=945;     var ıgdırY=150;
        var kastamonuX=410; var kastamonuY=60;
        var musX=850;       var musY=220;
        var rizeX=790;      var rizeY=90;
        var samsunX=520;    var samsunY=70;
        var siirtX=870;     var siirtY=290;
        var sivasX=600;     var sivasY=180;
       // var urfaX=720;      var urfaY=355;
       // var sirnakX=890;    var sirnakY=320;
        var tokatX=570;     var tokatY=125;
        var tunceliX=720;   var tunceliY=210;
        var usakX=165;      var usakY=250;
        var vanX=950;       var vanY=250;
        var zonguldakX=320; var zonguldakY=70;
        var ardahanX= 880;  var ardahanY=80;
        var karabukX=360;   var karabukY=80;
        var karsX=890;      var karsY=120;
        var trabzonX=730;   var trabzonY=100;




        arrowLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine.setAttribute("x1", marasX);
        arrowLine.setAttribute("y1", marasY);
        arrowLine.setAttribute("x2", afyonX);
        arrowLine.setAttribute("y2", afyonY);
        arrowLine.setAttribute("stroke", "blue");
        arrowLine.setAttribute("stroke-width", "1");

        text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text1.setAttribute("x", 250);
        text1.setAttribute("y",250);
        text1.setAttribute("fill", "aqua");
        text1.setAttribute("font-size","12px");
        text1.textContent = "1540";

        arrowLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine2.setAttribute("x1", marasX);
        arrowLine2.setAttribute("y1", marasY);
        arrowLine2.setAttribute("x2", aksarayX);
        arrowLine2.setAttribute("y2", aksarayY);
        arrowLine2.setAttribute("stroke", "blue");
        arrowLine2.setAttribute("stroke-width", "1");

        text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", 420);
        text2.setAttribute("y", 270);
        text2.setAttribute("fill", "aqua");
        text2.setAttribute("font-size","12px");
        text2.textContent = "443";


        arrowLine3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine3.setAttribute("x1", marasX);
        arrowLine3.setAttribute("y1", marasY);
        arrowLine3.setAttribute("x2", amasyaX);
        arrowLine3.setAttribute("y2", amasyaY);
        arrowLine3.setAttribute("stroke", "blue");
        arrowLine3.setAttribute("stroke-width", "1");

        text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text3.setAttribute("x", 520);
        text3.setAttribute("y", 120);
        text3.setAttribute("fill", "aqua");
        text3.setAttribute("font-size","12px");
        text3.textContent = "375";


        arrowLine4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine4.setAttribute("x1", marasX);
        arrowLine4.setAttribute("y1", marasY);
        arrowLine4.setAttribute("x2", ankaraX);
        arrowLine4.setAttribute("y2", ankaraY);
        arrowLine4.setAttribute("stroke", "blue");
        arrowLine4.setAttribute("stroke-width", "1");

        text4 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text4.setAttribute("x", 350);
        text4.setAttribute("y", 170);
        text4.setAttribute("fill", "aqua");
        text4.setAttribute("font-size","12px");
        text4.textContent = "57300";


        arrowLine5 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine5.setAttribute("x1", marasX);
        arrowLine5.setAttribute("y1", marasY);
        arrowLine5.setAttribute("x2", antalyaX);
        arrowLine5.setAttribute("y2", antalyaY);
        arrowLine5.setAttribute("stroke", "blue");
        arrowLine5.setAttribute("stroke-width", "1");

        text5 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text5.setAttribute("x", 270);
        text5.setAttribute("y", 350);
        text5.setAttribute("fill", "aqua");
        text5.setAttribute("font-size","12px");
        text5.textContent = "36890";


        arrowLine6 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine6.setAttribute("x1", marasX);
        arrowLine6.setAttribute("y1", marasY);
        arrowLine6.setAttribute("x2", artvinX);
        arrowLine6.setAttribute("y2", artvinY);
        arrowLine6.setAttribute("stroke", "blue");
        arrowLine6.setAttribute("stroke-width", "1");

        text6 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text6.setAttribute("x", 830);
        text6.setAttribute("y", 80);
        text6.setAttribute("fill", "aqua");
        text6.setAttribute("font-size","12px");
        text6.textContent = "597";


    
        arrowLine7 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine7.setAttribute("x1", marasX);
        arrowLine7.setAttribute("y1", marasY);
        arrowLine7.setAttribute("x2", aydınX);
        arrowLine7.setAttribute("y2", aydınY);
        arrowLine7.setAttribute("stroke", "blue");
        arrowLine7.setAttribute("stroke-width", "1");

        text7 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text7.setAttribute("x", 110);
        text7.setAttribute("y", 300);
        text7.setAttribute("fill", "aqua");
        text7.setAttribute("font-size","12px");
        text7.textContent = "2700";


        arrowLine8 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine8.setAttribute("x1", marasX);
        arrowLine8.setAttribute("y1", marasY);
        arrowLine8.setAttribute("x2", balıkesirX);
        arrowLine8.setAttribute("y2", balıkesirY);
        arrowLine8.setAttribute("stroke", "blue");
        arrowLine8.setAttribute("stroke-width", "1");

        text8 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text8.setAttribute("x", 110);
        text8.setAttribute("y", 155);
        text8.setAttribute("fill", "aqua");
        text8.setAttribute("font-size","12px");
        text8.textContent = "2500";


        arrowLine9 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine9.setAttribute("x1", marasX);
        arrowLine9.setAttribute("y1", marasY);
        arrowLine9.setAttribute("x2", bartinX);
        arrowLine9.setAttribute("y2", bartinY);
        arrowLine9.setAttribute("stroke", "blue");
        arrowLine9.setAttribute("stroke-width", "1");

        text9 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text9.setAttribute("x", 360);
        text9.setAttribute("y", 50);
        text9.setAttribute("fill", "aqua");
        text9.setAttribute("font-size","12px");
        text9.textContent = "250";


        arrowLine10 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine10.setAttribute("x1", marasX);
        arrowLine10.setAttribute("y1", marasY);
        arrowLine10.setAttribute("x2", bingölX);
        arrowLine10.setAttribute("y2", bingölY);
        arrowLine10.setAttribute("stroke", "blue");
        arrowLine10.setAttribute("stroke-width", "1");

        text10 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text10.setAttribute("x", 780);
        text10.setAttribute("y", 220);
        text10.setAttribute("fill", "aqua");
        text10.setAttribute("font-size","12px");
        text10.textContent = "900";

        arrowLine11 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine11.setAttribute("x1", marasX);
        arrowLine11.setAttribute("y1", marasY);
        arrowLine11.setAttribute("x2", boluX);
        arrowLine11.setAttribute("y2", boluY);
        arrowLine11.setAttribute("stroke", "blue");
        arrowLine11.setAttribute("stroke-width", "1");

        text11 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text11.setAttribute("x", 300);
        text11.setAttribute("y", 120);
        text11.setAttribute("fill", "aqua");
        text11.setAttribute("font-size","12px");
        text11.textContent = "595";

        arrowLine12 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine12.setAttribute("x1", marasX);
        arrowLine12.setAttribute("y1", marasY);
        arrowLine12.setAttribute("x2", burdurX);
        arrowLine12.setAttribute("y2", burdurY);
        arrowLine12.setAttribute("stroke", "blue");
        arrowLine12.setAttribute("stroke-width", "1");

        text12 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text12.setAttribute("x", 210);
        text12.setAttribute("y", 320);
        text12.setAttribute("fill", "aqua");
        text12.setAttribute("font-size","12px");
        text12.textContent = "1420";


        arrowLine12 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine12.setAttribute("x1", marasX);
        arrowLine12.setAttribute("y1", marasY);
        arrowLine12.setAttribute("x2", bursaX);
        arrowLine12.setAttribute("y2", bursaY);
        arrowLine12.setAttribute("stroke", "blue");
        arrowLine12.setAttribute("stroke-width", "1");

        text12 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text12.setAttribute("x", 185);
        text12.setAttribute("y", 130);
        text12.setAttribute("fill", "aqua");
        text12.setAttribute("font-size","12px");
        text12.textContent = "3750";



        arrowLine13 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine13.setAttribute("x1", marasX);
        arrowLine13.setAttribute("y1", marasY);
        arrowLine13.setAttribute("x2", canakkaleX);
        arrowLine13.setAttribute("y2", canakkaleY);
        arrowLine13.setAttribute("stroke", "blue");
        arrowLine13.setAttribute("stroke-width", "1");

        text13 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text13.setAttribute("x", 70);
        text13.setAttribute("y", 130);
        text13.setAttribute("fill", "aqua");
        text13.setAttribute("font-size","12px");
        text13.textContent = "580";


        arrowLine14 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine14.setAttribute("x1", marasX);
        arrowLine14.setAttribute("y1", marasY);
        arrowLine14.setAttribute("x2", corumX);
        arrowLine14.setAttribute("y2", corumY);
        arrowLine14.setAttribute("stroke", "blue");
        arrowLine14.setAttribute("stroke-width", "1");

        text14 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text14.setAttribute("x", 460);
        text14.setAttribute("y", 130);
        text14.setAttribute("fill", "aqua");
        text14.setAttribute("font-size","12px");
        text14.textContent = "2430";



        arrowLine15 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine15.setAttribute("x1", marasX);
        arrowLine15.setAttribute("y1", marasY);
        arrowLine15.setAttribute("x2", erzincanX);
        arrowLine15.setAttribute("y2", erzincanY);
        arrowLine15.setAttribute("stroke", "blue");
        arrowLine15.setAttribute("stroke-width", "1");

        text15 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text15.setAttribute("x", 720);
        text15.setAttribute("y", 180);
        text15.setAttribute("fill", "aqua");
        text15.setAttribute("font-size","12px");
        text15.textContent = "350";



        arrowLine16 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine16.setAttribute("x1", marasX);
        arrowLine16.setAttribute("y1", marasY);
        arrowLine16.setAttribute("x2", erzurumX);
        arrowLine16.setAttribute("y2", erzurumY);
        arrowLine16.setAttribute("stroke", "blue");
        arrowLine16.setAttribute("stroke-width", "1");

        text16 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text16.setAttribute("x", 830);
        text16.setAttribute("y", 160);
        text16.setAttribute("fill", "aqua");
        text16.setAttribute("font-size","12px");
        text16.textContent = "1352";



        arrowLine17 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine17.setAttribute("x1", marasX);
        arrowLine17.setAttribute("y1", marasY);
        arrowLine17.setAttribute("x2", eskişehirX);
        arrowLine17.setAttribute("y2", eskişehirY);
        arrowLine17.setAttribute("stroke", "blue");
        arrowLine17.setAttribute("stroke-width", "1");

        text17 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text17.setAttribute("x", 270);
        text17.setAttribute("y", 180);
        text17.setAttribute("fill", "aqua");
        text17.setAttribute("font-size","12px");
        text17.textContent = "6550";




        arrowLine18 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine18.setAttribute("x1", marasX);
        arrowLine18.setAttribute("y1", marasY);
        arrowLine18.setAttribute("x2", denizliX);
        arrowLine18.setAttribute("y2", denizliY);
        arrowLine18.setAttribute("stroke", "blue");
        arrowLine18.setAttribute("stroke-width", "1");

        text18 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text18.setAttribute("x", 165);
        text18.setAttribute("y", 300);
        text18.setAttribute("fill", "aqua");
        text18.setAttribute("font-size","12px");
        text18.textContent = "1562";

        arrowLine19 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine19.setAttribute("x1", marasX);
        arrowLine19.setAttribute("y1", marasY);
        arrowLine19.setAttribute("x2", ispartaX);
        arrowLine19.setAttribute("y2", ispartaY);
        arrowLine19.setAttribute("stroke", "blue");
        arrowLine19.setAttribute("stroke-width", "1");

        text19 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text19.setAttribute("x", 260);
        text19.setAttribute("y", 300);
        text19.setAttribute("fill", "aqua");
        text19.setAttribute("font-size","12px");
        text19.textContent = "900";


        arrowLine20 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine20.setAttribute("x1", marasX);
        arrowLine20.setAttribute("y1", marasY);
        arrowLine20.setAttribute("x2", istanbulX);
        arrowLine20.setAttribute("y2", istanbulY);
        arrowLine20.setAttribute("stroke", "blue");
        arrowLine20.setAttribute("stroke-width", "1");

        text20 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text20.setAttribute("x", 180);
        text20.setAttribute("y", 80);
        text20.setAttribute("fill", "aqua");
        text20.setAttribute("font-size","12px");
        text20.textContent = "660";



        arrowLine21 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine21.setAttribute("x1", marasX);
        arrowLine21.setAttribute("y1", marasY);
        arrowLine21.setAttribute("x2", izmirX);
        arrowLine21.setAttribute("y2", izmirY);
        arrowLine21.setAttribute("stroke", "blue");
        arrowLine21.setAttribute("stroke-width", "1");

        text21 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text21.setAttribute("x", 80);
        text21.setAttribute("y", 260);
        text21.setAttribute("fill", "aqua");
        text21.setAttribute("font-size","12px");
        text21.textContent = "500";



        arrowLine22 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine22.setAttribute("x1", marasX);
        arrowLine22.setAttribute("y1", marasY);
        arrowLine22.setAttribute("x2", karamanX);
        arrowLine22.setAttribute("y2", karamanY);
        arrowLine22.setAttribute("stroke", "blue");
        arrowLine22.setAttribute("stroke-width", "1");

        text22 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text22.setAttribute("x", 380);
        text22.setAttribute("y", 360);
        text22.setAttribute("fill", "aqua");
        text22.setAttribute("font-size","12px");
        text22.textContent = "2070";



        arrowLine23 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine23.setAttribute("x1", marasX);
        arrowLine23.setAttribute("y1", marasY);
        arrowLine23.setAttribute("x2", kayseriX);
        arrowLine23.setAttribute("y2", kayseriY);
        arrowLine23.setAttribute("stroke", "blue");
        arrowLine23.setAttribute("stroke-width", "1");

        text23 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text23.setAttribute("x", 520);
        text23.setAttribute("y", 250);
        text23.setAttribute("fill", "aqua");
        text23.setAttribute("font-size","12px");
        text23.textContent = "8942";



        arrowLine24 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine24.setAttribute("x1", marasX);
        arrowLine24.setAttribute("y1", marasY);
        arrowLine24.setAttribute("x2", kirikkaleX);
        arrowLine24.setAttribute("y2", kirikkaleY);
        arrowLine24.setAttribute("stroke", "blue");
        arrowLine24.setAttribute("stroke-width", "1");

        text24 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text24.setAttribute("x", 420);
        text24.setAttribute("y", 165);
        text24.setAttribute("fill", "aqua");
        text24.setAttribute("font-size","12px");
        text24.textContent = "2460";




        arrowLine25 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine25.setAttribute("x1", marasX);
        arrowLine25.setAttribute("y1", marasY);
        arrowLine25.setAttribute("x2", kırklareliX);
        arrowLine25.setAttribute("y2", kırklareliY);
        arrowLine25.setAttribute("stroke", "blue");
        arrowLine25.setAttribute("stroke-width", "1");

        text25 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text25.setAttribute("x", 95);
        text25.setAttribute("y", 30);
        text25.setAttribute("fill", "aqua");
        text25.setAttribute("font-size","12px");
        text25.textContent = "2030";




        arrowLine26 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine26.setAttribute("x1", marasX);
        arrowLine26.setAttribute("y1", marasY);
        arrowLine26.setAttribute("x2", kirsehirX);
        arrowLine26.setAttribute("y2", kirsehirY);
        arrowLine26.setAttribute("stroke", "blue");
        arrowLine26.setAttribute("stroke-width", "1");

        text26 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text26.setAttribute("x", 440);
        text26.setAttribute("y", 210);
        text26.setAttribute("fill", "aqua");
        text26.setAttribute("font-size","12px");
        text26.textContent = "1240";




        arrowLine27 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine27.setAttribute("x1", marasX);
        arrowLine27.setAttribute("y1", marasY);
        arrowLine27.setAttribute("x2", kocaeliX);
        arrowLine27.setAttribute("y2", kocaeliY);
        arrowLine27.setAttribute("stroke", "blue");
        arrowLine27.setAttribute("stroke-width", "1");

        text27 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text27.setAttribute("x", 220);
        text27.setAttribute("y", 90);
        text27.setAttribute("fill", "aqua");
        text27.setAttribute("font-size","12px");
        text27.textContent = "8036";




        arrowLine28 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine28.setAttribute("x1", marasX);
        arrowLine28.setAttribute("y1", marasY);
        arrowLine28.setAttribute("x2", konyaX);
        arrowLine28.setAttribute("y2", konyaY);
        arrowLine28.setAttribute("stroke", "blue");
        arrowLine28.setAttribute("stroke-width", "1");

        text28 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text28.setAttribute("x", 350);
        text28.setAttribute("y", 300);
        text28.setAttribute("fill", "aqua");
        text28.setAttribute("font-size","12px");
        text28.textContent = "6736";




        arrowLine29 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine29.setAttribute("x1", marasX);
        arrowLine29.setAttribute("y1", marasY);
        arrowLine29.setAttribute("x2", kütahyaX);
        arrowLine29.setAttribute("y2", kütahyaY);
        arrowLine29.setAttribute("stroke", "blue");
        arrowLine18.setAttribute("stroke-width", "1");

        text29 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text29.setAttribute("x", 175);
        text29.setAttribute("y", 200);
        text29.setAttribute("fill", "aqua");
        text29.setAttribute("font-size","12px");
        text29.textContent = "1420";




        arrowLine30 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine30.setAttribute("x1", marasX);
        arrowLine30.setAttribute("y1", marasY);
        arrowLine30.setAttribute("x2", manisaX);
        arrowLine30.setAttribute("y2", manisaY);
        arrowLine30.setAttribute("stroke", "blue");
        arrowLine30.setAttribute("stroke-width", "1");

        text30 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text30.setAttribute("x", 110);
        text30.setAttribute("y", 230);
        text30.setAttribute("fill", "aqua");
        text30.setAttribute("font-size","12px");
        text30.textContent = "1803";




        arrowLine31 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine31.setAttribute("x1", marasX);
        arrowLine31.setAttribute("y1", marasY);
        arrowLine31.setAttribute("x2", mardinX);
        arrowLine31.setAttribute("y2", mardinY);
        arrowLine31.setAttribute("stroke", "blue");
        arrowLine31.setAttribute("stroke-width", "1");

        text31 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text31.setAttribute("x", 790);
        text31.setAttribute("y", 335);
        text31.setAttribute("fill", "aqua");
        text31.setAttribute("font-size","12px");
        text31.textContent = "4936";



        arrowLine32 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine32.setAttribute("x1", marasX);
        arrowLine32.setAttribute("y1", marasY);
        arrowLine32.setAttribute("x2", mersinX);
        arrowLine32.setAttribute("y2", mersinY);
        arrowLine32.setAttribute("stroke", "blue");
        arrowLine32.setAttribute("stroke-width", "1");

        text32 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text32.setAttribute("x", 400);
        text32.setAttribute("y", 390);
        text32.setAttribute("fill", "aqua");
        text32.setAttribute("font-size","12px");
        text32.textContent = "15760";



        arrowLine33 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine33.setAttribute("x1", marasX);
        arrowLine33.setAttribute("y1", marasY);
        arrowLine33.setAttribute("x2", muglaX);
        arrowLine33.setAttribute("y2", muglaY);
        arrowLine33.setAttribute("stroke", "blue");
        arrowLine33.setAttribute("stroke-width", "1");

        text33 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text33.setAttribute("x", 140);
        text33.setAttribute("y", 350);
        text33.setAttribute("fill", "aqua");
        text33.setAttribute("font-size","12px");
        text33.textContent = "11600";

        arrowLine34 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine34.setAttribute("x1", marasX);
        arrowLine34.setAttribute("y1", marasY);
        arrowLine34.setAttribute("x2", nevsehirX);
        arrowLine34.setAttribute("y2", nevsehirY);
        arrowLine34.setAttribute("stroke", "blue");
        arrowLine34.setAttribute("stroke-width", "1");

        text34 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text34.setAttribute("x", 460);
        text34.setAttribute("y", 250);
        text34.setAttribute("fill", "aqua");
        text34.setAttribute("font-size","12px");
        text34.textContent = "10671";

        arrowLine35 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine35.setAttribute("x1", marasX);
        arrowLine35.setAttribute("y1", marasY);
        arrowLine35.setAttribute("x2", nigdeX);
        arrowLine35.setAttribute("y2", nigdeY);
        arrowLine35.setAttribute("stroke", "blue");
        arrowLine35.setAttribute("stroke-width", "1");

        text35 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text35.setAttribute("x", 460);
        text35.setAttribute("y", 290);
        text35.setAttribute("fill", "aqua");
        text35.setAttribute("font-size","12px");
        text35.textContent = "2760";


        arrowLine36 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine36.setAttribute("x1", marasX);
        arrowLine36.setAttribute("y1", marasY);
        arrowLine36.setAttribute("x2", orduX);
        arrowLine36.setAttribute("y2", orduY);
        arrowLine36.setAttribute("stroke", "blue");
        arrowLine36.setAttribute("stroke-width", "1");

        text36 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text36.setAttribute("x", 610);
        text36.setAttribute("y", 100);
        text36.setAttribute("fill", "aqua");
        text36.setAttribute("font-size","12px");
        text36.textContent = "1530";

        arrowLine37 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine37.setAttribute("x1", marasX);
        arrowLine37.setAttribute("y1", marasY);
        arrowLine37.setAttribute("x2", sakaryaX);
        arrowLine37.setAttribute("y2", sakaryaY);
        arrowLine37.setAttribute("stroke", "blue");
        arrowLine37.setAttribute("stroke-width", "1");

        text37 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text37.setAttribute("x", 255);
        text37.setAttribute("y", 100);
        text37.setAttribute("fill", "aqua");
        text37.setAttribute("font-size","12px");
        text37.textContent = "3300";



        arrowLine38 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine38.setAttribute("x1", marasX);
        arrowLine38.setAttribute("y1", marasY);
        arrowLine38.setAttribute("x2", sinopX);
        arrowLine38.setAttribute("y2", sinopY);
        arrowLine38.setAttribute("stroke", "blue");
        arrowLine38.setAttribute("stroke-width", "1");

        text38 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text38.setAttribute("x", 480);
        text38.setAttribute("y", 50);
        text38.setAttribute("fill", "aqua");
        text38.setAttribute("font-size","12px");
        text38.textContent = "160";



        arrowLine39 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine39.setAttribute("x1", marasX);
        arrowLine39.setAttribute("y1", marasY);
        arrowLine39.setAttribute("x2", tekirdagX);
        arrowLine39.setAttribute("y2", tekirdagY);
        arrowLine39.setAttribute("stroke", "blue");
        arrowLine39.setAttribute("stroke-width", "1");

        text39 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text39.setAttribute("x", 80);
        text39.setAttribute("y", 80);
        text39.setAttribute("fill", "aqua");
        text39.setAttribute("font-size","12px");
        text39.textContent = "3600";



        arrowLine40 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine40.setAttribute("x1", marasX);
        arrowLine40.setAttribute("y1", marasY);
        arrowLine40.setAttribute("x2", yalovaX);
        arrowLine40.setAttribute("y2", yalovaY);
        arrowLine40.setAttribute("stroke", "blue");
        arrowLine40.setAttribute("stroke-width", "1");

        text40 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text40.setAttribute("x", 185);
        text40.setAttribute("y", 110);
        text40.setAttribute("fill", "aqua");
        text40.setAttribute("font-size","12px");
        text40.textContent = "1400";




        arrowLine41 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine41.setAttribute("x1", marasX);
        arrowLine41.setAttribute("y1", marasY);
        arrowLine41.setAttribute("x2", yozgatX);
        arrowLine41.setAttribute("y2", yozgatY);
        arrowLine41.setAttribute("stroke", "blue");
        arrowLine41.setAttribute("stroke-width", "1");

        text41 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text41.setAttribute("x", 500);
        text41.setAttribute("y", 180);
        text41.setAttribute("fill", "aqua");
        text41.setAttribute("font-size","12px");
        text41.textContent = "1970";


        arrowLine42 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine42.setAttribute("x1", marasX);
        arrowLine42.setAttribute("y1", marasY);
        arrowLine42.setAttribute("x2", agriX);
        arrowLine42.setAttribute("y2", agriY);
        arrowLine42.setAttribute("stroke", "blue");
        arrowLine42.setAttribute("stroke-width", "1");

        text42 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text42.setAttribute("x", 910);
        text42.setAttribute("y", 170);
        text42.setAttribute("fill", "aqua");
        text42.setAttribute("font-size","12px");
        text42.textContent = "672";

        arrowLine43 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine43.setAttribute("x1", marasX);
        arrowLine43.setAttribute("y1", marasY);
        arrowLine43.setAttribute("x2", batmanX);
        arrowLine43.setAttribute("y2", batmanY);
        arrowLine43.setAttribute("stroke", "blue");
        arrowLine43.setAttribute("stroke-width", "1");

        text43 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text43.setAttribute("x", 825);
        text43.setAttribute("y", 280);
        text43.setAttribute("fill", "aqua");
        text43.setAttribute("font-size","12px");
        text43.textContent = "80";


        arrowLine44 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine44.setAttribute("x1", marasX);
        arrowLine44.setAttribute("y1", marasY);
        arrowLine44.setAttribute("x2", bayburtX);
        arrowLine44.setAttribute("y2", bayburtY);
        arrowLine44.setAttribute("stroke", "blue");
        arrowLine44.setAttribute("stroke-width", "1");

        text44 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text44.setAttribute("x", 750);
        text44.setAttribute("y", 140);
        text44.setAttribute("fill", "aqua");
        text44.setAttribute("font-size","12px");
        text44.textContent = "120";

        arrowLine45 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine45.setAttribute("x1", marasX);
        arrowLine45.setAttribute("y1", marasY);
        arrowLine45.setAttribute("x2", bilecikX);
        arrowLine45.setAttribute("y2", bilecikY);
        arrowLine45.setAttribute("stroke", "blue");
        arrowLine45.setAttribute("stroke-width", "1");

        text45 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text45.setAttribute("x", 230);
        text45.setAttribute("y", 150);
        text45.setAttribute("fill", "aqua");
        text45.setAttribute("font-size","12px");
        text45.textContent = "750";

        arrowLine46 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine46.setAttribute("x1", marasX);
        arrowLine46.setAttribute("y1", marasY);
        arrowLine46.setAttribute("x2", bitlisX);
        arrowLine46.setAttribute("y2", bitlisY);
        arrowLine46.setAttribute("stroke", "blue");
        arrowLine46.setAttribute("stroke-width", "1");

        text46 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text46.setAttribute("x", 860);
        text46.setAttribute("y", 250);
        text46.setAttribute("fill", "aqua");
        text46.setAttribute("font-size","12px");
        text46.textContent = "1937";

        arrowLine47 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine47.setAttribute("x1", marasX);
        arrowLine47.setAttribute("y1", marasY);
        arrowLine47.setAttribute("x2", cankiriX);
        arrowLine47.setAttribute("y2", cankiriY);
        arrowLine47.setAttribute("stroke", "blue");
        arrowLine47.setAttribute("stroke-width", "1");

        text47 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text47.setAttribute("x", 400);
        text47.setAttribute("y", 110);
        text47.setAttribute("fill", "aqua");
        text47.setAttribute("font-size","12px");
        text47.textContent = "642";

        arrowLine48 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine48.setAttribute("x1", marasX);
        arrowLine48.setAttribute("y1", marasY);
        arrowLine48.setAttribute("x2", duzceX);
        arrowLine48.setAttribute("y2", duzceY);
        arrowLine48.setAttribute("stroke", "blue");
        arrowLine48.setAttribute("stroke-width", "1");

        text48 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text48.setAttribute("x", 280);
        text48.setAttribute("y", 100);
        text48.setAttribute("fill", "aqua");
        text48.setAttribute("font-size","12px");
        text48.textContent = "426";

        arrowLine49 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine49.setAttribute("x1", marasX);
        arrowLine49.setAttribute("y1", marasY);
        arrowLine49.setAttribute("x2", ardahanX);
        arrowLine49.setAttribute("y2", ardahanY);
        arrowLine49.setAttribute("stroke", "blue");
        arrowLine49.setAttribute("stroke-width", "1");

        text49 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text49.setAttribute("x", 880);
        text49.setAttribute("y", 80);
        text49.setAttribute("fill", "aqua");
        text49.setAttribute("font-size","12px");
        text49.textContent = "90";

        arrowLine50 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine50.setAttribute("x1", marasX);
        arrowLine50.setAttribute("y1", marasY);
        arrowLine50.setAttribute("x2", elazigX);
        arrowLine50.setAttribute("y2", elazigY);
        arrowLine50.setAttribute("stroke", "blue");
        arrowLine50.setAttribute("stroke-width", "1");

        text50 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text50.setAttribute("x", 710);
        text50.setAttribute("y", 250);
        text50.setAttribute("fill", "aqua");
        text50.setAttribute("font-size","12px");
        text50.textContent = "7136";

        arrowLine51 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine51.setAttribute("x1", marasX);
        arrowLine51.setAttribute("y1", marasY);
        arrowLine51.setAttribute("x2", giresunX);
        arrowLine51.setAttribute("y2", giresunY);
        arrowLine51.setAttribute("stroke", "blue");
        arrowLine51.setAttribute("stroke-width", "1");

        text51 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text51.setAttribute("x", 670);
        text51.setAttribute("y", 120);
        text51.setAttribute("fill", "aqua");
        text51.setAttribute("font-size","12px");
        text51.textContent = "731";

        arrowLine52 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine52.setAttribute("x1", marasX);
        arrowLine52.setAttribute("y1", marasY);
        arrowLine52.setAttribute("x2", gumushaneX);
        arrowLine52.setAttribute("y2", gumushaneY);
        arrowLine52.setAttribute("stroke", "blue");
        arrowLine52.setAttribute("stroke-width", "1");

        text52 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text52.setAttribute("x", 710);
        text52.setAttribute("y", 140);
        text52.setAttribute("fill", "aqua");
        text52.setAttribute("font-size","12px");
        text52.textContent = "455";

        arrowLine53 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine53.setAttribute("x1", marasX);
        arrowLine53.setAttribute("y1", marasY);
        arrowLine53.setAttribute("x2", karabukX);
        arrowLine53.setAttribute("y2", karabukY);
        arrowLine53.setAttribute("stroke", "blue");
        arrowLine53.setAttribute("stroke-width", "1");

        text53 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text53.setAttribute("x", 360);
        text53.setAttribute("y", 80);
        text53.setAttribute("fill", "aqua");
        text53.setAttribute("font-size","12px");
        text53.textContent = "500";

        arrowLine54 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine54.setAttribute("x1", marasX);
        arrowLine54.setAttribute("y1", marasY);
        arrowLine54.setAttribute("x2", ıgdırX);
        arrowLine54.setAttribute("y2", ıgdırY);
        arrowLine54.setAttribute("stroke", "blue");
        arrowLine54.setAttribute("stroke-width", "1");

        text54 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text54.setAttribute("x", 945);
        text54.setAttribute("y", 150);
        text54.setAttribute("fill", "aqua");
        text54.setAttribute("font-size","12px");
        text54.textContent = "130";

        arrowLine55 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine55.setAttribute("x1", marasX);
        arrowLine55.setAttribute("y1", marasY);
        arrowLine55.setAttribute("x2", kastamonuX);
        arrowLine55.setAttribute("y2", kastamonuY);
        arrowLine55.setAttribute("stroke", "blue");
        arrowLine55.setAttribute("stroke-width", "1");

        text55 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text55.setAttribute("x", 410);
        text55.setAttribute("y", 60);
        text55.setAttribute("fill", "aqua");
        text55.setAttribute("font-size","12px");
        text55.textContent = "525";

        arrowLine56 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine56.setAttribute("x1", marasX);
        arrowLine56.setAttribute("y1", marasY);
        arrowLine56.setAttribute("x2", musX);
        arrowLine56.setAttribute("y2", musY);
        arrowLine56.setAttribute("stroke", "blue");
        arrowLine56.setAttribute("stroke-width", "1");

        text56 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text56.setAttribute("x", 850);
        text56.setAttribute("y", 220);
        text56.setAttribute("fill", "aqua");
        text56.setAttribute("font-size","12px");
        text56.textContent = "1358";

        arrowLine57 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine57.setAttribute("x1", marasX);
        arrowLine57.setAttribute("y1", marasY);
        arrowLine57.setAttribute("x2", rizeX);
        arrowLine57.setAttribute("y2", rizeY);
        arrowLine57.setAttribute("stroke", "blue");
        arrowLine57.setAttribute("stroke-width", "1");

        text57 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text57.setAttribute("x", 790);
        text57.setAttribute("y", 90);
        text57.setAttribute("fill", "aqua");
        text57.setAttribute("font-size","12px");
        text57.textContent = "500";

        arrowLine58 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine58.setAttribute("x1", marasX);
        arrowLine58.setAttribute("y1", marasY);
        arrowLine58.setAttribute("x2", samsunX);
        arrowLine58.setAttribute("y2", samsunY);
        arrowLine58.setAttribute("stroke", "blue");
        arrowLine58.setAttribute("stroke-width", "1");

        text58 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text58.setAttribute("x", 520);
        text58.setAttribute("y", 70);
        text58.setAttribute("fill", "aqua");
        text58.setAttribute("font-size","12px");
        text58.textContent = "3000";

        arrowLine59 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine59.setAttribute("x1", marasX);
        arrowLine59.setAttribute("y1", marasY);
        arrowLine59.setAttribute("x2", siirtX);
        arrowLine59.setAttribute("y2", siirtY);
        arrowLine59.setAttribute("stroke", "blue");
        arrowLine59.setAttribute("stroke-width", "1");

        text59 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text59.setAttribute("x", 870);
        text59.setAttribute("y", 290);
        text59.setAttribute("fill", "aqua");
        text59.setAttribute("font-size","12px");
        text59.textContent = "1500";

        arrowLine60 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine60.setAttribute("x1", marasX);
        arrowLine60.setAttribute("y1", marasY);
        arrowLine60.setAttribute("x2", sivasX);
        arrowLine60.setAttribute("y2", sivasY);
        arrowLine60.setAttribute("stroke", "blue");
        arrowLine60.setAttribute("stroke-width", "1");

        text60 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text60.setAttribute("x", 600);
        text60.setAttribute("y", 180);
        text60.setAttribute("fill", "aqua");
        text60.setAttribute("font-size","12px");
        text60.textContent = "3040";

        arrowLine61 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine61.setAttribute("x1", marasX);
        arrowLine61.setAttribute("y1", marasY);
        arrowLine61.setAttribute("x2", karsX);
        arrowLine61.setAttribute("y2", karsY);
        arrowLine61.setAttribute("stroke", "blue");
        arrowLine61.setAttribute("stroke-width", "1");

        text61 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text61.setAttribute("x", 890);
        text61.setAttribute("y", 120);
        text61.setAttribute("fill", "aqua");
        text61.setAttribute("font-size","12px");
        text61.textContent = "780";

        arrowLine62 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine62.setAttribute("x1", marasX);
        arrowLine62.setAttribute("y1", marasY);
        arrowLine62.setAttribute("x2", trabzonX);
        arrowLine62.setAttribute("y2", trabzonY);
        arrowLine62.setAttribute("stroke", "blue");
        arrowLine62.setAttribute("stroke-width", "1");

        text62 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text62.setAttribute("x", 730);
        text62.setAttribute("y", 100);
        text62.setAttribute("fill", "aqua");
        text62.setAttribute("font-size","12px");
        text62.textContent = "4000";

        arrowLine63 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine63.setAttribute("x1", marasX);
        arrowLine63.setAttribute("y1", marasY);
        arrowLine63.setAttribute("x2", tokatX);
        arrowLine63.setAttribute("y2", tokatY);
        arrowLine63.setAttribute("stroke", "blue");
        arrowLine63.setAttribute("stroke-width", "1");

        text63 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text63.setAttribute("x", 570);
        text63.setAttribute("y", 125);
        text63.setAttribute("fill", "aqua");
        text63.setAttribute("font-size","12px");
        text63.textContent = "2300";

       

        arrowLine64 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine64.setAttribute("x1", marasX);
        arrowLine64.setAttribute("y1", marasY);
        arrowLine64.setAttribute("x2", usakX);
        arrowLine64.setAttribute("y2", usakY);
        arrowLine64.setAttribute("stroke", "blue");
        arrowLine64.setAttribute("stroke-width", "1");

        text64 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text64.setAttribute("x", 165);
        text64.setAttribute("y", 250);
        text64.setAttribute("fill", "aqua");
        text64.setAttribute("font-size","12px");
        text64.textContent = "1500";

        arrowLine65 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine65.setAttribute("x1", marasX);
        arrowLine65.setAttribute("y1", marasY);
        arrowLine65.setAttribute("x2", vanX);
        arrowLine65.setAttribute("y2", vanY);
        arrowLine65.setAttribute("stroke", "blue");
        arrowLine65.setAttribute("stroke-width", "1");

        text65 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text65.setAttribute("x", 950);
        text65.setAttribute("y", 250);
        text65.setAttribute("fill", "aqua");
        text65.setAttribute("font-size","12px");
        text65.textContent = "3500";

        arrowLine66 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine66.setAttribute("x1", marasX);
        arrowLine66.setAttribute("y1", marasY);
        arrowLine66.setAttribute("x2", zonguldakX);
        arrowLine66.setAttribute("y2", zonguldakY);
        arrowLine66.setAttribute("stroke", "blue");
        arrowLine66.setAttribute("stroke-width", "1");

        text66 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text66.setAttribute("x", 320);
        text66.setAttribute("y", 70);
        text66.setAttribute("fill", "aqua");
        text66.setAttribute("font-size","12px");
        text66.textContent = "1500";


        arrowLine67 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine67.setAttribute("x1", marasX);
        arrowLine67.setAttribute("y1", marasY);
        arrowLine67.setAttribute("x2", tunceliX);
        arrowLine67.setAttribute("y2", tunceliY);
        arrowLine67.setAttribute("stroke", "blue");
        arrowLine67.setAttribute("stroke-width", "1");

        text67 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text67.setAttribute("x", 720);
        text67.setAttribute("y", 210);
        text67.setAttribute("fill", "aqua");
        text67.setAttribute("font-size","12px");
        text67.textContent = "120";

        


        


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
        svg.appendChild(arrowLine24);
        svg.appendChild(arrowLine25);
        svg.appendChild(arrowLine26);
        svg.appendChild(arrowLine27);
        svg.appendChild(arrowLine28);
        svg.appendChild(arrowLine29);
        svg.appendChild(arrowLine30);
        svg.appendChild(arrowLine31);
        svg.appendChild(arrowLine32);
        svg.appendChild(arrowLine33);
        svg.appendChild(arrowLine34);
        svg.appendChild(arrowLine35);
        svg.appendChild(arrowLine36);
        svg.appendChild(arrowLine37);
        svg.appendChild(arrowLine38);
        svg.appendChild(arrowLine39);
        svg.appendChild(arrowLine40);
        svg.appendChild(arrowLine41);
        svg.appendChild(arrowLine42);
        svg.appendChild(arrowLine43);
        svg.appendChild(arrowLine44);
        svg.appendChild(arrowLine45);
        svg.appendChild(arrowLine46);
        svg.appendChild(arrowLine47);
        svg.appendChild(arrowLine48);
        svg.appendChild(arrowLine49);
        svg.appendChild(arrowLine50);
        svg.appendChild(arrowLine51);
        svg.appendChild(arrowLine52);
        svg.appendChild(arrowLine53);
        svg.appendChild(arrowLine54);
        svg.appendChild(arrowLine55);
        svg.appendChild(arrowLine56);
        svg.appendChild(arrowLine57);
        svg.appendChild(arrowLine58);
        svg.appendChild(arrowLine59);
        svg.appendChild(arrowLine60);
        svg.appendChild(arrowLine61);
        svg.appendChild(arrowLine62);
        svg.appendChild(arrowLine63);
        svg.appendChild(arrowLine64);
        svg.appendChild(arrowLine65);
        svg.appendChild(arrowLine66);
        svg.appendChild(arrowLine67);
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
        svg.appendChild(text24);
        svg.appendChild(text25);
        svg.appendChild(text26);
        svg.appendChild(text27);
        svg.appendChild(text28);
        svg.appendChild(text29);
        svg.appendChild(text30);
        svg.appendChild(text31);
        svg.appendChild(text32);
        svg.appendChild(text33);
        svg.appendChild(text34);
        svg.appendChild(text35);
        svg.appendChild(text36);
        svg.appendChild(text37);
        svg.appendChild(text38);
        svg.appendChild(text39);
        svg.appendChild(text40);
        svg.appendChild(text41);
        svg.appendChild(text42);
        svg.appendChild(text43);
        svg.appendChild(text44);
        svg.appendChild(text45);
        svg.appendChild(text46);
        svg.appendChild(text47);
        svg.appendChild(text48);
        svg.appendChild(text49);
        svg.appendChild(text50);
        svg.appendChild(text51);
        svg.appendChild(text52);
        svg.appendChild(text53);
        svg.appendChild(text54);
        svg.appendChild(text55);
        svg.appendChild(text56);
        svg.appendChild(text57);
        svg.appendChild(text58);
        svg.appendChild(text59);
        svg.appendChild(text60);
        svg.appendChild(text61);
        svg.appendChild(text62);
        svg.appendChild(text63);
        svg.appendChild(text64);
        svg.appendChild(text65);
        svg.appendChild(text66);
        svg.appendChild(text67);





        clicked = true;
    } else {
    
         if (arrowLine&&arrowLine2&&arrowLine3&&arrowLine4&&arrowLine5&&arrowLine6&&arrowLine7&&arrowLine8&&arrowLine9&&arrowLine10&&arrowLine11
            &&arrowLine12&&arrowLine13&&arrowLine14&&arrowLine15&&arrowLine16&&arrowLine17&&arrowLine18&&arrowLine19&&arrowLine20&&arrowLine21&&
            arrowLine22&&arrowLine23&&arrowLine24&&arrowLine25&&arrowLine26&&arrowLine27&&arrowLine28&&arrowLine29&&arrowLine30&&arrowLine31&&
            arrowLine32&&arrowLine33&&arrowLine34&&arrowLine35&&arrowLine36&&arrowLine37&&arrowLine38&&arrowLine39&&arrowLine40&&arrowLine41
            &&arrowLine42&&arrowLine43&&arrowLine44&&arrowLine45&&arrowLine46&&arrowLine47&&arrowLine48&&arrowLine49&&arrowLine50&&arrowLine51&&arrowLine52&&arrowLine53
            &&arrowLine54&&arrowLine55&&arrowLine56&&arrowLine57&&arrowLine58&&arrowLine59&&arrowLine60&&arrowLine61&&arrowLine62&&arrowLine63&&arrowLine64&&arrowLine65
            &&arrowLine66&&arrowLine67
            &&text1&&text2&&text3&& text4 && text5&&text6&&text7&&text8&&text9&&text10&&text11&&text12&&text13&&text14&&text15&&text16&&text17
        &&text18&&text19&&text20&&text21&&text22&&text23&&text24&&text25&&text26&&text27&&text28&&text29&&text30&&text31&&text32&&text33
    &&text34&&text35&&text36&&text37&&text38&&text39&&text40&&text41&&text42&&text43&&text44&&text45&&text46&&text47&&text48&&text49&&text50&&text51&&text52&&text53&&text54
    &&text55&&text56&&text57&&text58&&text59&&text60&&text61&&text62&&text63&&text64&&text65&&text66&&text67) {
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
            arrowLine24.remove();
            arrowLine25.remove();
            arrowLine26.remove();
            arrowLine27.remove();
            arrowLine28.remove();
            arrowLine29.remove();
            arrowLine30.remove();
            arrowLine31.remove();
            arrowLine32.remove();
            arrowLine33.remove();
            arrowLine34.remove();
            arrowLine35.remove();
            arrowLine36.remove();
            arrowLine37.remove();
            arrowLine38.remove();
            arrowLine39.remove();
            arrowLine40.remove();
            arrowLine41.remove();
            arrowLine42.remove();
            arrowLine43.remove();
            arrowLine44.remove();
            arrowLine45.remove();
            arrowLine46.remove();
            arrowLine47.remove();
            arrowLine48.remove();
            arrowLine49.remove();
            arrowLine50.remove();
            arrowLine51.remove();
            arrowLine52.remove();
            arrowLine53.remove();
            arrowLine54.remove();
            arrowLine55.remove();
            arrowLine56.remove();
            arrowLine57.remove();
            arrowLine58.remove();
            arrowLine59.remove();
            arrowLine60.remove();
            arrowLine61.remove();
            arrowLine62.remove();
            arrowLine63.remove();
            arrowLine64.remove();
            arrowLine65.remove();
            arrowLine66.remove();
            arrowLine67.remove();

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
            text24.remove();
            text25.remove();
            text26.remove();
            text27.remove();
            text28.remove();
            text29.remove();
            text30.remove();
            text31.remove();
            text32.remove();
            text33.remove();
            text34.remove()
            text35.remove()
            text36.remove()
            text37.remove()
            text38.remove()
            text39.remove()
            text40.remove()
            text41.remove()
            text42.remove()
            text43.remove()
            text44.remove()
            text45.remove()
            text46.remove()
            text47.remove()
            text48.remove()
            text49.remove()
            text50.remove()
            text51.remove()
            text52.remove()
            text53.remove()
            text54.remove()
            text55.remove()
            text56.remove()
            text57.remove()
            text58.remove()
            text59.remove()
            text60.remove()
            text61.remove()
            text62.remove()
            text63.remove()
            text64.remove()
            text65.remove()
            text66.remove()
            text67.remove()

            
        }

        


        clicked = false;
    }
});
