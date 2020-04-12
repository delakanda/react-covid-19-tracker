import React, { useEffect } from 'react';
import './App.css';
import GMap from '../../components/gMap/GMap';
import InfoPane from '../../components/infoPane/InfoPane';
import { useDispatch } from 'react-redux';
import { getCovidSummary } from '../../api/covid';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidSummary());
    return () => {
      //
    }
  }, []);

  return (
    <div className="App">
      <GMap />
      <InfoPane />
    </div>
  );
}

export default App;
