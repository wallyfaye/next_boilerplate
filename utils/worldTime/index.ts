export default {
    getCurrentTime: async () => {
        const response = await fetch('https://worldtimeapi.org/api/ip')
        const { datetime } = await response.json()
        return datetime
    }
}