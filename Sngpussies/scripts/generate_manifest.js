const fs = require('fs');
const path = require('path');

// Carpeta principal amb les fotos (la teva PussyPics)
const FOTOS_DIR = 'PussyPics'; 
const ROOT_DIR = path.join(process.cwd(), FOTOS_DIR);
const OUTPUT_FILE = path.join(process.cwd(), 'manifest_pussies.json');

/**
 * Funció recursiva per explorar la carpeta i subcarpetes i fer una llista plana
 * @param {string} dir - El directori a escanejar
 * @returns {string[]} Una llista de rutes de fitxers JPG/PNG trobats
 */
function findImageFiles(dir) {
    let fileList = [];
    try {
        const files = fs.readdirSync(dir, { withFileTypes: true });

        files.forEach(dirent => {
            const name = dirent.name;
            const filePath = path.join(dir, name);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                // Si és una carpeta, tornem a cridar la funció (recursivitat)
                fileList = fileList.concat(findImageFiles(filePath));
            } else if (/\.(jpe?g|png)$/i.test(name)) {
                // Si és un fitxer JPG o PNG, l'afegim a la llista
                // La ruta es neteja per ser relativa a la carpeta PussyPics/
                const relativePath = filePath.replace(process.cwd() + path.sep, '').replace(/\\/g, '/');
                
                // IMPORTANT: Només afegim la ruta, sense la descripció
                fileList.push(relativePath); 
            }
        });
    } catch (error) {
        console.error(`Error llegint el directori ${dir}:`, error.message);
    }
    return fileList;
}

const manifest = findImageFiles(ROOT_DIR);

try {
    // Escrivim el nou manifest al fitxer
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2));
    console.log(`✅ Manifest generat correctament: ${manifest.length} imatges trobades.`);
} catch (error) {
    console.error("❌ Error escrivint el manifest:", error.message);
}
