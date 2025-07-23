(() => {
  const target = new Date();
  target.setDate(target.getDate() + 16);
  function update() {
    const diff = target - new Date();
    const days = Math.max(0, Math.floor(diff/864e5));
    document.getElementById('days').textContent = days.toString().padStart(3,'0');
  }
  update();
  setInterval(update, 6e4);
})();
function toggleMenu(){
  alert('Menú fijo (demo dummy)');
}
