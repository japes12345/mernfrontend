export default async function handler(req, res) {
    const data = {'hello': 'hello'}
    res.status(200).json(data)
}