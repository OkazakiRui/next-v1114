import type { NextPage } from 'next';
import GameData from 'types/gameData';

type Props = {
  gameData: GameData;
};
const Index: NextPage<Props> = ({ gameData }) => {
  return (
    <div>
      <h1>{gameData.name}</h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  const fetchGameData = await fetch('https://api.sampleapis.com/switch/games');
  const gameData = await fetchGameData.json();
  const paths = gameData.map((data) => ({
    params: { id: String(data.id) },
  }));
  // console.log({ paths });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const fetchGameData = await fetch(
    `https://api.sampleapis.com/switch/games/${params.id}`
  );
  // gameDataに型をつけた
  const gameData = (await fetchGameData.json()) as GameData;

  // 短時間にrequestが950件を超えたらサーバー側でストップがかかる
  return {
    props: { gameData },
  };
};

export default Index;
