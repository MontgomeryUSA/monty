const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles =[];

function createParticles(){
    for(let i =0; i<50; i++){
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random * 3+1,
            speedX: (Math.random -0.5)* 2,
            speedY: (Math.random - 0.5) * 2

        });
    }
}

function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
        ctx.fillStyle("#CE999B");
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if(p.x <0|| p.x > canvas.width) p.speedX*=-1;
        if(p.x <0|| p.y > canvas.height) p.speedY*=-1;
    });
    requestAnimationFrame(animateParticles);
}

createParticles;
animateParticles;
