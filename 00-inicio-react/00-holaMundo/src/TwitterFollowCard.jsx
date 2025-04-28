import { useState } from "react" //importo el hook useState de react 

//creo el componente TwitterFollowCard que recibe como props userName y children
//userName es el nombre de usuario y children es el nombre que se va a mostrar en la tarjeta
export function TwitterFollowCard({userName, children, initialFollowing}){ 
    
    //creo el estado isFollowing y la funcion setIsFollowing para cambiar su valor, el valor inicial es false
    //isFollowing es un booleano que indica si el usuario esta siguiendo o no
    const [isFollowing, setIsFollowing]=useState(initialFollowing) 
    
    //creo la variable text que va a mostrar el texto de seguir o siguiendo dependiendo del estado isFollowing
    //si isFollowing es true, text es 'Siguiendo', si no, es 'Seguir'
    //creo la variable buttonClassName que va a tener el nombre de la clase del boton dependiendo del estado isFollowing
    //si isFollowing es true, buttonClassName es 'tw-followCard-button is-following', si no, es 'tw-followCard-button'
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    //creo la funcion handleClick que cambia el estado de isFollowing al hacer click en el boton
    //si isFollowing es true, se cambia a false y viceversa
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`}
                alt="Berserkiano" srcset=""
                 />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}