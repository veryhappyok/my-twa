import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useCounterContract } from './hooks/useCounterContract';
import '@twa-dev/sdk';


function App() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  const ua = window.navigator.userAgent;

  const WebApp = (window as any)?.Telegram?.WebApp;
  console.log(window);
  alert((window as any)?.Telegram);
  alert((window as any)?.Telegram?.WebApp);

  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />

        <div className='Card'>
          <b>Counter Address</b>
          <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{value ?? 'Loading...'}</div>
        </div>

        <div>
          <div>Ua:</div>
          <div>{ua}</div>
        </div>

        <div>
          <div>WebApp:</div>
          <div>{WebApp}</div>
        </div>

        <div>
          <div>window.Telegram:</div>
          <div>{(window as any).Telegram}</div>
        </div>

        <div>
          <div>window.telegram:</div>
          <div>{(window as any).telegram}</div>
        </div>

        <a
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </a>
      </div>
    </div>
  );
}

export default App
