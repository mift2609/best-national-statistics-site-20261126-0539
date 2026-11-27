// AngkaNusa — hand-in program for the national statistics site.
//
// The site itself is the static file tree in app/: plain HTML, CSS and
// JavaScript that a browser opens directly, with every figure it shows held
// in its own files and nothing loaded over the network. This program is only
// the courier. It copies app/ and screenshots/ into the output directory and
// writes dossier.json there with buildDossier from the vendored make.fun
// library, so the judges receive exactly the site that was built here.
//
// Run it the way the grader does (MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grading container):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const repoRoot = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate's own limits, passed to the library so the dossier written here is
// the dossier the scorer rebuilds: at most 4 screenshots of 256 KiB each, at
// most 993 files and 16 MiB under app/, and a source text capped at 160 KiB.
const GATE_LIMITS = {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 16777216,
};

mkdirSync(outputDir, { recursive: true });
cpSync(join(repoRoot, 'app'), join(outputDir, 'app'), { recursive: true });

const shotsDir = join(repoRoot, 'screenshots');
if (existsSync(shotsDir)) {
  mkdirSync(join(outputDir, 'screenshots'), { recursive: true });
  cpSync(shotsDir, join(outputDir, 'screenshots'), { recursive: true });
}

writeFileSync(join(outputDir, 'dossier.json'), buildDossier(outputDir, GATE_LIMITS));
