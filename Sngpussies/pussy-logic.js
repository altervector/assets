document.addEventListener('DOMContentLoaded', function() {
    const contenidor = document.getElementById('galeria-contenidor'); 
    const modal = document.getElementById('modal-foto'); 

    // 1. OBTENIR LA CARPETA QUE HEM DE LLEGIR DES DE LA URL
    // Ex: Si estem a galeria.html?folder=F, la variable serà 'F'
    const urlParams = new URLSearchParams(window.location.search);
    const targetFolder = urlParams.get('folder'); 

    // Si no hi ha carpeta a l'URL (això només hauria de passar si algú va directament a galeria.html)
    if (!targetFolder) {
        contenidor.innerHTML = "<h2>Error: No s'ha especificat cap carpeta per mostrar.</h2>";
        return; 
    }

    // 2. LLEGIM EL MANIFEST GLOBAL
    fetch('manifest_pussies.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Error: No s\'ha trobat el manifest_pussies.json. La construcció ha fallat.');
            }
            return response.json();
        })
        .then(imagePaths => { // Rebem la llista PLANA de TOTS els fitxers
            
            let htmlGenerat = '';
            // Creem la ruta de filtratge per a la carpeta
            const filterPath = `PussyPics/${targetFolder}/`; 

            // Filtrem la llista d'imatges
            const filteredImages = imagePaths.filter(path => path.includes(filterPath));
            
            if (filteredImages.length === 0) {
                 contenidor.innerHTML = `<h2>No s'han trobat imatges a la carpeta "${targetFolder}".</h2>`;
                 return;
            }

            // Dibuixem només les fotos filtrades
            filteredImages.forEach(path => {
                const fileName = path.split('/').pop().split('.')[0]; 
                
                htmlGenerat += `
                    <div class="element-imatge" 
                         data-src="${path}"> 
                        <img src="${path}" alt="${fileName}">
                    </div>
                `;
            });

            contenidor.innerHTML = htmlGenerat;

            // 3. AFegir l'ESDEVENIMENT DE CLIC per OBRIR LA MODAL
            document.querySelectorAll('.element-imatge').forEach(element => {
                element.addEventListener('click', function() {
                    const src = this.getAttribute('data-src');
                    openModal(src); 
                });
            });

            // 4. TANCAMENT GLOBAL (clicar a qualsevol lloc)
            modal.addEventListener('click', function(event) {
                if (event.target == modal || event.target.id === 'modal-img') {
                    closeModal();
                }
            });


        }) 
        .catch(error => {
            console.error("Error carregant les fotos:", error);
            contenidor.innerHTML = "<h2>Error: No s'han pogut carregar les dades.</h2>";
        });
});


// Funció per obrir la modal 
function openModal(src) {
    document.getElementById('modal-foto').style.display = "block";
    document.getElementById('modal-img').src = src;
}

// Funció per tancar la modal
function closeModal() {
    document.getElementById('modal-foto').style.display = "none";
}
