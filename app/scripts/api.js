async function fetchApi(endpoint) {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            const error = new Error(`An error occurred during the API call. Status code: ${response.status}`);
            error.status = response.status;
            throw error;
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

