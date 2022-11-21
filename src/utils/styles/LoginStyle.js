import {StyleSheet} from 'react-native';
import {blue, gray, white} from '../colors';

import {width, height} from '../strings';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollViewContainer: {
    width: width - 40,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authImage: {
    width: '60%',
    height: '8%',
    marginBottom: '10%',
  },
  divider: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerLine: {
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: gray,
    width: '42%',
    height: 0,
  },
  dividerText: {
    color: gray,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 12,
    marginRight: 12,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: '30%',
  },
  forgotbtn: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  navbtntext: {
    fontSize: 15,
    fontWeight: '500',
    color: blue,
  },
});
