import ControlledForm from '../../components/ControlledForm';
import UncontrolledForm from '../../components/UncontrolledForm';
import PostsFeed from '../../components/PostsFeed';

function DZ40() {
  return (
    <>
      <div className="section">
        <ControlledForm />
      </div>

      <div className="section">
        <UncontrolledForm />
      </div>

      <div className="section">
        <PostsFeed />
      </div>
    </>
  );
}

export default DZ40;
