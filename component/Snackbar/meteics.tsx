import {Dimensions, PixelRatio} from 'react-native';
const {fontScale} = Dimensions.get('window');

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

export const scaleFont = (size: number): number => size * fontScale;

export const theme = (
  lightThemeColor: string,
  darkThemeColor: string,
  property: string,
): {[key: string]: string} => {
  const styles: {[key: string]: string} = {};

  const state = ''; // Replace 'colorCodeSlice' with the actual slice name in your Redux store
  styles[property] = state ? darkThemeColor : lightThemeColor;

  return styles;
};

const dimensions = (
  property: string,
  top: number,
  right: number = top,
  bottom: number = top,
  left: number = right,
): Record<string, number> => {
  const styles: Record<string, number> = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
};

export function margin(
  top: number,
  right: number,
  bottom: number,
  left: number,
): Record<string, number> {
  return dimensions('margin', top, right, bottom, left);
}

export function padding(
  top: number,
  right: number,
  bottom: number,
  left: number,
): Record<string, number> {
  return dimensions('padding', top, right, bottom, left);
}

export {horizontalScale, verticalScale, moderateScale};

const widthBaseScale = width / 375;
const heightBaseScale = height / 812;

function normalize(size: number, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: number) => normalize(size, 'width');
//for height  pixel
const heightPixel = (size: number) => normalize(size, 'height');
//for font  pixel
const fontPixel = (size: number) => heightPixel(size);
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => heightPixel(size);
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => widthPixel(size);
export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};
