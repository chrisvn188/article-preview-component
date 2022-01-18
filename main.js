const footerTextContainer = document.querySelector('.footer-text-container');
const socialLinks = document.querySelector('.social-links');
const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', () => {
  footerTextContainer.classList.toggle('active');
  socialLinks.classList.toggle('active');
});
