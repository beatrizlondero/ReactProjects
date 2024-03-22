import React, { useState } from 'react';

const newShop = [];
function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close" onClick={onClose}>X</button>
          {children}
        </div>
      </div>
    );
  }
  


function AltaComercio() {
  const [formData, setFormData] = useState({
    shopName: '',
    address: '',
    province: '',
    city: '',
    email: '',
    password: '',
   
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    
    const { name, value} = e.target;

    setFormData({ ...formData, [name]: value.toUpperCase() });
  };
  const handleChangeNoUpper = (e) => {
    const { name, value} = e.target
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted); // Toggle checkbox state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Debe aceptar los términos y condiciones.");
      return;
    }
    if (checkEmailExists(formData.email)){
        alert ("El email ingresado ya existe para otro comercio, ingrese otro mail");
    }else {

        cargarFechaYID();

        setFormData((prevFormData) => {
        newShop.push(prevFormData);
        return prevFormData;
        });

        
        console.log (newShop);
        resetForm();
        setIsModalOpen(false);
    }
  };

  function checkEmailExists(email) {
    const isEmailExists = newShop.some((shop) => shop.email === email);
    return isEmailExists;
  }


  const resetForm = () => {
    setFormData({
      shopName: '',
      address: '',
      province: '',
      city: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <>
    <button onClick={() => setIsModalOpen(true)}>Registrar Comercio</button>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="form-container">
        <h2>Datos del Comercio</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Nombre del Comercio:</label>
            <input type="text" name="shopName" value={formData.shopName} onChange={handleChange} required />
            </div>
            <div className="form-group">
            <label>Domicilio:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Calle y número" required />
            </div>
            <div className="form-group">
            <label>Provincia:</label>
            <input type="text" name="province" value={formData.province} onChange={handleChange} required />
            </div>
            <div className="form-group">
            <label>Localidad:</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChangeNoUpper} required />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChangeNoUpper} pattern="(?=.*\d)(?=.*[A-Z]).{8,}" 
            title="Password debe contener al menos 8 caracteres incluyendo un número y una mayúscula" required />
            </div>
            <div className="form-group">
            <label>Confirmar Password:</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChangeNoUpper} required />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={termsAccepted}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="termsCheckbox">Acepto los términos y condiciones</label>
            </div>

            <div className="form-group">
              <button type="submit">Guardar</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>Salirt</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default AltaComercio; 