export function summeryText(string,numberOfChar = 20) {
    if (typeof string === 'string') {
        return `${string.slice(0, numberOfChar)} ${
          string.length > numberOfChar ? '...' : ''
        }`;
      } else {
        return string;
      }
    }
    export default summeryText;  