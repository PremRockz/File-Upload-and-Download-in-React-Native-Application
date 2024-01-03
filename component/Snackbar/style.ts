import {Dimensions, StyleSheet} from 'react-native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from './meteics';

export const SnackBarStyle = StyleSheet.create({
  SnackbarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(16),
    marginHorizontal: pixelSizeHorizontal(16),
    marginVertical: pixelSizeVertical(16),
    borderRadius: 3,
    width: Dimensions.get('screen').width - pixelSizeHorizontal(32),
    // marginBottom: pixelSizeVertical(10),
  },
  Top: {
    top: 0,
  },
  Bottom: {
    bottom: 0,
  },
  NotificationWithoutIcon: {
    backgroundColor: '#1f243d',
  },
  Success: {
    backgroundColor: '#00C282',
  },
  Failure: {
    backgroundColor:  '#fe6c6a',
  },
  Notification: {
    backgroundColor: '#1f243d',
  },
  SnackbarContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Offline: {
    backgroundColor: '#fe6c6a',
  },
  IconAndMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.9,
  },
  MessageContainer: {
    flex: 0.95,
  },
  HeaderStyle: {
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    fontSize: fontPixel(18),
    marginBottom: pixelSizeVertical(9),
  },
  MessageText: {
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    fontSize: fontPixel(16),
  },
  ActionLabel: {
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    fontSize: fontPixel(16),
  },
});