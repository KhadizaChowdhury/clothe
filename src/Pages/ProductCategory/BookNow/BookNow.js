import React, { useContext, useRef } from 'react';
//import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/UserContext';

const BookNow = ({ product_Item, setProduct, refetch }) => {
    // product_Item is just another name of appointmentOptions with name, slots, _id
    const { _id, productName, title, resale_price, category, description, image, condition, years_of_use } = product_Item;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const place = form.place.value;

        const booking = {
            product_Item: productName,
            Buyer: name,
            email,
            phone,
            place,
            resale_price
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProduct(null);
                    //toast.success('Booking confirmed');
                    refetch();
                }
                else{
                    //toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-now" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-now" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={`Price: ${resale_price} Tk`} className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" placeholder="Phone Number" className="input w-full input-bordered" required/>
                        <input name="place" type="text" placeholder="Meeting Location" className="input w-full input-bordered" required/>
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookNow;