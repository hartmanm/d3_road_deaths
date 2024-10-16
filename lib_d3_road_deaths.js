/*
Copyright (c) 2020 Michael Neill Hartman. All rights reserved.
mnh_license@proton.me
https://github.com/hartmanm
*/

var rawData = []
function reload(){location.reload();}
function repeat_intro(){
var main=document.getElementById("repeat_intro");
main.innerHTML = "repeat introduction";
main.id;
main.addEventListener("mouseover", function(e){var target = e.target || e.srcElement; hover(main.id)}, false);
main.addEventListener("mouseleave", function(e){var target = e.target || e.srcElement; leave(main.id)}, false);
main.addEventListener("click", function(e){var target = e.target || e.srcElement; reload()}, false);
}
repeat_intro();
function display_info(){
var main=document.getElementById("info");
main.innerHTML = "(i)";
main.id;
main.addEventListener("mouseover", function(e){var target = e.target || e.srcElement; load_tooltip()}, false);
main.addEventListener("mouseleave", function(e){var target = e.target || e.srcElement; clear_tooltip(main.id)}, false);
}
display_info();
function load_tooltip(){
var main=document.getElementById("info");
main.style = "z-index: 1; font-size: 100%; outline-style: solid; color: rgb(119, 0, 255); outline-color: #FEFF4D; cursor: pointer;";
var one = document.createElement("h3");
one.id = "info_tip";
one.innerHTML = "The figures shown are estimates based on the deaths per 100000 people for each country in 2016\n\n according to the World Health Organization (https://apps.who.int/gho/data/node.main.A997)\n\nAs well as the 2019 population for each country according to the Worldbank \n\n(https://data.worldbank.org/indicator/SP.POP.TOTL)";
main.appendChild(one);
}
function clear_tooltip(){
var main= document.getElementById("info");
while(main.firstChild){main.removeChild(main.firstChild);}
main.innerHTML = "(i)";
main.style = "z-index: 2;transform: scale(1);font-size: 100%; ";
}
function wipe_tooltips(){
var main= document.getElementsByClassName("tooltip");
while(main.firstChild){main.removeChild(main.firstChild);}
}
function wipe_daily(){
var main= document.getElementById("content");
while(main.firstChild){main.removeChild(main.firstChild);}
}
function hide_seconds_view(){
var main= document.getElementById("seconds_view");
main.style["visibility"] = "hidden";
}
function show_seconds_view(){
var main= document.getElementById("seconds_view");
main.style["visibility"] = "visible";
}
function output_daily_deaths(sata){
wipe_daily();
var myData = [];
if(sata < 7500){
while(sata > 0){myData.push(1); sata=sata-1}
function doEnter() {
d3.select('#content')
.selectAll('ddd')
.data(myData)
.enter()
.append('ddd');
}
doEnter();
}
if(sata > 7500){
sata=(sata/10000)
var main= document.getElementById("content");
var one = document.createElement("h1");
one.id = "each10";
one.innerHTML = "Each represents 10000: ";
main.appendChild(one);
while(sata > 0){myData.push(1); sata=sata-1}
function doEnterp() {
d3.select('#content')
.selectAll('ddd')
.data(myData)
.enter()
.append('ddd');
}
doEnterp();
}
}
function wipe_main(){
d3.selectAll("body").transition();
d3.selectAll("g").transition();
d3.selectAll("text").transition();
d3.selectAll("rect").transition();
var main= document.getElementById("main");
while(main.firstChild){main.removeChild(main.firstChild);}
var one = document.createElement("h1");
one.id = "text";
one.innerHTML = "";
main.appendChild(one);
var one = document.createElement("h1");
one.id = "basis";
one.innerHTML = "";
main.appendChild(one);
var one = document.createElement("div");
one.id = "store";
one.innerHTML = "";
main.appendChild(one);
var one = document.createElement("div");
one.id = "country";
one.innerHTML = "";
main.appendChild(one);
}
function hover(id){
var out = document.getElementById(id);
out.style = "z-index: 1; font-size: 100%; outline-style: solid; color: rgb(119, 0, 255); outline-color: #FEFF4D; cursor: pointer;";
}
function leave(id){
var out = document.getElementById(id);
out.style = "z-index: 2;transform: scale(1);font-size: 100%; ";
}
function execute(id){
var out = document.getElementById(id);
output_country(id);
}
function append_selector(parent,innerhtml,id){
var one = document.createElement("country_link");
one.innerHTML = innerhtml;
one.id = id;
one.addEventListener("mouseover", function(e){var target = e.target || e.srcElement; hover(id)}, false);
one.addEventListener("mouseleave", function(e){var target = e.target || e.srcElement; leave(id)}, false);
one.addEventListener("click", function(e){var target = e.target || e.srcElement; execute(id)}, false);
parent.appendChild(one);
}
function append_world_selector(){
var world_selector_dom = document.getElementById("world_click")
var one = document.createElement("country_link");
one.innerHTML = "The World";
one.id = "world";
one.addEventListener("mouseover", function(e){var target = e.target || e.srcElement; hover(one.id)}, false);
one.addEventListener("mouseleave", function(e){var target = e.target || e.srcElement; leave(one.id)}, false);
one.addEventListener("click", function(e){var target = e.target || e.srcElement; output_world()}, false);
world_selector_dom.appendChild(one);
}
function append_h1(parent,innerhtml,id){
var one = document.createElement("h4");
one.innerHTML = innerhtml;
one.id=id;
parent.appendChild(one);
}
function append_store(innerhtml){
var store_dom = document.getElementById("store")
store_dom.innerHTML = innerhtml;
store_dom.style["visibility"] = "hidden";
}
var intro_init=0;
var init=0
var show_seconds=0
var total_yearly=0
var total_daily=0
var is_selector=0
var is_world=0
function update_text(data){
wipe_tooltips();
if(intro_init == 0){
output_intro();
var the_count=parseInt(data)
console.log(the_count);
if(the_count>5 && intro_init == 0){document.getElementById("intro1").style["visibility"] = "visible";}
if(the_count>15 && intro_init == 0){var main= document.getElementById("basis");main.removeChild(main.firstChild);}
if(the_count>15 && intro_init == 0){document.getElementById("intro2").style["visibility"] = "visible";}
if(the_count>25 && intro_init == 0){var main= document.getElementById("basis");main.removeChild(main.firstChild);}
if(the_count>25 && intro_init == 0){document.getElementById("intro3").style["visibility"] = "visible";}
if(the_count>35 && intro_init == 0){var main= document.getElementById("basis");main.removeChild(main.firstChild);}
if(the_count>35 && intro_init == 0){document.getElementById("intro4").style["visibility"] = "visible";}
if(the_count>45 && intro_init == 0){var main= document.getElementById("basis");main.removeChild(main.firstChild);}
if(the_count>45 && intro_init == 0){document.getElementById("intro5").style["visibility"] = "visible";}
if(the_count>55 && intro_init == 0){var main= document.getElementById("basis");main.removeChild(main.firstChild);}
if(the_count>55 && intro_init == 0){document.getElementById("intro6").style["visibility"] = "visible";}
if(the_count>65 && intro_init == 0){var main= document.getElementById("basis");main.removeChild(main.firstChild);}
if(the_count>65 && intro_init == 0){document.getElementById("intro7").style["visibility"] = "visible";}
if(the_count>75 && intro_init == 0){var main= document.getElementById("basis");main.removeChild(main.firstChild);}
if(the_count>75 && intro_init == 0){document.getElementById("intro8").style["visibility"] = "visible";}
if(the_count>85 && intro_init == 0){var main= document.getElementById("basis");main.removeChild(main.firstChild);}
if(the_count>85 && intro_init == 0){document.getElementById("intro9").style["visibility"] = "visible";}
if(the_count>95 && intro_init == 0){var main= document.getElementById("basis");main.removeChild(main.firstChild);}
if(the_count>95 && intro_init == 0){intro_init=1;is_world=0;init=0;output_world();}
}
if(intro_init != 0){
var total_as_int=parseInt(document.getElementById("store").innerHTML)
var current_as_int=parseInt(data)
var country = document.getElementById("country").innerHTML
var one = document.getElementById("text");
var year = document.getElementById("year");
var day = document.getElementById("day");
if(current_as_int>1 && show_seconds == 0 && init == 0){hide_seconds_view(); show_seconds=1;}
if(current_as_int>1 && total_yearly != 0 && init == 0){output_daily_deaths(total_yearly);total_yearly=0;year.style["visibility"] = "visible";}
//if(current_as_int>1){year.style["visibility"] = "visible";}
//if(current_as_int>7 && init == 0){year.style["visibility"] = "hidden";}
if(current_as_int>7 && total_daily != 0 && init == 0){output_daily_deaths(total_daily);total_daily=0;year.style["visibility"] = "hidden";day.style["visibility"] = "visible";}
//if(current_as_int>7){day.style["visibility"] = "visible";}
if(current_as_int>16 && init == 0){day.style["visibility"] = "hidden";}
if(current_as_int>16 && init == 0){wipe_daily();}//day.style["visibility"] = "hidden"; }
//if(current_as_int>17 && init == 0){day.style["visibility"] = "hidden";}
if(is_world == 0){
if(current_as_int>17){one.innerHTML = "In "+(total_as_int-current_as_int)+" seconds a road user in "+country+" will die";one.style["color"] = "#9d9d9d";}
if((total_as_int-current_as_int)==0){one.innerHTML = "A road user in "+country+" has died!";one.style["color"] = "red";}
}
if(is_world == 1){
if(current_as_int>17){one.innerHTML = "In "+(total_as_int-current_as_int)+" seconds a road user will die somewhere in the World";one.style["color"] = "#9d9d9d";}
if((total_as_int-current_as_int)==0){one.innerHTML = "A road user has died somewhere in the World!";one.style["color"] = "red";}
}
if(current_as_int>17 && show_seconds != 0 && init == 0){show_seconds_view(); show_seconds=0;}
if(current_as_int>19){year.style["visibility"] = "visible";}
if(current_as_int>19){day.style["visibility"] = "visible";}
if(current_as_int>20 && is_selector == 0){generate_selector(); init=1}
}
}
var store_dom2 = document.getElementById("store2")
function append_store2(innerhtml){
var one = document.createElement("div");
one.innerHTML = innerhtml;
one.style["visibility"] = "hidden";
store_dom2.appendChild(one);
}
function update_text_world(data){
var total_as_int=parseInt(document.getElementById("store2").firstChild.innerHTML)
var current_as_int=parseInt(data)
var one = document.getElementById("text2");
if(current_as_int>5){one.innerHTML = "In "+(total_as_int-current_as_int)+" seconds a road user will die somewhere in the World";one.style["color"] = "#9d9d9d";}
if((total_as_int-current_as_int)==0){one.innerHTML = "A road user has died somewhere in the World!";one.style["color"] = "red";}
console.log(data)
console.log(total_as_int)
console.log(current_as_int)
console.log((total_as_int-current_as_int))
}
function output_country(country){
wipe_main();
wipe_selector();
wipe_tooltips();
total_daily=0;
total_yearly=0;
init=0;
is_world=0;
document.getElementById("store").innerHTML=""
var total_world_deaths_2016=0;
var total_world_deaths_2016_dom = document.getElementById("basis")
d3.csv("https://raw.githubusercontent.com/hartmanm/d3_road_deaths/refs/heads/master/final_table.csv").then(function(data) {
// a join of https://data.worldbank.org/indicator/SP.POP.TOTL
// and https://apps.who.int/gho/data/node.main.A997
for(var key of data){if(key != ""){
if(key.country == country){
var rate_as_int=parseInt(key.estimated_road_traffic_death_rate_per_100000_in_2016) 
var pop_as_int=parseInt(key.population_in_2019) 
var current_via_population_in_2019=(pop_as_int/100000)*rate_as_int
var wd=parseInt(total_world_deaths_2016)
total_world_deaths_2016=Math.floor(wd+current_via_population_in_2019)
var a_death_every_x_seconds=Math.ceil((60/(((total_world_deaths_2016/365)/24)/60)))
var a_death_every_x_minutes=Math.floor(((((total_world_deaths_2016/365)/24)/60)))
var a_death_every_x_days=Math.floor((((total_world_deaths_2016/365))))
document.getElementById("country").innerHTML=country
document.getElementById("country").style["visibility"] = "hidden";
total_world_deaths_2016_dom.innerHTML=""
append_h1(total_world_deaths_2016_dom,"Every year "+total_world_deaths_2016+" road users in "+country+" will die","year")
append_h1(total_world_deaths_2016_dom,"Every day "+a_death_every_x_days+" road users in "+country+" will die","day")
total_daily=a_death_every_x_days
total_yearly=total_world_deaths_2016
document.getElementById("year").style["visibility"] = "hidden";
document.getElementById("day").style["visibility"] = "hidden";
append_store(a_death_every_x_seconds);
}}}
rawData=[]
function update_seconds_data(){
iterator=1
while(a_death_every_x_seconds > iterator){
rawData.push({minute: iterator,value: a_death_every_x_seconds})
iterator=iterator+1
}
rawData.push({minute: iterator,value: a_death_every_x_seconds})
}
update_seconds_data();
function display_seconds_country(){
var screen_width = Math.max((document.documentElement.clientWidth, window.innerWidth || 0));
var screen_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var staticColor = 'rgb(119, 0, 255)';
var hoverColor = '#eec42d';
var tooltip = d3
.select('body')
.append('rect')
.attr('class', 'tooltip')
.style('position', 'absolute')
.style('z-index', '10')
.style('visibility', 'hidden')
.style('padding', '10px')
.style('background', 'rgba(0,0,0,0.6)')
.style('border-radius', '4px')
.style('color', '#fff')
var element = d3
.select('text')
.attr('class', 'h1')
var data = rawData;
var store_dom_value = a_death_every_x_seconds
var width = screen_width 
var height = screen_height / 4
var x = d3
.scaleBand()
.range([0, width])
.domain(data.map(d => d.minute))
.padding(0.2);
var y = d3
.scaleLinear()
.domain([0, d3.max(data, d => d.value)])
.range([height, 0]);
var svg = d3.select("#seconds_view")
.attr("viewBox", [0, 0, width, height])
.data(data)
.text( data.minute);
var start = new Date;
start =start.getSeconds()
rect = svg
.selectAll('g')
.data(data)
.enter()
.append('rect')
.attr('fill', staticColor)
.attr('x', (d, i) => x(d.minute))
.attr('width', x.bandwidth()*0.75)
.attr('y', d => y(0))
.attr('height', d => height )
.on('mouseover', function (d, i) {
var now = new Date;
now =Math.abs(now.getSeconds()-start)
var inner;
if(d.minute ==1){inner=`<div>${d.minute} second</div>`}
if(d.minute !=1){inner=`<div>${d.minute} seconds</div>`}
tooltip
.html(inner)
.style('visibility', 'visible');
})
.on('mousemove', function () {
tooltip
.style('top', d3.event.pageY - 10 + 'px')
.style('left', d3.event.pageX + 10 + 'px');
})
.on('mouseout', function () {
tooltip.html(``).style('visibility', 'hidden');
})
var now = new Date;
rect.transition()
.delay(function(d, i) { return i * 1000; })
.on("start", function repeat(){
var select = d3.active(this)
select
.transition()
.ease(d3.easeLinear)
.duration(1000)
.attr('y', d => y(d.value))
.attr('height', d => height)
.transition()
.duration(store_dom_value*1000)
.attr('y', d => y(d.value))
.attr('height', d => height)
.transition()
.attr('height', y.height)
.text(function(d, i){
var inner;
inner=update_text(`${d.minute}`)
element
.html(inner)
.transition()
})
.on("start", repeat);
});
}
display_seconds_country();
});
}
function output_world(){
//intro_init=0;
wipe_main();
wipe_selector();
wipe_tooltips();
total_daily=0;
total_yearly=0;
init=0;
is_world=1;
document.getElementById("store").innerHTML=""
var total_world_deaths_2016=0;
var total_world_deaths_2016_dom = document.getElementById("basis")
d3.csv("https://raw.githubusercontent.com/hartmanm/d3_road_deaths/refs/heads/master/final_table.csv").then(function(data) {
// a join of https://data.worldbank.org/indicator/SP.POP.TOTL
// and https://apps.who.int/gho/data/node.main.A997
total_world_deaths_2016_dom.innerHTML=""
for(var key of data){if(key != ""){
var rate_as_int=parseInt(key.estimated_road_traffic_death_rate_per_100000_in_2016) 
var pop_as_int=parseInt(key.population_in_2019) 
var current_via_population_in_2019=(pop_as_int/100000)*rate_as_int
var wd=parseInt(total_world_deaths_2016)
total_world_deaths_2016=Math.floor(wd+current_via_population_in_2019)
var a_death_every_x_seconds=Math.ceil((60/(((total_world_deaths_2016/365)/24)/60)))
var a_death_every_x_minutes=Math.floor(((((total_world_deaths_2016/365)/24)/60)))
var a_death_every_x_days=Math.floor((((total_world_deaths_2016/365))))
total_daily=a_death_every_x_days
total_yearly=total_world_deaths_2016
}
}
document.getElementById("country").innerHTML=""
document.getElementById("country").style["visibility"] = "hidden";
append_h1(total_world_deaths_2016_dom,"Every year "+total_world_deaths_2016+" road users will die","year")
append_h1(total_world_deaths_2016_dom,"Every day "+a_death_every_x_days+" road users will die","day")
document.getElementById("year").style["visibility"] = "hidden";
document.getElementById("day").style["visibility"] = "hidden";
append_store((a_death_every_x_seconds));
rawData=[]
function update_seconds_data(){
iterator=1
while(a_death_every_x_seconds > iterator){
rawData.push({minute: iterator,value: a_death_every_x_seconds})
iterator=iterator+1
}
rawData.push({minute: iterator,value: a_death_every_x_seconds})
}
update_seconds_data();
function display_seconds_country(){
var screen_width = Math.max((document.documentElement.clientWidth, window.innerWidth || 0));
var screen_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var staticColor = 'rgb(119, 0, 255)';
var hoverColor = '#eec42d';
var tooltip = d3
.select('body')
.append('rect')
.attr('class', 'tooltip')
.style('position', 'absolute')
.style('z-index', '10')
.style('visibility', 'hidden')
.style('padding', '10px')
.style('background', 'rgba(0,0,0,0.6)')
.style('border-radius', '4px')
.style('color', '#fff')
var element = d3
.select('text')
.attr('class', 'h1')
var data = rawData;
var store_dom_value = a_death_every_x_seconds
var width = screen_width 
var height = screen_height / 4
var x = d3
.scaleBand()
.range([0, width])
.domain(data.map(d => d.minute))
.padding(0.2);
var y = d3
.scaleLinear()
.domain([0, d3.max(data, d => d.value)])
.range([height, 0]);
var svg = d3.select("#seconds_view")
.attr("viewBox", [0, 0, width, height])
.data(data)
.text( data.minute);
var start = new Date;
start =start.getSeconds()
rect = svg
.selectAll('g')
.data(data)
.enter()
.append('rect')
.attr('fill', staticColor)
.attr('x', (d, i) => x(d.minute))
.attr('width', x.bandwidth()*0.75)
.attr('y', d => y(0))
.attr('height', d => height )
.on('mouseover', function (d, i) {
var now = new Date;
now =Math.abs(now.getSeconds()-start)
var inner;
if(d.minute ==1){inner=`<div>${d.minute} second</div>`}
if(d.minute !=1){inner=`<div>${d.minute} seconds</div>`}
tooltip
.html(inner)
.style('visibility', 'visible');
})
.on('mousemove', function () {
tooltip
.style('top', d3.event.pageY - 10 + 'px')
.style('left', d3.event.pageX + 10 + 'px');
})
.on('mouseout', function () {
tooltip.html(``).style('visibility', 'hidden');
})
var now = new Date;
rect.transition()
.delay(function(d, i) { return i * 1000; })
.on("start", function repeat(){
var select = d3.active(this)
select
.transition()
.ease(d3.easeLinear)
.duration(1000)
.attr('y', d => y(d.value))
.attr('height', d => height)
.transition()
.duration(store_dom_value*1000)
.attr('y', d => y(d.value))
.attr('height', d => height)
.transition()
.attr('height', y.height)
.text(function(d, i){
var inner;
inner=update_text(`${d.minute}`)
element
.html(inner)
.transition()
})
.on("start", repeat);
});
}
display_seconds_country();
});
}
function wipe_selector(){
var world_selector_dom = document.getElementById("world_click")
while(world_selector_dom.firstChild){world_selector_dom.removeChild(world_selector_dom.firstChild);}
var selector_dom = document.getElementById("selector")
while(selector_dom.firstChild){selector_dom.removeChild(selector_dom.firstChild);}
is_selector=0
}
function generate_selector(){
is_selector=1
var active_selection;
var selector_dom = document.getElementById("selector")
d3.csv("https://raw.githubusercontent.com/hartmanm/d3_road_deaths/refs/heads/master/final_table.csv").then(function(data) {
// a join of https://data.worldbank.org/indicator/SP.POP.TOTL
// and https://apps.who.int/gho/data/node.main.A997
selector_dom.innerHTML=""
for(var key of data){if(key != ""){
append_selector(selector_dom," "+key.country+" ",key.country)
}
}
append_world_selector();
})
}
function output_intro(){
hide_seconds_view();
total_daily=0;
total_yearly=0;
init=0;
is_world=0;
document.getElementById("store").innerHTML="";
var intro_dom = document.getElementById("basis");
intro_dom.innerHTML="";
append_h1(intro_dom,"Every year over 1.33 million people are killed on the world’s roads.","intro1")
append_h1(intro_dom,"Most (93%) of these deaths occur in low- and middle-income countries, even though these countries have only about 60% of the world’s vehicles.","intro2")
append_h1(intro_dom,"Road traffic deaths are the number one cause of death for those aged 5 - 29","intro3")
append_h1(intro_dom,"Your risk of dying in a road traffic crash depends on where you live: the highest rates are in the African region. Rates are lowest in the European region.","intro4")
append_h1(intro_dom,"Over half of all road traffic deaths are among pedestrians, cyclists and motorcyclists.","intro5")
append_h1(intro_dom,"A number of high and middle-income countries have managed to reduce their road traffic deaths (despite increasing motorization).","intro6")
append_h1(intro_dom,"Making roads safer requires improving infrastructure, making vehicles safer, changing road user behaviour and improving post-crash care.","intro7")
append_h1(intro_dom,"Road traffic crashes result in economic losses to victims and their families, often throwing them into poverty.","intro8")
append_h1(intro_dom,"Facts from the World Health Organization: https://extranet.who.int/roadsafety/death-on-the-roads/#deaths","intro9")
document.getElementById("intro1").style["visibility"] = "hidden";
document.getElementById("intro2").style["visibility"] = "hidden";
document.getElementById("intro3").style["visibility"] = "hidden";
document.getElementById("intro4").style["visibility"] = "hidden";
document.getElementById("intro5").style["visibility"] = "hidden";
document.getElementById("intro6").style["visibility"] = "hidden";
document.getElementById("intro7").style["visibility"] = "hidden";
document.getElementById("intro8").style["visibility"] = "hidden";
document.getElementById("intro9").style["visibility"] = "hidden";
}
output_country("China")