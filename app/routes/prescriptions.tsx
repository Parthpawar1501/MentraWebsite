import type {MetaFunction} from '@remix-run/node';
import Prescriptions from '../imports/Prescriptions';

export const meta: MetaFunction = () => {
  return [
    {title: 'Prescriptions - Mentra'},
    {name: 'description', content: 'Prescription-ready smart glasses'},
  ];
};

export default function PrescriptionsPage() {
  return (
    <div className="responsive-wrapper">
      <Prescriptions />
    </div>
  );
}
