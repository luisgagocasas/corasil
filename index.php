<!doctype html>
<html lang="es_ES">
<head>
	<meta charset="utf-8" />
	<title>Corasil - corasil.pe</title>
	<link rel="shortcut icon" href="img/favicon.png" />
	<meta name="description" content="" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="h" />
	<meta property="og:image" content="img/icon.png" />
	<meta property="og:site_name" content="" />
	<meta property="fb:admins" content="100003974860941" />
	<link rel="stylesheet" href="css/estilos.css" />
    <script src="js/jquery-1.10.1.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/main.js"></script>
    <script>
    $(document).ready(function(){
        $("body").css({"overflow-y":"hidden"});
        var alto=$(window).height();
        $("body").append("<div id='pre-load-web'><div id='imagen-load'><img src='img/logo.png' alt='Crasil' /><br><img src='img/loader.gif'  /><br />Cargando...</div>");
        $("#pre-load-web").css({height:alto+"px"});
        $("#imagen-load").css({"margin-top":(alto/2)-30+"px"});
    })
    $(window).load(function(){
        $("#pre-load-web").fadeOut(1000,function() {
            $(this).remove();
            $("body").css({"overflow-y":"auto"});
        });
    })
    </script>
</head>
<body>
    <div id="cuerpo">
        <header class="cabecera">
            <div class="logo">
                <a href="." title="Corasil">
                    <img src="img/logo.png" alt="Crasil" />
                </a>
            </div>
            <div class="redes">
                <figure>
                    <a href="https://www.facebook.com/agroindustrias.corasil.1?fref=ts" target="_blank"><img src="img/fb.png" /></a>
                </figure>
                <figure>
                    <a href="http://www.youtube.com/channel/UCmvuL3lld3H-wEo6br99mJw" target="_blank"><img src="img/yb.png" /></a>
                </figure>
            </div>
            <nav class="menu">
                <ul>
                    <li id="contenido-5" data-id="5">Nosotros</li>
                    <li id="contenido-6" data-id="6">Galeria</li>
                    <li id="contenido-7" data-id="7">Videos</li>
                    <li id="contenido-8" data-id="8">Contàctenos</li>
                </ul>
            </nav>
        </header>
        <section class="cuerpo">
            <figure class="logo">
                <a href="." title="Corasil">
                    <img src="img/logo.png" alt="Crasil" />
                </a>
            </figure>
            <article class="flechas1">
                <div class="btn" id="contenido-1" data-id="1">MIO CIC</div>
                <div class="flecha1"></div>
            </article>
            <article class="flechas2">
                <div class="btn" id="contenido-2" data-id="2">CORAFORTE 5G</div>
                <div class="flecha2"></div>
            </article>
            <article class="flechas3">
                <div class="btn" id="contenido-3" data-id="3">CILIMAX 3X</div>
                <div class="flecha3"></div>
            </article>
            <article class="flechas4">
                <div class="btn" id="contenido-4" data-id="4">PREGUNTAS</div>
                <div class="flecha4"></div>
            </article>
            <figure class="arbol">
                <img src="img/arbol.png" />
            </figure>
            <div id="mensaje"></div>
        </section>
    </div>
    <script src="js/main.js"></script>
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-41465403-5', 'utpaqp.info');
    ga('send', 'pageview');

    </script>
</body>
</html>