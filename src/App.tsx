import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { SendTransaction } from './components/SendTransaction';
import { Account } from './components/Account';
import { Connect } from './components/Connect';
import { WriteContract } from './components/WriteContract';

function App() {
  const { isConnected } = useAccount();
  return (
    <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
        backgroundColor:'pink',
      }}
    >
      <ConnectButton />
    </div>
    <div>
      {isConnected ? <Account /> : <Connect />}
      {isConnected && <SendTransaction />}
      {isConnected && <WriteContract />}
    </div>
    </>
  );
}

export default App;
