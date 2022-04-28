import { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
};
const UiButton: VFC<Props> = ({ children }) => {
  console.log(children);

  return <button>{children}</button>;
};

export default UiButton;
