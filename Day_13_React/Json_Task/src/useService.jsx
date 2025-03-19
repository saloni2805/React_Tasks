const useService = () => {

    const getDataService = async () => {
        const response = await fetch('https://reqres.in/api/users?page=2')
        const data = await response.json()
        return data
    }

    return {
        getDataService
    }
}

export default useService;