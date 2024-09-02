import StyledTile from "../styles/StyledTile";

const Tile: React.FC<{
  index: number;
  onClick: () => void;
  player: 'x' | 'o' | null;
}> = ({ index, onClick, player }) => {
  return (
   < StyledTile
      key={index}
      onClick={onClick}
      player={player}
      data-player={player}
    ></StyledTile>
  );
};

export default Tile;