var svg = document.getElementById("svg-turkiye-haritasi");
var turkeyText = document.getElementById("sanliurfa");
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
        var adiyamanX = 720;var adiyamanY= 355;
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
        var bursaX=185;     var bursaY=130;
        var canakkaleX=70;  var canakkaleY=130;
        var corumX=460;     var corumY=130;
        var denizliX=165;   var denizliY=300;
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
        var sakaryaX=255;   var sakaryaY=100;
        var yalovaX=185;    var yalovaY=110;
        var yozgatX=500;    var yozgatY=180;
        var agriX=910;      var agriY=170;
        var bitlisX=860;    var bitlisY=250;
        var cankiriX=400;   var cankiriY=110;
        var giresunX=670;   var giresunY=120;
        var gumushaneX=710; var gumushaneY=140;
        var hakkariX=970;   var hakkariY=310;
        var kastamonuX=410; var kastamonuY=60;
        var musX=850;       var musY=220;
        var rizeX=790;      var rizeY=90;
        var sivasX=600;     var sivasY=180;
        var tokatX=570;     var tokatY=125;
        var usakX=165;      var usakY=250;
        var karabukX=360;   var karabukY=80;



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
        text1.textContent = "668";

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
        text2.textContent = "199";


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
        text3.textContent = "1036";


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
        text4.textContent = "3960";


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
        text5.textContent = "4500";


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
        text6.textContent = "102";


    
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
        text7.textContent = "470";


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
        text8.textContent = "320";


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
        text9.textContent = "50";


        arrowLine10 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine10.setAttribute("x1", adiyamanX);
        arrowLine10.setAttribute("y1", adiyamanY);
        arrowLine10.setAttribute("x2", bingölX);
        arrowLine10.setAttribute("y2", bingölY);
        arrowLine10.setAttribute("stroke", "blue");
        arrowLine10.setAttribute("stroke-width", "1");

        text10 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text10.setAttribute("x", 780);
        text10.setAttribute("y", 220);
        text10.setAttribute("fill", "aqua");
        text10.setAttribute("font-size","12px");
        text10.textContent = "122";

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
        text11.textContent = "140";

        arrowLine12 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine12.setAttribute("x1", adiyamanX);
        arrowLine12.setAttribute("y1", adiyamanY);
        arrowLine12.setAttribute("x2", karabukX);
        arrowLine12.setAttribute("y2", karabukY);
        arrowLine12.setAttribute("stroke", "blue");
        arrowLine12.setAttribute("stroke-width", "1");

        text12 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text12.setAttribute("x", 360);
        text12.setAttribute("y", 80);
        text12.setAttribute("fill", "aqua");
        text12.setAttribute("font-size","12px");
        text12.textContent = "250";


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
        text12.textContent = "1000";



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
        text13.textContent = "400";


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
        text14.textContent = "102";

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
        text16.textContent = "200";



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
        text17.textContent = "500";




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
        text18.textContent = "438";

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
        text19.textContent = "600";


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
        text20.textContent = "151";



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
        text21.textContent = "750";



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
        text22.textContent = "100";



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
        text23.textContent = "900";



        arrowLine24 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine24.setAttribute("x1", adiyamanX);
        arrowLine24.setAttribute("y1", adiyamanY);
        arrowLine24.setAttribute("x2", kirikkaleX);
        arrowLine24.setAttribute("y2", kirikkaleY);
        arrowLine24.setAttribute("stroke", "blue");
        arrowLine24.setAttribute("stroke-width", "1");

        text24 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text24.setAttribute("x", 420);
        text24.setAttribute("y", 165);
        text24.setAttribute("fill", "aqua");
        text24.setAttribute("font-size","12px");
        text24.textContent = "128";




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
        text25.textContent = "207";




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
        text26.textContent = "250";




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
        text27.textContent = "500";




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
        text28.textContent = "200";




        arrowLine29 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine29.setAttribute("x1", adiyamanX);
        arrowLine29.setAttribute("y1", adiyamanY);
        arrowLine29.setAttribute("x2", kütahyaX);
        arrowLine29.setAttribute("y2", kütahyaY);
        arrowLine29.setAttribute("stroke", "blue");
        arrowLine18.setAttribute("stroke-width", "1");

        text29 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text29.setAttribute("x", 175);
        text29.setAttribute("y", 200);
        text29.setAttribute("fill", "aqua");
        text29.setAttribute("font-size","12px");
        text29.textContent = "100";




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
        text30.textContent = "181";




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
        text31.textContent = "300";



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
        text32.textContent = "400";



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
        text33.textContent = "144";

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
        text34.textContent = "451";

        arrowLine35 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine35.setAttribute("x1", adiyamanX);
        arrowLine35.setAttribute("y1", adiyamanY);
        arrowLine35.setAttribute("x2", nigdeX);
        arrowLine35.setAttribute("y2", nigdeY);
        arrowLine35.setAttribute("stroke", "blue");
        arrowLine35.setAttribute("stroke-width", "1");

        text35 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text35.setAttribute("x", 460);
        text35.setAttribute("y", 290);
        text35.setAttribute("fill", "aqua");
        text35.setAttribute("font-size","12px");
        text35.textContent = "101";

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
        text37.textContent = "200";

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
        text40.textContent = "20";




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
        text42.textContent = "130";

   
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
        text46.textContent = "210";

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
        text47.textContent = "30";

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
        text51.textContent = "173";

        arrowLine52 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine52.setAttribute("x1", adiyamanX);
        arrowLine52.setAttribute("y1", adiyamanY);
        arrowLine52.setAttribute("x2", gumushaneX);
        arrowLine52.setAttribute("y2", gumushaneY);
        arrowLine52.setAttribute("stroke", "blue");
        arrowLine52.setAttribute("stroke-width", "1");

        text52 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text52.setAttribute("x", 710);
        text52.setAttribute("y", 140);
        text52.setAttribute("fill", "aqua");
        text52.setAttribute("font-size","12px");
        text52.textContent = "42";

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
        text53.textContent = "46";


        arrowLine55 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine55.setAttribute("x1", adiyamanX);
        arrowLine55.setAttribute("y1", adiyamanY);
        arrowLine55.setAttribute("x2", kastamonuX);
        arrowLine55.setAttribute("y2", kastamonuY);
        arrowLine55.setAttribute("stroke", "blue");
        arrowLine55.setAttribute("stroke-width", "1");

        text55 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text55.setAttribute("x", 410);
        text55.setAttribute("y", 60);
        text55.setAttribute("fill", "aqua");
        text55.setAttribute("font-size","12px");
        text55.textContent = "74";

        arrowLine56 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine56.setAttribute("x1", adiyamanX);
        arrowLine56.setAttribute("y1", adiyamanY);
        arrowLine56.setAttribute("x2", musX);
        arrowLine56.setAttribute("y2", musY);
        arrowLine56.setAttribute("stroke", "blue");
        arrowLine56.setAttribute("stroke-width", "1");

        text56 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text56.setAttribute("x", 850);
        text56.setAttribute("y", 220);
        text56.setAttribute("fill", "aqua");
        text56.setAttribute("font-size","12px");
        text56.textContent = "150";

        arrowLine57 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine57.setAttribute("x1", adiyamanX);
        arrowLine57.setAttribute("y1", adiyamanY);
        arrowLine57.setAttribute("x2", rizeX);
        arrowLine57.setAttribute("y2", rizeY);
        arrowLine57.setAttribute("stroke", "blue");
        arrowLine57.setAttribute("stroke-width", "1");

        text57 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text57.setAttribute("x", 790);
        text57.setAttribute("y", 90);
        text57.setAttribute("fill", "aqua");
        text57.setAttribute("font-size","12px");
        text57.textContent = "30";

 
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
        text60.textContent = "100";

        arrowLine63 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine63.setAttribute("x1", adiyamanX);
        arrowLine63.setAttribute("y1", adiyamanY);
        arrowLine63.setAttribute("x2", tokatX);
        arrowLine63.setAttribute("y2", tokatY);
        arrowLine63.setAttribute("stroke", "blue");
        arrowLine63.setAttribute("stroke-width", "1");

        text63 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text63.setAttribute("x", 570);
        text63.setAttribute("y", 125);
        text63.setAttribute("fill", "aqua");
        text63.setAttribute("font-size","12px");
        text63.textContent = "160";

        arrowLine64 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine64.setAttribute("x1", adiyamanX);
        arrowLine64.setAttribute("y1", adiyamanY);
        arrowLine64.setAttribute("x2", usakX);
        arrowLine64.setAttribute("y2", usakY);
        arrowLine64.setAttribute("stroke", "blue");
        arrowLine64.setAttribute("stroke-width", "1");

        text64 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text64.setAttribute("x", 165);
        text64.setAttribute("y", 250);
        text64.setAttribute("fill", "aqua");
        text64.setAttribute("font-size","12px");
        text64.textContent = "280";

    
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
        svg.appendChild(arrowLine37);
        svg.appendChild(arrowLine40);
        svg.appendChild(arrowLine41);
        svg.appendChild(arrowLine42);
        svg.appendChild(arrowLine46);
        svg.appendChild(arrowLine47);
        svg.appendChild(arrowLine51);
        svg.appendChild(arrowLine52);
        svg.appendChild(arrowLine53);
        svg.appendChild(arrowLine55);
        svg.appendChild(arrowLine56);
        svg.appendChild(arrowLine57);
        svg.appendChild(arrowLine60);
        svg.appendChild(arrowLine64);
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
        svg.appendChild(text37);
        svg.appendChild(text40);
        svg.appendChild(text41);
        svg.appendChild(text42);
        svg.appendChild(text46);
        svg.appendChild(text47);
        svg.appendChild(text51);
        svg.appendChild(text52);
        svg.appendChild(text53);
        svg.appendChild(text55);
        svg.appendChild(text56);
        svg.appendChild(text57);
        svg.appendChild(text60);
        svg.appendChild(text64);





        clicked = true;
    } else {
         if (arrowLine&&arrowLine2&&arrowLine3&&arrowLine4&&arrowLine5&&arrowLine6&&arrowLine7&&arrowLine8&&arrowLine9&&arrowLine10&&arrowLine11
            &&arrowLine12&&arrowLine13&&arrowLine14&&arrowLine16&&arrowLine17&&arrowLine18&&arrowLine19&&arrowLine20&&arrowLine21&&
            arrowLine22&&arrowLine23&&arrowLine24&&arrowLine25&&arrowLine26&&arrowLine27&&arrowLine28&&arrowLine29&&arrowLine30&&arrowLine31&&
            arrowLine32&&arrowLine33&&arrowLine34&&arrowLine35&&arrowLine37&&arrowLine40&&arrowLine41
            &&arrowLine42&&arrowLine46&&arrowLine47&&arrowLine51&&arrowLine52&&arrowLine53
            &&arrowLine55&&arrowLine56&&arrowLine57&&arrowLine60&&arrowLine64
            
            &&text1&&text2&&text3&& text4 && text5&&text6&&text7&&text8&&text9&&text10&&text11&&text12&&text13&&text14&&text16&&text17
        &&text18&&text19&&text20&&text21&&text22&&text23&&text24&&text25&&text26&&text27&&text28&&text29&&text30&&text31&&text32&&text33
    &&text34&&text35&&text37&&text40&&text41&&text42&&text46&&text47&&text51&&text52&&text53
    &&text55&&text56&&text57&&text60&&text64) {
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
            arrowLine37.remove();
            arrowLine40.remove();
            arrowLine41.remove();
            arrowLine42.remove();
            arrowLine46.remove();
            arrowLine47.remove();
            arrowLine51.remove();
            arrowLine52.remove();
            arrowLine53.remove();
            arrowLine55.remove();
            arrowLine56.remove();
            arrowLine57.remove();
            arrowLine60.remove();
            arrowLine64.remove();


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
            text37.remove()
            text40.remove()
            text41.remove()
            text42.remove()
            text46.remove()
            text47.remove()
            text51.remove()
            text52.remove()
            text53.remove()
            text55.remove()
            text56.remove()
            text57.remove()
            text60.remove()
            text64.remove()


            
        }

        


        clicked = false;
    }
});

