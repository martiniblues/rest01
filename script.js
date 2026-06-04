// 페이지 로드 후 바로 관찰 시작
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const onEnter = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;

      // 섹션 전체 등장
      el.classList.add('visible');

      // 타임라인 아이템 — 왼쪽에서 순서대로
      el.querySelectorAll('.timeline-item').forEach((item, i) => {
        item.style.transitionDelay = `${0.08 + i * 0.1}s`;
        item.classList.add('child-visible');
      });

      // 뮤직 카드 — 아래에서 순서대로
      el.querySelectorAll('.music-card').forEach((card, i) => {
        card.style.transitionDelay = `${0.1 + i * 0.13}s`;
        card.classList.add('child-visible');
      });

      // 자격증 아이템 — 팝인 순서대로
      el.querySelectorAll('.cert-item').forEach((item, i) => {
        item.style.transitionDelay = `${0.05 + i * 0.07}s`;
        item.classList.add('child-visible');
      });

      observer.unobserve(el);
    });
  };

  const observer = new IntersectionObserver(onEnter, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
  sections.forEach((el) => observer.observe(el));
});
