export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section>
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar nuevo producto</h2>

        {/* Nombre */}
        <div>
          <label htmlFor="name">Nombre:</label>

          <input
            id="name"
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
            required
          />

          {errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>

        {/* Precio */}
        <div>
          <label htmlFor="price">Precio:</label>

          <input
            id="price"
            type="number"
            name="price"
            value={product.price}
            onChange={onChange}
            min="0"
            step="0.01"
            required
          />

          {errors.price && (
            <p className="error">{errors.price}</p>
          )}
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="description">Descripción:</label>

          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={onChange}
            required
          />

          {errors.description && (
            <p className="error">{errors.description}</p>
          )}
        </div>

        {/* Imagen */}
        <div>
          <label htmlFor="file">Imagen:</label>

          <input
            id="file"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            required
          />

          {errors.file && (
            <p className="error">{errors.file}</p>
          )}
        </div>

        {/* Botón */}
        <button
          className="btn bg-primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Guardando..." : "Guardar"}
        </button>

        {/* Error general */}
        {errors.general && (
          <p className="error">{errors.general}</p>
        )}
      </form>
    </section>
  );
};