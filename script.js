$(document).ready(function(){
    $("#age").html(Math.round((Date.now() - new Date(Date.UTC('2005','11','03','08','00','00'))) / 1000 / 60 / 60 / 24 / 365.4));
});