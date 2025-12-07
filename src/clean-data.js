// Pobieramy dane z webhooka
const body = $input.item.json.body;
const email = body.email || "";
const phoneRaw = body.imie || ""; // Czasem telefon wpada w różne pola, załóżmy że tu mamy telefon lub dodaj pole telefon w webhooku
const phoneInput = body.telefon || ""; // Jeśli masz pole 'telefon' w webhooku

// 1. CZYSZCZENIE TELEFONU
// Usuwamy wszystko co nie jest cyfrą (spacje, myślniki, +48)
let cleanPhone = phoneInput.replace(/\D/g, '');
// Jeśli ma 11 cyfr (48xxxxxxxxx), utnij 48
if (cleanPhone.length === 11 && cleanPhone.startsWith('48')) {
  cleanPhone = cleanPhone.substring(2);
}
const isPhoneValid = cleanPhone.length === 9;

// 2. ANALIZA EMAILA
const freeDomains = ['gmail.com', 'wp.pl', 'onet.pl', 'interia.pl', 'o2.pl', 'tlen.pl', 'outlook.com', 'yahoo.com', 'icloud.com', 'hotmail.com'];
const emailParts = email.split('@');
let domain = "";
let isFreeEmail = false;
let isEmailValid = false;

if (emailParts.length === 2) {
  domain = emailParts[1].toLowerCase();
  isFreeEmail = freeDomains.includes(domain);
  isEmailValid = true;
}

// 3. WSTĘPNY SCORING TECHNICZNY
let techScore = 0;
if (isPhoneValid) techScore += 15;
if (isEmailValid) {
  if (isFreeEmail) {
    techScore += 5;
  } else {
    techScore += 35; // Bonus za domenę firmową
  }
}

return {
  json: {
    ...body,
    cleanPhone: cleanPhone,
    domain: domain,
    isFreeEmail: isFreeEmail,
    techScore: techScore,
    isPhoneValid: isPhoneValid
  }
};
