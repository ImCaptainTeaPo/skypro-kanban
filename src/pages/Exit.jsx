import { ExitWrapper, ExitTitle, ExitButton } from './Exit.styled';

function Exit({ onExit }) {
  return (
    <ExitWrapper>
      <ExitTitle>Exit Page</ExitTitle>
      <ExitButton onClick={onExit}>Logout</ExitButton>
    </ExitWrapper>
  );
}

export default Exit;
