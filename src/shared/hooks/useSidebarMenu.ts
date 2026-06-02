// util/useSidebarMenu.ts
import { useEffect, useCallback } from 'react';

const useSidebarMenu = () => {
  const initSidebarMenu = useCallback(() => {
    const menuBar = document.querySelector('.at-menu-bar');
    const atOffcanvas = document.querySelector('.at-offcanvas');
    const bodyOverlay = document.querySelector('.body-overlay');
    const closeBtn = document.querySelector('.close-btn');

    const openOffcanvas = () => {
      atOffcanvas?.classList.add('opened');
      bodyOverlay?.classList.add('apply');
    };

    const closeOffcanvas = () => {
      atOffcanvas?.classList.remove('opened');
      bodyOverlay?.classList.remove('apply');
    };

    // .at-menu-bar click → open
    if (menuBar && atOffcanvas && bodyOverlay) {
      menuBar.addEventListener('click', (e: Event) => {
        e.preventDefault();
        openOffcanvas();
      });
    }

    // .close-btn click → close
    if (closeBtn) {
      closeBtn.addEventListener('click', (e: Event) => {
        e.preventDefault();
        closeOffcanvas();
      });
    }

    // .body-overlay click → close
    if (bodyOverlay) {
      bodyOverlay.addEventListener('click', closeOffcanvas);
    }

    const cleanupOverlay = () => {
      bodyOverlay?.removeEventListener('click', closeOffcanvas);
    };

    // at-offcanvas-2-area: hamburger-open-btn / hamburger-close-btn
    const offcanvas2Area = document.querySelector('.at-offcanvas-2-area');
    const hamburgerOpenBtn = document.querySelector('.hamburger-open-btn');
    const hamburgerCloseBtns = document.querySelectorAll('.hamburger-close-btn');

    const openOffcanvas2 = () => {
      offcanvas2Area?.classList.add('menu-open');
      hamburgerOpenBtn?.classList.add('active');
      hamburgerCloseBtns.forEach((btn) => btn.classList.add('active'));
    };

    let offcanvas2CloseTimeout: number | null = null;
    const closeOffcanvas2 = () => {
      offcanvas2Area?.classList.remove('menu-open');
      offcanvas2Area?.classList.add('menu-open-temp');
      if (offcanvas2CloseTimeout) clearTimeout(offcanvas2CloseTimeout);
      offcanvas2CloseTimeout = window.setTimeout(() => {
        offcanvas2Area?.classList.remove('menu-open-temp');
        offcanvas2CloseTimeout = null;
      }, 2000);
      hamburgerOpenBtn?.classList.remove('active');
      hamburgerCloseBtns.forEach((btn) => btn.classList.remove('active'));
    };

    const handleOpenOffcanvas2 = (e: Event) => {
      e.preventDefault();
      openOffcanvas2();
    };
    const handleCloseOffcanvas2 = (e: Event) => {
      e.preventDefault();
      closeOffcanvas2();
    };

    if (hamburgerOpenBtn && offcanvas2Area) {
      hamburgerOpenBtn.addEventListener('click', handleOpenOffcanvas2);
    }
    hamburgerCloseBtns.forEach((btn) => {
      btn.addEventListener('click', handleCloseOffcanvas2);
    });

    // Toggle submenu for collapse-toggle items
    document.querySelectorAll('.sidebar-nav .collapse-toggle').forEach((toggle) => {
      toggle.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const el = e.currentTarget as HTMLElement;
        const parentItem = el.closest('.nav-item');
        const submenu = el.nextElementSibling as HTMLElement;

        if (parentItem) {
          parentItem.classList.toggle('active');
          if (submenu && submenu.classList.contains('collapse-menu')) {
            submenu.style.maxHeight = submenu.style.maxHeight ? '' : `${submenu.scrollHeight}px`;
          }
        }
      });
    });

    // Toggle submenu for has-child items
    document.querySelectorAll('.sidebar-nav .has-child').forEach((childToggle) => {
      childToggle.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const el = e.currentTarget as HTMLElement;
        const parentItem = el.closest('.nav-item-has-child');
        const submenu = el.nextElementSibling as HTMLElement;

        if (parentItem) {
          parentItem.classList.toggle('active');
          if (submenu && submenu.classList.contains('sub-menu')) {
            submenu.style.maxHeight = submenu.style.maxHeight ? '' : `${submenu.scrollHeight}px`;
          }
        }
      });
    });

    // Close popup handler
    document.querySelectorAll('.close-popup').forEach((popupCloseBtn) => {
      popupCloseBtn.addEventListener('click', (e: Event) => {
        e.preventDefault();
        atOffcanvas?.classList.remove('opened');
        bodyOverlay?.classList.remove('apply');
        document.querySelector('.popup-search-overlay')?.classList.remove('active');
      });
    });

    return () => {
      cleanupOverlay();
      if (offcanvas2CloseTimeout) clearTimeout(offcanvas2CloseTimeout);
      hamburgerOpenBtn?.removeEventListener('click', handleOpenOffcanvas2);
      hamburgerCloseBtns.forEach((btn) => btn.removeEventListener('click', handleCloseOffcanvas2));
      if (menuBar) {
        const newMenuBar = menuBar.cloneNode(true);
        if (menuBar.parentNode) menuBar.parentNode.replaceChild(newMenuBar, menuBar);
      }
      if (closeBtn) {
        const newCloseBtn = closeBtn.cloneNode(true);
        if (closeBtn.parentNode) closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = initSidebarMenu();
    return cleanup;
  }, [initSidebarMenu]);

  const toggleSidebar = useCallback((isOpen: boolean) => {
    const atOffcanvas = document.querySelector('.at-offcanvas');
    const bodyOverlay = document.querySelector('.body-overlay');

    if (!atOffcanvas || !bodyOverlay) return;

    if (isOpen) {
      atOffcanvas.classList.add('opened');
      bodyOverlay.classList.add('apply');
    } else {
      atOffcanvas.classList.remove('opened');
      bodyOverlay.classList.remove('apply');
    }
  }, []);

  return { toggleSidebar };
};

export default useSidebarMenu;