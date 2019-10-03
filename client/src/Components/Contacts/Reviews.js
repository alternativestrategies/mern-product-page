import React from 'react';

const Reviews = (props) => {
    return(
      <React.Fragment>
        <h2>Reviews</h2>
        <div className="reviews pb-4">
            
      {props.contacts.map(c=> 
      <div key={c.contact_id} className="pb-3">
        <p>{c.first_name} {c.last_name}</p>
        <p className="reviews-product">{c.product_name}</p>
        <p className="reviews-comments">"{c.comments}"</p>
       </div> 
      )}
    </div>
      </React.Fragment>
    );
}
 
export default Reviews;