import chroma from "chroma-js";

function generateCustomColors(colorConfig) {
  const {
    properties: { steps, hue, saturation, brightness },
    options: { minorSteps, name }
  } = colorConfig[0];

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function interpolate(start, end, t, curve) {
    const easedT = curve === 'easeOutQuad' ? easeOutQuad(t) : t;
    return start + (end - start) * easedT;
  }

  const colors = {};
  
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    
    const h = interpolate(hue.start, hue.end, t, hue.curve);
    const s = interpolate(saturation.start, saturation.end, t, saturation.curve);
    const b = interpolate(brightness.start, brightness.end, t, brightness.curve);
    
    const color = chroma.hsv(h, s, b);
    const maxValue = Math.max(900, (steps - 1) * 100);
    // const step = minorSteps.includes(i) ? (i * 100) : Math.round(i / (steps - 1) * 900 + 100);
    const step =  Math.round((i / (steps - 1)) * (maxValue - 100) / 100) * 100 + 100;
    console.log(`🚀 ~ generateCustomColors ~ step: ${i}: ${step}` )
    colors[step] = color.hex();
  }

  return { [name.toLowerCase()]: colors };
}

export default {generateCustomColors};