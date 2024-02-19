import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = ({ setData, showAlert }) => {
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.edad || !formData.cargo || !formData.telefono) {
      showAlert('Por favor, complete todos los campos', 'danger');
      return;
    }

    const newColaborador = {
      id: (setData.length + 1).toString(),
      nombre: formData.nombre,
      correo: formData.correo,
      edad: formData.edad,
      cargo: formData.cargo,
      telefono: formData.telefono,
    };

    setData((prevData) => [...prevData, newColaborador]);

    setFormData({
      id: '',
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });

    showAlert('Colaborador agregado exitosamente', 'success');
  };

  return (
    <div className="col-12 col-lg-4">
      <Form className="formulario" onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCorreo">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese el correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEdad">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese la edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCargo">
          <Form.Label>Cargo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Ingrese el teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar Colaborador
        </Button>
      </Form>
    </div>
  );
};

Formulario.propTypes = {
  setData: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default Formulario;
