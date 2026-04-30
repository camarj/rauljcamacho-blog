const MONTHS_ES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

export function formatDateLong(date: Date): string {
  const d = String(date.getUTCDate()).padStart(2, "0");
  const m = MONTHS_ES[date.getUTCMonth()];
  const y = date.getUTCFullYear();
  return `${d} ${m} ${y}`;
}

export function formatDateShort(date: Date): string {
  const d = String(date.getUTCDate()).padStart(2, "0");
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const y = String(date.getUTCFullYear()).slice(-2);
  return `${d}.${m}.${y}`;
}

export function isoDate(date: Date): string {
  return date.toISOString();
}
