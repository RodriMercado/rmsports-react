import "./FormUI.css";

export const FormUI = ({onChange, onSubmit, errors, formData, submitted}) => {

    if (submitted) {
        return (
            <div className="success-message">
                <h2 className="contacto-h2">Contactanos</h2>
                <p className="success-text">
                    El Mensaje ha sido enviado correctamente, responderemos a la brevedad.
                </p>
            </div>
        );
    }


    return <>
        <form onSubmit={onSubmit}>
            <h2 className="contacto-h2">Contactanos</h2>
            <div>
                <label htmlFor="name">Nombre: </label>
                <input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    type="text" 
                    onChange={onChange} 
                />

                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="lastname">Apellido: </label>
                <input
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    type="text"
                    onChange={onChange}
                />

                {errors.lastname && <p className="error">{errors.lastname}</p>}
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    name="email"
                    value={formData.email}
                    type="email"
                    onChange={onChange}
                />

                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="message">Mensaje: </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    type="text"
                    onChange={onChange}
                />

                {errors.message && <p className="error">{errors.message}</p>}
            </div>


            <button type="submit">Enviar</button>
        </form>
    </>
    
}