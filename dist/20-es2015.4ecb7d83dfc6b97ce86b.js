(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{AgMk:function(b,e,d){"use strict";d.r(e),d.d(e,"ThemeModule",function(){return c});var o=d("SVse"),t=d("iInd"),i=d("NuRj"),n=d("8Y7J");const a=[{path:"",data:{title:"Theme"},children:[{path:"",redirectTo:"colors"},{path:"colors",component:(()=>{class b{constructor(b){this._document=b}themeColors(){Array.from(this._document.querySelectorAll(".theme-color")).forEach(b=>{const e=Object(i.getStyle)("background-color",b),d=this._document.createElement("table");d.innerHTML=`\n        <table class="w-100">\n          <tr>\n            <td class="text-muted">HEX:</td>\n            <td class="font-weight-bold">${Object(i.rgbToHex)(e)}</td>\n          </tr>\n          <tr>\n            <td class="text-muted">RGB:</td>\n            <td class="font-weight-bold">${e}</td>\n          </tr>\n        </table>\n      `,b.parentNode.appendChild(d)})}ngOnInit(){this.themeColors()}}return b.\u0275fac=function(e){return new(e||b)(n.Qb(o.e))},b.\u0275cmp=n.Kb({type:b,selectors:[["ng-component"]],decls:131,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"icon-drop"],[1,"card-body"],[1,"row"],[1,"col-xl-2","col-md-3","col-sm-4","col-6","mb-4"],[1,"bg-primary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-secondary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-success","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-danger","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-warning","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-info","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-dark","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"row","mb-3"],[1,"bg-gray-100","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-200","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-300","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-400","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-500","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-600","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-700","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-800","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-900","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-indigo","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-purple","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-pink","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-red","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-orange","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-yellow","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-green","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-teal","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-cyan","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"]],template:function(b,e){1&b&&(n.Wb(0,"div",0),n.Wb(1,"div",1),n.Wb(2,"div",2),n.Rb(3,"i",3),n.Pc(4," Theme colors "),n.Vb(),n.Wb(5,"div",4),n.Wb(6,"div",5),n.Wb(7,"div",6),n.Rb(8,"div",7),n.Wb(9,"h6"),n.Pc(10,"Brand Primary Color"),n.Vb(),n.Vb(),n.Wb(11,"div",6),n.Rb(12,"div",8),n.Wb(13,"h6"),n.Pc(14,"Brand Secondary Color"),n.Vb(),n.Vb(),n.Wb(15,"div",6),n.Rb(16,"div",9),n.Wb(17,"h6"),n.Pc(18,"Brand Success Color"),n.Vb(),n.Vb(),n.Wb(19,"div",6),n.Rb(20,"div",10),n.Wb(21,"h6"),n.Pc(22,"Brand Danger Color"),n.Vb(),n.Vb(),n.Wb(23,"div",6),n.Rb(24,"div",11),n.Wb(25,"h6"),n.Pc(26,"Brand Warning Color"),n.Vb(),n.Vb(),n.Wb(27,"div",6),n.Rb(28,"div",12),n.Wb(29,"h6"),n.Pc(30,"Brand Info Color"),n.Vb(),n.Vb(),n.Wb(31,"div",6),n.Rb(32,"div",13),n.Wb(33,"h6"),n.Pc(34,"Brand Light Color"),n.Vb(),n.Vb(),n.Wb(35,"div",6),n.Rb(36,"div",14),n.Wb(37,"h6"),n.Pc(38,"Brand Dark Color"),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Wb(39,"div",1),n.Wb(40,"div",2),n.Rb(41,"i",3),n.Pc(42," Grays "),n.Vb(),n.Wb(43,"div",4),n.Wb(44,"div",15),n.Wb(45,"div",6),n.Rb(46,"div",16),n.Wb(47,"h6"),n.Pc(48,"Gray 100 Color"),n.Vb(),n.Vb(),n.Wb(49,"div",6),n.Rb(50,"div",17),n.Wb(51,"h6"),n.Pc(52,"Gray 200 Color"),n.Vb(),n.Vb(),n.Wb(53,"div",6),n.Rb(54,"div",18),n.Wb(55,"h6"),n.Pc(56,"Gray 300 Color"),n.Vb(),n.Vb(),n.Wb(57,"div",6),n.Rb(58,"div",19),n.Wb(59,"h6"),n.Pc(60,"Gray 400 Color"),n.Vb(),n.Vb(),n.Wb(61,"div",6),n.Rb(62,"div",20),n.Wb(63,"h6"),n.Pc(64,"Gray 500 Color"),n.Vb(),n.Vb(),n.Wb(65,"div",6),n.Rb(66,"div",21),n.Wb(67,"h6"),n.Pc(68,"Gray 600 Color"),n.Vb(),n.Vb(),n.Wb(69,"div",6),n.Rb(70,"div",22),n.Wb(71,"h6"),n.Pc(72,"Gray 700 Color"),n.Vb(),n.Vb(),n.Wb(73,"div",6),n.Rb(74,"div",23),n.Wb(75,"h6"),n.Pc(76,"Gray 800 Color"),n.Vb(),n.Vb(),n.Wb(77,"div",6),n.Rb(78,"div",24),n.Wb(79,"h6"),n.Pc(80,"Gray 900 Color"),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Wb(81,"div",1),n.Wb(82,"div",2),n.Rb(83,"i",3),n.Pc(84," Additional colors "),n.Vb(),n.Wb(85,"div",4),n.Wb(86,"div",5),n.Wb(87,"div",6),n.Rb(88,"div",25),n.Wb(89,"h6"),n.Pc(90,"Blue Color"),n.Vb(),n.Vb(),n.Wb(91,"div",6),n.Rb(92,"div",26),n.Wb(93,"h6"),n.Pc(94,"Light Blue Color"),n.Vb(),n.Vb(),n.Wb(95,"div",6),n.Rb(96,"div",27),n.Wb(97,"h6"),n.Pc(98,"Indigo Color"),n.Vb(),n.Vb(),n.Wb(99,"div",6),n.Rb(100,"div",28),n.Wb(101,"h6"),n.Pc(102,"Purple Color"),n.Vb(),n.Vb(),n.Wb(103,"div",6),n.Rb(104,"div",29),n.Wb(105,"h6"),n.Pc(106,"Pink Color"),n.Vb(),n.Vb(),n.Wb(107,"div",6),n.Rb(108,"div",30),n.Wb(109,"h6"),n.Pc(110,"Red Color"),n.Vb(),n.Vb(),n.Wb(111,"div",6),n.Rb(112,"div",31),n.Wb(113,"h6"),n.Pc(114,"Orange Color"),n.Vb(),n.Vb(),n.Wb(115,"div",6),n.Rb(116,"div",32),n.Wb(117,"h6"),n.Pc(118,"Yellow Color"),n.Vb(),n.Vb(),n.Wb(119,"div",6),n.Rb(120,"div",33),n.Wb(121,"h6"),n.Pc(122,"Green Color"),n.Vb(),n.Vb(),n.Wb(123,"div",6),n.Rb(124,"div",34),n.Wb(125,"h6"),n.Pc(126,"Teal Color"),n.Vb(),n.Vb(),n.Wb(127,"div",6),n.Rb(128,"div",35),n.Wb(129,"h6"),n.Pc(130,"Cyan Color"),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb())},encapsulation:2}),b})(),data:{title:"Colors"}},{path:"typography",component:(()=>{class b{constructor(){}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=n.Kb({type:b,selectors:[["ng-component"]],decls:189,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table"],[1,"highlighter-rouge"],[1,"h1"],[1,"h2"],[1,"h3"],[1,"h4"],[1,"h5"],[1,"h6"],[1,"bd-example"],[1,"bd-example","bd-example-type"],[1,"display-1"],[1,"display-2"],[1,"display-3"],[1,"display-4"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-9"],[1,"col-sm-3","text-truncate"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(b,e){1&b&&(n.Wb(0,"div",0),n.Wb(1,"div",1),n.Wb(2,"div",2),n.Pc(3," Headings "),n.Vb(),n.Wb(4,"div",3),n.Wb(5,"p"),n.Pc(6,"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."),n.Vb(),n.Wb(7,"table",4),n.Wb(8,"thead"),n.Wb(9,"tr"),n.Wb(10,"th"),n.Pc(11,"Heading"),n.Vb(),n.Wb(12,"th"),n.Pc(13,"Example"),n.Vb(),n.Vb(),n.Vb(),n.Wb(14,"tbody"),n.Wb(15,"tr"),n.Wb(16,"td"),n.Wb(17,"p"),n.Wb(18,"code",5),n.Pc(19,"<h1></h1>"),n.Vb(),n.Vb(),n.Vb(),n.Wb(20,"td"),n.Wb(21,"span",6),n.Pc(22,"h1. Bootstrap heading"),n.Vb(),n.Vb(),n.Vb(),n.Wb(23,"tr"),n.Wb(24,"td"),n.Wb(25,"p"),n.Wb(26,"code",5),n.Pc(27,"<h2></h2>"),n.Vb(),n.Vb(),n.Vb(),n.Wb(28,"td"),n.Wb(29,"span",7),n.Pc(30,"h2. Bootstrap heading"),n.Vb(),n.Vb(),n.Vb(),n.Wb(31,"tr"),n.Wb(32,"td"),n.Wb(33,"p"),n.Wb(34,"code",5),n.Pc(35,"<h3></h3>"),n.Vb(),n.Vb(),n.Vb(),n.Wb(36,"td"),n.Wb(37,"span",8),n.Pc(38,"h3. Bootstrap heading"),n.Vb(),n.Vb(),n.Vb(),n.Wb(39,"tr"),n.Wb(40,"td"),n.Wb(41,"p"),n.Wb(42,"code",5),n.Pc(43,"<h4></h4>"),n.Vb(),n.Vb(),n.Vb(),n.Wb(44,"td"),n.Wb(45,"span",9),n.Pc(46,"h4. Bootstrap heading"),n.Vb(),n.Vb(),n.Vb(),n.Wb(47,"tr"),n.Wb(48,"td"),n.Wb(49,"p"),n.Wb(50,"code",5),n.Pc(51,"<h5></h5>"),n.Vb(),n.Vb(),n.Vb(),n.Wb(52,"td"),n.Wb(53,"span",10),n.Pc(54,"h5. Bootstrap heading"),n.Vb(),n.Vb(),n.Vb(),n.Wb(55,"tr"),n.Wb(56,"td"),n.Wb(57,"p"),n.Wb(58,"code",5),n.Pc(59,"<h6></h6>"),n.Vb(),n.Vb(),n.Vb(),n.Wb(60,"td"),n.Wb(61,"span",11),n.Pc(62,"h6. Bootstrap heading"),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Wb(63,"div",1),n.Wb(64,"div",2),n.Pc(65," Headings "),n.Vb(),n.Wb(66,"div",3),n.Wb(67,"p"),n.Wb(68,"code",5),n.Pc(69,".h1"),n.Vb(),n.Pc(70," through "),n.Wb(71,"code",5),n.Pc(72,".h6"),n.Vb(),n.Pc(73," classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),n.Vb(),n.Wb(74,"div",12),n.Wb(75,"p",6),n.Pc(76,"h1. Bootstrap heading"),n.Vb(),n.Wb(77,"p",7),n.Pc(78,"h2. Bootstrap heading"),n.Vb(),n.Wb(79,"p",8),n.Pc(80,"h3. Bootstrap heading"),n.Vb(),n.Wb(81,"p",9),n.Pc(82,"h4. Bootstrap heading"),n.Vb(),n.Wb(83,"p",10),n.Pc(84,"h5. Bootstrap heading"),n.Vb(),n.Wb(85,"p",11),n.Pc(86,"h6. Bootstrap heading"),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Wb(87,"div",1),n.Wb(88,"div",2),n.Pc(89," Display headings "),n.Vb(),n.Wb(90,"div",3),n.Wb(91,"p"),n.Pc(92,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),n.Wb(93,"strong"),n.Pc(94,"display heading"),n.Vb(),n.Pc(95,"\u2014a larger, slightly more opinionated heading style."),n.Vb(),n.Wb(96,"div",13),n.Wb(97,"table",4),n.Wb(98,"tbody"),n.Wb(99,"tr"),n.Wb(100,"td"),n.Wb(101,"span",14),n.Pc(102,"Display 1"),n.Vb(),n.Vb(),n.Vb(),n.Wb(103,"tr"),n.Wb(104,"td"),n.Wb(105,"span",15),n.Pc(106,"Display 2"),n.Vb(),n.Vb(),n.Vb(),n.Wb(107,"tr"),n.Wb(108,"td"),n.Wb(109,"span",16),n.Pc(110,"Display 3"),n.Vb(),n.Vb(),n.Vb(),n.Wb(111,"tr"),n.Wb(112,"td"),n.Wb(113,"span",17),n.Pc(114,"Display 4"),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Wb(115,"div",1),n.Wb(116,"div",2),n.Pc(117," Inline text elements "),n.Vb(),n.Wb(118,"div",3),n.Wb(119,"p"),n.Pc(120,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),n.Wb(121,"strong"),n.Pc(122,"display heading"),n.Vb(),n.Pc(123,"\u2014a larger, slightly more opinionated heading style."),n.Vb(),n.Wb(124,"div",12),n.Wb(125,"p"),n.Pc(126,"You can use the mark tag to "),n.Wb(127,"mark"),n.Pc(128,"highlight"),n.Vb(),n.Pc(129," text."),n.Vb(),n.Wb(130,"p"),n.Wb(131,"del"),n.Pc(132,"This line of text is meant to be treated as deleted text."),n.Vb(),n.Vb(),n.Wb(133,"p"),n.Wb(134,"s"),n.Pc(135,"This line of text is meant to be treated as no longer accurate."),n.Vb(),n.Vb(),n.Wb(136,"p"),n.Wb(137,"ins"),n.Pc(138,"This line of text is meant to be treated as an addition to the document."),n.Vb(),n.Vb(),n.Wb(139,"p"),n.Wb(140,"u"),n.Pc(141,"This line of text will render as underlined"),n.Vb(),n.Vb(),n.Wb(142,"p"),n.Wb(143,"small"),n.Pc(144,"This line of text is meant to be treated as fine print."),n.Vb(),n.Vb(),n.Wb(145,"p"),n.Wb(146,"strong"),n.Pc(147,"This line rendered as bold text."),n.Vb(),n.Vb(),n.Wb(148,"p"),n.Wb(149,"em"),n.Pc(150,"This line rendered as italicized text."),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Wb(151,"div",1),n.Wb(152,"div",2),n.Pc(153," Description list alignment "),n.Vb(),n.Wb(154,"div",3),n.Wb(155,"p"),n.Pc(156,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a "),n.Wb(157,"code",5),n.Pc(158,".text-truncate"),n.Vb(),n.Pc(159," class to truncate the text with an ellipsis."),n.Vb(),n.Wb(160,"div",12),n.Wb(161,"dl",18),n.Wb(162,"dt",19),n.Pc(163,"Description lists"),n.Vb(),n.Wb(164,"dd",20),n.Pc(165,"A description list is perfect for defining terms."),n.Vb(),n.Wb(166,"dt",19),n.Pc(167,"Euismod"),n.Vb(),n.Wb(168,"dd",20),n.Wb(169,"p"),n.Pc(170,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),n.Vb(),n.Wb(171,"p"),n.Pc(172,"Donec id elit non mi porta gravida at eget metus."),n.Vb(),n.Vb(),n.Wb(173,"dt",19),n.Pc(174,"Malesuada porta"),n.Vb(),n.Wb(175,"dd",20),n.Pc(176,"Etiam porta sem malesuada magna mollis euismod."),n.Vb(),n.Wb(177,"dt",21),n.Pc(178,"Truncated term is truncated"),n.Vb(),n.Wb(179,"dd",20),n.Pc(180,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),n.Vb(),n.Wb(181,"dt",19),n.Pc(182,"Nesting"),n.Vb(),n.Wb(183,"dd",20),n.Wb(184,"dl",18),n.Wb(185,"dt",22),n.Pc(186,"Nested definition list"),n.Vb(),n.Wb(187,"dd",23),n.Pc(188,"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb())},encapsulation:2}),b})(),data:{title:"Typography"}}]}];let r=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=n.Ob({type:b}),b.\u0275inj=n.Nb({imports:[[t.g.forChild(a)],t.g]}),b})(),c=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=n.Ob({type:b}),b.\u0275inj=n.Nb({imports:[[o.c,r]]}),b})()}}]);