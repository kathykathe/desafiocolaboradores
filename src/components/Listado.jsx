import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const Listado = ({ dataFilter, setData }) => {
  const deleteUsuarios = (id) => {
    setData(dataFilter.filter((usuario) => usuario.id !== id));
  };
  const usuarios = dataFilter.map((usuario) => (
    <tr className="align-middle" key={usuario.id}>
      <td>{usuario.id}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.correo}</td>
      <td>{usuario.edad}</td>
      <td>{usuario.cargo}</td>
      <td>{usuario.telefono}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteUsuarios(usuario.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="table-responsive col-12 col-lg-8 mb-2 text-center">
      <Table variant="dark" className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>{usuarios}</tbody>
      </Table>
    </div>
  );
};

Listado.propTypes = {
  dataFilter: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Listado;
