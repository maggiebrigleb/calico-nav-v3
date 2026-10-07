/**
 * Multi-level sliding navigation drawer
 * with Accessibility Focus Traps and Robust Animation Timing
 */
(function () {
  "use strict";

  const tertiaryMain = document.getElementById('tertiary-main');
  const tertiarySub = document.getElementById('tertiary-sub');
  const drawer = document.getElementById("nav-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const slider = document.getElementById("drawer-slider");
  const openBtn = document.getElementById("open-drawer-btn");
  const closeBtns = [
    document.getElementById("close-drawer-btn"),
    document.getElementById("close-drawer-btn-sub"),
  ];
  
  const quickLinksContainer = document.getElementById('quick-links-container');
  const quickLinksBtn = document.getElementById('quick-links-btn');
  const quickLinksDropdown = document.getElementById('quick-links-dropdown');

  let lastFocusedElement = null;
  let navHistory = []; 
  let currentSubData = null; 

  /* ------------------------------------------------------------------ */
  /* Dynamic Deep-Nesting Prototype Engine                              */
  /* ------------------------------------------------------------------ */
  function buildNav() {
    document.querySelectorAll('.drawer-header__brand-title').forEach(function(el) {
      el.textContent = schoolConfig.schoolName;
    });

    const mainUl = document.querySelector('.nav-list');
    if (mainUl) {
      renderList(mainUl, schoolConfig.mainNav);
    }
  }

function renderList(containerUl, itemsArray) {
    containerUl.innerHTML = ''; 

    itemsArray.forEach(function(item) {
      const li = document.createElement('li');
      const hasChildren = item.children && item.children.length > 0;
      const hasChildrenClass = hasChildren ? 'nav-item--has-children' : '';

      // Separate the label (link) and the arrow (drill-down button)
      li.innerHTML = `
        <div class="nav-item ${hasChildrenClass}">
          <a href="#" class="nav-item__label">${item.label}</a>
          ${hasChildren ? `<button class="nav-item__arrow" aria-haspopup="true" aria-expanded="false" aria-label="Expand ${item.label}"><i class="fa-solid fa-angle-right"></i></button>` : ''}
        </div>
      `;

      const navItemWrapper = li.querySelector('.nav-item');
      const labelLink = li.querySelector('.nav-item__label');
      const arrowBtn = li.querySelector('.nav-item__arrow');

      // 1. LABEL CLICK: Update main page and close drawer
      labelLink.addEventListener('click', function(e) {
        e.preventDefault();
        clearPressedStates();
        navItemWrapper.classList.add('is-pressed');

        const pageTitleEl = document.getElementById('page-title');
        const pageBreadcrumbEl = document.getElementById('page-breadcrumb');

if (pageTitleEl && pageBreadcrumbEl) {
          // All child pages, regardless of depth, receive this exact breadcrumb
          pageTitleEl.textContent = item.label;
          pageBreadcrumbEl.textContent = `College of Science and Engineering / ${schoolConfig.schoolName}`;
        }

        setTimeout(function () {
          navItemWrapper.classList.remove('is-pressed');
          closeDrawer();
        }, 200);
      });

      // 2. ARROW CLICK: Drill deeper into the drawer
      if (arrowBtn) {
        arrowBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation(); // Prevent the label click from firing
          arrowBtn.setAttribute('aria-expanded', 'true');
          drillDeeper(item.label, item.children);
        });
      }

      containerUl.appendChild(li);
    });
  }

  function playInternalSlide(direction) {
    const subList = document.querySelector('.nav-list-sub');
    const subTitle = document.querySelector('.drawer-subpanel-title-row');
    
    [subList, subTitle].forEach(function(el) {
      if (!el) return;
      
      el.classList.remove('slide-in-forward', 'slide-in-backward');
      
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          el.classList.add(direction === 'forward' ? 'slide-in-forward' : 'slide-in-backward');
        });
      });
    });
  }

  function drillDeeper(newTitle, newChildrenData) {
    const subUl = document.querySelector('.nav-list-sub');
    const backLabel = document.querySelector('.drawer-subpanel-back-label');

    if (slider.classList.contains('slide-forward')) {
      navHistory.push({
        title: backLabel.textContent,
        data: currentSubData
      });
      backLabel.textContent = newTitle;
      currentSubData = newChildrenData;
      renderList(subUl, newChildrenData);
      playInternalSlide('forward');
    } else {
      navHistory = []; 
      backLabel.textContent = newTitle;
      currentSubData = newChildrenData;
      renderList(subUl, newChildrenData);
      
      slider.classList.add('slide-forward');
      if (tertiaryMain) tertiaryMain.hidden = true;
      if (tertiarySub) tertiarySub.hidden = true; 

      function onSlideEnd(e) {
        if (e.target !== slider) return;
        slider.removeEventListener('transitionend', onSlideEnd);
        document.querySelector('.drawer-back-btn')?.focus();
      }
      slider.addEventListener('transitionend', onSlideEnd);
    }
  }

  function drillBack() {
    const subUl = document.querySelector('.nav-list-sub');
    const backLabel = document.querySelector('.drawer-subpanel-back-label');

    if (navHistory.length > 0) {
      const previousPage = navHistory.pop();
      backLabel.textContent = previousPage.title;
      currentSubData = previousPage.data;
      renderList(subUl, previousPage.data);
      clearPressedStates();
      playInternalSlide('backward');
    } else {
      slider.classList.remove('slide-forward');
      if (tertiaryMain) tertiaryMain.hidden = false;
      if (tertiarySub) tertiarySub.hidden = true;

      document.querySelectorAll('.nav-list .nav-item[aria-expanded="true"]').forEach(function (el) {
        el.setAttribute('aria-expanded', 'false');
      });
      clearPressedStates();

      function onSlideEnd(e) {
        if (e.target !== slider) return;
        slider.removeEventListener('transitionend', onSlideEnd);
        closeBtns[0]?.focus();
      }
      slider.addEventListener('transitionend', onSlideEnd);
    }
  }

  function resetToMainMenu() {
    navHistory = []; 
    slider.classList.remove('slide-forward');
    if (tertiaryMain) tertiaryMain.hidden = false;
    if (tertiarySub) tertiarySub.hidden = true;

    document.querySelectorAll('.nav-list .nav-item[aria-expanded="true"]').forEach(function (el) {
      el.setAttribute('aria-expanded', 'false');
    });
    clearPressedStates();

    function onSlideEnd(e) {
      if (e.target !== slider) return;
      slider.removeEventListener('transitionend', onSlideEnd);
      closeBtns[0]?.focus();
    }
    slider.addEventListener('transitionend', onSlideEnd);
  }

  function clearPressedStates() {
    document.querySelectorAll('.nav-item.is-pressed').forEach(function (el) {
      el.classList.remove('is-pressed');
    });
  }
