import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const ItemContent = styled.div`
  .entering {
    animation: ${({ theme }) => theme.animations.appear};
  }

  .removing {
    animation: ${({ theme }) => theme.animations.disappear};
  }
`;

type Props = {
  children: any;
};

const ItemWrapper: React.FC<Props> = (props: Props): JSX.Element => (
  <ItemContent>
    <CSSTransition
      classNames={{
        enterActive: 'entering',
        exitActive: 'removing'
      }}
      timeout={500}
    >
      {props.children}
    </CSSTransition>
  </ItemContent>
);

export default ItemWrapper;
