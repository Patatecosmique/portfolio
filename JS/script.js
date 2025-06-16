document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.2}s`; // Décalage progressif
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('network-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const POINTS = 120;
    const DIST = 200;
    const points = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);

    function randomPoint() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7
        };
    }

    for (let i = 0; i < POINTS; i++) {
        points.push(randomPoint());
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        // Draw lines
        for (let i = 0; i < POINTS; i++) {
            for (let j = i + 1; j < POINTS; j++) {
                const dx = points[i].x - points[j].x;
                const dy = points[i].y - points[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < DIST) {
                    ctx.strokeStyle = `rgba(100,255,218,${1 - dist / DIST})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw points
        for (let i = 0; i < POINTS; i++) {
            ctx.beginPath();
            ctx.arc(points[i].x, points[i].y, 2, 0, 2 * Math.PI);
            ctx.fillStyle = "#64ffda";
            ctx.fill();
        }
    }

    function update() {
        for (let i = 0; i < POINTS; i++) {
            points[i].x += points[i].vx;
            points[i].y += points[i].vy;

            if (points[i].x < 0 || points[i].x > width) points[i].vx *= -1;
            if (points[i].y < 0 || points[i].y > height) points[i].vy *= -1;
        }
    }

    function animate() {
        update();
        draw();
        requestAnimationFrame(animate);
    }

    animate();
});