const PreventDoubleTap = {

  install(Vue) {
    Vue.mixin({

      mounted() {
        if (this.installed) {
          return;
        }

        this.installed = true;
        const key = 'prevent-double-tap';

        const docBody = document.body;

        if (docBody.getAttribute(key) !== 'true') {
          // prevents the double tap to zoom
          let lastTouchEnd = 0;
          document.addEventListener('touchend', (event) => {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 200) {
              event.preventDefault();
              event.target.click(); // allow a normal click still though
            }
            lastTouchEnd = now;
            // console.log(event);
          }, { passive: false });

          // prevents the pinch and zoom
          document.addEventListener('touchmove', (event) => {
            if (event.scale !== 1) {
              event.preventDefault();
            }
          }, { passive: false });

          docBody.setAttribute(key, 'true');
        }
      },
    });
  },
};

export default PreventDoubleTap;
