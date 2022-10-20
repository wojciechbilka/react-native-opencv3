 import { NativeModules } from 'react-native';
 const  { RNOpencv3 } = NativeModules;  // this is imported from java files?
 
 export async function jsRunPhash(imagePath) {
  // return await NativeModules.CvCameraModule.takePicture(pictureOptions, findNodeHandle(this))
  return await RNOpencv3.runPhash(imagePath)
 }