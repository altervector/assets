document.addEventListener('DOMContentLoaded', function() {
    const contenidor = document.getElementById('galeria-contenidor');

    // 1. LLEGIM EL MANIFEST GLOBAL
    fetch('/manifest_pussies.json') 
        .then(response => {
            if (!response.ok) {
                // Si el manifest no existeix (build ha fallat), mostra missatge d'error
                throw new Error('Error: Manifest de fotos no trobat.');
            }
            return response.json();
        })
        .then(imagePaths => {
            
            // 2. DETECTEM LES CARPETES ÚNIQUES
            const folders = new Set();
            const folderCovers = {}; // Guardarem la ruta de la primera foto per a la portada

            imagePaths.forEach(path => {
                // Busquem la part 'F/' o 'R/' dins de 'PussyPics/F/foto.jpg'
                const match = path.match(/PussyPics\/([A-Za-z0-9]+)\//); 
                
                if (match) {
                    const folderName = match[1];
                    folders.add(folderName);
                    
                    // Guardem la primera imatge trobada com a portada per a aquesta carpeta
                    if (!folderCovers[folderName]) {
                         folderCovers[folderName] = path;
                    }
                }
            });

            if (folders.size === 0) {
                 contenidor.innerHTML = "<h2>No s'han trobat carpetes vàlides a PussyPics/.</h2>";
                 return;
            }

            // 3. GENEREM L'HTML AMB ELS TEUS ESTILS
            let htmlGenerat = '';
            
            // Convertim el Set a Array i l'ordenem (per exemple: F, R, S)
            Array.from(folders).sort().forEach(folder => {
                const coverPath = folderCovers[folder];
                
                // Utilitzem l'estructura div amb onclick per mantenir el teu CSS correcte
                htmlGenerat += `
                    <div class="element-imatge" 
                         onclick="window.location.href='galeria.html?folder=${folder}';"
                         style="cursor: pointer;">
                        
                        <img src="${coverPath}" alt="Carpeta ${folder}">
                        <span class="folder-title">${folder}</span> 
                    </div>
                `;
            });

            contenidor.innerHTML = htmlGenerat;

        })
        .catch(error => {
            console.error("Error carregant les dades per a l'índex:", error);
            contenidor.innerHTML = `<h2>Error: ${error.message}</h2>`;
        });
});
