var svg = document.getElementById("svg-turkiye-haritasi");
var turkeyText = document.getElementById("osmaniye");
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
        var adanaX = 550;   var adanaY = 350;
        var afyonX = 250;   var afyonY = 250;
        var ankaraX=350;    var ankaraY=170;
        var antalyaX=270;   var antalyaY=350;
        var balıkesirX=110; var balıkesirY=155;
        var bartinX=360;    var bartinY=50;
        var boluX=300;      var boluY=120;
        var bursaX=185;     var bursaY=130;
        var canakkaleX=70;  var canakkaleY=130;
        var eskişehirX=270; var eskişehirY=180;
        var ispartaX=260;   var ispartaY=300;
        var istanbulX=180;  var istanbulY=80;
        var izmirX=80;      var izmirY=260;
        var karamanX=380;   var karamanY=360;
        var kayseriX=520;   var kayseriY=250;
        var kirsehirX=440;  var kirsehirY=210;
        var kocaeliX=220;   var kocaeliY=90;
        var konyaX=350;     var konyaY=300;
        var manisaX=110;    var manisaY=230;
        var mardinX=790;    var mardinY=335;
        var mersinX=400;    var mersinY=390;
        var muglaX=140;     var muglaY=350;
        var nevsehirX=460;  var nevsehirY=250;
        var sakaryaX=255;   var sakaryaY=100;
        var yalovaX=185;    var yalovaY=110;
        var agriX=910;      var agriY=170;
        var bitlisX=860;    var bitlisY=250;
        var hakkariX=970;   var hakkariY=310;
        var musX=850;       var musY=220;
        var tokatX=570;     var tokatY=125;
        var usakX=165;      var usakY=250;
        var aksarayX=420;   var aksarayY=270;
        var artvinX=830;    var artvinY=80
        var corumX=460;     var corumY=130
        var denizliX=165;   var denizliY=300
        var duzceX=280;     var duzceY=100;
        var erzurumX=830;   var erzurumY=160;
        var karabukX=360;   var karabukY=80;
        var kastamonuX=410; var kastamonuY=60;
        var kirikkaleX=420; var kirikkaleY=165;
        var kırklareliX=95; var kırklareliY=30;
        var kutahyaX=175;   var kutahyaY=200;
        var nigdeX=460;     var nigdeY=290; 
        var rizeX=790;      var rizeY=90;
        var sivasX=600;     var sivasY=180;
        var vanX=950;       var vanY=250;
        var zonguldakX=320; var zonguldakY=70;

        



        arrowLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine.setAttribute("x1", adanaX);
        arrowLine.setAttribute("y1", adanaY);
        arrowLine.setAttribute("x2", afyonX);
        arrowLine.setAttribute("y2", afyonY);
        arrowLine.setAttribute("stroke", "blue"); 
        arrowLine.setAttribute("stroke-width", "1");

        text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text1.setAttribute("x", 250);
        text1.setAttribute("y",250);
        text1.setAttribute("fill", "aqua");
        text1.setAttribute("font-size","12px");
        text1.textContent = "430";

        arrowLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine2.setAttribute("x1", adanaX);
        arrowLine2.setAttribute("y1", adanaY);
        arrowLine2.setAttribute("x2", agriX);
        arrowLine2.setAttribute("y2", agriY);
        arrowLine2.setAttribute("stroke", "blue");
        arrowLine2.setAttribute("stroke-width", "1");

        text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", 910);
        text2.setAttribute("y", 170);
        text2.setAttribute("fill", "aqua");
        text2.setAttribute("font-size","12px");
        text2.textContent = "148";


        arrowLine3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine3.setAttribute("x1", adanaX);
        arrowLine3.setAttribute("y1", adanaY);
        arrowLine3.setAttribute("x2", aksarayX);
        arrowLine3.setAttribute("y2", aksarayY);
        arrowLine3.setAttribute("stroke", "blue");
        arrowLine3.setAttribute("stroke-width", "1");

        text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text3.setAttribute("x", 420);
        text3.setAttribute("y", 270);
        text3.setAttribute("fill", "aqua");
        text3.setAttribute("font-size","12px");
        text3.textContent = "65";


        arrowLine4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine4.setAttribute("x1", adanaX);
        arrowLine4.setAttribute("y1", adanaY);
        arrowLine4.setAttribute("x2", ankaraX);
        arrowLine4.setAttribute("y2", ankaraY);
        arrowLine4.setAttribute("stroke", "blue");
        arrowLine4.setAttribute("stroke-width", "1");

        text4 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text4.setAttribute("x", 350);
        text4.setAttribute("y", 170);
        text4.setAttribute("fill", "aqua");
        text4.setAttribute("font-size","12px");
        text4.textContent = "520";


        arrowLine5 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine5.setAttribute("x1", adanaX);
        arrowLine5.setAttribute("y1", adanaY);
        arrowLine5.setAttribute("x2", antalyaX);
        arrowLine5.setAttribute("y2", antalyaY);
        arrowLine5.setAttribute("stroke", "blue");
        arrowLine5.setAttribute("stroke-width", "1");

        text5 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text5.setAttribute("x", 270);
        text5.setAttribute("y", 350);
        text5.setAttribute("fill", "aqua");
        text5.setAttribute("font-size","12px");
        text5.textContent = "3596";


        arrowLine6 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine6.setAttribute("x1", adanaX);
        arrowLine6.setAttribute("y1", adanaY);
        arrowLine6.setAttribute("x2", bitlisX);
        arrowLine6.setAttribute("y2", bitlisY);
        arrowLine6.setAttribute("stroke", "blue");
        arrowLine6.setAttribute("stroke-width", "1");

        text6 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text6.setAttribute("x", 860);
        text6.setAttribute("y", 250);
        text6.setAttribute("fill", "aqua");
        text6.setAttribute("font-size","12px");
        text6.textContent = "100";


    
      

        arrowLine8 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine8.setAttribute("x1", adanaX);
        arrowLine8.setAttribute("y1", adanaY);
        arrowLine8.setAttribute("x2", balıkesirX);
        arrowLine8.setAttribute("y2", balıkesirY);
        arrowLine8.setAttribute("stroke", "blue");
        arrowLine8.setAttribute("stroke-width", "1");

        text8 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text8.setAttribute("x", 110);
        text8.setAttribute("y", 155);
        text8.setAttribute("fill", "aqua");
        text8.setAttribute("font-size","12px");
        text8.textContent = "150";


        arrowLine9 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine9.setAttribute("x1", adanaX);
        arrowLine9.setAttribute("y1", adanaY);
        arrowLine9.setAttribute("x2", bartinX);
        arrowLine9.setAttribute("y2", bartinY);
        arrowLine9.setAttribute("stroke", "blue");
        arrowLine9.setAttribute("stroke-width", "1");

        text9 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text9.setAttribute("x", 360);
        text9.setAttribute("y", 50);
        text9.setAttribute("fill", "aqua");
        text9.setAttribute("font-size","12px");
        text9.textContent = "25";


        arrowLine10 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine10.setAttribute("x1", adanaX);
        arrowLine10.setAttribute("y1", adanaY);
        arrowLine10.setAttribute("x2", artvinX);
        arrowLine10.setAttribute("y2", artvinY);
        arrowLine10.setAttribute("stroke", "blue");
        arrowLine10.setAttribute("stroke-width", "1");

        text10 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text10.setAttribute("x", 830);
        text10.setAttribute("y", 80);
        text10.setAttribute("fill", "aqua");
        text10.setAttribute("font-size","12px");
        text10.textContent = "90";

        arrowLine11 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine11.setAttribute("x1", adanaX);
        arrowLine11.setAttribute("y1", adanaY);
        arrowLine11.setAttribute("x2", boluX);
        arrowLine11.setAttribute("y2", boluY);
        arrowLine11.setAttribute("stroke", "blue");
        arrowLine11.setAttribute("stroke-width", "1");

        text11 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text11.setAttribute("x", 300);
        text11.setAttribute("y", 120);
        text11.setAttribute("fill", "aqua");
        text11.setAttribute("font-size","12px");
        text11.textContent = "100";

 
        arrowLine12 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine12.setAttribute("x1", adanaX);
        arrowLine12.setAttribute("y1", adanaY);
        arrowLine12.setAttribute("x2", bursaX);
        arrowLine12.setAttribute("y2", bursaY);
        arrowLine12.setAttribute("stroke", "blue");
        arrowLine12.setAttribute("stroke-width", "1");

        text12 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text12.setAttribute("x", 185);
        text12.setAttribute("y", 130);
        text12.setAttribute("fill", "aqua");
        text12.setAttribute("font-size","12px");
        text12.textContent = "500";



        arrowLine13 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine13.setAttribute("x1", adanaX);
        arrowLine13.setAttribute("y1", adanaY);
        arrowLine13.setAttribute("x2", canakkaleX);
        arrowLine13.setAttribute("y2", canakkaleY);
        arrowLine13.setAttribute("stroke", "blue");
        arrowLine13.setAttribute("stroke-width", "1");

        text13 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text13.setAttribute("x", 70);
        text13.setAttribute("y", 130);
        text13.setAttribute("fill", "aqua");
        text13.setAttribute("font-size","12px");
        text13.textContent = "200";




        arrowLine15 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine15.setAttribute("x1", adanaX);
        arrowLine15.setAttribute("y1", adanaY);
        arrowLine15.setAttribute("x2", denizliX);
        arrowLine15.setAttribute("y2", denizliY);
        arrowLine15.setAttribute("stroke", "blue");
        arrowLine15.setAttribute("stroke-width", "1");

        text15 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text15.setAttribute("x", 165);
        text15.setAttribute("y", 300);
        text15.setAttribute("fill", "aqua");
        text15.setAttribute("font-size","12px");
        text15.textContent = "426";




        arrowLine17 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine17.setAttribute("x1", adanaX);
        arrowLine17.setAttribute("y1", adanaY);
        arrowLine17.setAttribute("x2", eskişehirX);
        arrowLine17.setAttribute("y2", eskişehirY);
        arrowLine17.setAttribute("stroke", "blue");
        arrowLine17.setAttribute("stroke-width", "1");

        text17 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text17.setAttribute("x", 270);
        text17.setAttribute("y", 180);
        text17.setAttribute("fill", "aqua");
        text17.setAttribute("font-size","12px");
        text17.textContent = "69";




        arrowLine18 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine18.setAttribute("x1", adanaX);
        arrowLine18.setAttribute("y1", adanaY);
        arrowLine18.setAttribute("x2", hakkariX);
        arrowLine18.setAttribute("y2", hakkariY);
        arrowLine18.setAttribute("stroke", "blue");
        arrowLine18.setAttribute("stroke-width", "1");

        text18 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text18.setAttribute("x", 970);
        text18.setAttribute("y", 310);
        text18.setAttribute("fill", "aqua");
        text18.setAttribute("font-size","12px");
        text18.textContent = "54";

        arrowLine19 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine19.setAttribute("x1", adanaX);
        arrowLine19.setAttribute("y1", adanaY);
        arrowLine19.setAttribute("x2", ispartaX);
        arrowLine19.setAttribute("y2", ispartaY);
        arrowLine19.setAttribute("stroke", "blue");
        arrowLine19.setAttribute("stroke-width", "1");

        text19 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text19.setAttribute("x", 260);
        text19.setAttribute("y", 300);
        text19.setAttribute("fill", "aqua");
        text19.setAttribute("font-size","12px");
        text19.textContent = "84";


        arrowLine20 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine20.setAttribute("x1", adanaX);
        arrowLine20.setAttribute("y1", adanaY);
        arrowLine20.setAttribute("x2", istanbulX);
        arrowLine20.setAttribute("y2", istanbulY);
        arrowLine20.setAttribute("stroke", "blue");
        arrowLine20.setAttribute("stroke-width", "1");

        text20 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text20.setAttribute("x", 180);
        text20.setAttribute("y", 80);
        text20.setAttribute("fill", "aqua");
        text20.setAttribute("font-size","12px");
        text20.textContent = "162";



        arrowLine21 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine21.setAttribute("x1", adanaX);
        arrowLine21.setAttribute("y1", adanaY);
        arrowLine21.setAttribute("x2", izmirX);
        arrowLine21.setAttribute("y2", izmirY);
        arrowLine21.setAttribute("stroke", "blue");
        arrowLine21.setAttribute("stroke-width", "1");

        text21 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text21.setAttribute("x", 80);
        text21.setAttribute("y", 260);
        text21.setAttribute("fill", "aqua");
        text21.setAttribute("font-size","12px");
        text21.textContent = "250";



        arrowLine22 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine22.setAttribute("x1", adanaX);
        arrowLine22.setAttribute("y1", adanaY);
        arrowLine22.setAttribute("x2", karamanX);
        arrowLine22.setAttribute("y2", karamanY);
        arrowLine22.setAttribute("stroke", "blue");
        arrowLine22.setAttribute("stroke-width", "1");

        text22 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text22.setAttribute("x", 380);
        text22.setAttribute("y", 360);
        text22.setAttribute("fill", "aqua");
        text22.setAttribute("font-size","12px");
        text22.textContent = "250";



        arrowLine23 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine23.setAttribute("x1", adanaX);
        arrowLine23.setAttribute("y1", adanaY);
        arrowLine23.setAttribute("x2", kayseriX);
        arrowLine23.setAttribute("y2", kayseriY);
        arrowLine23.setAttribute("stroke", "blue");
        arrowLine23.setAttribute("stroke-width", "1");

        text23 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text23.setAttribute("x", 520);
        text23.setAttribute("y", 250);
        text23.setAttribute("fill", "aqua");
        text23.setAttribute("font-size","12px");
        text23.textContent = "1067";


        arrowLine26 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine26.setAttribute("x1", adanaX);
        arrowLine26.setAttribute("y1", adanaY);
        arrowLine26.setAttribute("x2", kirsehirX);
        arrowLine26.setAttribute("y2", kirsehirY);
        arrowLine26.setAttribute("stroke", "blue");
        arrowLine26.setAttribute("stroke-width", "1");

        text26 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text26.setAttribute("x", 440);
        text26.setAttribute("y", 210);
        text26.setAttribute("fill", "aqua");
        text26.setAttribute("font-size","12px");
        text26.textContent = "750";




        arrowLine27 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine27.setAttribute("x1", adanaX);
        arrowLine27.setAttribute("y1", adanaY);
        arrowLine27.setAttribute("x2", kocaeliX);
        arrowLine27.setAttribute("y2", kocaeliY);
        arrowLine27.setAttribute("stroke", "blue");
        arrowLine27.setAttribute("stroke-width", "1");

        text27 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text27.setAttribute("x", 220);
        text27.setAttribute("y", 90);
        text27.setAttribute("fill", "aqua");
        text27.setAttribute("font-size","12px");
        text27.textContent = "750";




        arrowLine28 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine28.setAttribute("x1", adanaX);
        arrowLine28.setAttribute("y1", adanaY);
        arrowLine28.setAttribute("x2", konyaX);
        arrowLine28.setAttribute("y2", konyaY);
        arrowLine28.setAttribute("stroke", "blue");
        arrowLine28.setAttribute("stroke-width", "1");

        text28 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text28.setAttribute("x", 350);
        text28.setAttribute("y", 300);
        text28.setAttribute("fill", "aqua");
        text28.setAttribute("font-size","12px");
        text28.textContent = "600";




        arrowLine29 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine29.setAttribute("x1", adanaX);
        arrowLine29.setAttribute("y1", adanaY);
        arrowLine29.setAttribute("x2", musX);
        arrowLine29.setAttribute("y2", musY);
        arrowLine29.setAttribute("stroke", "blue");
        arrowLine18.setAttribute("stroke-width", "1");

        text29 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text29.setAttribute("x", 850);
        text29.setAttribute("y", 220);
        text29.setAttribute("fill", "aqua");
        text29.setAttribute("font-size","12px");
        text29.textContent = "156";




        arrowLine30 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine30.setAttribute("x1", adanaX);
        arrowLine30.setAttribute("y1", adanaY);
        arrowLine30.setAttribute("x2", manisaX);
        arrowLine30.setAttribute("y2", manisaY);
        arrowLine30.setAttribute("stroke", "blue");
        arrowLine30.setAttribute("stroke-width", "1");

        text30 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text30.setAttribute("x", 110);
        text30.setAttribute("y", 230);
        text30.setAttribute("fill", "aqua");
        text30.setAttribute("font-size","12px");
        text30.textContent = "227";




        arrowLine31 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine31.setAttribute("x1", adanaX);
        arrowLine31.setAttribute("y1", adanaY);
        arrowLine31.setAttribute("x2", mardinX);
        arrowLine31.setAttribute("y2", mardinY);
        arrowLine31.setAttribute("stroke", "blue");
        arrowLine31.setAttribute("stroke-width", "1");

        text31 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text31.setAttribute("x", 790);
        text31.setAttribute("y", 335);
        text31.setAttribute("fill", "aqua");
        text31.setAttribute("font-size","12px");
        text31.textContent = "630";



        arrowLine32 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine32.setAttribute("x1", adanaX);
        arrowLine32.setAttribute("y1", adanaY);
        arrowLine32.setAttribute("x2", mersinX);
        arrowLine32.setAttribute("y2", mersinY);
        arrowLine32.setAttribute("stroke", "blue");
        arrowLine32.setAttribute("stroke-width", "1");

        text32 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text32.setAttribute("x", 400);
        text32.setAttribute("y", 390);
        text32.setAttribute("fill", "aqua");
        text32.setAttribute("font-size","12px");
        text32.textContent = "250";



        arrowLine33 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine33.setAttribute("x1", adanaX);
        arrowLine33.setAttribute("y1", adanaY);
        arrowLine33.setAttribute("x2", muglaX);
        arrowLine33.setAttribute("y2", muglaY);
        arrowLine33.setAttribute("stroke", "blue");
        arrowLine33.setAttribute("stroke-width", "1");

        text33 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text33.setAttribute("x", 140);
        text33.setAttribute("y", 350);
        text33.setAttribute("fill", "aqua");
        text33.setAttribute("font-size","12px");
        text33.textContent = "256";

        arrowLine34 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine34.setAttribute("x1", adanaX);
        arrowLine34.setAttribute("y1", adanaY);
        arrowLine34.setAttribute("x2", nevsehirX);
        arrowLine34.setAttribute("y2", nevsehirY);
        arrowLine34.setAttribute("stroke", "blue");
        arrowLine34.setAttribute("stroke-width", "1");

        text34 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text34.setAttribute("x", 460);
        text34.setAttribute("y", 250);
        text34.setAttribute("fill", "aqua");
        text34.setAttribute("font-size","12px");
        text34.textContent = "730";

        arrowLine35 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine35.setAttribute("x1", adanaX);
        arrowLine35.setAttribute("y1", adanaY);
        arrowLine35.setAttribute("x2", tokatX);
        arrowLine35.setAttribute("y2", tokatY);
        arrowLine35.setAttribute("stroke", "blue");
        arrowLine35.setAttribute("stroke-width", "1");

        text35 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text35.setAttribute("x", 570);
        text35.setAttribute("y", 125);
        text35.setAttribute("fill", "aqua");
        text35.setAttribute("font-size","12px");
        text35.textContent = "100";


        arrowLine36 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine36.setAttribute("x1", adanaX);
        arrowLine36.setAttribute("y1", adanaY);
        arrowLine36.setAttribute("x2", usakX);
        arrowLine36.setAttribute("y2", usakY);
        arrowLine36.setAttribute("stroke", "blue");
        arrowLine36.setAttribute("stroke-width", "1");

        text36 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text36.setAttribute("x", 165);
        text36.setAttribute("y", 250);
        text36.setAttribute("fill", "aqua");
        text36.setAttribute("font-size","12px");
        text36.textContent = "250";

        arrowLine37 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine37.setAttribute("x1", adanaX);
        arrowLine37.setAttribute("y1", adanaY);
        arrowLine37.setAttribute("x2", sakaryaX);
        arrowLine37.setAttribute("y2", sakaryaY);
        arrowLine37.setAttribute("stroke", "blue");
        arrowLine37.setAttribute("stroke-width", "1");

        text37 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text37.setAttribute("x", 255);
        text37.setAttribute("y", 100);
        text37.setAttribute("fill", "aqua");
        text37.setAttribute("font-size","12px");
        text37.textContent = "410";



        arrowLine40 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine40.setAttribute("x1", adanaX);
        arrowLine40.setAttribute("y1", adanaY);
        arrowLine40.setAttribute("x2", yalovaX);
        arrowLine40.setAttribute("y2", yalovaY);
        arrowLine40.setAttribute("stroke", "blue");
        arrowLine40.setAttribute("stroke-width", "1");

        text40 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text40.setAttribute("x", 185);
        text40.setAttribute("y", 110);
        text40.setAttribute("fill", "aqua");
        text40.setAttribute("font-size","12px");
        text40.textContent = "80";


        arrowLine41 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine41.setAttribute("x1", adanaX);
        arrowLine41.setAttribute("y1", adanaY);
        arrowLine41.setAttribute("x2", duzceX);
        arrowLine41.setAttribute("y2", duzceY);
        arrowLine41.setAttribute("stroke", "blue");
        arrowLine41.setAttribute("stroke-width", "1");

        text41 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text41.setAttribute("x", 280);
        text41.setAttribute("y", 100);
        text41.setAttribute("fill", "aqua");
        text41.setAttribute("font-size","12px");
        text41.textContent = "62";


        arrowLine42 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine42.setAttribute("x1", adanaX);
        arrowLine42.setAttribute("y1", adanaY);
        arrowLine42.setAttribute("x2", erzurumX);
        arrowLine42.setAttribute("y2", erzurumY);
        arrowLine42.setAttribute("stroke", "blue");
        arrowLine42.setAttribute("stroke-width", "1");

        text42 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text42.setAttribute("x", 830);
        text42.setAttribute("y", 160);
        text42.setAttribute("fill", "aqua");
        text42.setAttribute("font-size","12px");
        text42.textContent = "58";


        arrowLine43 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine43.setAttribute("x1", adanaX);
        arrowLine43.setAttribute("y1", adanaY);
        arrowLine43.setAttribute("x2", karabukX);
        arrowLine43.setAttribute("y2", karabukY);
        arrowLine43.setAttribute("stroke", "blue");
        arrowLine43.setAttribute("stroke-width", "1");

        text43 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text43.setAttribute("x", 360);
        text43.setAttribute("y", 80);
        text43.setAttribute("fill", "aqua");
        text43.setAttribute("font-size","12px");
        text43.textContent = "250";


        arrowLine44 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine44.setAttribute("x1", adanaX);
        arrowLine44.setAttribute("y1", adanaY);
        arrowLine44.setAttribute("x2", kastamonuX);
        arrowLine44.setAttribute("y2", kastamonuY);
        arrowLine44.setAttribute("stroke", "blue");
        arrowLine44.setAttribute("stroke-width", "1");

        text44 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text44.setAttribute("x", 410);
        text44.setAttribute("y", 60);
        text44.setAttribute("fill", "aqua");
        text44.setAttribute("font-size","12px");
        text44.textContent = "276";



        arrowLine45 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine45.setAttribute("x1", adanaX);
        arrowLine45.setAttribute("y1", adanaY);
        arrowLine45.setAttribute("x2", kırklareliX);
        arrowLine45.setAttribute("y2", kırklareliY);
        arrowLine45.setAttribute("stroke", "blue");
        arrowLine45.setAttribute("stroke-width", "1");

        text45 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text45.setAttribute("x", 95);
        text45.setAttribute("y", 30);
        text45.setAttribute("fill", "aqua");
        text45.setAttribute("font-size","12px");
        text45.textContent = "113";



        arrowLine46 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine46.setAttribute("x1", adanaX);
        arrowLine46.setAttribute("y1", adanaY);
        arrowLine46.setAttribute("x2", kirikkaleX);
        arrowLine46.setAttribute("y2", kirikkaleY);
        arrowLine46.setAttribute("stroke", "blue");
        arrowLine46.setAttribute("stroke-width", "1");

        text46 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text46.setAttribute("x", 420);
        text46.setAttribute("y", 165);
        text46.setAttribute("fill", "aqua");
        text46.setAttribute("font-size","12px");
        text46.textContent = "250";



        arrowLine47 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine47.setAttribute("x1", adanaX);
        arrowLine47.setAttribute("y1", adanaY);
        arrowLine47.setAttribute("x2", kutahyaX);
        arrowLine47.setAttribute("y2", kutahyaY);
        arrowLine47.setAttribute("stroke", "blue");
        arrowLine47.setAttribute("stroke-width", "1");

        text47 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text47.setAttribute("x", 175);
        text47.setAttribute("y", 200);
        text47.setAttribute("fill", "aqua");
        text47.setAttribute("font-size","12px");
        text47.textContent = "480";



        arrowLine48 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine48.setAttribute("x1", adanaX);
        arrowLine48.setAttribute("y1", adanaY);
        arrowLine48.setAttribute("x2", nigdeX);
        arrowLine48.setAttribute("y2", nigdeY);
        arrowLine48.setAttribute("stroke", "blue");
        arrowLine48.setAttribute("stroke-width", "1");

        text48 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text48.setAttribute("x", 460);
        text48.setAttribute("y", 290);
        text48.setAttribute("fill", "aqua");
        text48.setAttribute("font-size","12px");
        text48.textContent = "996";




        arrowLine49 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine49.setAttribute("x1", adanaX);
        arrowLine49.setAttribute("y1", adanaY);
        arrowLine49.setAttribute("x2", rizeX);
        arrowLine49.setAttribute("y2", rizeY);
        arrowLine49.setAttribute("stroke", "blue");
        arrowLine49.setAttribute("stroke-width", "1");

        text49 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text49.setAttribute("x", 790);
        text49.setAttribute("y", 90);
        text49.setAttribute("fill", "aqua");
        text49.setAttribute("font-size","12px");
        text49.textContent = "40";




        arrowLine50 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine50.setAttribute("x1", adanaX);
        arrowLine50.setAttribute("y1", adanaY);
        arrowLine50.setAttribute("x2", sivasX);
        arrowLine50.setAttribute("y2", sivasY);
        arrowLine50.setAttribute("stroke", "blue");
        arrowLine50.setAttribute("stroke-width", "1");

        text50 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text50.setAttribute("x", 600);
        text50.setAttribute("y", 180);
        text50.setAttribute("fill", "aqua");
        text50.setAttribute("font-size","12px");
        text50.textContent = "170";



        arrowLine51 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine51.setAttribute("x1", adanaX);
        arrowLine51.setAttribute("y1", adanaY);
        arrowLine51.setAttribute("x2", vanX);
        arrowLine51.setAttribute("y2", vanY);
        arrowLine51.setAttribute("stroke", "blue");
        arrowLine51.setAttribute("stroke-width", "1");

        text51 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text51.setAttribute("x", 950);
        text51.setAttribute("y", 250);
        text51.setAttribute("fill", "aqua");
        text51.setAttribute("font-size","12px");
        text51.textContent = "100";




        arrowLine52 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine52.setAttribute("x1", adanaX);
        arrowLine52.setAttribute("y1", adanaY);
        arrowLine52.setAttribute("x2", zonguldakX);
        arrowLine52.setAttribute("y2", zonguldakY);
        arrowLine52.setAttribute("stroke", "blue");
        arrowLine52.setAttribute("stroke-width", "1");

        text52 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text52.setAttribute("x", 320);
        text52.setAttribute("y", 70);
        text52.setAttribute("fill", "aqua");
        text52.setAttribute("font-size","12px");
        text52.textContent = "20";




        arrowLine53 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine53.setAttribute("x1", adanaX);
        arrowLine53.setAttribute("y1", adanaY);
        arrowLine53.setAttribute("x2", corumX);
        arrowLine53.setAttribute("y2", corumY);
        arrowLine53.setAttribute("stroke", "blue");
        arrowLine53.setAttribute("stroke-width", "1");

        text53 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text53.setAttribute("x", 460);
        text53.setAttribute("y", 130);
        text53.setAttribute("fill", "aqua");
        text53.setAttribute("font-size","12px");
        text53.textContent = "41";


        


        svg.appendChild(arrowLine);
        svg.appendChild(arrowLine2);
        svg.appendChild(arrowLine3);
        svg.appendChild(arrowLine4);
        svg.appendChild(arrowLine5);
        svg.appendChild(arrowLine6);
        svg.appendChild(arrowLine8);
        svg.appendChild(arrowLine9);
        svg.appendChild(arrowLine10);
        svg.appendChild(arrowLine11);
        svg.appendChild(arrowLine12);
        svg.appendChild(arrowLine13);
        svg.appendChild(arrowLine15);
        svg.appendChild(arrowLine17);
        svg.appendChild(arrowLine18);
        svg.appendChild(arrowLine19);
        svg.appendChild(arrowLine20);
        svg.appendChild(arrowLine21);
        svg.appendChild(arrowLine22);
        svg.appendChild(arrowLine23);
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

        svg.appendChild(text1);
        svg.appendChild(text2);
        svg.appendChild(text3);
        svg.appendChild(text4);
        svg.appendChild(text5);
        svg.appendChild(text6);
        svg.appendChild(text8);
        svg.appendChild(text9);
        svg.appendChild(text10);
        svg.appendChild(text11);
        svg.appendChild(text12);
        svg.appendChild(text13);
        svg.appendChild(text15);
        svg.appendChild(text17);
        svg.appendChild(text18);
        svg.appendChild(text19);
        svg.appendChild(text20);
        svg.appendChild(text21);
        svg.appendChild(text22);
        svg.appendChild(text23);
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







        clicked = true;
    } else {
         if (arrowLine&&arrowLine2&&arrowLine3&&arrowLine4&&arrowLine5&&arrowLine6&&arrowLine8&&arrowLine9&&arrowLine10&&arrowLine11&&arrowLine12
            &&arrowLine13&&arrowLine15&&arrowLine17&&arrowLine18&&arrowLine19&&arrowLine20&&arrowLine21&&
            arrowLine22&&arrowLine23&&arrowLine26&&arrowLine27&&arrowLine28&&arrowLine29&&arrowLine30&&arrowLine31&&
            arrowLine32&&arrowLine33&&arrowLine34&&arrowLine35&&arrowLine36&&arrowLine37
            &&arrowLine40&&arrowLine41&&arrowLine42&&arrowLine43&&arrowLine44&&arrowLine45&&arrowLine46&&arrowLine47
            &&arrowLine48&&arrowLine49&&arrowLine50&&arrowLine51&&arrowLine52&&arrowLine53
            &&text1&&text2&&text3&& text4 && text5&&text6&&text8&&text9&&text10&&text11&&text12&&text13&&text15&&text17
        &&text18&&text19&&text20&&text21&&text22&&text23&&text26&&text27&&text28&&text29&&text30&&text31&&text32&&text33
    &&text34&&text35&&text36&&text37&&text40&&text41&&text42&&text43&&text44&&text45&&text46&&text47&&text48
    &&text49&&text50&&text51&&text52&&text53) {
            arrowLine.remove();
            arrowLine2.remove();
            arrowLine3.remove();
            arrowLine4.remove();
            arrowLine5.remove();
            arrowLine6.remove();
            arrowLine8.remove();
            arrowLine9.remove();
            arrowLine10.remove();
            arrowLine11.remove();
            arrowLine12.remove();
            arrowLine13.remove();
            arrowLine15.remove();
            arrowLine17.remove();
            arrowLine18.remove();
            arrowLine19.remove();
            arrowLine20.remove();
            arrowLine21.remove();
            arrowLine22.remove();
            arrowLine23.remove();
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


            text1.remove();
            text2.remove();
            text3.remove();
            text4.remove();
            text5.remove();
            text6.remove();
            text8.remove();
            text9.remove();
            text10.remove();
            text11.remove();
            text12.remove();
            text13.remove();
            text15.remove();
            text17.remove();
            text18.remove();
            text19.remove();
            text20.remove();
            text21.remove();
            text22.remove();
            text23.remove();
            text26.remove();
            text27.remove();
            text28.remove();
            text29.remove();
            text30.remove();
            text31.remove();
            text32.remove();
            text33.remove();
            text34.remove();
            text35.remove();
            text36.remove();
            text37.remove();
            text40.remove();
            text41.remove();
            text42.remove();
            text43.remove();
            text44.remove();
            text45.remove();
            text46.remove();
            text47.remove();
            text48.remove();
            text49.remove();
            text50.remove();
            text51.remove();
            text52.remove();
            text53.remove();

            
        }

        


        clicked = false;
    }
});










