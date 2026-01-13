const tg = window.Telegram.WebApp;
tg.expand();

const info = document.getElementById('info');

info.innerText = tg.initDataUnsafe?.user
  ? `Привет, ${tg.initDataUnsafe.user.first_name}`
  : 'Открыто вне Telegram';

fetch('/api/health')
  .then(r => r.json())
  .then(d => console.log('API:', d));
