import React from 'react'
import { useRouter } from 'next/router';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
    const router = useRouter();

    const handleClick = async () => {
        if (navigator.userAgent.includes('WhatsApp')) {
            window.open('whatsapp://send?phone=56920390272');
        } else {
            window.open('https://web.whatsapp.com/send?phone=56920390272', '_blank');
        }
    };


    return (
        <div>
            <div className='bg-green-600 w-min p-2 rounded-full fixed bottom-10 right-4 cursor-pointer md:right-8' onClick={handleClick}>
                <FaWhatsapp color='green' className='w-7 h-7 md:w-10 md:h-10' />
            </div>


        </div>
    )
}

export default WhatsappButton
