import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { BaseColaboradores } from './assets/BaseColaboradores.js';
import Buscador from './components/Buscador.jsx';
import Listado from './components/Listado.jsx';
import Formulario from './components/Formulario.jsx';
import Alert from './components/Alert.jsx';

function App() {
  const [data, setData] = useState(BaseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  const handleShowAlert = (message, variant) => {
    setAlert({ show: true, message, variant });
  };

  const handleHideAlert = () => {
    setAlert({ show: false, message: '', variant: '' });
  };

  const setAlertMessage = (message) => {
    setAlert({ ...alert, message });
  };

  const setAlertVariant = (variant) => {
    setAlert({ ...alert, variant });
  };

  return (
    <>
      <h1 className="my-4">
        <FontAwesomeIcon icon={faUserGroup} />
        Lista colaboradores
      </h1>

      <Buscador data={data} dataFilter={setDataFilter} />

      <div className="row row-cols-2 justify-content-end">
        <Listado dataFilter={dataFilter} setData={setData} />
        <Formulario
          setData={setData}
          showAlert={handleShowAlert}
          setAlertMessage={setAlertMessage}
          setAlertVariant={setAlertVariant}
        />
        {alert.show && <Alert message={alert.message} variant={alert.variant} onHide={handleHideAlert} />}
      </div>
    </>
  );
}

export default App;
