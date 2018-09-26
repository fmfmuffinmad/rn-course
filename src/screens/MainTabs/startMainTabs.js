import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "FindPlace",
          title: "FindPlace",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu"
              }
            ]
          }
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "SharePlace",
          title: "SharePlace",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "awesome-places.SideDrawerScreen"
        }
      }
    });
  });
};

export default startTabs;