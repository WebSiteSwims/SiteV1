import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',               // Dossier contenant les tests
  timeout: 30 * 1000,               // Timeout par test (30s)
  expect: {
    timeout: 5000,                  // Timeout pour les assertions
  },
  fullyParallel: true,              // Lancer les tests en parallèle
  forbidOnly: !!process.env.CI,     // Interdit les tests .only en CI
  retries: process.env.CI ? 2 : 0,  // Réessaye les tests en CI
  workers: process.env.CI ? 1 : undefined, // 1 seul thread en CI

  // Lancement d’un serveur local (vite, next, cra...)
  webServer: {
    command: 'npm run dev',         // Commande pour lancer ton app
    port: 3000,                     // Port utilisé par ton app
    reuseExistingServer: !process.env.CI, // Ne relance pas si déjà actif
  },

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',        // Active les traces pour debug si erreur
    headless: true,                 // Exécution sans UI
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure', // Prend une capture si le test échoue
    video: 'retain-on-failure',    // Garde la vidéo si échec
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
