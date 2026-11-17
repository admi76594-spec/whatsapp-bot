const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', (qr) => {
  console.log('امسح الكود ده بالواتساب:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('البوت اشتغل بنجاح!');
});

client.on('message', (msg) => {
  if (msg.body === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاته');
  }
  if (msg.body === 'ازيك') {
    msg.reply('الحمد لله، أنا تمام. وانت أخبارك ايه؟');
  }
});

client.initialize();
