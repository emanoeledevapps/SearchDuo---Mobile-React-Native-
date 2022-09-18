import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 10,
    padding: 20,
    marginRight: 15
  },
  label:{
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 4
  },
  value:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginBottom: 15
  },
  button:{
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  txtBtn:{
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT,
    marginLeft: 7
  }
});