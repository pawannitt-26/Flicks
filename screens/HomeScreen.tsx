import * as React from 'react';
import { View, Text, FlatList, StyleSheet,ImageSourcePropType} from 'react-native';
import CustomRow from './CustomRow';

import video_url_1 from '../assets/Video1.mp4'
import video_url_2 from '../assets/Video2.mp4'
import video_url_3 from '../assets/Video3.mp4'
import video_url_4 from '../assets/Video3.mp4'

import image_url_1 from '../assets/Selfie1.jpeg'
import image_url_2 from '../assets/Selfie2.jpeg'
import image_url_3 from '../assets/Selfie3.jpeg'
import image_url_4 from '../assets/Selfie3.jpeg'
import { useState } from 'react';

interface FlickItem {
    video_url: any;
    image_url: ImageSourcePropType;
    icon_url: string;
    video_name: string;
    photo_name: string;
}

type CustomListviewProps = {
    itemList: FlickItem[];
};


const flicks: FlickItem[] = [
    { video_url: video_url_1, image_url: image_url_1, icon_url: 'https://reactjs.org/logo-og.png', video_name: 'Video 1', photo_name: 'Photo 1' },
    { video_url: video_url_2, image_url: image_url_2, icon_url: 'https://reactjs.org/logo-og.png', video_name: 'Video 2', photo_name: 'Photo 2' },
    { video_url: video_url_3, image_url: image_url_3, icon_url: 'https://reactjs.org/logo-og.png', video_name: 'Video 3', photo_name: 'Photo 3' },
    { video_url: video_url_4, image_url: image_url_4, icon_url: 'https://reactjs.org/logo-og.png', video_name: 'Video 4', photo_name: 'Photo 4' },
  ];


  const CustomListview: React.FC<{ itemList: FlickItem[] }> = ({ itemList }) => {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  
    const handlePlay = (index: number) => {
      setPlayingIndex(playingIndex === index ? null : index);
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={itemList}
          renderItem={({ item, index }) => (
            <CustomRow
              video_url={item.video_url}
              image_url={item.image_url}
              icon_url={item.icon_url}
              video={item.video_name}
              photo={item.photo_name}
              isPlaying={playingIndex === index}
              onPlay={() => handlePlay(index)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };


function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F0E6', }}>
            <Text style={{ color: "black", marginTop: 16, fontWeight: 500, fontSize: 25 }}>Flick</Text>
            <CustomListview itemList={flicks} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#ccc',
    },
});

export default HomeScreen;
