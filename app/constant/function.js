import { Image } from "react-native";
import images from './images';

const cacheImages = (images) => {
    return Object.values(images).map((image) => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      }
  
      return Asset.fromModule(image).downloadAsync();
    });
  };
const loadImages = async () => {
    const imageAssets = cacheImages(images);
    return loadImages(imageAssets);
}
export default {
    cacheImages,
    loadImages
}