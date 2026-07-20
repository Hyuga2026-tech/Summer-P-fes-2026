// ナビゲーションリンクをクリックした際、該当セクションへスムーズスクロール
document.querySelectorAll('.navbar__links a').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// スクロールで各セクションがふわっと現れる演出
const revealTargets = document.querySelectorAll('.timeline__item, .stall-card, .info-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.is-visible').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});

// CSS側でクラス付与時のスタイルを補完
const style = document.createElement('style');
style.textContent = `.is-visible { opacity: 1 !important; transform: none !important; }`;
document.head.appendChild(style);
