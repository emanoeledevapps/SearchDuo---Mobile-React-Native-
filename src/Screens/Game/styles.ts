import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  bannerGame:{
    width: 120,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10
  },
  containerList:{
    width: '100%',
  },
  contentList:{
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start'
  },
  emptyListText:{
    color: THEME.COLORS.ALERT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM
  }
});