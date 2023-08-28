import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Initialize your scripts and libraries here
    const scripts = [
      '/assets/js/bootstrap.min.js',
      '/assets/js/bootstrap-hover-dropdown.min.js',
      '/assets/js/owl.carousel.min.js',
      '/assets/js/echo.min.js',
      '/assets/js/jquery.easing-1.3.min.js',
      '/assets/js/bootstrap-slider.min.js',
      '/assets/js/jquery.rateit.min.js',
      '/assets/js/lightbox.min.js',
      '/assets/js/bootstrap-select.min.js',
      '/assets/js/wow.min.js',
      '/assets/js/scripts.js',
      'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js'
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    // Initialize custom toastr script
    const handleToastr = () => {
      if ('{{ Session::has("message") }}') {
        const type = '{{ Session::get("alert-type", "info") }}';
        const message = '{{ Session::get("message") }}';
        switch (type) {
          case 'info':
            toastr.info(message);
            break;
          case 'success':
            toastr.success(message);
            break;
          case 'warning':
            toastr.warning(message);
            break;
          case 'error':
            toastr.error(message);
            break;
          default:
            break;
        }
      }
    };

    handleToastr();

    // Cleanup when the component unmounts
    return () => {
      scripts.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return <>{/* Your component JSX here */}</>;
};

export default MyComponent;
