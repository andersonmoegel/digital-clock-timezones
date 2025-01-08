// script.js
const clockElement = document.getElementById("clock");
const timezoneSelector = document.getElementById("timezone");
const themeToggle = document.getElementById("theme-toggle");

// Lista de fusos horários com locais
const timezones = [
  { label: "UTC-12:00 - Baker Island", value: -12 },
  { label: "UTC-11:00 - Pago Pago", value: -11 },
  { label: "UTC-10:00 - Honolulu", value: -10 },
  { label: "UTC-09:00 - Anchorage", value: -9 },
  { label: "UTC-08:00 - Los Angeles", value: -8 },
  { label: "UTC-07:00 - Denver", value: -7 },
  { label: "UTC-06:00 - Cidade do México", value: -6 },
  { label: "UTC-05:00 - Nova York", value: -5 },
  { label: "UTC-04:00 - Santiago", value: -4 },
  { label: "UTC-03:00 - Brasília", value: -3 },
  { label: "UTC-02:00 - Fernando de Noronha", value: -2 },
  { label: "UTC-01:00 - Açores", value: -1 },
  { label: "UTC - Londres", value: 0 },
  { label: "UTC+01:00 - Berlim", value: 1 },
  { label: "UTC+02:00 - Cairo", value: 2 },
  { label: "UTC+03:00 - Moscou", value: 3 },
  { label: "UTC+04:00 - Dubai", value: 4 },
  { label: "UTC+05:00 - Karachi", value: 5 },
  { label: "UTC+05:30 - Mumbai", value: 5.5 },
  { label: "UTC+06:00 - Dhaka", value: 6 },
  { label: "UTC+07:00 - Bangkok", value: 7 },
  { label: "UTC+08:00 - Pequim", value: 8 },
  { label: "UTC+09:00 - Tóquio", value: 9 },
  { label: "UTC+09:30 - Darwin", value: 9.5 },
  { label: "UTC+10:00 - Sydney", value: 10 },
  { label: "UTC+11:00 - Ilhas Salomão", value: 11 },
  { label: "UTC+12:00 - Fiji", value: 12 },
  { label: "UTC+13:00 - Tonga", value: 13 },
  { label: "UTC+14:00 - Linha Internacional de Data", value: 14 },
];

// Preencher a lista de fusos horários
timezones.forEach(tz => {
  const option = document.createElement("option");
  option.value = tz.value;
  option.textContent = tz.label;
  timezoneSelector.appendChild(option);
});

// Atualizar o relógio
function updateClock() {
  const timezoneOffset = parseFloat(timezoneSelector.value);
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const localTime = new Date(utc + timezoneOffset * 3600000);

  const hours = String(localTime.getHours()).padStart(2, "0");
  const minutes = String(localTime.getMinutes()).padStart(2, "0");
  const seconds = String(localTime.getSeconds()).padStart(2, "0");

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Alternância de modo claro/escuro
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Modo Claro"
    : "🌙 Modo Escuro";
});

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);
timezoneSelector.addEventListener("change", updateClock);

// Inicializar
updateClock();
