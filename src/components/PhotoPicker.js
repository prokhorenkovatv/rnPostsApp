import React, { useState } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useTheme } from '@react-navigation/native';

const PhotoPicker = ({ onPick }) => {
  const theme = useTheme();
  const [imageUri, setImageUri] = useState(null);

  const takePhotoHandler = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        setImageUri(response.uri);
        onPick(response.uri);
      }
    });
  }
  return (
    <View style={styles.wrapper}>
      <Button
        title="Take a photo"
        onPress={takePhotoHandler}
        color={theme.colors.danger}
      />
      {imageUri ?
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
        />
        : <Image
          source={require('assets/notAvailable.jpg')}
          style={styles.image}
        />}
    </View>);
}

export default PhotoPicker;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})