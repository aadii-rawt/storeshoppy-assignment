import React from 'react';
import { list } from '../util';

function ContactList() {
    return (
        <div className="">
            <div className="overflow-x-auto">
                <table className="w-full text-white">
                    <thead>
                        <tr>
                            <th scope="col" className="px-2 py-3 text-left text-xs font-medium tracking-wider">NAME</th>
                            <th scope="col" className="px-2 py-3 text-left text-xs font-medium tracking-wider">TYPE</th>
                            <th scope="col" className="px-2 py-3 text-left text-xs font-medium tracking-wider">PHONE</th>
                            <th scope="col" className="px-2 py-3 text-left text-xs font-medium tracking-wider">EMAIL</th>
                            <th scope="col" className="px-2 py-3 text-left text-xs font-medium tracking-wider">CONTACT_ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr key={index}>
                                <td className="px-2 py-3 whitespace-nowrap text-sm font-medium">{item.name}</td>
                                <td className="px-2 py-3 whitespace-nowrap">
                                    {item.type && <span className="px-2 py-0.5 text-xs text-center bg-[#282D4D] text-white rounded-2xl">{item.type}</span>}
                                </td>
                                <td className="px-2 py-3 whitespace-nowrap text-sm ">{item.phone || "--"}</td>
                                <td className="px-2 py-3 whitespace-nowrap text-sm ">{item.email || "--"}</td>
                                <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-500">{item.contactId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContactList;