// Task 5: CTA Buttons
  document.querySelectorAll('.cta-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevents the link from actually refreshing the page
      
      const pageTitleEl = document.getElementById('page-title');
      const pageBreadcrumbEl = document.getElementById('page-breadcrumb');
      
      if (pageTitleEl && pageBreadcrumbEl) {
        pageTitleEl.textContent = this.textContent;
        // CTAs act as Level 1 pages, so they receive the standard base breadcrumb
        pageBreadcrumbEl.textContent = `College of Science and Engineering / ${schoolConfig.schoolName}`;
      }
      
      // Close the drawer after a selection is made
      closeDrawer();
    });
  });
  /* ------------------------------------------------------------------ */
  /* Accessibility: Focus Trap Logic                                     */
  /* ------------------------------------------------------------------ */
  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function trapFocus(e, container) {
    if (e.key !== 'Tab') return;
    const focusableElements = container.querySelectorAll(focusableSelectors);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) { 
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else { 
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      if (drawer.classList.contains('is-active')) {
        if (slider.classList.contains('slide-forward')) {
          trapFocus(e, document.querySelector('.menu-panel-sub'));
        } else {
          trapFocus(e, document.querySelector('.menu-panel-main'));
        }
      } else if (quickLinksContainer && quickLinksContainer.classList.contains('is-open')) {
        trapFocus(e, quickLinksDropdown);
      }
    }

    if (e.key === 'Escape') {
      if (quickLinksContainer && quickLinksContainer.classList.contains('is-open')) {
        closeQuickLinks();
        return;
      }
      if (!drawer.classList.contains('is-active')) return;

      if (slider.classList.contains('slide-forward')) {
        drillBack();
      } else {
        closeDrawer();
      }
    }
  });

  /* ------------------------------------------------------------------ */
  /* Drawer Core Functionality                                           */
  /* ------------------------------------------------------------------ */
  function openDrawer() {
    lastFocusedElement = document.activeElement;
    drawer.hidden = false;
    overlay.hidden = false;

    setTimeout(function () {
      drawer.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'false');
      drawer.classList.add('is-active');
      overlay.classList.add('is-active');
      openBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      closeBtns[0]?.focus();
    }, 15); 
  }

  function closeDrawer() {
    drawer.classList.remove('is-active');
    overlay.classList.remove('is-active');
    openBtn.setAttribute('aria-expanded', 'false');

    function onEnd(e) {
      if (e.target !== drawer) return;
      drawer.removeEventListener('transitionend', onEnd);
      drawer.hidden = true;
      overlay.hidden = true;
      drawer.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      
      navHistory = [];
      slider.classList.remove('slide-forward');
      if (tertiaryMain) tertiaryMain.hidden = false;
      if (tertiarySub) tertiarySub.hidden = true;

      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }
    drawer.addEventListener('transitionend', onEnd);
  }

  /* ------------------------------------------------------------------ */
  /* Header Features: Quick Links                                       */
  /* ------------------------------------------------------------------ */
  function openQuickLinks() {
    quickLinksContainer.classList.add('is-open');
    quickLinksBtn.setAttribute('aria-expanded', 'true');
    quickLinksDropdown.hidden = false;
  }

