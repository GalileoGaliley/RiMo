import {Dimensions, StyleSheet} from "react-native";


export const stylesValue = {
    settingScreen:{
        container: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        fields:{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:50,
        }
    },
    favoripeScreen:{
        container:{
            backgroundColor:'rgba(232,232,232,0.87)',
            height:Dimensions.get('window').height
        },
        title:{
            fontSize:30,
            textAlign:'center',
            color:'#555'
        }
    },
    personageScreen:{
        container:{
            width:'100%',
            height:'100%',
            marginTop:0
        },
        imageContainer:{
            width:'100%',
            height:600,
            flex:1,
            alignItems:'center'
        },
        image:{
            width:'90%',
            height:'100%',
            marginTop:30
        },
        info:{
            width:'90%',
            margin:'5%',
            marginTop:50,
            flex:1,
            justifyContent:'flex-start'
        },
        infoList:{
            width:'100%',
            borderWidth:1,
            borderColor:'#b9b9b9'
        },
        infoItem:{
            fontSize:27,
            textAlign:'center',
            marginBottom:20
        }
    },
    favoriteItem:{
        item:{
            backgroundColor:'#fff',
            height:170,
            width:Dimensions.get('screen').width - 20, marginLeft:10, padding: 3, paddingStart:0, marginTop: 20
        },
        image:{
            maxWidth:'30%',
            height:'70%'
        },
        stats:{
            width:'70%',
            height:'100%',
            position:'absolute',
            right:0,
        },
        status:{
            fontSize:17,
            fontWeight:'bold',
            color:'#555',
            marginTop:5
        },
        name:{
            fontSize:14,
            color:'#555'
        },
        deleteContainer:{
            flex:1,
            justifyContent:'center',
            alignItems:"center",
        },
        deleteButton:{
            flexDirection:'row',
            borderColor:'#d57a83',
            borderWidth:0.5,
            borderRadius:2,
        }
    },
    head:{
        container:{
            width:'100%',
            height:70,
            flexDirection:'row',
            borderTop:"2px solid #000",
        },
        view: {
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        h1: {
            fontSize:30,
            fontWeight:"bold"
        },
        text: {
            fontSize:10
        }
    },
    personageItem:{
        container:{
            width:'41%',
            height:300,
            margin:'3%',
            marginBottom:100
        },
        image:{
            width:'100%',
            height:'100%'
        },
        info:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-between',
            marginTop:5
        },
        text: {
            fontWeight:'bold',
            fontSize:18
        },
        likeButton:{
            position:'absolute',
            zIndex:999999,
            right:2
        }
    },
    personageList:{
        container:{
            height:Dimensions.get('screen').height,
            width:'100%',
            borderTopColor:'#e3e3e3',
            borderTopWidth:1,
            },
        scroll_view:{
            width:'100%',
            height: Dimensions.get('window').height
        },
        list:{
            flex:1,
            flexWrap:'wrap',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            paddingBottom: 20,
            bottom: 0
        },
        pageSelector:{
            height:300,
            flexDirection:'row',
            justifyContent:'center',
            paddingTop:20
        },
        pageNum:{
            fontSize:30,
            marginLeft:20,
            marginRight:20
        }

    },
    preload:{
        container:{
            width:'100%',
            height: Dimensions.get('window').height - 100,
            justifyContent:'center',
            alignItems:'center',
        },
        image:{
            width:Dimensions.get('window').width - 50,
            height:Dimensions.get('window').width - 50
        }
    },
    prompt:{
        container:{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            position: 'absolute',
            top:0,
            bottom:0,
            zIndex:99
        },
        window:{
            height:'100%',
            width:'100%',
            backgroundColor:'rgba(0,0,0,0.63)',
            justifyContent:'center',
            alignItems: 'center'
        },
        body:{
            height: 200,
            width: '50%',
            backgroundColor:'rgb(255,255,255)',
            borderRadius: 10,
            position:'relative',
            justifyContent:'center',
            alignItems:'center'
        },
        input:{
            height: 40,
            margin: 12,
            borderWidth: 0.5,
            padding: 10
        }
    },
    tabBar:{
        container:{
            width:'100%',
            height: 62,
            backgroundColor:'#b8f3b0',
            borderTopWidth:1,
            borderColor:'#c4c4c4',
            flexDirection:'row',
            justifyContent:'space-around' ,
            position:'absolute',
            bottom:0
        },
        item:{
            backgroundColor:'rgba(206,206,206,0)',
            justifyContent:'center',
            width:'33.333333333%',
            alignItems:'center',
            borderWidth:1,
            borderColor:'#c4c4c4',
        },
    }


};


export const styles = StyleSheet.create(stylesValue);