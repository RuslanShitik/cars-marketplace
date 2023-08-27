import jwt from 'jsonwebtoken'
class TokenService {
    generateAccessToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '15m'})
        return accessToken
    }
}

export default new TokenService()