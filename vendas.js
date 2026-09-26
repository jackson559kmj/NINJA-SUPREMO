// Insira aqui somente uma URL de checkout criada dentro da conta do vendedor.
// Nunca coloque o access token ou credenciais do Mercado Pago em arquivos do site.
const MERCADO_PAGO_CHECKOUT_URL = "https://mpago.la/1uH1i5A";
const WHATSAPP_NUMBER = "5551999444927";

const buyButton = document.getElementById("comprar-mercado-pago");
const buyNotice = document.getElementById("compra-indisponivel");
if (buyButton && /^https:\/\/(?:(?:www\.)?mercadopago\.com\.br|mpago\.la)\//.test(MERCADO_PAGO_CHECKOUT_URL)) {
  buyButton.href = MERCADO_PAGO_CHECKOUT_URL;
  buyButton.rel = "noopener noreferrer";
  buyButton.removeAttribute("aria-disabled");
  if (buyNotice) buyNotice.hidden = true;
}

const supportButton = document.getElementById("ativar-whatsapp");
if (supportButton) {
  const params = new URLSearchParams(window.location.search);
  const rawId = params.get("payment_id") || params.get("collection_id") || "";
  const orderId = /^[0-9]{1,30}$/.test(rawId) ? rawId : "";
  const message = [
    "Olá! Comprei o Ninja Supremo V2.08 e quero solicitar o arquivo e a ativação da licença.",
    orderId ? `Identificador de pagamento informado pelo checkout: ${orderId}` : "Posso enviar o número do pedido do Mercado Pago.",
    "Vou informar meu número de conta MT5 e o nome do servidor. Não enviarei a senha."
  ].join("\n");
  supportButton.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
