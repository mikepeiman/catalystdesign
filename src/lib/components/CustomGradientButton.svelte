<script>
     let gradientStart = '#ff7a00'; // Default starting color (orange-900)
     let gradientEnd = '#00b5d8'; // Default ending color (cyan-500)
     let gradientHoverStart = '#1d4ed8'; // Default hover starting color (blue-700)
     let gradientHoverEnd = '#c2410c'; // Default hover ending color (orange-700)
  </script>
  
  <button class="gradient-button" style="--gradient-start: {gradientStart}; --gradient-end: {gradientEnd}; --gradient-hover-start: {gradientHoverStart}; --gradient-hover-end: {gradientHoverEnd};">
    <slot></slot>
  </button>
  
  <style>
    .gradient-button {
      position: relative;
      display: inline-block;
      padding: 12px 24px;
      font-size: 16px;
      font-weight: bold;
      color: white;
      text-decoration: none;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-image: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
      transition: all 0.3s ease;
      z-index: 1;
    }
  
    .gradient-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(90deg, var(--gradient-hover-start), var(--gradient-hover-end));
      z-index: -1;
      transition: all 0.3s ease;
      opacity: 0;
    }
  
    .gradient-button:hover::before {
      opacity: 1;
    }
  </style>