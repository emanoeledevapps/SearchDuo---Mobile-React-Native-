import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  content:{
    backgroundColor: THEME.COLORS.SHAPE,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10
  },
  iconClose:{
    alignSelf: 'flex-end',
  },
  label:{
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 20,
    marginBottom: 8
  },
  btnDiscord:{
    width:230,
    height: 45,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  discord:{
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});