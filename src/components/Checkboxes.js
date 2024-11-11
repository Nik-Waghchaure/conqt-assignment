import React from 'react'

const Checkboxes = ({ itemChecked, supplierChecked, handleCheckChange }) => {
    return (
        <>
            <div className='fx_c checkbox-group'>
                <div className='checkbox'>
                    <label>
                        <input type='checkbox' checked={itemChecked}
                            onChange={() => handleCheckChange('item')}
                        />
                        Item
                    </label>
                </div>

                <div className='checkbox'>
                    <label>
                        <input type='checkbox'
                            checked={supplierChecked}
                            onChange={() => handleCheckChange('supplier')}
                        />
                        Supplier
                    </label>
                </div>
            </div>
        </>
    )
}

export default Checkboxes