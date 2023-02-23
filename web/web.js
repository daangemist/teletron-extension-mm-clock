// Invoke the teletronRegisterExtension global to register the module.

(function () {
  function start() {
    if (typeof magicMirrorWrapperWeb === 'undefined') {
      // Wait until the magicMirrorWrap global is available
      setTimeout(() => start(), 100);
      return;
    }
    const teletron = window.teletronRegisterExtension('mm-clock');
    magicMirrorWrapperWeb.start(teletron, 'clock', 'clock');
  }
  start();
})();
