// ============================
// 滚动显示动画
// ============================
document.addEventListener('DOMContentLoaded', function() {
  // 滚动揭示动画
  initScrollReveal();
  
  // 为现有元素添加滚动动画类
  addScrollAnimationClasses();
  
  // 平滑滚动
  initSmoothScroll();
  
  // 添加交互效果
  initInteractiveEffects();
});

// 滚动揭示动画
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // 观察所有带有 scroll-reveal 类的元素
  document.querySelectorAll('.scroll-reveal').forEach(function(el) {
    observer.observe(el);
  });
}

// 为现有元素添加滚动动画类
function addScrollAnimationClasses() {
  // 为故事盒子添加动画
  document.querySelectorAll('.story-box').forEach(function(el, index) {
    el.classList.add('scroll-reveal');
    el.style.transitionDelay = (index * 0.1) + 's';
  });
  
  // 为资源卡片添加动画
  document.querySelectorAll('.resource-card').forEach(function(el, index) {
    el.classList.add('scroll-reveal');
    el.style.transitionDelay = (index * 0.1) + 's';
  });
  
  // 为关于盒子添加动画
  document.querySelectorAll('.about-box').forEach(function(el, index) {
    el.classList.add('scroll-reveal');
    el.style.transitionDelay = (index * 0.1) + 's';
  });
  
  // 为论坛卡片添加动画
  document.querySelectorAll('.forum-card').forEach(function(el, index) {
    el.classList.add('scroll-reveal');
    el.style.transitionDelay = (index * 0.1) + 's';
  });
  
  // 重新初始化观察器
  setTimeout(initScrollReveal, 100);
}

// 平滑滚动
function initSmoothScroll() {
  // 为所有锚点链接添加平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// 交互效果
function initInteractiveEffects() {
  // 卡片悬停涟漪效果
  document.querySelectorAll('.feature-card, .story-box, .resource-card, .about-box, .forum-card').forEach(function(card) {
    card.addEventListener('mouseenter', function(e) {
      this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function(e) {
      this.style.transform = '';
    });
  });
  
  // 按钮点击效果
  document.querySelectorAll('.card-link, button').forEach(function(btn) {
    btn.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    btn.addEventListener('mouseup', function() {
      this.style.transform = '';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
}

// ============================
// 工具函数
// ============================

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ============================
// 导出供其他脚本使用
// ============================
window.CustomAnimations = {
  initScrollReveal,
  addScrollAnimationClasses,
  initSmoothScroll,
  initInteractiveEffects,
  debounce,
  throttle
};
