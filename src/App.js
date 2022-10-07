import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increseNum , decreseNum} from './Action';
function App() {
  const Dispatch = useDispatch();
  const val = useSelector((state) => state.UpDown);
   return (
   <>0
      <h1>val={val}</h1>
  
      <input type="button" value="+" onClick={() => {Dispatch(increseNum())}} />
      <input type="button" value="-" onClick={() => {Dispatch(decreseNum())}} />
   </>
  );
}
 

export default App;
