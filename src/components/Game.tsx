import { useMachine } from "@xstate/react";
import { ticTacToeMachine } from "../states/ticTacToeMachine";
import Tile from "./Tile";
import range from "../utils/range";
import StyledButton from "../styles/StyledButton";
import StyledBoard from "../styles/StyledBoard";

export default function Game() {
  const [state, send] = useMachine(ticTacToeMachine);

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      {state.matches("idle") && (
        <>
          <h2>Rozpocznij grę!</h2>
          <StyledButton
            variant="primary"
            onClick={() => send({ type: "START" })}
          >
            Start
          </StyledButton>
        </>
      )}

      {state.matches("gameOver") && (
        <div>
          {state.hasTag("winner") && <h2>Winner: {state.context.winner}</h2>}
          {state.hasTag("draw") && <h2>Draw</h2>}
          <StyledButton
            variant="secondary"
            onClick={() => send({ type: "RESET" })}
          >
            Reset
          </StyledButton>
        </div>
      )}
      {!state.matches("idle") && (
        <StyledBoard>
          {range(0, 9).map((index) => (
            <Tile
              index={index}
              onClick={() => send({ type: "MOVE", value: index })}
              key={index}
              player={state.context.board[index]}
            />
          ))}
        </StyledBoard>
      )}
    </div>
  );
}
