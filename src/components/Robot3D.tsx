import { useEffect, useRef } from "react";

// Declare the spline-viewer custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        'loading-anim-type'?: 'none' | 'spinner' | 'fullscreen';
      };
    }
  }
}

const Robot3D = () => {
  const viewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Ensure the viewer is properly loaded
    const viewer = viewerRef.current;
    if (viewer) {
      // Add any custom styling or event listeners if needed
      viewer.style.width = "100%";
      viewer.style.height = "100%";
      
      // Hide Spline watermark
      const hideWatermark = () => {
        // Hide watermark in shadow DOM
        const shadowRoot = viewer.shadowRoot;
        if (shadowRoot) {
          // Hide watermark elements in shadow DOM
          const watermarkSelectors = [
            'a[href*="spline"]',
            'div[class*="watermark"]',
            'div[class*="branding"]',
            'div[class*="logo"]',
            'a[href*="splinetool"]',
          ];
          
          watermarkSelectors.forEach(selector => {
            const elements = shadowRoot.querySelectorAll(selector);
            elements.forEach((el: Element) => {
              (el as HTMLElement).style.display = 'none';
              (el as HTMLElement).style.visibility = 'hidden';
              (el as HTMLElement).style.opacity = '0';
            });
          });
          
          // Also hide any elements positioned at bottom right
          const allElements = shadowRoot.querySelectorAll('*');
          allElements.forEach((el: Element) => {
            const htmlEl = el as HTMLElement;
            const style = window.getComputedStyle(htmlEl);
            if (
              (style.position === 'absolute' || style.position === 'fixed') &&
              (style.bottom === '0px' || style.bottom === '0' || parseInt(style.bottom) < 20) &&
              (style.right === '0px' || style.right === '0' || parseInt(style.right) < 20) &&
              (htmlEl.textContent?.includes('Spline') || htmlEl.textContent?.includes('Built with'))
            ) {
              htmlEl.style.display = 'none';
              htmlEl.style.visibility = 'hidden';
              htmlEl.style.opacity = '0';
            }
          });
        }
        
        // Also check the main document for watermarks
        const documentSelectors = [
          'a[href*="spline"]',
          'a[href*="splinetool"]',
          'div[class*="spline"][class*="watermark"]',
          'div[class*="spline"][class*="branding"]',
        ];
        
        documentSelectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((el: Element) => {
            const htmlEl = el as HTMLElement;
            if (htmlEl.textContent?.includes('Spline') || htmlEl.textContent?.includes('Built with')) {
              htmlEl.style.display = 'none';
              htmlEl.style.visibility = 'hidden';
              htmlEl.style.opacity = '0';
            }
          });
        });
      };
      
      // Try to hide watermark immediately and after a delay
      hideWatermark();
      setTimeout(hideWatermark, 100);
      setTimeout(hideWatermark, 500);
      setTimeout(hideWatermark, 1000);
      
      // Use MutationObserver to catch dynamically added watermark
      if (viewer.shadowRoot) {
        const observer = new MutationObserver(() => {
          hideWatermark();
        });
        observer.observe(viewer.shadowRoot, {
          childList: true,
          subtree: true,
        });
        
        return () => observer.disconnect();
      }
    }
  }, []);

  return (
    <div className="w-full h-full">
      {/* @ts-ignore - spline-viewer is a custom web component */}
      <spline-viewer 
        ref={viewerRef}
        loading-anim-type="none"
        url="https://prod.spline.design/8BPjyjYdKICGA7Zx/scene.splinecode"
      />
    </div>
  );
};

export default Robot3D;
