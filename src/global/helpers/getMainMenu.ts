import { MenuData, ProfilesMenu } from 'global/constants';
import { MenuItems, ProfilesData } from 'global/types';

export default (profile: string): MenuItems => {
  switch (profile) {
    case ProfilesData[0]:
      return MenuData.find(
        (x) =>
          x.id === ProfilesMenu.find((menu) => menu.profile === ProfilesData.Anulaciones).menu[0]
      );
    case ProfilesData[1]:
      return MenuData.find(
        (x) => x.id === ProfilesMenu.find((menu) => menu.profile === ProfilesData.Recalculo).menu[0]
      );
    case ProfilesData[2]:
      return MenuData.find(
        (x) => x.id === ProfilesMenu.find((menu) => menu.profile === ProfilesData.Root).menu[0]
      );
    case ProfilesData[3]:
      return MenuData.find(
        (x) => x.id === ProfilesMenu.find((menu) => menu.profile === ProfilesData.Soporte).menu[0]
      );
    default:
      return null;
  }
};
