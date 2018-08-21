// Check operating system is Mac or not.
const isMac = () => {
  const macOs = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  return macOs;
};

export { isMac };
