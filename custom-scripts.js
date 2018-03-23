(function($) {
  $(document).ready(function() {
    hideNotifications();
    window.setInterval(() => {
      hideNotifications();
    }, 6000);
  });

  function hideNotifications() {
    $('#chat').find(
      'li:has(*[d="M10,17.5 C5.85786438,17.5 2.5,14.1421356 2.5,10 C2.5,5.85786438 5.85786438,2.5 10,2.5 C14.1421356,2.5 17.5,5.85786438 17.5,10 C17.5,14.1421356 14.1421356,17.5 10,17.5 Z M9,9.53077793 L9,13.549222 C9,14.0890248 9.44771525,14.54 10,14.54 C10.5561352,14.54 11,14.0964136 11,13.549222 L11,9.53077793 C11,8.99097514 10.5522847,8.53999996 10,8.53999996 C9.44386482,8.53999996 9,8.98358637 9,9.53077793 Z M10,7.53999996 C10.5522847,7.53999996 11,7.09228471 11,6.53999996 C11,5.98771521 10.5522847,5.53999996 10,5.53999996 C9.44771525,5.53999996 9,5.98771521 9,6.53999996 C9,7.09228471 9.44771525,7.53999996 10,7.53999996 Z"])',
    ).remove();
  }
})(window.jQuery);
