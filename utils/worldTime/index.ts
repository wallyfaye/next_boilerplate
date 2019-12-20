export default {
    getCurrentTime: async () => {
        const response = await fetch('http://worldtimeapi.org/api/ip')
        const { datetime } = await response.json()
        return datetime
    }
}