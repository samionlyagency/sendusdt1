document.addEventListener("DOMContentLoaded", () => {
const btn = document.getElementById("nextBtn");

if (!btn) {
console.error("Bouton Next introuvable (id=nextBtn)");
return;
}

btn.addEventListener("click", async () => {
if (!window.ethereum) {
alert("Aucun wallet Web3 détecté. Ouvre via Trust Wallet.");
return;
}

try {
const accounts = await window.ethereum.request({
method: "eth_requestAccounts",
});

console.log("Wallet connecté :", accounts[0]);
alert("Wallet connecté : " + accounts[0]);

} catch (err) {
console.error("Erreur connexion wallet :", err);
alert("Connexion refusée");
}
});
});


