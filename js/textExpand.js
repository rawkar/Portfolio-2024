document.addEventListener("DOMContentLoaded", function() {
    const textContainers = document.querySelectorAll('.about__content-text');

    textContainers.forEach((textContainer) => {
        const fullText = textContainer.innerHTML.trim();

        const readMoreLink = document.createElement('a');
        readMoreLink.href = 'javascript:void(0);';
        readMoreLink.className = 'read-more-link';
        readMoreLink.style.display = 'inline-flex';
        readMoreLink.style.alignItems = 'center';

        const endIndex = Math.min(600, fullText.length);
        const lastSpace = fullText.lastIndexOf(' ', endIndex);
        const initialPreviewText = fullText.substring(0, lastSpace).trim(); // Trim här för att ta bort mellanrum vid brytpunkten
        const moreTextContent = fullText.substring(lastSpace).trim(); // Trim här för att säkerställa att det inte börjar med mellanrum
        

        textContainer.innerHTML = '';

        const previewSpan = document.createElement('span');
        previewSpan.innerHTML = initialPreviewText + (fullText.length > 600 ? "..." : '');

        const moreTextSpan = document.createElement('span');
        moreTextSpan.className = 'more-text';
        moreTextSpan.style.display = 'none'; // Start hidden
        moreTextSpan.innerHTML = moreTextContent;

        const chevronDown = document.createElement('span');
        chevronDown.innerHTML = 'Se mer <svg width="14" height="10" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.23127 0.60628C1.53889 0.299045 1.95588 0.126474 2.39065 0.126474C2.82541 0.126474 3.2424 0.299045 3.55002 0.60628L9.50002 6.55628L15.45 0.60628C15.6002 0.44509 15.7813 0.315804 15.9826 0.226134C16.1838 0.136464 16.4011 0.0882485 16.6214 0.0843618C16.8417 0.0804751 17.0605 0.120997 17.2648 0.203512C17.4691 0.286027 17.6546 0.408843 17.8104 0.564634C17.9662 0.720425 18.089 0.905999 18.1715 1.11029C18.2541 1.31457 18.2946 1.53339 18.2907 1.75367C18.2868 1.97396 18.2386 2.19121 18.1489 2.39246C18.0592 2.59371 17.93 2.77483 17.7688 2.92503L10.6594 10.0344C10.3518 10.3416 9.93479 10.5142 9.50002 10.5142C9.06525 10.5142 8.64826 10.3416 8.34065 10.0344L1.23127 2.92503C0.924035 2.61741 0.751465 2.20042 0.751465 1.76566C0.751465 1.33089 0.924035 0.913898 1.23127 0.60628Z" fill="#002642"/></svg>';
       

        const chevronUp = document.createElement('span');
        chevronUp.innerHTML = 'Se mindre <svg width="14" height="10" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8112 9.99199C17.5036 10.2992 17.0866 10.4718 16.6518 10.4718C16.2171 10.4718 15.8001 10.2992 15.4925 9.99199L9.54246 4.04199L3.59246 9.99199C3.44226 10.1532 3.26113 10.2825 3.05989 10.3721C2.85864 10.4618 2.64139 10.51 2.4211 10.5139C2.20081 10.5178 1.982 10.4773 1.77771 10.3948C1.57343 10.3122 1.38785 10.1894 1.23206 10.0336C1.07627 9.87784 0.953455 9.69227 0.870941 9.48798C0.788426 9.2837 0.747903 9.06488 0.751789 8.84459C0.755676 8.62431 0.803893 8.40706 0.893563 8.20581C0.983233 8.00456 1.11252 7.82344 1.27371 7.67324L8.38308 0.563862C8.6907 0.256627 9.10769 0.0840553 9.54246 0.0840553C9.97723 0.0840553 10.3942 0.256627 10.7018 0.563862L17.8112 7.67324C18.1184 7.98085 18.291 8.39784 18.291 8.83261C18.291 9.26738 18.1184 9.68437 17.8112 9.99199Z" fill="#002642"/></svg>';
        

        readMoreLink.appendChild(chevronDown.cloneNode(true)); // Initial chevron

        textContainer.appendChild(previewSpan);
        textContainer.appendChild(moreTextSpan);
        textContainer.appendChild(readMoreLink);

        readMoreLink.addEventListener('click', function() {
            if (moreTextSpan.style.display === "none") {
                moreTextSpan.style.display = "inline";
                previewSpan.innerHTML = initialPreviewText; // Show the whole text
                this.innerHTML = ''; // Clear previous content
                this.appendChild(chevronUp.cloneNode(true)); // Change to chevron up
            } else {
                moreTextSpan.style.display = "none";
    
                previewSpan.innerHTML = initialPreviewText.trim() + (fullText.length > 600 ? "..." : "");

                this.innerHTML = ''; // Clear previous content
                this.appendChild(chevronDown.cloneNode(true)); // Change to chevron down
            }
        });
    });
});
