import React from 'react'

const ItemDetails = () => {
    return (
        <>
            <div className='center'>
                <h2 className='fw7'>Item Details</h2>

                <div className='form-bx'>

                    <div className='row'>
                        <div className='input-field'>
                            <h6>Item Name</h6>
                            <input type='text' name='itemName' placeholder='Enter Item Name' maxLength={225}
                            />
                            <div className='helpertext'>Max 50 characters</div>
                        </div>

                        <div className='input-field'>
                            <h6>Quantity</h6>
                            <input type='text' name='itemName' placeholder='Enter Quantity'
                            />
                            <div className='helpertext'>Numeric Value</div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='input-field'>
                            <h6>Unit Price</h6>
                            <input type='text' name='itemName' placeholder='Enter Unit Price'
                            />
                            <div className='helpertext'>Enter Unit Price</div>
                        </div>

                        <div className='input-field'>
                            <h6>Date of submission</h6>
                            <input type='text' name='itemName' placeholder='Enter Date'
                            />
                            <div className='helpertext'>Format MMDDYYYY</div>
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

export default ItemDetails