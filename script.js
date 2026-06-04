window.addEventListener('DOMContentLoaded', () => {

  /* ── 타이핑 효과 ── */
  const titleEl = document.getElementById('hero-title');
  const text = '음악과 아이들 사이, 치유를 배우는 사람';
  let i = 0;

  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  titleEl.appendChild(cursor);

  const type = () => {
    if (i < text.length) {
      titleEl.insertBefore(document.createTextNode(text[i]), cursor);
      i++;
      setTimeout(type, 55);
    }
  };
  setTimeout(type, 800);

  /* ── 네비게이션 스크롤 효과 ── */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── 활성 섹션 네비 링크 표시 ── */
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section.section[id]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove('active'));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* ── 섹션 & 자식 요소 스크롤 등장 ── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('visible');

        el.querySelectorAll('.timeline-item').forEach((item, i) => {
          item.style.transitionDelay = `${0.08 + i * 0.1}s`;
          item.classList.add('child-visible');
        });
        el.querySelectorAll('.music-card').forEach((card, i) => {
          card.style.transitionDelay = `${0.1 + i * 0.13}s`;
          card.classList.add('child-visible');
        });
        el.querySelectorAll('.cert-item').forEach((item, i) => {
          item.style.transitionDelay = `${0.05 + i * 0.07}s`;
          item.classList.add('child-visible');
        });

        revealObserver.unobserve(el);
      });
    },
    { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.section').forEach((el) => revealObserver.observe(el));

});
