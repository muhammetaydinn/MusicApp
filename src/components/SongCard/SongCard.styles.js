import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  info_container: {
      flexDirection: 'row',
      alignItems: 'center',
  },
    year: {
      marginTop: 2,
    fontSize: 12,
    marginLeft: 10,
    color: 'grey',
    fontWeight: 'bold',
    },
    soldout_container: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'red',
        padding: 5,
    },
    soldout_title: {
        fontWeight: 'bold',
        color: 'red',
    },
    content_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
