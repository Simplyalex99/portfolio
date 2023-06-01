import { useEffect } from 'react';

interface ToggleNavbarMenuProps {
  closeId: string;
  menuId: string;
  navbarId: string;
  className: string;
}
export const useToggleNavbarMenu = ({
  menuId,
  closeId,
  navbarId,
  className,
}: ToggleNavbarMenuProps) => {
  useEffect(() => {
    if (process.browser) {
      const navbar = document.getElementById(navbarId);
      const menu = document.getElementById(menuId);
      const close = document.getElementById(closeId);
      const openHandler = () => {
        navbar?.classList.add(className);
      };
      const closeHandler = () => {
        navbar?.classList.remove(className);
      };
      menu?.addEventListener('click', openHandler);
      close?.addEventListener('click', closeHandler);
      return () => {
        menu?.removeEventListener('click', openHandler);
        close?.removeEventListener('click', closeHandler);
      };
    }
    return undefined;
  }, [closeId, menuId, navbarId, className]);
};
export default useToggleNavbarMenu;
