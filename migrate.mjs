import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceComponentsDir = path.join(process.cwd(), 'source', 'src', 'app', 'components');
const targetComponentsDir = path.join(process.cwd(), 'src', 'app', 'components');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetComponentsDir)) {
  fs.mkdirSync(targetComponentsDir, { recursive: true });
}

// Copy components
const files = fs.readdirSync(sourceComponentsDir);
for (const file of files) {
  const sourcePath = path.join(sourceComponentsDir, file);
  const targetPath = path.join(targetComponentsDir, file);
  
  if (fs.statSync(sourcePath).isFile() && file.endsWith('.tsx')) {
    let content = fs.readFileSync(sourcePath, 'utf8');
    
    // Add "use client" if it uses state or motion
    if ((content.includes('useState') || content.includes('motion/react')) && !content.includes('"use client"')) {
      content = '"use client";\n\n' + content;
    }

    // Replace dummy logo with actual SVG logo from Phase 1
    if (file === 'Header.tsx' || file === 'Footer.tsx') {
      const dummyLogoRegex = /<div className="flex h-8 w-8 items-center justify-center rounded-md bg-\[#1A3FD8\]">\s*<span className="font-semibold text-white">A<\/span>\s*<\/div>\s*<span className="font-semibold text-\[#0F172A\]">Auralogics Labs<\/span>/g;
      const actualLogo = '<img src="/auralogicslabs.svg" alt="Auralogics Labs" className="h-10 w-auto" />';
      content = content.replace(dummyLogoRegex, actualLogo);
      
      // Footer has it slightly differently formatted maybe, let's just replace both known instances
      const headerRegex = /<div className="flex h-8 w-8 items-center justify-center rounded-md bg-\[#1A3FD8\]">\s*<span className="font-semibold text-white">A<\/span>\s*<\/div>\s*<span className="font-semibold text-\[#0F172A\]">Auralogics Labs<\/span>/;
      if(headerRegex.test(content)) {
          content = content.replace(headerRegex, actualLogo);
      }
    }
    
    fs.writeFileSync(targetPath, content);
    console.log(`Migrated component: ${file}`);
  }
}

// Copy styles
const sourceStylesDir = path.join(process.cwd(), 'source', 'src', 'styles');
const targetStylesDir = path.join(process.cwd(), 'src', 'styles');

if (fs.existsSync(sourceStylesDir)) {
  if (!fs.existsSync(targetStylesDir)) {
    fs.mkdirSync(targetStylesDir, { recursive: true });
  }
  const styleFiles = fs.readdirSync(sourceStylesDir);
  for (const file of styleFiles) {
    const sourcePath = path.join(sourceStylesDir, file);
    const targetPath = path.join(targetStylesDir, file);
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied style: ${file}`);
    }
  }
}

console.log('Migration completed successfully!');
