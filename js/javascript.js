

//////////////////// HEADER PARA TODAS AS PAGINAS \\\\\\\\\\\\\\\\\\\\
//==================================================================\\

fetch("components/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // link ativo
    const links = document.querySelectorAll(".nav a");
    const current = location.pathname.split("/").pop();

    links.forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  });