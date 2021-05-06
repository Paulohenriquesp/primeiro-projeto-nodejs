const express = require(`express`);
const nunjucks = require(`nunjucks`);

const server = express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", function (req, res) {
  const about = {
    avatar_url:
      "https://media-exp1.licdn.com/dms/image/C4E03AQH6Wlry05o-Og/profile-displayphoto-shrink_800_800/0/1606482122950?e=1625097600&v=beta&t=y_P-SOywrd_YJTScw39mupnnGzgeVxVIgCk8jf6KDl0",
    name: "Paulo Henrique",
    role: "Estudante - JavaScript",
    description:
      "Iniciando os estudos em programação usando JavaScript e CSS como inicio da minha trajetória.",
    links: [
      { name: "GitHub", url: "https://github.com/paulinholinho" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/paulo-henriquesp/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100002327974005",
      },
    ],
  };
  return res.render("about", { about });
});

server.get("/portfolio", function (req, res) {
  return res.render("portfolio", { items: videos });
});

server.get("/video", function (req, res) {
  const id = req.query.id;

  const video = videos.find(function (video) {
    return video.id == id;
  });

  if (!video) {
    return res.send("Video not found!");
  }

  return res.render("video", { item: video });
});

server.listen(5000, function () {
  console.log(`Server is running`);
});
