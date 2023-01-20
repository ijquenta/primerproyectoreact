import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

     // const onComplete = () => {
     //      alert('ya completaste el TODOs '+props.text);
     // };
     // const onDelete = () => {
     //      alert('Borraste el TODOs '+props.text);
     // };

    return (
       <li className='TodoItem' > 
            <span className={ `fa fa-check-circle Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete} // Propiedad onComplete
            >
            </span>
            
            <p className={ `TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                 { props.text } 
            </p>
            <span className="fa fa-trash Icon Icon-delete"
            onClick={props.onDelete} // Propiedad onDelete
            >

            </span>
       </li> 
    );
} 
export {TodoItem};