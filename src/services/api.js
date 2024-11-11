const BaseURL = "https://apis-technical-test.conqt.com/Api";

export const saveFormData = async (data) => {
    try {
        const response = await fetch(`${BaseURL}/Item-Supplier/Save-Items-Suppliers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.status === 200) {
            return result.data;
        } else {
            throw new Error(result.message);
        }
    }
    catch (error) {
        throw new Error(`Failed to save the Data: ${error.message}`);
    }
};

// Api for Getting the Item and Supplier Data
export const getTableData = async () => {
    try {
        const response = await fetch(`${BaseURL}/Item-Supplier/Get-All-Items`);

        const result = await response.json();
        if (result.status === 200) {
            return result.data.items;
        } else {
            throw new Error(result.message);
        }
    }
    catch (error) {
        throw new Error(`Error in fetching the Details: ${error.message}`);
    }
};

// api for get country list