/*var svg = document.getElementById("svg-turkiye-haritasi");
var turkeyText = document.getElementById("adana");
var arrowLine = null;
var arrowLine2 = null;
var text1 = null;
var text2 = null;
var clicked = false;

turkeyText.addEventListener("click", function(event) {
    if (!clicked) {
        // İlk illeri ve göç verilerini tanımlayın
        var sourceCity = "Adana";
        var targetCity = "Afyonkarahisar";
        var migrationCount = 1352;

        // İlleri ve göç verilerini alın
        var sourceCoordinates = { x: 510, y: 350  }; // Afyonkarahisar koordinatları
        var targetCoordinates = { x: 210, y: 320 }; // Adana koordinatları
        
        

        // İlleri ve göç verilerini temsil etmek için çizgiler oluşturun
        arrowLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine.setAttribute("x1", sourceCoordinates.x);
        arrowLine.setAttribute("y1", sourceCoordinates.y);
        arrowLine.setAttribute("x2", targetCoordinates.x);
        arrowLine.setAttribute("y2", targetCoordinates.y);
        arrowLine.setAttribute("stroke", "blue");
        arrowLine.setAttribute("stroke-width", "1");

        // Göç verisini temsil etmek için metin oluşturun
        text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text1.setAttribute("x", (sourceCoordinates.x + targetCoordinates.x) / 2);
        text1.setAttribute("y", (sourceCoordinates.y + targetCoordinates.y) / 2);
        text1.setAttribute("fill", "black");
        text1.setAttribute("font-size","4px");
        text1.textContent = migrationCount;

        // SVG'ye çizgi ve metni ekleyin
        svg.appendChild(arrowLine);
        svg.appendChild(text1);

        clicked = true;
    } else {
        // Eğer öğeler varsa, kaldırın
        if (arrowLine && text1) {
            arrowLine.remove();
            text1.remove();
        }

        clicked = false;
    }
});*/

