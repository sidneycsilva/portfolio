

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



//////////////////// MENSAGEM PRONTA PARA WHATAPPS \\\\\\\\\\\\\\\\\\\\
//====================================================================\\
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.querySelector("input[name='nome']").value;
    let whatsapp = document.querySelector("input[name='whatsapp']").value;
    let email = document.querySelector("input[name='email']").value;
    let mensagem = document.querySelector("textarea[name='mensagem']").value;

    let texto = encodeURIComponent(
`Olá!
Me nome é: ${nome}
WhatsApp: ${whatsapp}
Email: ${email}

Mensagem:
${mensagem}`
    );
    let url = `https://wa.me/5593991712448?text=${texto}`;
    window.open(url, "_blank");
});
