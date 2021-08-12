const EmailCapture = ({inputHandler, input, validateEmail}: any) => {
  
    const handleSubmit = (e:any) => {
        e.preventDefault();
        validateEmail();
        console.log('submitted');

        // want to query database for email 
    }

    return(
        <form onSubmit={(e) =>handleSubmit(e)}>
            <label htmlFor="Email">
                <input onChange={(e) => inputHandler(e)} type="email" name="email" id="Email" placeholder="Email" value={input}></input>
                <button type="submit">Enter</button>
            </label>
        </form>
    )
}   


export default EmailCapture;