import { useState } from "react";

export default function TableReport(props) {
    function CalculateAverageCookies(item) {

        return (Math.floor((Math.random() * (Number(item.maxCustomers) - Number(item.minCustomers) + 1) + Number(item.minCustomers)) * item.avgCookies));

    }

    return (
        
        <table className="m-auto border-opacity-5 bg-white table-auto">
            <thead>
                <tr className="bg-green-500">
                    <th>Location</th>
                    {props.hours.map(item =>
                        <th>{item}</th>

                    )
                    }
                    <th>Total</th>

                </tr>
            </thead>
            <tbody>
            {props.CookiesInformation.map(item => (
                <>
                <tr className="bg-green-200">
                    
                    
                        
                            <td>{item.location}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>
                            <td>{CalculateAverageCookies(item)}</td>

                        
                    

                </tr>
                </>
                ))}

            </tbody>
            <tfoot>
                <tr className="bg-green-500">
                    <td>Totals</td>
                    <td>Adam</td>
                    <td>112</td>
                </tr>
            </tfoot>
        </table>
    )

}