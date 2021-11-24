import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Text, Title } = Typography
const { Option } = Select

export default ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptosQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100})

    return (
        <div>
            News
        </div>
    )
}
