import React from 'react';
import { useRef } from 'react';

const Form = () => {
    // const [formValue, setFormValue] = useState()
    const formRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        formRef.current.reset();
        console.log(formRef.current)
    }
    return (
        <div>
            <h1>Hello from Form.jsx</h1>
            <form action="submit" ref={formRef}>
                <input type="text" />
                <p>gender</p>
                <input type="radio" name="gender" value="Male" />Male
                <input type="radio" name="gender" value="Female" />female
                <p>role</p>
                <input type="checkbox" value="student" />student
                <input type="checkbox" value="teacher" />teacher
                <input type="checkbox" value="assistant" />assistant
                <p>merital status</p>
                <input type="checkbox" value="married" />married
                <input type="checkbox" value="unmarried" />unmarried
                <input type="checkbox" value="divorced" />divorced
                <p>File</p>
                <input type="file" name="image" id="" />
                <br />
                <br />
                <input type="submit" value="submit" onClick={handleSubmit} />
            </form>

        </div>
    );
}

export default Form;
