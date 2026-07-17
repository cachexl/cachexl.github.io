export function reveal(node: HTMLElement) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.unobserve(node); 
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export function revealLines(node: HTMLElement) {
    const lines = node.querySelectorAll('.line');

    const observer = new IntersectionObserver(([entry]) => {
          if (!entry.isIntersecting) return;

          lines.forEach((line, i) => {
              const el = line as HTMLElement;

              el.style.transition = `transform 0.8s cubic-bezier(.22,1,.36,1), opacity 0.8s cubic-bezier(.22,1,.36,1)`;
              el.style.transitionDelay = `${i * 120}ms`;

              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
          });

          observer.disconnect();
      }, {
          threshold: 0.2,
          rootMargin: '0px 0px -10% 0px'
      });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}