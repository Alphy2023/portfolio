
const CustomInput = (props) => {
     const { type, i_id,e_class, val, label, name, onCh,disabled } = props;
     return (
       <>
         <label htmlFor="name" className="form-label">
           {label}
         </label>
         <input
           type={type}
           name={name}
           disabled={disabled}
           className={`form-control ${(e_class)}`}
           id={i_id}
           value={val}
           onChange={onCh}
           onBlur={onCh}
           placeholder={label}
         />
       </>
     );
}

export default CustomInput;