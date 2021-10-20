import React from 'react'

function Form() {
    return (
        <form className={`Form whiteBg border-radius-5`}>                
            <div className="form-control">
                <label>Title</label>
                <input type="text" placeholder="Max 50 characters" />
            </div>

            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="Max 150 characters" />
            </div>

            <div className="form-control form-control-check">
                <label htmlFor="checkbox" style={{cursor: "pointer"}}><input className="star" id="checkbox" type="checkbox" style={{width: 'auto'}} /> Important</label>
                
            </div>

            <input type="submit" value="Add to list" className={`Submitbtn border-radius-5`} />
        </form>
    )
}

export default Form
