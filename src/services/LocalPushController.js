import PushNotification from 'react-native-push-notification';
import * as RootNavigation from 'navigation/RootNavigation.js';
import { SCREENS } from 'navigation/constants';

PushNotification.configure({
  onNotification: notification => {
    console.log('LOCAL NOTIFICATION ==>', notification)
    return RootNavigation.navigate(SCREENS.SECRET);
  },

  popInitialNotification: true,
  requestPermissions: true
});

export const LocalNotification = () => {
  PushNotification.localNotification({
    autoCancel: true,
    bigText:
      'La la la la la la la la',
    subText: 'Posts App Notification',
    title: 'Good news!',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["Yes", "No"]'
  })
}