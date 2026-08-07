import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const decks = JSON.parse(readFileSync(join(root, "decks.json"), "utf-8"));

function launch(deck) {
  console.log(`\n▲ Iniciando "${deck.title}" (${deck.entry})\n`);
  execFileSync("pnpm", ["exec", "slidev", deck.entry, "--open"], {
    cwd: root,
    stdio: "inherit",
  });
}

async function pickDeck() {
  console.log("Presentaciones disponibles en presentaciones/decks.json:\n");
  decks.forEach((deck, i) => {
    console.log(`  ${i + 1}. ${deck.title} (${deck.slug})`);
  });

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await new Promise((resolve) =>
    rl.question("\n¿Cuál quieres iniciar? (número o slug): ", resolve),
  );
  rl.close();

  const bySlug = decks.find((d) => d.slug === answer.trim());
  const byIndex = decks[Number(answer.trim()) - 1];
  const deck = bySlug ?? byIndex;

  if (!deck) {
    console.error(`\n✗ No encontré ninguna presentación para "${answer}".`);
    process.exit(1);
  }

  return deck;
}

const requested = process.argv[2];

if (requested) {
  const deck = decks.find((d) => d.slug === requested);
  if (!deck) {
    console.error(`✗ No existe la presentación "${requested}" en decks.json.`);
    console.error(`  Disponibles: ${decks.map((d) => d.slug).join(", ")}`);
    process.exit(1);
  }
  launch(deck);
} else if (decks.length === 1) {
  launch(decks[0]);
} else {
  const deck = await pickDeck();
  launch(deck);
}
