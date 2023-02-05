import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',   
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex:1,
    justifyContent:'center',
    padding:10,
    fontSize:15,
    color:'black',
  },
  titlee: {
    fontWeight:'bold',
    color:'black',
    fontSize: 27,
  },
  info_container: {
    flexDirection:'row',
    flex: 1,
    alignItems:'center',
    fontWeight:'bold',
    
  },
  year: {
    marginLeft: 10,
    fontSize: 12,
    color:'gray',
    fontWeight:'bold',
    
  },
  content_container:{
flexDirection:'row',
  },
  soldout:{
    borderWidth:1,
    borderColor:'red',
    padding:5,
    borderRadius:5,
    fontWeight:'bold',
    color:'red',
    fontSize:12,
  },
});
