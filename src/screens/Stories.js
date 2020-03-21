import React, { useRef, useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation';
import AllStories from '../constants/AllStories';
import StoryContainer from '../components/StoryContainer';
import Heeader from '../components/header';
import Avaa from '../constants/Allstories2';
import ImagePicker from 'react-native-image-picker';
import Avatar from '../components/photo';



const Stories = (props) => {

  let photo = 'https://scontent.fjai4-1.fna.fbcdn.net/v/t1.0-9/49099485_2206938119529682_8013225264169353216_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQn5x_sAC_0jQs6X1oMkinuJmLG48RO01_cjr4_rYRnd44WVJ4LWkVI9QXMcUW7BKsw&_nc_ht=scontent.fjai4-1.fna&oh=65fc89a4fbd4bfe685ff3cb10fce2a9c&oe=5E981B73' ;
  const [photoset, setphoto] = useState(photo);
  const [bordercolor, setBorderColor] = useState('#72bec5');
  const [isModelOpen, setModel] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentScrollValue, setCurrentScrollValue] = useState(0);
  const modalScroll = useRef(null);
    
  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log(response.uri);
      if (response.uri) {
        onandon(response);
        let s = '';
        s = s + response.uri;
        photo = s;
      }
    });
  };

  const onStorySelect = (index) => {
    setCurrentUserIndex(index);
    setModel(true);
  };

  const onandon = (response) => {
    setphoto(response.uri);
    console.log(photoset);
  };
  const onStoryClose = () => {
    setModel(false);
    setBorderColor('black');
  };

  const onStoryNext = (isScroll) => {
    const newIndex = currentUserIndex + 1;
    if (AllStories.length - 1 > currentUserIndex) {
      setCurrentUserIndex(newIndex);
      if (!isScroll) {
        modalScroll.current.scrollTo(newIndex, true);
      }
    } else {
      setModel(false);
      setBorderColor('black');
    }
  };

  const onStoryPrevious = (isScroll) => {
    const newIndex = currentUserIndex - 1;
    if (currentUserIndex > 0) {
      setCurrentUserIndex(newIndex);
      if (!isScroll) {
        modalScroll.current.scrollTo(newIndex, true);
      }
    }
  };

  const onScrollChange = (scrollValue) => {
    if (currentScrollValue > scrollValue) {
      onStoryNext(true);
      console.log('next');
      setCurrentScrollValue(scrollValue);
    }
    if (currentScrollValue < scrollValue) {
      onStoryPrevious();
      console.log('previous');
      setCurrentScrollValue(scrollValue);
    }
  };

  const renderSeperator = () => (
    <View style={{ height: 1, backgroundColor: '#ccc' }} />
  );

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 0 }}>
        <Heeader />
      </View>
    <View>
      <FlatList
        data={Avaa}
        
        renderItem={({ item, index }) => (
          <TouchableOpacity onLongPress={() => handleChoosePhoto()} onPress = {() => onStorySelect(index)} >
            
            <Image
              style={[styles.circle_ava, { borderColor: bordercolor }]}
              source={{ uri: photo }}
              isHorizontal
            />
            <Text style={styles.title_ava}>{item.title}</Text>
            <Text style={styles.occu}>{item.occupation}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            

          </TouchableOpacity>
        )}
      />
    </View>
    <View>
    
      <FlatList
        data={AllStories}
        ItemSeparatorComponent={renderSeperator}
        style={{ paddingHorizontal: 10 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onStorySelect(index)} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={[styles.circle, {borderColor: bordercolor }]}
              source={{ uri: item.profile }}
            />
            <Text style={styles.title}>{item.title}</Text>
            

          </TouchableOpacity>
        )}
      />
      </View>


      <Modal
        animationType="slide"
        transparent={false}
        visible={isModelOpen}
        style={styles.modal}
        onShow={() => {
          if (currentUserIndex > 0) {
            modalScroll.current.scrollTo(currentUserIndex, false);
          }
        }}
        onRequestClose={onStoryClose}
      >
        <CubeNavigationHorizontal callBackAfterSwipe={g => onScrollChange(g)} ref={modalScroll} style={styles.container}>
          {AllStories.map((item, index) => (
            <StoryContainer
              onClose={onStoryClose}
              onStoryNext={onStoryNext}
              onStoryPrevious={onStoryPrevious}
              user={item}
              isNewStory={index !== currentUserIndex}
            />
          ))}
        </CubeNavigationHorizontal>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: -100,
    backgroundColor: 'rgba(255, 150, 143,255)',
  },
  circle: {
    width: 66,
    margin: 4,
    height: 66,
    borderRadius: 33,
    borderWidth: 3,  
  },
  circle_ava: {
    position: 'relative',
    width: 300,
    height: 300,
    borderRadius: 70,
    borderWidth: 4,
    marginVertical: 150,
    marginLeft: 33
  },
  modal: {
    flex: 1,
  },
  title: {
    fontSize: 13, textAlign: 'center',
  },
  title_ava: {
    position: 'absolute',
    fontSize: 25,
    marginLeft: 75,
    marginVertical: 480,
    alignItems:'center',
    color: 'green',
  },
  occu: {
    position: 'absolute',
    fontSize: 18,
    marginLeft: 135,
    marginVertical: 520,
    alignItems:'center',
    color: 'yellow',

  },
  desc: {
    position: 'absolute',
    fontSize: 18,
    marginLeft: 105,
    marginVertical: 550,
    alignItems:'center',
    color: 'yellow',
  }
});


export default Stories;
