import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';


class Avatar extends React.Component {
  state = {
    photo: <Image source={{uri: 'https://scontent.fjai4-1.fna.fbcdn.net/v/t1.0-9/49099485_2206938119529682_8013225264169353216_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQn5x_sAC_0jQs6X1oMkinuJmLG48RO01_cjr4_rYRnd44WVJ4LWkVI9QXMcUW7BKsw&_nc_ht=scontent.fjai4-1.fna&oh=65fc89a4fbd4bfe685ff3cb10fce2a9c&oe=5E981B73'}} style={{width:300, height:300,flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius:20 }} />,
  };
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  render() {
    const { photo } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius:20 }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}

export default Avatar;
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
    borderWidth: 4,  
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
    fontSize: 9, textAlign: 'center',
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
