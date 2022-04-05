import { BodyComponent, CardComponent, ICard, ICardBody } from 'common/types';
import styled, { css } from 'styled-components';

const flexCenter = css`
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.settings.languageChanger.background};
  border-radius: 21px;
  overflow: hidden;
  width: 100%;
`;

const Title = styled.div`
  background-color: none;
  width: inherit;
  height: 4rem;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  ${flexCenter}
  color: ${({ theme }) => theme.settings.languageChanger.headerFont};
`;

const BodyStyle = styled.div`
  width: inherit;
  height: 100%;
  border-radius: 21px;
  -moz-box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  -webkit-box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  background-color: ${({ theme }) =>
    theme.settings.languageChanger.item.background};
  overflow: hidden;
  padding: 1rem;
`;

const Body: BodyComponent = ({ children }: ICardBody): JSX.Element => (
  <BodyStyle>{children}</BodyStyle>
);

const Card: CardComponent = ({ title, children }: ICard): JSX.Element => {
  return (
    <Container>
      {title ? (
        <Title>
          <h2>{title}</h2>
        </Title>
      ) : null}
      {children}
    </Container>
  );
};

Card.Body = Body;

export default Card;
