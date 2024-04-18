document.addEventListener("DOMContentLoaded", function() {
    const textContainers = document.querySelectorAll('.about__content-text');

    textContainers.forEach((textContainer) => {
        const fullText = textContainer.innerHTML.trim();

        const readMoreLink = document.createElement('a');
        readMoreLink.href = 'javascript:void(0);';
        readMoreLink.className = 'read-more-link';

        const endIndex = Math.min(600, fullText.length);
        const lastSpace = fullText.lastIndexOf(' ', endIndex);
        const initialPreviewText = fullText.substring(0, lastSpace);
        const moreTextContent = fullText.substring(lastSpace);

        textContainer.innerHTML = '';

        const previewSpan = document.createElement('span');
        previewSpan.innerHTML = initialPreviewText + (fullText.length > 600 ? "..." : '');

        const moreTextSpan = document.createElement('span');
        moreTextSpan.className = 'more-text';
        moreTextSpan.innerHTML = moreTextContent;

        readMoreLink.textContent = 'Se mer >>';

        textContainer.appendChild(previewSpan);
        textContainer.appendChild(moreTextSpan);
        textContainer.appendChild(readMoreLink);

        readMoreLink.addEventListener('click', function() {
            if (moreTextSpan.style.display === "none") {
                moreTextSpan.style.display = "inline";
                previewSpan.innerHTML = initialPreviewText; // Show the whole text
                this.textContent = "Se mindre <<";
            } else {
                moreTextSpan.style.display = "none";
                previewSpan.innerHTML = initialPreviewText + (fullText.length > 600 ? "..." : ""); // Show truncated text
                this.textContent = "Se mer >>";
            }
        });
    });
});
