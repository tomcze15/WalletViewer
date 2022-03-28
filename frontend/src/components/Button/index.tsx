import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { IButton, IButtonStyleProps } from 'common/types';

const attachHover = (): FlattenInterpolation<ThemeProps<any>> => {
  return css`
    &:hover {
      padding-right: 2.8rem;
      -webkit-box-shadow: inset -2.8rem 0px 0px 0px ${({ theme }) => theme.button.sides.right};
      -moz-box-shadow: inset -2.8rem 0px 0px 0px ${({ theme }) => theme.button.sides.right};
      box-shadow: inset -2.8rem 0px 0px 0px ${({ theme }) => theme.button.sides.right};
    }
  `;
};

const mapIconSizes = {
  tiny: '0.5',
  small: '0.8',
  default: '1',
  large: '1.5',
  huge: '1.8',
};

const flexCenter = css`
  align-items: center;
  justify-content: center;
`;

const Container = styled.button<IButtonStyleProps>`
  height: 3rem;
  width: 10rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: row;
  transition: 0.2s ease-out;

  ${flexCenter}
  cursor: pointer;
  -webkit-box-shadow: inset 0rem 0px 0px 0px
    ${({ theme }) => theme.button.sides.right};
  -moz-box-shadow: inset 0rem 0px 0px 0px
    ${({ theme }) => theme.button.sides.right};
  box-shadow: inset 0rem 0px 0px 0px ${({ theme }) => theme.button.sides.right};

  ${(props) => (props.isAnim ? attachHover() : null)}
`;

const Text = styled.span`
  font-size: 1.2rem;
`;

const IconWrapper = styled.div<IButtonStyleProps>`
  background-color: none;
  height: inherit;
  width: 3rem;
  position: absolute;
  top: 0;
  left: 7rem;
  display: flex;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.85, 0, 1, 0);
  ${flexCenter};

  ${Container}:hover & {
    opacity: 1;

    svg {
      display: block;
    }
  }

  svg {
    display: none;
    height: ${({ iconSize }) => {
      console.log('Height: ', iconSize);
      return iconSize ? mapIconSizes[iconSize] : mapIconSizes.default;
    }}rem;
    width: ${({ iconSize }) =>
      iconSize ? mapIconSizes[iconSize] : mapIconSizes.default}rem;
  }
`;

export const Button = ({
  Icon,
  children,
  type,
  iconSize,
  onClick,
}: IButton): JSX.Element => {
  return (
    <Container isAnim={Icon ? true : false} onClick={onClick} type={type}>
      <Text>{children}</Text>
      {Icon ? (
        <IconWrapper iconSize={iconSize}>
          <Icon />
        </IconWrapper>
      ) : null}
    </Container>
  );
};
