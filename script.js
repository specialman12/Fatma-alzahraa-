// استخدمت جافا سكريبت لإنشاء رسالة ترحيب
function welcomeMessage() {
  alert("تم عمل الموقع بكل حب من اجل مس فاطمه❤");
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", welcomeMessage);



const chemicalSymbols = [
  "H₂O",
  "CO₂",
  "NaCl",
  "HCl",
  "O₂",
  "N₂",
  "CH₄",
  "C₆H₁₂O₆",
  "CaCO₃",
  "Fe₂O₃"
];

window.onload = function() {
  const randomIndex = Math.floor(Math.random() * chemicalSymbols.length);
  const randomSymbol = chemicalSymbols[randomIndex];
  document.getElementById("chemical-symbol").innerHTML = randomSymbol;
};