#!/usr/bin/env bash
# Refresca el catálogo local completo de HyperFrames (videos/catalogo-completo/).
# Vuelve a descargar TODOS los blocks/components del registro y sobrescribe
# (--force) los que hayan cambiado en el remoto.
set -euo pipefail
cd "$(dirname "$0")/.."

names_file="$(mktemp)"
trap 'rm -f "$names_file"' EXIT

pnpm exec hyperframes catalog --json \
  | node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{for(const i of JSON.parse(d))console.log(i.name)})' \
  > "$names_file"

total=$(wc -l < "$names_file")
echo "Actualizando $total items del catálogo en catalogo-completo/ ..."

ok=0
fail=0
failed_names=()
while IFS= read -r name; do
  [ -z "$name" ] && continue
  if pnpm exec hyperframes add "$name" --dir catalogo-completo --no-clipboard --force --json > /dev/null 2>&1; then
    ok=$((ok + 1))
  else
    fail=$((fail + 1))
    failed_names+=("$name")
  fi
done < "$names_file"

echo "Listo: $ok actualizados, $fail fallidos."
if [ "$fail" -gt 0 ]; then
  printf 'Fallidos: %s\n' "${failed_names[*]}"
fi
