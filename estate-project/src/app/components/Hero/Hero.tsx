
import React from 'react'
import ToCatalogue from '../ToCatalogue/ToCatalogue'

const Hero = () => {
    return (
    <div>
        <div>
                <h1>Explore a real estate market in Warsaw</h1>
                <p>We will help you find the property of your dreams</p>
                <ToCatalogue/>
        </div>
            <div>
                <table>
                    <tr>
                        <th>5+</th>
                        <th>900+</th>
                        <th>2000+</th>
                    </tr>
                    <tr>
                        <td>Years on the market</td>
                        <td>Satisfied customers</td>
                        <td>Successfully completed cases</td>
                    </tr>
                </table>
        </div>
    </div>
    )
}

export default Hero
