import jwt from 'jsonwebtoken'
class TokenService {
    generateAccessToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '15m'})
        return accessToken
    }
    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_SECRET)
            return userData
        }
        catch (err) {
            return null
        }
    }
}

export default new TokenService()