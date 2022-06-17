import React, { useState } from 'react'

export default function TextFrom() {

    const [formVal, setFormVal] = useState("");

    const handleformValue = (event) => {
        setFormVal(event.target.value);
    }
    const handleUpClick = () => {
        setFormVal(formVal.toUpperCase());
    }
    const handleLWClick = () => {
        setFormVal(formVal.toLowerCase());
    }
    const handleClearClick = () => {
        setFormVal('');
    }
    const handleCCClick = () => {
        setFormVal(formVal.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' '));
    }
    const handleSCClick = () => {
        setFormVal(formVal.charAt(0).toUpperCase() + formVal.substr(1).toLowerCase());
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(formVal);
    }
    const handleACClick = () => {
        setFormVal(formVal.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join(''));
    }
    const handleICClick = () => {
        setFormVal(formVal.split('').map((c) => c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase()).join(''))
    }
    const handleRXSClick = () => {
        setFormVal(formVal.replace(/\s{2,}/g, ' ').trim());
    }

    return (
        <>
            <div className='container text-center'>
                <div className="mb-1 my-3">
                    <h5>Simply enter your text and choose the option you want to convert it to.</h5>
                    <textarea className="form-control" value={formVal} onChange={handleformValue} id="inputVal" rows="8"></textarea>
                </div>
                <div className='mb-2'>
                    <h6>Charater Count: {formVal.length} | Word Count: {formVal.trim().length  === 0 ? 0 : formVal.replace(/\s{2,}/g, ' ').trim().split(" ").length} | Lines: {formVal.trim().length  === 0 ? 0 : formVal.split(/\r\n|\r|\n/).length} </h6>
                </div>
                <div className=''>
                    <button type="button" className="btn btn-primary m-2" onClick={handleUpClick}>UPPER CASE</button>
                    <button type="button" className="btn btn-primary m-2" onClick={handleLWClick}>lower case</button>
                    <button type="button" className="btn btn-primary m-2" onClick={handleSCClick}>Sentence case</button>
                    <button type="button" className="btn btn-primary m-2" onClick={handleCCClick}>Capiralized Case</button>
                </div>
                <div className=''>
                    <button type="button" className="btn btn-primary m-2" onClick={handleACClick}>aLtErNaTiNg cAsE</button>
                    <button type="button" className="btn btn-primary m-2" onClick={handleICClick}>inVErSe casE</button>
                    <button type="button" className="btn btn-primary m-2" onClick={handleRXSClick}>Remove Extra Space</button>
                    <button type="button" className="btn btn-primary m-2" onClick={handleCopyClick}>Copy To Clipboard</button>
                    <button type="button" className="btn btn-primary m-2" onClick={handleClearClick}>Clear</button>
                </div>
            </div>
        </>
    )
}
