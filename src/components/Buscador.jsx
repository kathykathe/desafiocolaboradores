import PropTypes from 'prop-types';

const Buscador = ({ data, dataFilter }) => {
  const inputHandler = (e) => {
    const buscarPalabra = e.target.value.toLowerCase();

    const resultado = data.filter(
      (usuario) =>
        usuario.nombre.toLowerCase().includes(buscarPalabra) ||
        usuario.correo.toLowerCase().includes(buscarPalabra) ||
        usuario.edad.includes(buscarPalabra) ||
        usuario.cargo.toLowerCase().includes(buscarPalabra) ||
        usuario.telefono.includes(buscarPalabra)
    );

    dataFilter(resultado);
  };

  return (
    <div className="buscador col-12 col-md-6">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un usuario"
        className="form-control mb-3"
        onChange={inputHandler}
      />
    </div>
  );
};

Buscador.propTypes = {
  data: PropTypes.array.isRequired,
  dataFilter: PropTypes.func.isRequired,
};

export default Buscador;