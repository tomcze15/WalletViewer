import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { IButton, IButtonAnim } from 'common/types';

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

const flexCenter = css`
  align-items: center;
  justify-content: center;
`;

const Container = styled.button<IButtonAnim>`
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

const IconWrapper = styled.div`
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
    height: 1.8rem;
    width: 1.8rem;
  }
`;

export const Button = ({ Icon, children, onClick }: IButton) => (
  <Container isAnim={Icon ? true : false} onClick={onClick}>
    <Text>{children}</Text>
    {Icon ? (
      <IconWrapper>
        <Icon />
      </IconWrapper>
    ) : null}
  </Container>
);
