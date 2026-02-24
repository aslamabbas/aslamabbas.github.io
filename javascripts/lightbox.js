(function() {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  var img = document.createElement('img');
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', function() {
    overlay.classList.remove('active');
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') overlay.classList.remove('active');
  });

  document.addEventListener('click', function(e) {
    var target = e.target;
    if (target.tagName === 'IMG' && target.closest('section.post') && !target.classList.contains('signoff-img')) {
      img.src = target.src;
      img.alt = target.alt || '';
      overlay.classList.add('active');
    }
  });
})();
