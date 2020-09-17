import React, { useEffect } from "react";
import "../work.css";

function Post({ img, name, ext, git, live }) {
  return (
    <div className="box">
      <img alt="projimg" src={img} className="image" />
      <button className="prj">
        {name}
        <span> . {ext}</span>
      </button>
      <a href={git} className="show1">
        Github
      </a>
      <a href={live} className="show2">
        Visit
      </a>
    </div>
  );
}

export default function Work() {
  useEffect(() => {
    const links = document.querySelectorAll(".link");
    links.forEach((al) => {
      al.classList.remove("active-nav");
    });
    links[3].classList.add("active-nav");
  }, []);
  return (
    <div className="gal-container">
      {/* <h1 style={{ textAlign: "center", margin: "1rem", color: "#23ffde" }}>
        My Projects
      </h1> */}
      <div className="gallery">
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/recipe.jpg"
          name="Recipe App"
          ext="js"
          git="https://github.com/smrnjeet222/recipe-app"
          live="https://smrnjeet222.github.io/recipe-app/"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/pg.png"
          name="Pico-Gram"
          ext="js"
          git="https://github.com/smrnjeet222/PicoGram"
          live="https://smrnjeet-picogram.web.app/"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/blog.jpg"
          name="Django Blog"
          ext="py"
          git="https://github.com/smrnjeet222/Django_Blog"
          live="https://smrnjeetblogs.herokuapp.com/"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/portfolio.png"
          name="Old Portfolio"
          ext="js"
          git="https://github.com/smrnjeet222/Portfolio"
          live="https://smrnjeet222.github.io/Portfolio/"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/Snake/Extras/play.png"
          name="Snake Game"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps/tree/master/Snake"
          live="https://github.com/smrnjeet222/Python_Apps/tree/master/Snake"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/Automail.png"
          name="AutoMail"
          ext="py"
          git="https://github.com/smrnjeet222/AutoMail"
          live="https://github.com/smrnjeet222/AutoMail"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Unity_Gamedevelopment/master/FreakyFrog/best.png"
          name="Freaky Frog"
          ext="c#"
          git="https://github.com/smrnjeet222/Unity_Gamedevelopment"
          live="https://smrnjeet-22.itch.io/freaky-frog"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/SudokuSolver/2.png"
          name="Sudoku Solver"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps/tree/master/SudokuSolver"
          live="https://github.com/smrnjeet222/Python_Apps/tree/master/SudokuSolver"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/Space-invaders/Sc.jpg"
          name="Space-invaders"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps/tree/master/Space-invaders"
          live="https://github.com/smrnjeet222/Python_Apps/tree/master/Space-invaders"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/Astar.png"
          name="A*Pathfinding"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps/tree/master/A-star"
          live="https://repl.it/@smrnjeet222/Astar#main.py"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/todo.png"
          name="React Todo "
          ext="js"
          git="https://github.com/smrnjeet222/ReactApps"
          live="https://github.com/smrnjeet222/ReactApps"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/Rock-Paper-Scissors/demo.jpg"
          name="Multiplayer R.P.S"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps/tree/master/Rock-Paper-Scissors"
          live="https://github.com/smrnjeet222/Python_Apps/tree/master/Rock-Paper-Scissors"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/Rc.png"
          name="Ray Casting"
          ext="js"
          git="https://editor.p5js.org/smrnjeet222/collections/fvtHa48dt"
          live="https://editor.p5js.org/smrnjeet222/sketches/j06TXs4ZF"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/covid.png"
          name="Python Apps"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps"
          live="https://github.com/smrnjeet222/Python_Apps"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/bubblesort.png"
          name="Visualisations"
          ext="js"
          git="https://editor.p5js.org/smrnjeet222/collections/fvtHa48dt"
          live="https://editor.p5js.org/smrnjeet222/sketches/T0o5woDT5"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/BLENDER/master/Abstract_Design/Abstract.png"
          name="Blender"
          ext="models"
          git="https://github.com/smrnjeet222/BLENDER"
          live="https://smrnjeet222.github.io/BLENDER/"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Unity_Gamedevelopment/master/MYGAME.png"
          name="Unity Games"
          ext="c#"
          git="https://github.com/smrnjeet222/Unity_Gamedevelopment"
          live="https://smrnjeet-22.itch.io/"
        />
      </div>
    </div>
  );
}
