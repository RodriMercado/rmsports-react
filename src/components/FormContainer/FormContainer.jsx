import { useState } from "react"
import { FormUI } from "./FormUI"
import { validateForm } from "./validateForm";

export const FormContainer = () => {
    const [formData, setFormData] = useState({
        name: "", 
        lastname: "", 
        email:"", 
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const{name, value} = event.target;
        
        const updateData = {...formData, [name]: value};
        
        setFormData(updateData);
    };

    const handleSummit = (event) => {
        event.preventDefault();

        const error = validateForm(formData);

        if (Object.keys(error).length > 0){
            setErrors(error)
        }else{
            setErrors({})
            console.log(formData)
            setSubmitted(true);
            setFormData({
                name: "", 
                lastname: "", 
                email:"", 
                message: ""
            });

        }
    }

    return <FormUI 
        onChange={handleChange} 
        onSubmit={handleSummit} 
        errors={errors} 
        formData={formData}
        submitted={submitted}
    />
}