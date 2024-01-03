import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from '../Snackbar';

const Home = () => {

  const [networkStatus, setNetworkStatus] = useState('');


  const checkNetworks = async () => {
    const state = await NetInfo.fetch();
    console.log('state',state);
    setNetworkStatus(state.isConnected); 
    return state;
  }

  const renderSnackbar = () => {
    if(networkStatus){
      return (
        <Snackbar
          snackBarType= {networkStatus ? 'Success' : 'Failure'}
          message={networkStatus ? 'Back Online' : 'Offline'}
          onDismissSnackbar={() => {
            console.log('onDismissSnackbar');
            
            setNetworkStatus('')
            // Handle dismissal if needed
          }}
          actionLabel='Retry Network'
          onActionPress={() => {
            console.log('onActionPress');
            checkNetworks()
          }}
        />
      );
    } else if(networkStatus === false) {
      console.log('networkStatus',networkStatus);
      
      return (
        <Snackbar
          snackBarType= {networkStatus ? 'Success' : 'Failure'}
          message={networkStatus ? 'Back Online' : 'Offline'}
          onDismissSnackbar={() => {
            console.log('onDismissSnackbar');
            
            setNetworkStatus('')
            // Handle dismissal if needed
          }}
          actionLabel='Retry Network'
          onActionPress={() => {
            console.log('onActionPress');
            checkNetworks()
          }}
        />
      );
    }
     return null;
  }
  return (
    <View style={styles.container}>
    <Button onPress={() => checkNetworks()} title="Check Network Status" />
    {renderSnackbar()}
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
