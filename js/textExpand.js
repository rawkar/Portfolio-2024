// Lyssna på händelsen 'DOMContentLoaded' 
document.addEventListener("DOMContentLoaded", function() {
    // Välj alla element med klassen 'about__content-text'. 
    const textContainers = document.querySelectorAll('.about__content-text');

    // Iterera över varje textContainer-element i listan.
    textContainers.forEach((textContainer) => {
        // Hämta innehållet i textContainern, ta bort onödiga mellanrum före och efter texten med 'trim()'.
        const fullText = textContainer.innerHTML.trim(); 

        // Skapa ett nytt ankarelement (<a>) som ska fungera som "Läs mer"-länk.
        const readMoreLink = document.createElement('a');
        
        // Ange 'href'-attributet till 'javascript:void(0);' för att förhindra att sidan laddas om när användaren klickar på länken.
        readMoreLink.href = 'javascript:void(0);';
        
        // Tilldela en klass till den nya länken
        readMoreLink.className = 'read-more-link';


        // Skapa SVG för 'Läs mer'
        const readMoreSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        readMoreSvg.setAttribute('width', '10');
        readMoreSvg.setAttribute('height', '12');
        readMoreSvg.setAttribute('viewBox', '0 0 12 17');
        readMoreSvg.innerHTML = '<path d="M0.408203 16.9357L0.408202 0.060569L11.5919 8.49812L0.408203 16.9357Z" fill="#1C3056"/>';

        // Skapa SVG för 'Se mindre'
        const seeLessSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        seeLessSvg.setAttribute('width', '12');
        seeLessSvg.setAttribute('height', '14');
        seeLessSvg.setAttribute('viewBox', '0 0 18 13');
        seeLessSvg.innerHTML = '<path d="M0.5625 0.90625H17.4376L9.00005 12.09L0.5625 0.90625Z" fill="#1C3056"/>';
        seeLessSvg.style.display = 'none'; // Dölj 'Se mindre'-SVG till en början

        const endIndex = Math.min(600, fullText.length);
        const lastSpace = fullText.lastIndexOf(' ', endIndex);
        const initialPreviewText = fullText.substring(0, lastSpace);
        const moreTextContent = fullText.substring(lastSpace);

        textContainer.innerHTML = ''; // Rensa och återuppbygg textContainern

        const previewSpan = document.createElement('span');
        previewSpan.innerHTML = initialPreviewText + (fullText.length > 600 ? "..." : "");

        const moreTextSpan = document.createElement('span');
        moreTextSpan.style.display = 'none';
        moreTextSpan.innerHTML = moreTextContent;

        // Lägg till SVG och text till länken
        readMoreLink.appendChild(document.createTextNode('  ')); // Två mellanslag före SVG
        readMoreLink.appendChild(readMoreSvg);
        readMoreLink.appendChild(document.createTextNode(' Läs mer  '));

        // Lägg till elementen i textContainer
        textContainer.appendChild(previewSpan);
        textContainer.appendChild(moreTextSpan);
        textContainer.appendChild(readMoreLink);

        // Hantera klick för att växla synlighet och innehåll
        readMoreLink.addEventListener('click', function() {
            if (moreTextSpan.style.display === "none") {
                moreTextSpan.style.display = "inline";
                previewSpan.innerHTML = initialPreviewText; // Visa hela texten
                this.replaceChild(seeLessSvg, readMoreSvg);
                seeLessSvg.style.display = 'inline';
                readMoreSvg.style.display = 'none';
                this.childNodes[2].nodeValue = " Se mindre  ";
            } else {
                moreTextSpan.style.display = "none";
                previewSpan.innerHTML = initialPreviewText + (fullText.length > 600 ? "..." : ""); // Visa förkortad text 
                this.replaceChild(readMoreSvg, seeLessSvg);
                readMoreSvg.style.display = 'inline';
                seeLessSvg.style.display = 'none';
                this.childNodes[2].nodeValue = " Läs mer  ";
            }
        });
    });
});
