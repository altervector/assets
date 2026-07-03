class ShareBtn extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style>
.share-wrap {
    position: relative;
    width: 200px;
    height: 48px;
}

/* DIV 2 — sempre visible, a sota */
.share-fons {
    position: absolute;
    inset: 0;
    border-radius: 50px;
    border: 2px solid #f97316;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 16px;
}

.share-fons a {
    color: #ff0033;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
}

/* DIV 1 — cortina de color, a sobre */
.share-cortina {
    position: absolute;
    inset: 0;
    border-radius: 50px;
    background: #f97316;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transform-origin: left center;
    transition: width 0.5s ease;
    overflow: hidden;
    width: 180px;
}

.share-cortina.obert {
    width: 0;
}
.share-icona {
width: 20px;
height: auto;
vertical-align: middle;
margin-right: 8px;
display: inline-block;
}
</style>

<div class="share-wrap">

    <!-- DIV 2 — fons fix amb icones -->
    <div class="share-fons">
        <a href="mailto:${CONFIG.EMAIL}"><img src="${CONFIG.ASSETS}icon/Icomail.png" alt="Mail" class="share-icona"></a>
        <a href="${CONFIG.WHATSAPP}" target="_blank"><img src="${CONFIG.ASSETS}icon/Icowhats.png" alt="Whats" class="share-icona"></a>
        <a href="${CONFIG.INSTAGRAM}" target="_blank"><img src="${CONFIG.ASSETS}icon/Icoinsta.png" alt="Instagram" class="share-icona"></a>
        <a href="${CONFIG.URL_RESSENYES}" target="_blank"><img src="${CONFIG.ASSETS}icon/google.png" alt="Google" class="share-icona">
</a>
        </div>

    <!-- DIV 1 — cortina de color -->
    <div class="share-cortina" id="cortina">
        Compartir
    </div>

</div>
        `;

        const cortina = this.querySelector('#cortina');
        let timer;

        cortina.addEventListener('click', function() {
            cortina.classList.add('obert');
            timer = setTimeout(() => {
                cortina.classList.remove('obert');
            }, 2000);
        });
    }
}

customElements.define('share-btn', ShareBtn);
