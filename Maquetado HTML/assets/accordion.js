// Acordeón compartido — replica el comportamiento expandir/colapsar del Salar.
document.addEventListener('click', function (e) {
  var header = e.target.closest('.sub-header');
  if (!header) return;
  var section = header.parentElement;
  section.classList.toggle('active');
  var tri = header.querySelector('.tri');
  if (tri) tri.textContent = section.classList.contains('active') ? '▾' : '▸';
});

// Botones "Expandir todo" / "Colapsar todo"
function expandAll(open) {
  document.querySelectorAll('.subsection').forEach(function (s) {
    s.classList.toggle('active', open);
    var tri = s.querySelector('.tri');
    if (tri) tri.textContent = open ? '▾' : '▸';
  });
}
