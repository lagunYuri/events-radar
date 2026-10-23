document.querySelectorAll('.chips, .map-filters').forEach(group => {
  group.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    group.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

document.querySelectorAll('.btn-go, .btn-go-big').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.classList.toggle('going');
    btn.textContent = btn.classList.contains('going') ? 'Вы идёте' : 'Пойду';
  });
});