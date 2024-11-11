import React from 'react'
import { getTableData } from '../services/api';

const Table = () => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');


    React.useEffect(
        () => {
            const dataFetch = async () => {
                try {
                    const items = await getTableData();
                    console.log(items);
                    setData(items);
                } catch (error) {
                    setError("Error in Fetching the Data");
                } finally {
                    setLoading(false);
                }
            };

            dataFetch();
        }, []
    );


    if (loading) return <div>Loading the Data...</div>
    if (error) return <div>{error}</div>

    return (
        <>

            <div className='table-container'>


                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <thead style={{ backgroundColor: '#d9d9d9', padding: '8px' }}>
                        <tr>
                            <th>
                                Supplier
                            </th>
                            <th>
                                Item Name
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                City
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Country
                            </th>
                            <th>
                                Phone Number
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan="7">
                                    No data Available
                                </td>
                            </tr>
                        ) : (
                            data.map((row, index) => {
                                <tr key={index}>
                                    <td>{row.Supplier.supplierName || ''}</td>
                                    <td>{row.itemName || ''}</td>
                                    <td>{row.quantity || ''}</td>
                                    <td>{row.Supplier.cityName || ''}</td>
                                    <td>{row.Supplier.countryName || ''}</td>
                                    <td>{row.Supplier.email || ''}</td>
                                    <td>{row.Supplier.phoneNumber || ''}</td>
                                </tr>
                            })
                        )}
                    </tbody>


                </table>


            </div>


        </>
    )
}

export default Table