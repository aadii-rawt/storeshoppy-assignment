import ContactList from '../Components/ContactList'
import Filter from '../Components/Filter'
import AddContact from '../Components/AddContact'

function Contact() {
    return (
        <div className='text-white'>
            <Filter />
            <AddContact />
            <div className='px-8 py-4 border-b border-[rgba(231, 232, 236, .1)]'>
                <hr className='bg-[rgba(231, 232, 236, .1)]' />
                <ContactList />
            </div>
            
            <div className='flex items-center justify-center gap-2 bg-[#6E6ED9] fixed bottom-10 right-10 py-2 px-3 cursor-pointer rounded-3xl'>
                <img src="x-logo.svg" alt="" className='w-8 h-8 p-2 bg-[#8B8BE1] rounded-full ' />
                <h1 className='font-bold '>Need Help?</h1>
            </div>
            
        </div>
    )
}

export default Contact