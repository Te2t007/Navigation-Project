function showPage(pageId) {
  // ซ่อน header และหน้าอื่นๆ
  document.querySelector('header').style.display = 'none';
  document.querySelectorAll('.page').forEach(page => page.classList.remove('visible'));
  
  // แสดงหน้าที่เลือก
  document.getElementById(pageId).classList.add('visible');
}

function showHome() {
  // แสดง header และซ่อนหน้าอื่นๆ
  document.querySelector('header').style.display = 'block';
  document.querySelectorAll('.page').forEach(page => page.classList.remove('visible'));
}

