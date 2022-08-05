var sliders = document.querySelectorAll('input[type=checkbox]');
Array.prototype.forEach.call(sliders, function (checkbox) {
  checkbox.checked = false;
});
