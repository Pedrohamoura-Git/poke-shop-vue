export function capitalize(string) {
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  const newString = words.join(" ");
  return newString;
}

export function calcPrice(data) {
  var price = 0;
  data.stats.forEach((stat) => {
    price += stat.base_stat;
  });
  return price / 10;
}

export function formatCurrency(number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
}