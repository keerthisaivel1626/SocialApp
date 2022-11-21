import { StyleSheet } from "react-native";
import { black, blue, gray, white } from "../colors";


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: white,
  },
  formcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: black,
    marginBottom: '8%',
    alignSelf: 'center',
  },
  labelInfo: {
    fontSize: 14,
    color: gray,
    fontWeight: '400',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  outerlessButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  resttbtn: {
    width: '100%',
    backgroundColor: blue,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  navbtntext: {
    color: white,
    fontSize: 16,
    fontWeight: '500',
  },
 
});
