<?php
$id = $_GET["id"];
if(isset($_GET["id"])){
    $respuesta = new stdClass();
    if(!empty($id)){
        $respuesta->mensaje = "
        <script>
        $(\".cerrar\").click(function(){
            $(\".overlay\").addClass('fadeOut');
            $(\".contenido\").addClass('bounceOutUp');

            setTimeout(function () {
                $(\".overlay\").removeClass('fadeOut').removeClass('fadeIn');
                $(\".contenido\").removeClass('bounceOutUp').removeClass('bounceInDown');
            }, 1010);
            setTimeout(function () {
                $(\".overlay\").remove();
                $(\".contenido\").remove();
            }, 500);

            return false;
        });
        </script>
        <div class=\"contenido animated bounceInDown\">
            <figure class=\"logo2\">
                <a href=\".\" title=\"Corasil\">
                    <img src=\"img/logo.png\" class=\"latido\" alt=\"Crasil\" />
                </a>
            </figure>
            <span class=\"texto\">
                <div class=\"cerrar\">x</div>
                <h2>".$id."</h2>
                <p>Editar el contenido en el administrador...</p>
            </span>
        </div>
        <div class=\"overlay\"></div>";
    }
    echo json_encode($respuesta);
}
?>