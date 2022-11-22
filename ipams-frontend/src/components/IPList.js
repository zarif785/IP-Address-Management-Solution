
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const IPList = ({address,canEdit=false}) => {

const history = useHistory();

function onEdit(address){
    localStorage.setItem('user_ip',address.ip_address);
    localStorage.setItem('user_label',address.label);
    localStorage.setItem('ip_id',address.id);
    history.push(`/edit/${address.id}`)
}

  return (
    <div className="ip-list">
        {
            address.map(function(addr){
                return(
                    <div className="ip-preview" key={addr.id}>
                        <h2>{addr.ip_address}</h2>
                        <p>{addr.label}</p>
                        {canEdit && <button className='edit-button' onClick={()=>{onEdit(addr)}}> Edit Now </button>}
                        {/* <Link> Edit </Link> */}
                    </div>
                )
            })
        }

    </div>
  );
}

export default IPList
