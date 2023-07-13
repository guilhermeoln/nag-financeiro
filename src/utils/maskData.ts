export default function maskData(event: React.ChangeEvent<HTMLInputElement>) {
  var v = event.target.value.replace(/\D/g, "");

  v = v.replace(/(\d{2})(\d)/, "$1/$2");

  v = v.replace(/(\d{2})(\d)/, "$1/$2");

  event.target.value = v;
}
