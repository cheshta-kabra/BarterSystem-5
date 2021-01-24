import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native';
import {Card,Icon,ListItem} from 'react-native-elements'
import MyHeader from '../components/MyHeader.js'
import firebase from 'firebase';
import db from '../config.js'

export default class MyDonationScreen extends Component {
  static navigationOptions = { header: null };

   constructor(){
     super()
     this.state = {
       userId:firebase.auth().currentUser.email,
       allDonations:[],
     }
     this.requestRef= null
   }


   getAllDonations =()=>{
     this.requestref=db.collection('all_donations').where('doner_id','==',this.state.userId)
     onSnapshot((snapshot)=>{
       var allDonations=snapshot.docs.map((document)=>{
         document.data()
       })
       this.setState({
         allDonations:allDonations
       })
     })
   }

   keyExtractor = (item, index) => index.toString()

   renderItem = ( {item, i} ) =>(
     <ListItem 
     key={i}
     title={item.book_name}
     subtitle={'requested by :'+item.requested_by+'status :'+item.request_status}
     leftElement={
       <Icon name='book' type='font-awesome' color='#696969' />
     }
     rightElement={
       <TouchableOpacity> <Text> Send Book</Text></TouchableOpacity>
     } 
     bottomDivider/>
   )


   componentDidMount(){
     this.getAllDonations()
   }

   componentWillUnmount(){
     this.requestRef();
   }

   render(){
     return(
       <View style={{flex:1}}>
         <MyHeader navigation={this.props.navigation} title="My Donations"/>
         <View style={{flex:1}}>
           
         </View>
       </View>
     )
   }
   }


const styles = StyleSheet.create({
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  },
  subtitle :{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  }
})
