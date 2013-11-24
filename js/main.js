$(document).ready(function(){
    $("#contenido-1").click(function(){
        var plant = document.getElementById('contenido-1');
        var fruitCount = plant.getAttribute('data-id');
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "articulos.php?id=" + fruitCount
        }).done(function(respuesta){
            $("#mensaje").html(respuesta.mensaje).fadeIn();
            $(".logo").addClass("ocultar");
        });
    });
    $("#contenido-2").click(function(){
        var plant = document.getElementById('contenido-2');
        var fruitCount = plant.getAttribute('data-id');
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "articulos.php?id=" + fruitCount
        }).done(function(respuesta){
            $("#mensaje").html(respuesta.mensaje).fadeIn();
            $(".logo").addClass("ocultar");
        });
    });
    $("#contenido-3").click(function(){
        var plant = document.getElementById('contenido-3');
        var fruitCount = plant.getAttribute('data-id');
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "articulos.php?id=" + fruitCount
        }).done(function(respuesta){
            $("#mensaje").html(respuesta.mensaje).fadeIn();
            $(".logo").addClass("ocultar");
        });
    });
    $("#contenido-5").click(function(){
        var plant = document.getElementById('contenido-5');
        var fruitCount = plant.getAttribute('data-id');
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "articulos.php?id=" + fruitCount
        }).done(function(respuesta){
            $("#mensaje").html(respuesta.mensaje).fadeIn();
            $(".logo").addClass("ocultar");
        });
    });
    $("#contenido-6").click(function(){
        var plant = document.getElementById('contenido-6');
        var fruitCount = plant.getAttribute('data-id');
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "articulos.php?id=" + fruitCount
        }).done(function(respuesta){
            $("#mensaje").html(respuesta.mensaje).fadeIn();
            $(".logo").addClass("ocultar");
        });
    });
    $("#contenido-7").click(function(){
        var plant = document.getElementById('contenido-7');
        var fruitCount = plant.getAttribute('data-id');
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "articulos.php?id=" + fruitCount
        }).done(function(respuesta){
            $("#mensaje").html(respuesta.mensaje).fadeIn();
            $(".logo").addClass("ocultar");
        });
    });
    $("#contenido-7").click(function(){
        var plant = document.getElementById('contenido-7');
        var fruitCount = plant.getAttribute('data-id');
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "articulos.php?id=" + fruitCount
        }).done(function(respuesta){
            $("#mensaje").html(respuesta.mensaje).fadeIn();
            $(".logo").addClass("ocultar");
        });
    });
    $("#contenido-8").click(function(){
        var plant = document.getElementById('contenido-8');
        var fruitCount = plant.getAttribute('data-id');
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "articulos.php?id=" + fruitCount
        }).done(function(respuesta){
            $("#mensaje").html(respuesta.mensaje).fadeIn();
            $(".logo").addClass("ocultar");
        });
    });
});