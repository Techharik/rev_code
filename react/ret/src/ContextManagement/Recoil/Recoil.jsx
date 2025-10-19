import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getAllUsers, getSingleUsers } from './atom';
import { useState } from 'react';

export function Recoil() {
    const getsingle = useRecoilValueLoadable(getAllUsers)
    const [user, setUserId] = useState(0);
    const singleLoadable = useRecoilValueLoadable(getSingleUsers(user))
    console.log(getsingle, 'jj')
    console.log(singleLoadable, 'jj')
    return (
        <div>
            {getsingle.state === 'loading' && <p>Loading all users...</p>}
            {getsingle.state === 'hasError' && <p>Error: {getsingle.contents.message}</p>}
            {getsingle.state === 'hasValue' &&
                getsingle.contents.map((n) => <h1 key={n.id}>{n.name}</h1>)}

            <div>
                <div>
                    {singleLoadable.state === 'loading' && <p>Loading single user...</p>}
                    {singleLoadable.state === 'hasError' && <p>Error: {singleLoadable.contents.message}</p>}
                    {singleLoadable.state === 'hasValue' && user !== 0 && (
                        <h2>Selected User: {singleLoadable.contents.name}</h2>
                    )}
                </div>

                <button onClick={() => setUserId(3)}>
                    Click
                </button>
                <button onClick={() => setUserId(5)}>
                    Click
                </button>
            </div>
        </div>
    );
}
