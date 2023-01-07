// Listen for keyup event and play sound
window.addEventListener('keydown', function(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.code}"]`);
    const key = this.document.querySelector(`div[data-key="${e.code}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0; // press repeatedly the key and it'll play right in time
    audio.play();
    key.classList.add('playing');
});

// Wait for transitionend and remove added class
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', function(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
}));