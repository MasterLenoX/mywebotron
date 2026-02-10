/**
 * Polyfill for process object which is expected by some dependencies 
 * but not available in the browser environment by default in recent 
 * build tool versions (like Webpack 5).
 */
window.process = window.process || { env: { NODE_ENV: 'development' } };
