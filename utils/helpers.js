const sharp = require('sharp');

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
  format_jpeg: (image) => {
    const data = sharp(image).toformat('jpeg');
    return data;
  },
  format_png: (image) => {
    const data = sharp(image).toformat('png');
    return data;
  },
  format_webp: (image) => {
    const data = sharp(image).toformat('webp');
    return data;
  },
  format_gif: (image) => {
    const data = sharp(image).toformat('gif');
    return data;
  },
  image_flip: (image) => {
    const data = sharp(image).flip();
    return data;
  },
  image_flop: (image) => {
    const data = sharp(image).flop();
    return data;
  },
  image_sharpen: (image) => {
    const data = sharp(image).sharpen();
    return data;
  },
  image_blur: (image) => {
    const data = sharp(image).blur();
    return data;
  },
  image_greyscale: (image) => {
    const data = sharp(image).greyscale();
    return data;
  },
};
