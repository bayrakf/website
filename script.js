const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Raindrop {
    constructor(x, y, length, speed) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.speed = speed;
    }

    fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0 - this.length;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
}

const raindrops = [];
for (let i = 0; i < 500; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const length = Math.random() * 20 + 10;
    const speed = Math.random() * 5 + 2;
    raindrops.push(new Raindrop(x, y, length, speed));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const raindrop of raindrops) {
        raindrop.fall();
        raindrop.draw();
    }
    requestAnimationFrame(animate);
}

animate();

