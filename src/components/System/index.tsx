import styled from 'styled-components';
import * as SS from 'styled-system';
import { ThemeBoxShadowProps, ThemeBoxLayoutProps } from './theme';
import { Text, TextProps, TextStyle, ViewStyle, View, ScrollView, ScrollViewProps, ViewProps } from 'react-native';

// Allows for component specific theme defaults in theme.ts
export const applyTheme = (key: string) => (props: any) => props.theme[key];

export interface BoxProps extends ViewStyle, ViewProps,
  SS.ColorProps,
  SS.SpaceProps,
  SS.BorderProps,
  ThemeBoxShadowProps,
  ThemeBoxLayoutProps {}

const layout = SS.variant({ key: 'boxes.layout', prop: 'layout' });

export const Box = styled(View)<BoxProps>`
  ${SS.space};
  ${SS.color};
  ${SS.borders};
  ${SS.borderColor};
  ${SS.borderRadius};
  ${SS.boxShadow};
  ${SS.display};
  ${SS.width};
  ${SS.maxWidth};
  ${SS.minWidth};
  ${SS.height};
  ${SS.maxHeight};
  ${SS.minHeight};
  ${SS.alignItems};
  ${SS.alignContent};
  ${SS.justifyContent};
  ${SS.flexWrap};
  ${SS.flexDirection};
  ${SS.flex};
  ${SS.flexBasis};
  ${SS.justifySelf};
  ${SS.alignSelf};
  ${SS.order};
  ${SS.position};
  ${SS.zIndex};
  ${SS.top};
  ${SS.right};
  ${SS.bottom};
  ${SS.left};
  ${layout};
  ${applyTheme('Box')};
`;

export interface StyledTextProps extends TextStyle, TextProps {}

export const StyledText = styled(Text).attrs({
  fontFamily: 'sans',
  fontSize: 4,
  lineHeight: 32
})<StyledTextProps>`
  ${SS.space};
  ${SS.color};
  ${SS.fontSize};
  ${SS.fontFamily};
  ${SS.fontWeight};
  ${SS.textAlign};
  ${SS.lineHeight};
  ${SS.letterSpacing};
  ${applyTheme('Text')}
`;

// Used in theme.js to create button variants as prop options - e.g. "100"
const size = SS.variant({ key: 'headings', prop: 'size' });

export interface HeadingProps extends StyledTextProps {
  size?: number;
}

export const Heading = styled(StyledText)<HeadingProps>`
  ${size}
`;

Heading.defaultProps = {
  size: 500
};

export interface StyledScrollViewProps extends ScrollViewProps,
  ViewStyle,
  SS.ColorProps,
  SS.SpaceProps {}

export const StyledScrollView = styled(ScrollView)<StyledScrollViewProps>`
  ${SS.space};
  ${SS.color};
  ${SS.borders};
  ${SS.borderColor};
  ${SS.borderRadius};
  ${SS.boxShadow};
  ${SS.display};
  ${SS.width};
  ${SS.maxWidth};
  ${SS.minWidth};
  ${SS.height};
  ${SS.maxHeight};
  ${SS.minHeight};
  ${SS.alignItems};
  ${SS.alignContent};
  ${SS.justifyContent};
  ${SS.flexWrap};
  ${SS.flexDirection};
  ${SS.flex};
  ${SS.flexBasis};
  ${SS.justifySelf};
  ${SS.alignSelf};
  ${SS.order};
  ${SS.position};
  ${SS.zIndex};
  ${SS.top};
  ${SS.right};
  ${SS.bottom};
  ${SS.left};
`;

StyledScrollView.defaultProps = {
  bg: 'white',
  flex: 1
};
