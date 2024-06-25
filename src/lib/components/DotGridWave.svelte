<script>
    import { onMount, onDestroy } from 'svelte';
  
    export let dotColor = 'rgba(0, 0, 0, 0.1)';
    export let dotSpacing = 20;
    export let dotRadius = 1;
    export let waveDuration = 3000; // 3 seconds
    export let maxScale = 5;
  
    let canvas;
    let ctx;
    let width;
    let height;
    let animationId;
  
    onMount(() => {
      ctx = canvas.getContext('2d');
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      animateDots();
    });
  
    onDestroy(() => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    });
  
    function resizeCanvas() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      drawDots();
    }
  
    function drawDots() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = dotColor;
      
      for (let x = 0; x < width; x += dotSpacing) {
        for (let y = 0; y < height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  
    function animateDots() {
      const startTime = Date.now();
  
      function animate() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = (elapsed % waveDuration) / waveDuration;
  
        ctx.clearRect(0, 0, width, height);
  
        for (let x = 0; x < width; x += dotSpacing) {
          for (let y = 0; y < height; y += dotSpacing) {
            const distance = Math.sqrt(x * x + y * y);
            const delay = distance / Math.sqrt(width * width + height * height);
            let scale = 1;
  
            if (progress > delay && progress < delay + 0.1) {
              const localProgress = (progress - delay) / 0.1;
              scale = 1 + (maxScale - 1) * Math.sin(localProgress * Math.PI);
            }
  
            ctx.beginPath();
            ctx.arc(x, y, dotRadius * scale, 0, Math.PI * 2);
            ctx.fillStyle = dotColor.replace(')', `, ${1 / scale})`);
            ctx.fill();
          }
        }
  
        animationId = requestAnimationFrame(animate);
      }
  
      animate();
    }
  </script>
  
  <canvas bind:this={canvas} class="absolute inset-0 w-full h-full"></canvas>
  
  <style>
    canvas {
      pointer-events: none;
    }
  </style>