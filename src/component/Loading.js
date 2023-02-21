import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div className='loadingSpinner'>
        <Spinner animation="border" variant="light" />;
    </div>
  )
  
}

export default Loading;