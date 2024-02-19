import PropTypes from 'prop-types';
import AlertBootstrap from 'react-bootstrap/Alert';

const Alert = ({ message, variant, onHide }) => {
  const alertMessage = message || 'Mensaje no especificado';
  const alertVariant = variant || 'danger';

  return (
    <AlertBootstrap variant={alertVariant} onClose={onHide} dismissible>
      <p>{alertMessage}</p>
    </AlertBootstrap>
  );
};

Alert.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  variant: PropTypes.string,
  onHide: PropTypes.func.isRequired,
};

export default Alert;
