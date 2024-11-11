import React from 'react'

const SupplierDetails = () => {
    return (
        <>
            <div className='center'>
                <h2 className='fw7'>Supplier Details</h2>

                <div className='form-bx'>

                    <div className='row'>
                        <div className='input-field'>
                            <h6>Supplier Name</h6>
                            <input type='text' name='SupplierName' placeholder='Enter Supplier Name' maxLength={225}
                            />
                            <div className='helpertext'>Max 50 characters</div>
                        </div>

                        <div className='input-field'>
                            <h6>Company Name</h6>
                            <input type='text' name='CompanyName' placeholder='Enter Company Name' maxLength={225}
                            />
                            <div className='helpertext'>Max 50 characters</div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='input-field'>
                            <h6>Country</h6>
                            <select name='country' placeholder='Select Country'
                            />
                            <div className='helpertext'>Select Country from the list</div>
                        </div>

                        <div className='input-field'>
                            <h6>State</h6>
                            <select name='state' placeholder='Enter State'
                            />
                            <div className='helpertext'>Select State from the list</div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='input-field'>
                            <h6>City</h6>
                            <input type='text' name='SupplierName' placeholder='Enter Supplier Name' maxLength={225}
                            />
                            <div className='helpertext'>Max 50 characters</div>
                        </div>

                        <div className='input-field'>
                            <h6>Email Address</h6>
                            <input type='text' name='CompanyName' placeholder='Enter Company Name' maxLength={225}
                            />
                            <div className='helpertext'>Valid email Format</div>
                        </div>
                    </div>


                    <div className='btn-grid'>
                        <button type='submit'>Submit</button>
                    </div>


                </div>
            </div>

        </>

    )
}

export default SupplierDetails