document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('sliding-image');
    const step = 20;

    const moveImage = (direction) => {
        const style = window.getComputedStyle(img);
        const top = parseInt(style.top, 10);
        const left = parseInt(style.left, 10);

        switch (direction) {
            case 'up':
                img.style.top = `${top - step}px`;
                img.style.transform = 'translate(-50%, -50%)';
                break;
            case 'down':
                img.style.top = `${top + step}px`;
                img.style.transform = 'translate(-50%, -50%)';
                break;
            case 'left':
                img.style.left = `${left - step}px`;
                img.style.transform = 'translate(-50%, -50%)';
                break;
            case 'right':
                img.style.left = `${left + step}px`;
                img.style.transform = 'translate(-50%, -50%)';
                break;
        }
    };

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                moveImage('up');
                break;
            case 'ArrowDown':
                moveImage('down');
                break;
            case 'ArrowLeft':
                moveImage('left');
                break;
            case 'ArrowRight':
                moveImage('right');
                break;
        }
    });

    document.getElementById('up').addEventListener('click', () => moveImage('up'));
    document.getElementById('down').addEventListener('click', () => moveImage('down'));
    document.getElementById('left').addEventListener('click', () => moveImage('left'));
    document.getElementById('right').addEventListener('click', () => moveImage('right'));
});
