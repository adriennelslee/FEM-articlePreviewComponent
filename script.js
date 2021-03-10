const shareButton = document.querySelector('.share-button')
const shareBox = document.querySelector('.article-preview-share-arrow-container')
const shareArrow = document.querySelector('.share-arrow')


shareBox.addEventListener("click", () => {
    shareButton.classList.toggle('active')
    
    if (shareButton.classList.contains('active')) {
        shareButton.style.animation = ""
        shareButton.classList.toggle('inactive');
    } else {
        shareButton.style.animation = "fadeOut .3s ease forwards";
        shareButton.style.display = "flex";
        setTimeout(() => {
            shareButton.classList.toggle('inactive')
        }, 1000);
    }
 
})