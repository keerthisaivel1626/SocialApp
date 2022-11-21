import { StyleSheet } from "react-native";
import {width, height} from '../strings';
import { white,blue ,lightBlack} from "../colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
  titlecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height - 150,
  },
  logo: {
    width: width / 9,
    height: height / 19,
    resizeMode: 'cover',
  },
  from: {
    fontSize: 18,
    fontWeight: '400',
    color: blue,
  },
  metacontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2,
    height: height / 16,
  },
  metaimg: {
    width: width / 14,
    height: height / 30,
    marginRight: '2%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color:lightBlack,
  },
});