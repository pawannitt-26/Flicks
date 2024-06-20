import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, Alert, Platform, PermissionsAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Video from 'react-native-video';
import { VideoPlayer, ProcessingManager } from 'react-native-video-processing';
import RNFS from 'react-native-fs';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

interface CustomRowProps {
  video_url: any;
  image_url: ImageSourcePropType;
  icon_url: string;
  video: string;
  photo: string;
  isPlaying: boolean;
  onPlay: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#F5F0E6',
    elevation: 4,
  },
  card: {
    flex: 0.3,
    backgroundColor: 'beige',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 0.5,
    margin: 3,
    elevation: 6,
  },
  description: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: '#000',
  },
  photo: {
    resizeMode: 'cover',
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  icon: {
    resizeMode: 'cover',
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'black'
  },
  video: {
    width: 100,
    height: 100,
    borderRadius: 5,
  }
});

const CustomRow: React.FC<CustomRowProps> = ({ video_url, image_url, icon_url, video, photo, isPlaying, onPlay }) => {

 
  const requestExternalStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        if (Platform.Version >= 30) {
          const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.MANAGE_EXTERNAL_STORAGE);
          console.log('Manage external storage permission request result:', result);
          return result === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
          console.log('Write external storage permission request result:', result);
          return result === PermissionsAndroid.RESULTS.GRANTED;
        }
      } catch (error) {
        console.error('Failed to request permission', error);
        return false;
      }
    }
    return false;
  };

  const handleCreateVideo = async () => {
    try {
      const newPath = `${RNFS.DocumentDirectoryPath}/newVideo.mp4`;
      let granted = false;

      if (Platform.OS === 'android') {
        granted = await requestExternalStoragePermission();
        console.log('Storage permission granted:', granted);
      }

      if (!granted) {
        Alert.alert('Permission Denied', 'Storage permission is required to save videos');
        return;
      }

      const result = await ProcessingManager.processVideo(video_url, {
        overlay: {
          uri: image_url,
          position: 'bottomLeft',
          width: 100,
          height: 100,
          borderRadius: 50,
        },
        saveTo: 'file',
      });

      console.log('Processing result:', result);

      await RNFS.moveFile(result, newPath);
      Alert.alert('Success', 'Video saved to gallery');
    } catch (error) {
      console.error('Error processing video:', error);
      Alert.alert('Error', 'Failed to create video');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>

        <View style={styles.card}>
          <Text style={styles.description}>{video}</Text>
          <TouchableOpacity onPress={onPlay}>
            <Video
              source={video_url}
              style={styles.video}
              resizeMode="cover"
              controls={true}
              paused={!isPlaying}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.description}>{photo}</Text>
          <Image source={image_url} style={styles.photo} />
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={handleCreateVideo}>
            <Image source={{ uri: icon_url }} style={styles.icon} />
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default CustomRow;
