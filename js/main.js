function logoefec2(){
    $('#logo2').removeClass().addClass("animated bounceInDown");
    window.setTimeout( function(){
        $('#logo2').removeClass()},
        1300
    );
}
function logoefec1(){
    $('#logo1').removeClass().addClass("animated bounceInDown");
    window.setTimeout( function(){
        $('#logo1').removeClass()},
        1300
    );
}
function logoefec(){
    $('#logo').removeClass().addClass("animated bounceInDown");
    window.setTimeout( function(){
        $('#logo').removeClass()},
        1300
    );
}
function institu(id) {
    if (id == "UTP Arequipa") {
        $("#dnii").hide();
        $("#codigo").hide();
        $("#gradops").hide();
        $("#gradoss").hide();
        $("#nivel").hide();
        $("#carreraa").show("bounce")
        $("#condicionn").show("bounce")
        $("#condicionnunitek").hide();
        $("#condicionn").find('option:first').attr('selected', 'selected').parent('select');
    }
    if (id == "Unitek") {
        $("#codigo").hide();
        $("#gradops").hide();
        $("#gradoss").hide();
        $("#nivel").hide();
        $("#dnii").show("bounce")
        $("#condicionn").hide();
        $("#condicionnunitek").show("bounce")
        $("#condicionnunitek").find('option:first').attr('selected', 'selected').parent('select');
    }
    if(id == "Imagina"){
        $("#dnii").hide();
        $("#codigo").hide();
        $("#ciclo").hide();
        $("#nivel").show("bounce")
        $("#gradops").show("bounce")
        $("#carreraa").hide();
        $("#condicionn").show("bounce")
        $("#condicionnunitek").hide();
        $("#condicionn").find('option:first').attr('selected', 'selected').parent('select');
    }
    else {
        $("#dni").hide();
        $("#grado").hide();
    }
}
function condic(id) {
    if (id == "Estudiante") {
        $("#codigo").show("bounce")
    }
    else {
        $("#codigo").hide();
    }
}
function nivels(id) {
    if (id == "Primaria") {
        $("#gradops").show("bounce")
        $("#gradoss").hide();
    }
    if(id == "Secundaria"){
        $("#gradops").hide();
        $("#gradoss").show("bounce")
    }
    else {
        $("#gradoss").hide();
    }
}
$(document).ready(function(){
    // Efecto en los logos css
    $('#logo, #logo1, #logo2').addClass("animated bounceInDown");
    window.setTimeout( function(){
        $('#logo, #logo1, #logo2').removeClass()},
        1300
    );
    $('#logo').click(function(){
        logoefec();
    });
    $('#logo1').click(function(){
        logoefec1();
    });
    $('#logo2').click(function(){
        logoefec2();
    });
});