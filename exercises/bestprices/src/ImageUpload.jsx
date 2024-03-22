// import React, { useState } from "react";
// import multer from "multer";

// const ImageUpload = () => {
//   const [file, setFile] = useState(null);

//   const storage = multer.diskStorage({
//     destination: "./uploads",
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + "-" + Date.now() + "." + file.mimetype.split("/")[1]);
//     },
//   });

//   const upload = multer({ storage });

//   const handleUpload = (e) => {
//     const uploadedFile = e.target.files[0];
//     setFile(uploadedFile);
//   };

//   return (
//     <div>
//       <input type="file" name="file" onChange={handleUpload} />
//       {file && <img src={URL.createObjectURL(file)} alt="Uploaded Image" />}
//     </div>
//   );
// };

// export default ImageUpload;
import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const blob = new Blob([reader.result]);
      const formData = new FormData();
      formData.append("username", username);
      formData.append("image", blob);
      setImage(formData);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/register", image).then((res) => {
      // Si la solicitud tiene éxito, mostrar un mensaje de éxito
      console.log("Usuario registrado correctamente!");
    }).catch((err) => {
      // Si la solicitud falla, mostrar un mensaje de error
      console.log("Error al registrar usuario!");
    });
  };

  return (
    <div>
      <h1>Registro de usuario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
        <br />
        <label htmlFor="image">Imagen de perfil:</label>
        <input type="file" id="image" name="image" onChange={handleImageChange} />
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default ImageUpload;
