<script>
    export let blurAmount = 10; // in pixels
    export let opacity = 0.7; // 0 to 1
    export let backgroundColor = 'rgba(255, 255, 255, 0.5)'; // semi-transparent white by default
  </script>
  
  <div class="" style="
    backdrop-filter: blur({blurAmount}px);
    background-color: {backgroundColor};
    opacity: {opacity};
  ">
<slot></slot>
</div>
  
  <style>
    .blurred-backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none; /* allows clicks to pass through to elements beneath */
    }
  </style>