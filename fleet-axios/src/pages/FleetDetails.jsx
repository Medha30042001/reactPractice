import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { FleetContext } from '../context/FleetContext';

const FleetDetails = () => {
  const { id } = useParams();
  const { fleets } = useContext(FleetContext);

  const fleet = fleets.find(f => f.id === Number(id));

  if (!fleet) return <p>Fleet not found</p>;

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2>Fleet Details</h2>
      <p><strong>Reg:</strong> {fleet.reg}</p>
      <p><strong>Category:</strong> {fleet.category}</p>
      <p><strong>Driver:</strong> {fleet.driver}</p>
      <p><strong>Status:</strong> {fleet.available ? 'Available' : 'Unavailable'}</p>
    </div>
  );
};

export default FleetDetails;
