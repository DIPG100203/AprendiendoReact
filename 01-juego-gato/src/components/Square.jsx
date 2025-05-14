// declaro las cuadriculas de la tabla 
export const Square = ({children, isSelected, updateBoard, index}) =>{
    // declaro los estilos de la tabla
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    // declaro la funcion para actualizar la tabla
    const handleClick = () => {
      updateBoard(index)
    }
    // declaro poner el valor en los cuadrados
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }