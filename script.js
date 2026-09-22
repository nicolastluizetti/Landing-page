// ================================
// CONFIGURAÇÃO
// ================================
// Troque pelo número do WhatsApp da empresa.
// Formato: código do país + DDD + número, sem espaços ou símbolos.
const WHATSAPP = "5511968464253";

const whatsappBase = `https://wa.me/${WHATSAPP}`;

document.getElementById("whatsappLink").href =
  `${whatsappBase}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para presença digital.")}`;

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const company = document.getElementById("company").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text =
`Olá! Meu nome é ${name}.
Empresa: ${company}
Tenho interesse em: ${service}

Mensagem:
${message || "Gostaria de receber mais informações."}`;

  window.open(`${whatsappBase}?text=${encodeURIComponent(text)}`, "_blank");
});
