document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.read-more').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // find the related .more-text within the parent
            const moreText = this.previousElementSibling.querySelector('.more-text');

            if (moreText.style.display === "none") {
                moreText.style.display = "inline";
                this.textContent = "Read Less";
            } else {
                moreText.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });
});

