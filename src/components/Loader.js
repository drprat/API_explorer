import React from 'react'
import {Modal, View, ActivityIndicator, StyleSheet,} from 'react'

const Loader = props => {
    const {
      loading,
      ...attributes
    } = props;
  
    return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        onRequestClose={() => { console.log('close modal') }}>
        <View>
          <View >
            <ActivityIndicator
              animating={loading} />
          </View>
        </View>
      </Modal>
    )
  }
  
  export default Loader;