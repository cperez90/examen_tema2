/**
 * dates.js (donat pel professor)
 * IMPORTANT: Aquest fitxer està pensat com a script "clàssic" (no mòdul).
 * A l'exercici de mòduls, l'haureu de migrar a `export`/`import`.
 */

/**
 * Retorna un array de 365 dates en format YYYY-MM-DD.
 * Nota: aquí generam les dates de l'any 2025 (365 dies, no és any de traspàs).
 */
export function getDates() {
  const dates = [];
  const start = new Date("2025-01-01T00:00:00Z");
  for (let i = 0; i < 365; i++) {
    const d = new Date(start);
    d.setUTCDate(start.getUTCDate() + i);
    dates.push(d.toISOString().slice(0, 10));
  }
  return dates;
}

/**
 * En un <select multiple>, `.value` no és suficient.
 * Aquesta funció retorna un array amb tots els valors seleccionats.
 */
export function getSelectValues(selectNode) {
  return Array.from(selectNode.selectedOptions).map(opt => opt.value);
}
