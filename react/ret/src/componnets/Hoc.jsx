export default function wrapper(ChildCom) {
    return (props) => {
        const style = 'py-10';
        return (
            < div className="bg-green-600" >
                <ChildCom {...props} className='bg-red-400 py-22' />
            </div >
        )

    };
}