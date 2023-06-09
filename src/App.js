import './App.css';
// import UseMemoHook from './hooks/UseMemoHook';
// import UseStateHook from './hooks/UseStateHook';
// import UseEffectHook from './hooks/UseEffectHook';
// import UseCallbackHook from './hooks/UseCallbackHook';
// import UseRefHook from './hooks/UseRefHook';
// import ForwardRef from './hooks/ForwardRef';
// import UseReducerHook from './hooks/UseReducerHook';
import {ContextAPI} from './hooks/ContextAPI';
 

function App() {

  return (
    <div className="App">
      <h1>REACT HOOKS IMPLEMENTATION</h1>
      --------------------------------------------------------------------------------------
      <br />

      {/* Hook Component */}
      <ContextAPI />
    </div>
  );
}

export default App;
