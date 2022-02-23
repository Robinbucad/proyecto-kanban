import './style.css'

function SubHeader(){

    return(
        <section className="sub-header">
            <div className='update-info-subheader'>
                <h3>Version 1.0</h3>
                <p>Updated on 12 Apr</p>
            </div>
            <input type='text' className='input-filter' placeholder='Filter cards'></input>
        </section>
    )

}

export default SubHeader 