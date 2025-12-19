// Utility for scroll-triggered animations using Intersection Observer

export const observeElements = (
  selector: string,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Optional: unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
};

export const initScrollAnimations = () => {
  const cleanups = [
    observeElements('.section-animate', {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px',
    }),
    observeElements('.card-animate', {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    }),
    observeElements('.text-animate', {
      threshold: 0.3,
    }),
  ];

  // Return aggregated cleanup to support React StrictMode double-invoke
  return () => {
    cleanups.forEach((cleanup) => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    });
  };
};
