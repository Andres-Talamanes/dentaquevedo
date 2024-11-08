const { execSync } = require('child_process');

try {
  // Intentar ejecutar `pnpm run build`
  execSync('pnpm run build', { stdio: 'inherit' });
} catch (error) {
  // Si falla, intenta con `npm run build`
  execSync('npm run build', { stdio: 'inherit' });
}
