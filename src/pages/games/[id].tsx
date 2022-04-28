import type { NextPage } from 'next';
import GameData from 'types/gameData';

type Props = {
  gameData: GameData;
};
const Index: NextPage<Props> = ({ gameData }) => {
  return (
    <div>
      <h1>{gameData.name}</h1>
      <p>{}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: '1' },
      },
      {
        params: { id: '2' },
      },
      {
        params: { id: '3' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: { gameData },
  };
};

export default Index;
