import React from 'react'
import { useState } from 'react'

function Form({ onAdd }) {

    const [title, setTitle] = useState('')
    const [description, setDesciption] = useState('')
    const [starred, setStarred] = useState(false)

    const onSubmit = (e) => {

        e.preventDefault();

        onAdd({ title, description, starred });

        // Empty the fields
        setTitle('');
        setDesciption('');
        setStarred(false);
    }

    return (
        <form className={`Form whiteBg box-shadow-s border-radius-5`} onSubmit={onSubmit}>                
            <div className="form-control">
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Max 50 characters" />
            </div>

            <div className="form-control">
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDesciption(e.target.value)} placeholder="Max 150 characters" />
            </div>

            <div className="form-control form-control-check">
                <label htmlFor="checkbox" checked={starred} style={{cursor: "pointer"}}><input onChange={(e) => setStarred(e.currentTarget.checked)} className="star" id="checkbox" type="checkbox" style={{width: 'auto'}} /> Important</label>
                
            </div>

            <input type="submit" value="Add to list" className={`Submitbtn border-radius-5`} />
        </form>
    )
}

export default Form