function closeQuickLinks() {
    quickLinksContainer.classList.remove('is-open');
    quickLinksBtn.setAttribute('aria-expanded', 'false');
    
    // Fix: Hide the dropdown instantly without a delay wrapper
    quickLinksDropdown.hidden = true; 
  }

  /* ------------------------------------------------------------------ */
  /* Event Listeners Initialization                                      */
  /* ------------------------------------------------------------------ */
  buildNav();

  openBtn.addEventListener('click', openDrawer);
  overlay.addEventListener('click', closeDrawer);

  closeBtns.forEach(function (btn) {
    if (btn) btn.addEventListener('click', closeDrawer);
  });

  const drawerBackBtn = document.querySelector('.drawer-back-btn');
  if (drawerBackBtn) drawerBackBtn.addEventListener('click', resetToMainMenu);
  
  const topBackBtn = document.getElementById('back-btn');
  if (topBackBtn) topBackBtn.addEventListener('click', drillBack);

  if (quickLinksBtn) {
    quickLinksBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      if (quickLinksContainer.classList.contains('is-open')) closeQuickLinks();
      else openQuickLinks();
    });
  }

  document.addEventListener('click', function (event) {
    if (quickLinksContainer && quickLinksContainer.classList.contains('is-open')) {
      if (!quickLinksContainer.contains(event.target)) closeQuickLinks();
    }
  });
/* ------------------------------------------------------------------ */
  /* Page Content Update Handlers                                       */
  /* ------------------------------------------------------------------ */
  const defaultTitle = schoolConfig.schoolName; // "Ingram School of Engineering"
  const defaultBreadcrumb = "College of Science and Engineering";

// Task 3: Flat Subnav Links
  document.querySelectorAll('.site-subnav__link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const pageTitleEl = document.getElementById('page-title');
      const pageBreadcrumbEl = document.getElementById('page-breadcrumb');
      
      if (pageTitleEl && pageBreadcrumbEl) {
        pageTitleEl.textContent = this.textContent;
        // Subnav links are Level 1 pages, so they get the College + School breadcrumb
        pageBreadcrumbEl.textContent = `College of Science and Engineering / ${schoolConfig.schoolName}`; 
      }
    });
  });

  // Task 4: Reset functionality (Clicking Logos/Brand Names)
  const resetElements = document.querySelectorAll('.site-header__logo, .site-header__site-name, .drawer-header__brand');
  
  resetElements.forEach(function(el) {
    el.style.cursor = 'pointer'; // Ensure users know it's clickable
    el.addEventListener('click', function(e) {
      const pageTitleEl = document.getElementById('page-title');
      const pageBreadcrumbEl = document.getElementById('page-breadcrumb');
      
      if (pageTitleEl && pageBreadcrumbEl) {
        pageTitleEl.textContent = defaultTitle;
        pageBreadcrumbEl.textContent = defaultBreadcrumb;
      }
      
      // If the drawer is open and they clicked the brand inside the drawer, close it
      if (this.classList.contains('drawer-header__brand') && drawer.classList.contains('is-active')) {
        closeDrawer();
      }
    });
  });
})();
