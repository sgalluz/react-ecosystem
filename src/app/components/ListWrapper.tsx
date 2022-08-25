import { TransitionGroup } from 'react-transition-group';
import ItemWrapper from './ItemWrapper';

type Props = {
  label: string;
  children: any;
};

const ListWrapper = (props: Props) => {
  return (
    <>
      <h3>{props.label}</h3>
      <TransitionGroup>
        <ItemWrapper>{props.children}</ItemWrapper>
      </TransitionGroup>
    </>
  );
};

export default ListWrapper;
