<!DOCTYPE html>
<html>
<head>
    <?php $base = "../../" ?>
<!--    <base href="http://cims.nyu.edu/~by653/hps/">-->
    <base href="../../">
    <script src="js/jquery-2.2.4.min.js"></script>
    <script src="js/facebox.js"></script>
    <script src="js/gameSettings.js"></script>
    <link rel="stylesheet" type="text/css" href="css/facebox.css"/>
    <link rel="stylesheet" type="text/css" href="css/main.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $('a[rel*=facebox]').facebox()
        })
    </script>
</head>
<body>
<div class="container">
    <?php include $base."header.php"; ?>
    <nav>
        <ul>
        <li><a href="">Home</a></li>
            <li><a href="games/empty">Empty Template</a></li>
        </ul>
        <?php include $base."leftMenuGame.php"; ?>
    </nav>
    <article>
        <h1 id="gameName">Weighted Voronoi</h1>
        <h3 id="groupName">Botty McBotFace</h3>
        <div>
            <h3>Play Game in a Popup Window</h3>
            <form id="gameSettings" class="well">
            </form>
            <!--<iframe src="games/weighted_voronoi/iframe.html" class="game" width="800" height="800"></iframe>-->
        </div>


        <h3>Instructions:</h3>
        <div id="gameDesc" class="jumbotron">
            <p>Click the "?" icon in-game for instructions. </p>
            <p>Use the popup display and maximize it for the best experience.</p>

            <h2>Rules of the Game</h2>

            <h2>Overview:</h2>
            <hr/>
            <p>
              Given a set of point-sized stones of various colors,
              a Weighted Voronoi diagram is a tesselation of a plane into colored regions
              such that every point with integer coordinates (x, y) has the color of the stones that
              give it the greatest pull.
            </p>

            <img src="games/weighted_voronoi/images/board.png" alt="board"style="width:50%"/>

            <h2>Playing a Round:</h2>
            <hr/>
            <p>
              Graviational Voronoi is a n player game that works as follows:
            </p>
            <ul>
              <li>
                n players are each assigned a color, and are each allocated W units of weight
              </li>
              <li>
                Each player can distribute their allotted weight across a maximum of S stones on a 500x500 board.
              </li>
              <li>
                The first player places one stone, then the second player places one stone and so on...
              </li>
              <li>
                Each player places one stone until all players have placed S stones or have exhausted all their weight.
              </li>
              <li>
                If a player cannot place a stone (either they have used all of their weight or placed all of their stones),
                their turn is skipped
              </li>
              <li>
                Additionally, every stone must be a Euclidean distance of at least d units
                away from any other stone.
              </li>
            </ul>
            <p>n, S, W, and d are set at the beginning of every game.</p>
            <p>
              The winner of a round is the player with the most controlled area at the end of the round.
            </p>

            <h2>Ending a Game:</h2>
            <hr/>
            <ul>
              <li>
                If there are n players, the game runs for a total of n rounds, allowing each player to go first.
              </li>
              <li>
                At the end of the game (after n rounds), each players' scores over all rounds are summed.
              </li>
              <li>
                The player with the highest combined score over all n rounds is declared the winner!
              </li>
            </ul>
            <img src="games/weighted_voronoi/images/gameover.png" alt="gameover" style="width:80%;"/>
            <h2>Pull Calculation:</h2>
            <hr/>
            <p>
              The pull for a color c at point p with coordinates (x, y) is calculated as follows:
            </p>
            <p>Supposing that color c has k stones placed:</p>
            <ul>
              <li>
                Take all k stones and compute their Euclidean distances to point p
                say d1, d2, ... dk.
              </li>
              <li>
                Take the weights of all k stones w1, ..., wk
              </li>
              <li>
                pull(c, p) = (w/(d1*d1)) + (w/(d2*d2)) + ... + (w/(dk*dk)).
              </li>
            </ul>
            <p>
              It's as if we're computing the color of a point based on the color that gives
              the greatest pull.
            </p>
        </div>
        <?php
            include $base."getScore.php";
            /*
            * arg1: gameName, should be the same as the dir name
            * arg2: if your score is sortable, pass 1 if higher score is better, 0
            *       if smaller score is better. Otherwise no need to pass variable
            *
            */
            // TODO: uncomment this in real use
            // getScore($gameName, $orderFlag);
        ?>
        </div>
            </article>
    <?php include $base."footer.php"; ?>
</div>
<script type="text/javascript">
    newWindowBtn(2000,2000,"games/weighted_voronoi/iframe.html", []);
</script>
</body>
</html>

