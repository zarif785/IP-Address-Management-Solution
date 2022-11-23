import React from 'react'
import AuditLog from '../components/AuditLog';
import NavigationBar from '../components/NavigationBar'
import useFetch from '../customHooks/useFetch'
const UserLog = () => {
    const user_id = localStorage.getItem('user_id');
    const {data: logs,error,isPending} = useFetch(`http://localhost:8000/api/log/${user_id}`,localStorage.getItem('auth_token'))
  return (
    <>
        <NavigationBar/>
        {logs &&
        logs.map(function(log){
          return(
              <div className="ip-preview" key={log.id}>
                  {log.isRegistered==1 && <div>
                      <h2>Welcome to IP Address Manager</h2>
                      <p>{log.logged_at}</p>
                    </div>}

                    {log.isLogin==1 && <div>
                      <h2>Welcome back. You have logged in</h2>
                      <p>{log.logged_at}</p>
                    </div>}


                    {log.is_address_added==1 && <div>
                      <h2>IP Address created successfully</h2>
                      <p>{log.logged_at}</p>
                    </div>}


                    {log.is_label_changed==1 && <div>
                      <h2>IP Address label updated</h2>
                      <p>{log.logged_at}</p>
                    </div>}
              </div>
          )
      })
        }

    </>
  )
}

export default UserLog