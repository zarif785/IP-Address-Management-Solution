

const IPList = ({address}) => {
  return (
    <div className="ip-list">
        {
            address.map(function(addr){
                return(
                    <div className="ip-preview" key={addr.id}>
                        <h2>{addr.ip_address}</h2>
                        <p>{addr.label}</p>
                    </div>
                )
            })
        }

    </div>
  );
}

export default IPList
