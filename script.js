// 섹션 전체 reveal + 자식 요소 순차 등장
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      el.classList.add('visible');

      // 타임라인 아이템
      el.querySelectorAll('.timeline-item').forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.1}s`;
        item.classList.add('child-visible');
      });

      // 뮤직 카드
      el.querySelectorAll('.music-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.12}s`;
        card.classList.add('child-visible');
      });

      // 자격증 아이템
      el.querySelectorAll('.cert-item').forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.07}s`;
        item.classList.add('child-visible');
      });

      observer.unobserve(el);
    });
  },
  { threshold: 0.07 }
);

document.querySelectorAll('.section').forEach((el) => observer.observe(el));