/*turkeyText.addEventListener("click", function(event) {
    if (!clicked) {
        // İlk illeri ve göç verilerini tanımlayın
        var sourceCity = "Adana";
        var targetCity = "Afyonkarahisar";
        var migrationCount = 1352;

        // İlleri ve göç verilerini alın
        var sourceCoordinates = { x: 510, y: 350  }; // Afyonkarahisar koordinatları
        var targetCoordinates = { x: 710, y: 210 }; // Adana koordinatları
        
        

        // İlleri ve göç verilerini temsil etmek için çizgiler oluşturun
        arrowLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine.setAttribute("x1", sourceCoordinates.x);
        arrowLine.setAttribute("y1", sourceCoordinates.y);
        arrowLine.setAttribute("x2", targetCoordinates.x);
        arrowLine.setAttribute("y2", targetCoordinates.y);
        arrowLine.setAttribute("stroke", "blue");
        arrowLine.setAttribute("stroke-width", "1");

        // Göç verisini temsil etmek için metin oluşturun
        text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text1.setAttribute("x", (sourceCoordinates.x + targetCoordinates.x) / 2);
        text1.setAttribute("y", (sourceCoordinates.y + targetCoordinates.y) / 2);
        text1.setAttribute("fill", "black");
        text1.setAttribute("font-size","4px");
        text1.textContent = migrationCount;

        // SVG'ye çizgi ve metni ekleyin
        svg.appendChild(arrowLine);
        svg.appendChild(text1);

        clicked = true;
    } else {
        // Eğer öğeler varsa, kaldırın
        if (arrowLine && text1) {
            arrowLine.remove();
            text1.remove();
        }

        clicked = false;
    }
});
*/