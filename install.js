import { execSync } from 'child_process';

try {
  console.log('Installation des dépendances du client...');
  execSync('npm install', { stdio: 'inherit' }); 
  console.log('Installation des dépendances du serveur...');
  execSync('npm install', { cwd: './server', stdio: 'inherit' }); 
  console.log('Installation terminée');
} catch (error) {
  console.error('Erreur lors de l\'installation des dépendances :', error);
  process.exit(1);  
}
